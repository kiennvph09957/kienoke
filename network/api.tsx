import moment, {Moment} from 'moment';
import Axios, {AxiosRequestConfig} from 'axios';
import {NavigationState} from '@react-navigation/native';
import NavigationService from '../container/NavigationService';
import {PopupEvent} from '../container/App';
import DataSingleton, {DataSingletonKey} from '../common/DataSingleton';
import strings from '../res/strings';
import RNFetchBlob from 'rn-fetch-blob';
import {DataPhotoRate} from '../common/types';

let BASE_URL = '';
export let DEV_MODE = false;
/**
 * Define format type for params
 */

export enum BodyType {
  RAW,
  URLENCODED,
  FORMDATA,
  NONE,
  RAW_URL,
}

export enum HeaderKeys {
  CONTENT_TYPE = 'Content-Type',
  AUTHEN = 'Authorization',
  TTNS_TOKEN = 'TTNS-TOKEN',
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  IS_MOBILE = 'isMobile',
  DATE = 'Date',
  SERVER = 'Server',
  TRANSFER_ENCODING = 'Transfer-Encoding',
  TOKEN = 'token',
  API_KEY = 'api-key',
  LANGUAGE = 'language',
  KEY = 'key',
  X_KEY = 'X-Gravitee-Api-Key',
  CURRENT_LANGUAGE = 'Current-Language',
  NATION_OF_WORK_ID = 'nation-work-id',
}

const HeaderValue = {
  CONTENT_TYPE1: 'application/json',
  CONTENT_TYPE2: 'application/json;charset=UTF-8',
  CONTENT_TYPE3: 'application/x-www-form-urlencoded',
  CONTENT_TYPE4: 'multipart/form-data',
  CONTENT_TYPE5: 'text/xml',
  AUTHEN: 'Bearer 123',
  AUTHEN_1: 'Bearer fgfgfg',
  SERVER: 'Apache-Coyote/1.1',
  TRANSFER_ENCODING: 'chunked',
  TTNS_TOKEN: 'TTNS',
  // API_KEY: DEV_MODE
  //   ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiU29jaWFsIEFwcCIsIm5hbWUiOiJTb2NpYWwgQXBwIiwicGFzc3dvcmQiOm51bGwsIkFQSV9USU1FIjoxNjA3NDk3NjEyfQ.PobUHnT7BQfNJhefj-Cm6j-MtoWeA4I1ns39bGiPnlA'
  //   : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVlRDT05ORUNUSU9OIiwibmFtZSI6IlZUQ09OTkVDVElPTiIsInBhc3N3b3JkIjpudWxsLCJBUElfVElNRSI6MTU4NjkxODI0MH0.v49aqYMzRnqRxzsAmu88fNuZB0dngh1gGBTmCs2UxGY',
  // WORKPLACE_KEY:
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiU29jaWFsIEFwcCIsIm5hbWUiOiJTb2NpYWwgQXBwIiwicGFzc3dvcmQiOm51bGwsIkFQSV9USU1FIjoxNjA3NDk3NjEyfQ.PobUHnT7BQfNJhefj-Cm6j-MtoWeA4I1ns39bGiPnlA',
};

export let VTS_X_KEY = DEV_MODE
  ? '5d8cb7db-ad45-4e50-89e3-a416b121d647'
  : '5d8cb7db-ad45-4e50-89e3-a416b121d647';

var CancelToken = Axios.CancelToken;

