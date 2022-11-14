import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ModalSeen from './ModalSeen';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import images from '../../../res/images';
import TextInputs from './TextInput';
import TextInput1 from './TextInput1';
import ModalCust from './ModalCus';
import {ScreenName} from '../../AppContainer';

const VTS_GoodUp = ({navigation}: any) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [image, setImage] = useState('');
  const [photo, setPhoto] = useState('');
  const changeOpen = () => {
    setOpen(!open);
  };
  const changeOpen1 = () => {
    setOpen1(!open1);
  };
  const back = () => {
    navigation?.goBack();
  };
  const takePhotoCamera = () => {
    ImageCropPicker.openCamera({}).then(image => {
      if (image.size > 1048567 * 5) {
        Alert.alert('File ảnh không vượt quá 5 MB');
      } else {
        setImage(image.path);
      }

      setOpen(false);
    });
  };

  const choosePhoto = () => {
    ImageCropPicker.openPicker({
      multiple: true,

      maxFiles: 2,
    }).then(images => {
      const fileName = images.map(data => data.path);
      setPhoto(fileName);
      setOpen(false);
    });
  };

  const Clear = () => {
    let img = image || (photo && image.length ? photo[0] : '');
    console.log('will cleanup image', img);

    ImageCropPicker.clean()
      .then(() => {
        setPhoto('');
      })
      .catch(e => {
        Alert.alert(e);
      });
  };
  const Clear1 = () => {
    let img = image || (image && image.length ? image[0] : '');
    console.log('will cleanup image', img);

    ImageCropPicker.clean()
      .then(() => {
        setImage('');
      })
      .catch(e => {
        Alert.alert(e);
      });
  };
  const emptyData: any = [];

  const renderNullItem = () => null;
  const rendeContent = () => (
    <View
      style={{
        height: sizes._screen_height,
      }}>
      <View style={styles.body}>
        <View style={styles.stImage}>
          <Image
            source={images.avatar}
            style={{
              height: sizes._48sdp,
              width: sizes._48sdp,

              borderRadius: sizes._128sdp,
              borderColor: '#ED1C24',
              borderWidth: 1,
            }}></Image>
        </View>
        <View style={{top: sizes._25sdp, left: sizes._89sdp}}>
          <Text style={{fontSize: 20}}>Nguyễn Thị Hoa</Text>
          <Text style={{fontSize: 18}}>Kỹ sư giải pháp nghiệp vụ</Text>
        </View>
        <View>
          <TextInputs />
          <TextInput1 />
        </View>

        <View>
          <Text style={styles.itext}>Tệp đính kèm</Text>
          <Text style={styles.text}>
            Cho phép định dạng: GIF, JPEG, JPG, PNG.
          </Text>
          <Text style={styles.text}>Kích cỡ 5.0 Mb</Text>
          <View style={styles.img}>
            {photo.length > 0 &&
              photo.map((data: any) => {
                return (
                  <View>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Image source={{uri: data}} style={styles.btnClear} />

                      <TouchableOpacity
                        onPress={Clear}
                        style={{
                          right: sizes._8sdp,
                          top: -10,
                        }}>
                        {photo === photo && (
                          <Image style={styles.image} source={images.cancel} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            <View>
              {image.length > 0 && (
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <Image source={{uri: image}} style={styles.btnClear} />

                  <TouchableOpacity
                    onPress={Clear1}
                    style={{
                      right: 8,
                      top: -10,
                    }}>
                    {image === image && (
                      <Image style={styles.image} source={images.cancel} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity style={styles.addFile} onPress={changeOpen}>
                <Image
                  source={images.gallery}
                  style={{
                    height: sizes._42sdp,
                    width: sizes._42sdp,
                  }}></Image>
                <Text style={{fontSize: 16}}>Thêm file</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btnFeedback} onPress={changeOpen1}>
            <Text style={styles.textFeedback}>Gửi đóng góp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, height: sizes._screen_height}}>
      <AppHeader back onBackPress={back} title textTittle="Vì VTS tốt lên" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors._color_white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <FlatList
          data={emptyData}
          renderItem={renderNullItem}
          ListEmptyComponent={rendeContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ModalCust
        isShow={open}
        toggleDate={changeOpen}
        takePhotoCamera={takePhotoCamera}
        choosePhoto={choosePhoto}
      />
      <ModalSeen show={open1} close={changeOpen1} />
    </View>
  );
};

export default VTS_GoodUp;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: sizes._30sdp,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHander: {
    width: sizes._48sdp,
    height: sizes._8sdp,
    borderRadius: 3,
    backgroundColor: '#00000050',
  },
  btnCamera: {
    height: sizes._118sdp,
    width: sizes._118sdp,
    borderRadius: sizes._16sdp,
    borderWidth: sizes._2sdp,
    borderColor: '#676565',
    justifyContent: 'center',
    alignItems: 'center',
    left: sizes._180sdp,
  },
  btnPhoto: {
    right: sizes._100sdp,
    height: sizes._118sdp,
    width: sizes._118sdp,
    borderRadius: sizes._16sdp,
    borderWidth: sizes._2sdp,
    borderColor: '#676565',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_: {
    top: sizes._10sdp,
    fontSize: 18,
    fontWeight: '400',
  },
  body: {
    flex: 1,
    flexGrow: 1,
  },
  stImage: {
    left: sizes._30sdp,
    top: sizes._34sdp,
    position: 'absolute',
    justifyContent: 'space-around',
  },
  itext: {
    fontWeight: '500',
    fontSize: 18,
    top: sizes._140sdp,
    left: sizes._32sdp,
    fontFamily: 'FS PF BeauSans Pro',
  },
  text: {
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 16,
    top: sizes._150sdp,
    left: sizes._32sdp,
    color: '#4D4B4B',
  },
  img: {
    flexDirection: 'row',
    top: sizes._170sdp,
    left: sizes._32sdp,
  },
  btnClear: {
    height: sizes._96sdp,
    width: sizes._96sdp,
    borderRadius: 8,
    marginHorizontal: sizes._8sdp,
  },
  btnFeedback: {
    backgroundColor: '#676565',
    borderRadius: sizes._30sdp,
    top: sizes._200sdp,
    height: sizes._48sdp,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  image: {
    tintColor: '#4D4B4B',
    height: sizes._20sdp,
    width: sizes._20sdp,
  },
  addFile: {
    height: sizes._96sdp,
    width: sizes._96sdp,
    borderColor: '#4D4B4B',
    borderWidth: 1,
    borderRadius: sizes._10sdp,

    alignItems: 'center',
    justifyContent: 'center',
  },
  textFeedback: {
    fontFamily: 'FS Magistral',
    fontWeight: '500',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
