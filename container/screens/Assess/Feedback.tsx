import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  Text,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from './permision';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Feedback = () => {
  const [uri, setUri] = useState('');
  const [image, setImage] = useState('');

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Chọn cách để tải ảnh lên', 'Camera và Thư viện', [
        {text: 'Camera', onPress: Camera},
        {text: 'Thư viện', onPress: Gallery},
        {text: 'Thoát', onPress: () => {}},
      ]);
    }
  };

  const Gallery = () => {
    ImageCropPicker.openPicker({
      cropping: false,
      multiple: true,
      maxFiles: 10,
    }).then(images => {
      const fileName = images.map(data => data.path);
      setUri(fileName);
    });
  };
  const Camera = () => {
    ImageCropPicker.openCamera({}).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const Clear = () => {
    let img = uri || (uri && uri.length ? uri[0] : '');
    console.log('will cleanup image', img);

    ImageCropPicker.clean()
      .then(() => {
        setUri('');
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

  return (
    <View
      style={{
        flex: 1,

        marginTop: sizes._80sdp,
        left: sizes._32sdp,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            width: '90%',
            height: sizes._52sdp,

            backgroundColor: '#F2F4F8',
            fontSize: 14,
            borderRadius: 8,
            padding: 5,
          }}
          multiline
          numberOfLines={3}
          placeholder="Thêm nhận xét, góp ý về bữa ăn"
        />
        <TouchableOpacity onPress={onSelectImage}>
          <Image
            style={{right: 35}}
            source={require('./Image/uploadimg.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
          }}>
          {uri.length > 0 &&
            uri.map((data: any) => {
              return (
                <View>
                  <Image
                    source={{uri: data}}
                    style={{
                      height: sizes._52sdp,
                      width: sizes._52sdp,
                      borderRadius: sizes._8sdp,
                      marginHorizontal: sizes._8sdp,
                    }}
                  />
                  <TouchableOpacity
                    onPress={Clear}
                    style={{
                      top: sizes._5sdp,

                      position: 'absolute',
                      right: sizes._12sdp,
                    }}>
                    {uri === uri && (
                      <Image
                        style={{left: sizes._5sdp}}
                        source={require('./Image/clear1.png')}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          {image.length > 0 && (
            <View>
              <Image
                source={{uri: image}}
                style={{
                  height: sizes._52sdp,
                  width: sizes._52sdp,
                  borderRadius: sizes._8sdp,
                  marginHorizontal: sizes._8sdp,
                }}
              />
              <TouchableOpacity
                onPress={Clear1}
                style={{
                  top: sizes._5sdp,

                  position: 'absolute',
                  right: sizes._12sdp,
                }}>
                {image === image && (
                  <Image source={require('./Image/clear1.png')} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Feedback;
const styles = StyleSheet.create({});
