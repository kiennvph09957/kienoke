import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from './../../../res/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {ScreenName} from '../../AppContainer';
import {ScrollView} from 'react-native-gesture-handler';
interface Props {
  navigation: any;
}
export default class Intro extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={images.image1}
          resizeMode="cover"
          style={styles.image}>
          <SafeAreaView>
            <ScrollView>
              <View
                style={{
                  marginHorizontal: sizes._20sdp,
                  height: '100%',
                }}>
                <View style={styles.logo}>
                  <Image source={images.Logo} />
                </View>
                <View style={styles.logo1}>
                  <Image source={images.n35946191} />
                </View>

                <Text style={styles.hello}>Xin chào!</Text>
                <Text style={styles.text}>
                  Chào mừng bạn đến với App VTS insight, đội ngũ xây dựng app
                  mong muốn tích hợp các tính năng giúp người VTS thích ứng
                  nhanh với công cuộc chuyển đổi số và giúp CBNV tiết kiệm thời
                  gian, làm việc hiệu quả nhất.{' '}
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
                      this.props.navigation.navigate(ScreenName.Intro1)
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
            </ScrollView>
          </SafeAreaView>
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
    marginTop: sizes._50sdp,
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
