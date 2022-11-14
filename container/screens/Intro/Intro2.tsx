import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation: any;
}
export default class Intro2 extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={images.image1}
          resizeMode="cover"
          style={styles.image}>
          <View
            style={{
              marginHorizontal: sizes._20sdp,
              height: '100%',
            }}>
            <View style={styles.logo}>
              <Image source={images.Logo} />
            </View>
            <View style={styles.logo1}>
              <Image source={images.t48841681} />
            </View>

            <Text style={styles.hello}>Tích hợp vOfficee, chấm công:</Text>
            <Text style={styles.text}>
              Chỉ cần điện thoại thông minh kết nối internet, dù Work From Home
              CBNV vẫn có thể nhận, đọc văn bản, thực hiện điểm danh, chấm công
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(ScreenName.HOME)}>
                <LinearGradient
                  colors={['#AA011F', '#EE0033']}
                  end={{x: 1, y: 1}}
                  style={{
                    borderRadius: 5,
                  }}
                  start={{x: 0.4, y: 0}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '400',
                      color: '#fff',
                      padding: 10,
                    }}>
                    Trải nghiệm
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: sizes._50sdp,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: sizes._100sdp,
  },
  image: {
    flex: 1,
  },
  hello: {
    fontSize: 23,
    fontWeight: '600',
    color: '#4D4B4B',
  },

  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#4D4B4B',
  },
});