export const getUserInfo = () => {
  return DEV_MODE
    ? {
        userName: DataSingleton.getData(DataSingletonKey.USER_NAME, ''),
        password: DataSingleton.getData(DataSingletonKey.PASSWORD, ''),
        employeeId: DataSingleton.getData(DataSingletonKey.EMPLOYEE_ID, ''),
        managerId: DataSingleton.getData(DataSingletonKey.MANAGER_ID, ''),
        employeeCode: DataSingleton.getData(DataSingletonKey.EMPLOYEE_CODE, ''),
        fullName: DataSingleton.getData(DataSingletonKey.USER_FULL_NAME, ''),
        userInfoFull: DataSingleton.getData(
          DataSingletonKey.USER_INFO_FULL,
          '',
        ),
        vtfKey: 'UpzmyhWsYoSEwzZg7pYK',
        runningKey: 'csaPgJTAFnKmMH9',
        medicalDeclarationKey: 'csaPgJTAFnKmMH9',
        x_key: 'e2d0cb7a-821f-41f2-9bd0-4d75842af43a',
        x_gravitee_internal_recruitment: 'a855703f-d5fb-44c5-9621-e2860823a5c4',
        nation_of_work_id: DataSingleton.getData(
          DataSingletonKey.NATION_OF_WORK_ID,
          '',
        ),
      }
    : {
        userName: DataSingleton.getData(DataSingletonKey.USER_NAME, ''),
        password: DataSingleton.getData(DataSingletonKey.PASSWORD, ''),
        employeeCode: DataSingleton.getData(DataSingletonKey.EMPLOYEE_CODE, ''),
        employeeId: DataSingleton.getData(DataSingletonKey.EMPLOYEE_ID, ''),
        fullName: DataSingleton.getData(DataSingletonKey.USER_FULL_NAME, ''),
        managerId: DataSingleton.getData(DataSingletonKey.MANAGER_ID, ''),
        userInfoFull: DataSingleton.getData(
          DataSingletonKey.USER_INFO_FULL,
          '',
        ),
        vtfKey: 'IdDnnus2qeX4FDP',
        runningKey: 'l2jcf1bkcRYkYGz',
        medicalDeclarationKey: 'l2jcf1bkcRYkYGz',
        x_key: 'e2d0cb7a-821f-41f2-9bd0-4d75842af43a',
        x_gravitee_internal_recruitment: '9cc61c0a-f53e-485c-a998-2c00c3a69277',
        nation_of_work_id: DataSingleton.getData(
          DataSingletonKey.NATION_OF_WORK_ID,
          '',
        ),
      };
};

class Api {
  /**
   * - Sử dụng để quản lý canceler cho các request, mỗi request sẽ có 1 canceler dùng để cancel request khi người dùng muốn chuyển
   * sang màn hình khác và không muốn xử lý tiếp tục ở màn hình hiện tại
   *
   * ==============================================
   *
   * - Khởi tạo sẵn 7 level màn hình trong stack, màn hình trong stack hiện tại max là 4, mỗi phần tử là 1 mảng các request trong
   * màn hình đó
   */
  cancelRequestController: any = [[], [], [], [], [], [], []];

  // Map lưu lại những request cần cancel trước khi thực hiện request mới
  mapRequestCancel?: Map<string, any> = new Map();

  // refresk token cho phần thông tin nhân sự.
  _isLoading = false;
  async refresh_access_token() {
    if (this._isLoading) {
      return;
    }
    let url = 'smartoffice/api/v1/ttns/refresh-access-token';
    let headers = {};
    headers[HeaderKeys.CONTENT_TYPE] = HeaderValue.CONTENT_TYPE1;
    headers[HeaderKeys.AUTHEN] = HeaderValue.AUTHEN;
    headers[HeaderKeys.ACCESS_TOKEN] = DataSingleton.getData(
      DataSingletonKey.SSO_ACCESS_TOKEN,
      '',
    );
    headers[HeaderKeys.IS_MOBILE] = true;
    let params = {
      userName: getUserInfo().userName,
      password: getUserInfo().password,
    };
    this._isLoading = true;
    let response = await this.requestPost(
      url,
      params,
      headers,
      BodyType.FORMDATA,
      true,
    );
    if (response) {
      this._isLoading = false;
    }
  }

  getHeaderDashBoard() {
    let headers = {};
    headers[HeaderKeys.X_KEY] = VTS_X_KEY;
    return headers;
  }

