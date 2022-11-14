import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation: any;
}
export default class Intro1 extends Component<Props> {
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
              <Image source={images.Group11705} />
            </View>

            <Text style={styles.hello}>Chỉ tiêu doanh thu:</Text>
            <Text style={styles.text}>
              Giao nhiệm vụ tới từng cá nhân, từng đơn vị, doanh thu thống kê
              theo tháng, quý, năm và luỹ kế theo thực tế thực hiện được
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(ScreenName.Intro2)
                }>
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
    marginBottom: sizes._50sdp,
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
    fontSize: 18,
    fontWeight: '400',
    color: '#4D4B4B',
  },
});
