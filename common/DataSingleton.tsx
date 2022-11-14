

export enum DataSingletonKey {
    SSO_ACCESS_TOKEN = 'accessToken',

    USER_NAME = 'userName',
    PASSWORD = 'passWord',
    EMPLOYEE_ID = 'employeeId',
    EMPLOYEE_CODE = 'employeeCode',
    MANAGER_ID = 'managerId',
    CHAT_USER_ID = 'userID',
    USER_FULL_NAME = 'userFullName',
    USER_POSITION = 'userPosition',
    USER_POSITION_NAME = 'userPositionName',
    USER_ORG = 'userORG',
    TIME_REQUEST_TOKEN = 'TIME_REQUEST_TOKEN',
    TTNS_TIME_REQUEST_TOKEN = 'TTNS_TIME_REQUEST_TOKEN',
    DATA_NOTIFY_FIREBASE = 'DATA_NOTIFY_FIREBASE',
    IS_CAN_LOAD = 'isCanLoad',
    IS_CLICK_NOTIFY = 'IS_CLICK_NOTIFY',
    IS_APP_PAUSE = 'IS_APP_PAUSE',
    OTP_TOKEN = 'OTP_TOKEN',

    USER_INFO_FULL = 'userInfoFull',

    NATION_OF_WORK_ID = 'nation_of_work_id',
}

/**
 * DataSingleton using to save static data that used on current session
 */
class DataSingleton {
  private dataManager: Array<any> = [];

  /**
   *
   * @param key
   * @param value
   */
  setData(key: string, value: any, callback?: () => void) {
    this.dataManager[key] = value;
    if (callback) {
      callback();
    }
  }

  /**
   *
   * @param key
   *  Key of value
   * @param defaultValue
   *  Return defaultValue if key not found
   */
  getData<T>(key: string, defaultValue: any) {
    if (this.dataManager[key]) {
      var value: T = this.dataManager[key];
      return value;
    } else {
      return defaultValue;
    }
  }

  /**
   * Delete all value on data singleton
   */
  clearAll() {
    try {
      this.dataManager = [];
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param key
   *  Key of value that deleting
   */
  clear(key: string) {
    try {
      Object.keys(this.dataManager).map((value, index) => {
        if (value == key) {
          this.dataManager.splice(index, 1);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DataSingleton();