  /**
   *
   * @param url
   */
  private requestGet(
    url: string,
    headers?: any,
    params?: any,
    isShowLoading?: boolean,
    fixURL?: string,
    errorResponse?: (error) => void,
    isCancelPreRequest?: boolean,
  ) {
    let urlRequest = fixURL ? fixURL + url : BASE_URL + url;
    // console.log("=======> URL: " + urlRequest)
    // console.log("=======> PARAMS: " + JSON.stringify(params ? params : {}))
    // console.log("=======> HEADER: " + JSON.stringify(headers ? headers : {}))
    // mobileLoadingService.loading = isShowLoading ? isShowLoading : false;

    // Thực hiện cancel request với API có set isCancelPreRequest = true trước đó.
    if (
      isCancelPreRequest &&
      this.mapRequestCancel &&
      this.mapRequestCancel.size > 0
    ) {
      if (this.mapRequestCancel.has(url)) {
        let cancel = this.mapRequestCancel.get(url);
        cancel();
      }
    }

    return Axios.get(urlRequest, {
      headers: headers ? headers : {},
      params: params ? params : {},
      cancelToken: new CancelToken(cancel => {
        // An executor function receives a cancel function as a parameter
        if (isCancelPreRequest) {
          this.mapRequestCancel.set(url, cancel);
        }
      }),
    })
      .then(res => {
        // mobileLoadingService.loading = false;
        if (res.data) {
          try {
            // console.log("=======> RESPONSE: " + JSON.stringify(res.data), res.data);
          } catch (error) {}

          return res.data;
        } else {
          return {};
        }
      })
      .catch(error => {
        // mobileLoadingService.loading = false;
        console.log('=========> error: ', error.response);
        errorResponse && errorResponse(error.response);
        if (error && error.response && error.response.status == 401) {
          // cancelRequestApi();
          this.refresh_access_token();
        } else {
          // return error.response
        }
        // return null
      });
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  private requestPost(
    url: string,
    params?: any,
    headers?: any | null,
    bodyType?: BodyType,
    isShowLoading?: boolean,
    baseUrl?: string,
    errorResponse?: (error: any) => void,
    isCancelPreRequest?: any,
    dontHideLoading?: boolean,
  ) {
    // Lấy ra state hiện tại của navigation, sẽ bao gồm index của các màn hình trong stack, tên màn hình, ...
    // var currentState: NavigationState =
    //   NavigationService.getNavigator().getRootState();

    let urlRequest = baseUrl ? baseUrl + url : BASE_URL + url;
    console.log('=======> URL: ' + urlRequest);
    // console.log("=======> PARAMS: " + JSON.stringify(params))
    // console.log("=======> REQUEST: " + urlRequest + " || " + JSON.stringify(params) + " || " + moment().unix())
    // mobileLoadingService.loading = isShowLoading ? isShowLoading : false;
    var paramsConverted: any = null;
    if (params != null && bodyType != null) {
      if (bodyType == BodyType.URLENCODED) {
        paramsConverted = new URLSearchParams(params).toString();
      } else if (bodyType == BodyType.FORMDATA) {
        const formData = new FormData();
        Object.keys(params).forEach(key => formData.append(key, params[key]));
        paramsConverted = formData;
      } else if (bodyType == BodyType.NONE) {
        paramsConverted = params;
      } else if (bodyType == BodyType.RAW_URL) {
        paramsConverted = {};
      }
    }
    // Thực hiện cancel request với API có set isCancelPreRequest = true trước đó.
    if (
      isCancelPreRequest &&
      this.mapRequestCancel &&
      this.mapRequestCancel.size > 0
    ) {
      if (this.mapRequestCancel.has(url)) {
        let cancel = this.mapRequestCancel.get(url);
        cancel();
      }
    }

    // let axiosParams = new URLSearchParams(params).toString();
    return Axios.post(
      baseUrl ? baseUrl + url : BASE_URL + url,
      paramsConverted ? paramsConverted : params != null ? params : {},
      {
        headers: headers ? headers : {},
        params: bodyType == BodyType.RAW_URL ? params : {},
        cancelToken: new CancelToken(cancel => {
          // An executor function receives a cancel function as a parameter
          if (isCancelPreRequest) {
            this.mapRequestCancel.set(url, cancel);
          }

          // Không save các cancel request của các màn hình đầu tiên (index = 0) vào trong mảng cancel, vì ở màn hình đầu tiên không
          // có sự kiện back ra màn hình khác, back ở màn này là thoát ứng dụng
          // if (currentState.index != 0) {
          //   this.cancelRequestController[currentState.index].push(cancel);
          // }
        }),
      },
    )
      .then(res => {
        console.log('RESRES', res);
        if (!dontHideLoading) {
          // mobileLoadingService.loading = false;
        }
        if (res.data) {
          // console.log("=======> RESPONSE || " + url + " : \n" + JSON.stringify(res.data) + " || " + moment().unix())

          ///////////////////////////////////////////// Using to check invalid session
          var resJSON = null;
          if (res.data.data) {
            resJSON = JSON.stringify(res.data.data);
          }
          if (
            resJSON != null &&
            resJSON.error &&
            resJSON.error == 'invalid_token'
          ) {
            PopupEvent.open(
              {
                type: 'ERROR',
                title: strings.notify,
                message: strings.session_invalid,
                titlePrimary: strings.ok,
                disableClose: true,
              },
              () => {
                PopupEvent.onPressPrimaryEvent(async event => {
                  PopupEvent.close();
                  NavigationService.navigate('LoginScreen', {});
                });
              },
            );
          }
          ///////////////////////////////////////////// End check invalid session
          console.log(res.data);
          return res.data;
        } else {
          return {};
        }
      })
      .catch(error => {
        console.log('error', error.response);
        errorResponse && errorResponse(error.response);
        if (!dontHideLoading) {
          // mobileLoadingService.loading = false;
        }
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log(
            'status/data: ' + error.response.status + '/' + error.response.data,
          );
          if (error.response.status == 401) {
            // cancelRequestApi();
            this.refresh_access_token();
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          console.log('Error1: ' + error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error2:', error.message);
        }
        console.log('Error3: ' + error);
        return error.response;
      });
  }

  /**
   *
   * @param url
   */
  private requestDel(
    url: string,
    headers?: any,
    params?: any,
    isShowLoading?: boolean,
    fixURL?: string,
  ) {
    // console.log("=======> URL: " + fixURL ? fixURL + url : BASE_URL + url)
    // console.log("=======> PARAMS: " + JSON.stringify(params ? params : {}))
    // mobileLoadingService.loading = isShowLoading ? isShowLoading : false;
    return Axios.delete(fixURL ? fixURL + url : BASE_URL + url, {
      headers: headers ? headers : {},
      params: params ? params : {},
    })
      .then(res => {
        // mobileLoadingService.loading = false;
        if (res.data) {
          try {
            // console.log("=======> RESPONSE: " + JSON.stringify(res.data), res.data);
          } catch (error) {}
          return res.data;
        } else {
          return {};
        }
      })
      .catch(error => {
        // mobileLoadingService.loading = false;
        console.log('=========> error: ', error.response);
      });
  }

  private requestAll(
    url: string,
    params?: Array<any>,
    headers?: any | null,
    bodyType?: BodyType,
    isShowLoading?: boolean,
    isRequestGet?: boolean,
  ) {
    let arrRequet: Array<any> = [];
    let arrResponse: Array<any> = [];

    // mobileLoadingService.loading = isShowLoading;

    if (isRequestGet) {
      params.map(param => {
        const requestGet = Axios.get(BASE_URL + url, {
          headers: headers ? headers : {},
          params: param,
          // cancelToken: source.token,
        });

        arrRequet.push(requestGet);
      });
    } else {
      params.map(param => {
        var paramsConverted: any = null;
        if (param != null && bodyType != null) {
          if (bodyType == BodyType.URLENCODED) {
            paramsConverted = new URLSearchParams(param).toString();
          } else if (bodyType == BodyType.FORMDATA) {
            const formData = new FormData();
            Object.keys(param).forEach(key => formData.append(key, param[key]));
            paramsConverted = formData;
          }
        }
        const requestPost = Axios.post(
          BASE_URL + url,
          paramsConverted ? paramsConverted : param != null ? param : {},
          {
            headers: headers ? headers : {},
          },
        );
        arrRequet.push(requestPost);
      });
    }

    // console.log("=======> URL: " + BASE_URL + url)
    // console.log("=======> PARAMS: " + JSON.stringify(params))
    // console.log("=======> header: " + JSON.stringify(headers))
    // let axiosParams = new URLSearchParams(params).toString();
    return Axios.all(arrRequet)
      .then(resp => {
        // mobileLoadingService.loading = false;
        resp.map(res => {
          if (res.data) {
            try {
              // console.log("=======> RESPONSE: " + JSON.stringify(res.data), res.data);
            } catch (error) {}

            ///////////////////////////////////////////// Using to check invalid session
            var resJSON = null;
            if (res.data.data) {
              resJSON = JSON.stringify(res.data.data);
            }
            if (
              resJSON != null &&
              resJSON.error &&
              resJSON.error == 'invalid_token'
            ) {
              PopupEvent.open(
                {
                  type: 'ERROR',
                  title: strings.notify,
                  message: strings.session_invalid,
                  titlePrimary: strings.ok,
                  disableClose: true,
                },
                () => {
                  PopupEvent.onPressPrimaryEvent(async event => {
                    PopupEvent.close();
                    NavigationService.navigate('LoginScreen', {});
                  });
                },
              );
            }
            ///////////////////////////////////////////// End check invalid session
            isRequestGet
              ? arrResponse.push(res.data.data[0])
              : arrResponse.push(res.data);
          } else {
            return {};
          }
        });
        return arrResponse;
      })
      .catch(error => {
        // mobileLoadingService.loading = false;
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log(
            'status/data: ' + error.response.status + '/' + error.response.data,
          );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error);
        // return []
      });
  }

  /**
   *
   * @param url
   * @param fileURI
   * @param headers
   * @param progressCallback
   */
  private requestUploadFile(
    url: string,
    fileURI: DataPhotoRate[],
    headers?: any | null,
    progressCallback?: (number) => void,
  ) {
    var body: any[] = [];
    fileURI.map((value, index) => {
      var fileName: string[] = JSON.stringify(
        value.path ? value.path : '',
      ).split('/');
      var fileNameWithExtension = '';
      if (fileName && fileName.length > 0) {
        fileNameWithExtension = fileName[fileName.length - 1]
          .replace('}', '')
          .replace('"', '');
      }
      body.push({
        name: 'files',
        filename: fileNameWithExtension,
        type: value.mime ? value.mime : 'image/jpg',
        data: RNFetchBlob.wrap(value.path ? value.path : ''),
      });
    });

    console.log('=======> URL: ' + BASE_URL + url);
    console.log('=======> PARAMS: ' + JSON.stringify(body));

    return RNFetchBlob.config({
      trusty: true,
    })
      .fetch('POST', BASE_URL + url, headers ? headers : {}, body)
      .uploadProgress((written, total) => {
        var percent = Math.floor((written / total) * 100);
        if (progressCallback) {
          progressCallback(percent);
        }
      })
      .then(resp => {
        if (resp) {
          try {
            console.log(
              '=======> RESPONSE: ' + JSON.stringify(resp.data),
              resp.data,
            );
          } catch (error) {}
          return JSON.parse(resp.data);
        } else {
          return null;
        }
      })
      .catch(err => {
        console.log('========> err: ' + JSON.stringify(err));
      });
  }

  private requestUploadFileMedical(
    url: string,
    fileURI: DataPhotoRate[],
    headers?: any | null,
    progressCallback?: (number) => void,
  ) {
    var body: any[] = [];
    fileURI.map((value, index) => {
      var fileName: string[] = JSON.stringify(
        value.path ? value.path : '',
      ).split('/');
      var fileNameWithExtension = '';
      if (fileName && fileName.length > 0) {
        fileNameWithExtension = fileName[fileName.length - 1]
          .replace('}', '')
          .replace('"', '');
      }
      body.push({
        name: 'file',
        filename: fileNameWithExtension,
        type: value.mime ? value.mime : 'image/jpg',
        data: RNFetchBlob.wrap(value.path ? value.path : ''),
      });
    });

    console.log('=======> URL: ' + BASE_URL + url);
    console.log('=======> PARAMS: ' + JSON.stringify(body));

    return RNFetchBlob.config({
      trusty: true,
    })
      .fetch('POST', BASE_URL + url, headers ? headers : {}, body)
      .uploadProgress((written, total) => {
        var percent = Math.floor((written / total) * 100);
        if (progressCallback) {
          progressCallback(percent);
        }
      })
      .then(resp => {
        if (resp) {
          try {
            console.log(
              '=======> RESPONSE: ' + JSON.stringify(resp.data),
              resp.data,
            );
          } catch (error) {}
          return JSON.parse(resp.data);
        } else {
          return null;
        }
      })
      .catch(err => {
        console.log('========> err: ' + JSON.stringify(err));
      });
  }

  /**
   *
   * @param url
   * @param body
   * @param headers
   * @param progressCallback
   */
  private requestUploadFiles(
    url: string,
    body: any,
    headers?: any | null,
    progressCallback?: (number) => void,
    fixURL?: string,
    isShowLoading?: boolean,
  ) {
    let urlRequest = fixURL ? fixURL + url : BASE_URL + url;
    console.log('=======> URL: ' + urlRequest);
    console.log('=======> PARAMS: ' + JSON.stringify(body));
    // mobileLoadingService.loading = isShowLoading;
    return RNFetchBlob.config({
      trusty: true,
      timeout: 1000 * 60 * 5,
    })
      .fetch('POST', urlRequest, headers ? headers : {}, body)
      .uploadProgress((written, total) => {
        var percent = Math.floor((written / total) * 100);
        if (progressCallback) {
          progressCallback(percent);
        }
      })
      .then(resp => {
        console.log(resp.info().status);
        // mobileLoadingService.loading = false;
        if (resp) {
          try {
            console.log(
              '=======> RESPONSE: ' + JSON.stringify(resp.data),
              resp.data,
            );
          } catch (error) {}
          return JSON.parse(resp.data);
        } else {
          return null;
        }
      })
      .catch(err => {
        // mobileLoadingService.loading = false;
        console.log(err, 'err');

        console.log('========> err: ' + JSON.stringify(err));
      });
  }

  /**
   *
   * @param fileUrl
   * @param fileName
   */
  // public async requestDownloadFile(
  //   fileUrl: string,
  //   fileName: string,
  //   progressCallback?: (percent?: number, res?: any) => void,
  //   enableAndroidDownloadManager?: boolean,
  // ) {
  //   let dirs = RNFetchBlob.fs.dirs;
  //   let path = '';
  //   if (
  //     enableAndroidDownloadManager != undefined &&
  //     enableAndroidDownloadManager == true
  //   ) {
  //     path = dirs.DCIMDir + '/vtc/' + fileName + '.apk';
  //   } else {
  //     path = dirs.DocumentDir + '/' + fileName;
  //   }

  //   if (!(await RNFetchBlob.fs.exists(path))) {
  //     RNFetchBlob.config(
  //       enableAndroidDownloadManager != undefined &&
  //         enableAndroidDownloadManager == true
  //         ? {
  //             trusty: true,
  //             fileCache: true,
  //             path: path,
  //             addAndroidDownloads: {
  //               useDownloadManager: true, // <-- this is the only thing required
  //               // Optional, override notification setting (default to true)
  //               notification: true,
  //               // Optional, but recommended since android DownloadManager will fail when
  //               // the url does not contains a file extension, by default the mime type will be text/plain
  //               // mime : 'text/plain',
  //               description: 'Đang tải bản cập nhật',
  //               path: path,
  //               title: fileName,
  //               mime: 'application/vnd.android.package-archive',
  //               mediaScannable: true,
  //             },
  //           }
  //         : {
  //             trusty: true,
  //             fileCache: true,
  //             path: path,
  //           },
  //     )
  //       .fetch('GET', fileUrl, this.getHeaderHandOverRest()) // header?, body?
  //       .progress((received, total) => {
  //         // var percent = Math.floor((received / total) * 100)
  //         // if (progressCallback) {
  //         //   progressCallback(percent)
  //         // }
  //       })
  //       .then(res => {
  //         if (progressCallback) {
  //           progressCallback(100, res.data);
  //         }
  //       })
  //       .catch(err => {
  //         console.log('download image error', err);
  //       });
  //   } else {
  //     if (progressCallback) {
  //       progressCallback(100, path);
  //     }
  //   }
  // }

  /**
   *
   * @param url
   */
  // private requestGetBody(
  //   url: string,
  //   headers?: any,
  //   params?: any,
  //   isShowLoading?: boolean,
  //   fixURL?: string,
  //   errorResponse?: (error) => void,
  //   isCancelPreRequest?: boolean,
  // ) {
  //   let urlRequest = fixURL ? fixURL + url : BASE_URL + url;
  //   console.log('=======> URL: ' + urlRequest);
  //   console.log('=======> PARAMS: ' + JSON.stringify(params ? params : {}));
  //   console.log('=======> HEADER: ' + JSON.stringify(headers ? headers : {}));
  //   // mobileLoadingService.loading = isShowLoading ? isShowLoading : false;

  //   // Thực hiện cancel request với API có set isCancelPreRequest = true trước đó.
  //   if (
  //     isCancelPreRequest &&
  //     this.mapRequestCancel &&
  //     this.mapRequestCancel.size > 0
  //   ) {
  //     if (this.mapRequestCancel.has(url)) {
  //       let cancel = this.mapRequestCancel.get(url);
  //       cancel();
  //     }
  //   }

  //   return Axios.get(fixURL ? fixURL + url : BASE_URL + url, {
  //     headers: headers ? headers : {},
  //     // params: {},
  //     data: JSON.stringify({employeeCode: '265858', keyword: ''}),
  //     cancelToken: new CancelToken(cancel => {
  //       // An executor function receives a cancel function as a parameter
  //       if (isCancelPreRequest) {
  //         this.mapRequestCancel.set(url, cancel);
  //       }
  //     }),
  //   })
  //     .then(res => {
  //       // mobileLoadingService.loading = false;
  //       if (res.data) {
  //         console.log('=======> RESPONSE: ' + JSON.stringify(res.data));
  //         return res.data;
  //       } else {
  //         return {};
  //       }
  //     })
  //     .catch(error => {
  //       // mobileLoadingService.loading = false;
  //       console.log('=========> error: ', error.response);
  //       errorResponse && errorResponse(error.response);
  //       if (error && error.response && error.response.status == 401) {
  //         // cancelRequestApi();
  //         this.refresh_access_token();
  //       } else {
  //         // return error.response
  //       }
  //       // return null
  //     });
  // }

  // private requestPostGet(
  //   url: string,
  //   params?: any,
  //   headers?: any | null,
  //   bodyType?: BodyType,
  //   isShowLoading?: boolean,
  //   baseUrl?: string,
  //   errorResponse?: (error) => void,
  //   isCancelPreRequest?: any,
  //   dontHideLoading?: boolean,
  // ) {
  //   // Lấy ra state hiện tại của navigation, sẽ bao gồm index của các màn hình trong stack, tên màn hình, ...
  //   // var currentState: NavigationState =
  //   //   NavigationService.getNavigator().getRootState();

  //   let urlRequest = baseUrl ? baseUrl + url : BASE_URL + url;
  //   // console.log("=======> URL: " + urlRequest)
  //   // console.log("=======> PARAMS: " + JSON.stringify(params))
  //   console.log(
  //     '=======> REQUEST: ' +
  //       urlRequest +
  //       ' || ' +
  //       JSON.stringify(params) +
  //       ' || ' +
  //       moment().unix(),
  //   );
  //   // mobileLoadingService.loading = isShowLoading ? isShowLoading : false;
  //   var paramsConverted: any = null;
  //   if (params != null && bodyType != null) {
  //     if (bodyType == BodyType.URLENCODED) {
  //       paramsConverted = new URLSearchParams(params).toString();
  //     } else if (bodyType == BodyType.FORMDATA) {
  //       const formData = new FormData();
  //       Object.keys(params).forEach(key => formData.append(key, params[key]));
  //       paramsConverted = formData;
  //     } else if (bodyType == BodyType.NONE) {
  //       paramsConverted = params;
  //     } else if (bodyType == BodyType.RAW_URL) {
  //       paramsConverted = {};
  //     }
  //   }
  //   // Thực hiện cancel request với API có set isCancelPreRequest = true trước đó.
  //   if (
  //     isCancelPreRequest &&
  //     this.mapRequestCancel &&
  //     this.mapRequestCancel.size > 0
  //   ) {
  //     if (this.mapRequestCancel.has(url)) {
  //       let cancel = this.mapRequestCancel.get(url);
  //       cancel();
  //     }
  //   }
  // }

  /************************************************************************************************************************************************************
   *
   * Implement code for module request
   *
   ************************************************************************************************************************************************************/

  //  async uploadFileChat(
  //   body: any,
  //   progressCallback?: (number) => void,
  //   isShowLoading?: boolean,
  // ) {
  //   let url = 'SmartOfficeFileTransfer/uploadFileInChat';

  //   let headers = {};
  //   headers[HeaderKeys.CONTENT_TYPE] = HeaderValue.CONTENT_TYPE4;
  //   // headers[HeaderKeys.TRANSFER_ENCODING] = 'Identity'

  //   return await this.requestUploadFiles(
  //     url,
  //     body,
  //     headers,
  //     progressCallback,
  //     BASE_URL_CHAT,
  //     isShowLoading,
  //   );
  // }

  /**
   *
   * @param uriFile
   */
  //  async upload_rating_image(uriFile: DataPhotoRate[]) {
  //   let url = 'smartoffice/api/v2/kitchen/upload-rating-image';

  //   var accessToken = DataSingleton.getData(
  //     DataSingletonKey.SSO_ACCESS_TOKEN,
  //     '',
  //   );
  //   let headers = {};
  //   headers['access_token'] = accessToken;
  //   headers[HeaderKeys.IS_MOBILE] = 'true';
  //   headers[HeaderKeys.CONTENT_TYPE] = HeaderValue.CONTENT_TYPE4;

  //   return await this.requestUploadFile(url, uriFile, headers);
  // }

  //  async uploadFileChat(
  //   body: any,
  //   progressCallback?: (number) => void,
  //   isShowLoading?: boolean,
  // ) {
  //   let url = 'SmartOfficeFileTransfer/uploadFileInChat';

  //   let headers = {};
  //   headers[HeaderKeys.CONTENT_TYPE] = HeaderValue.CONTENT_TYPE4;
  //   // headers[HeaderKeys.TRANSFER_ENCODING] = 'Identity'

  //   return await this.requestUploadFiles(
  //     url,
  //     body,
  //     headers,
  //     progressCallback,
  //     BASE_URL_CHAT,
  //     isShowLoading,
  //   );
  // }

  //xóa công việc
  // async delete_task(id: string) {
  //   let url = 'workplace/api/tasks';
  //   let headers = {
  //     authtoken: HeaderValue.API_KEY,
  //     token: DataSingleton.getData(DataSingletonKey.SSO_ACCESS_TOKEN, ''),
  //     isMobile: true,
  //     [HeaderKeys.ACCESS_TOKEN]: DataSingleton.getData(
  //       DataSingletonKey.SSO_ACCESS_TOKEN,
  //       '',
  //     ),
  //   };

  //   return await this.requestDel(
  //     `${url}/${id}`,
  //     headers,
  //     null,
  //     true,
  //     `${SOCIAL_NETWORK_BASE_URL}work/`,
  //   );
  // }

  // async employee_search_user_request_all(key: string, arParams: Array<string>) {
  //   let url = 'smartoffice/api/v2/employee/query';

  //   let headers = {};
  //   headers[HeaderKeys.ACCESS_TOKEN] = DataSingleton.getData(
  //     DataSingletonKey.SSO_ACCESS_TOKEN,
  //     '',
  //   );
  //   headers[HeaderKeys.IS_MOBILE] = true;

  //   let listParam: Array<any> = [];
  //   arParams.map((e) => {
  //     let params = {
  //       key: key,
  //       value: e,
  //     };
  //     listParam.push(params);
  //   });
  //   return await this.requestAll(url, listParam, headers, null, true, true);
  // }

  //lay su kien theo ngay
  // async getEventByDate(
  //   page: number,
  //   startDate: string,
  //   endDate: string,
  //   pageSize?: number,
  // ) {
  //   let headers = {};
  //   headers[HeaderKeys.CONTENT_TYPE] = HeaderValue.CONTENT_TYPE1;
  //   headers[HeaderKeys.AUTHEN] = `Bearer ${DataSingleton.getData(
  //     DataSingletonKey.SSO_ACCESS_TOKEN,
  //     '',
  //   )}`;
  //   headers[HeaderKeys.IS_MOBILE] = true;
  //   headers[HeaderKeys.KEY] = VTF_KEY;
  //   // headers[HeaderKeys.X_KEY] = VTF_X_KEY;
  //   headers[HeaderKeys.X_KEY] = '5d8cb7db-ad45-4e50-89e3-a416b121d647';
  //   let url = 'searchEventsInfo';
  //   let params: any = {
  //     jwt: DataSingleton.getData(DataSingletonKey.SSO_ACCESS_TOKEN, ''),
  //     page: page,
  //     pageSize: pageSize ? pageSize : 10,
  //     name: '',
  //     participants: '',
  //     type: -1,
  //     typeCode: '2',
  //     eventDateFrom: startDate,
  //     eventDateTo: endDate,
  //   };
  //   return await this.requestPost(
  //     url,
  //     params,
  //     headers,
  //     BodyType.RAW,
  //     false,
  //     'https://viettelfamily.com/vtf-mobile/mobile-apis/vts-mobile/cms/',
  //     undefined,
  //     true,
  //   );
  // }

  async getMobileVersion(param: any) {
    let url = 'cms/getMobileVersion';
    return await this.requestPost(
      url,
      param,
      this.getHeaderDashBoard(),
      BodyType.RAW,
      false,
      'http://103.147.34.77:8084/api/',
      undefined,
      true,
    );
  }
}

export default new Api();
