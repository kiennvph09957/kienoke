import moment from 'moment';
import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {AsyncStorageKeys} from '../../../common/constants';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import strings from '../../../res/strings';
import {ScreenName} from '../../AppContainer';
import colors from '../../../res/colors';
import api, {BodyType, getUserInfo} from '../../../network/api';

interface Props {
  navigation: any;
}

interface State {}

export default class SplashScreen extends Component<Props, State> {
  state: State = {};

  componentDidMount() {
    setTimeout(() => {
      this.onFinish();
    }, 300);
  }

  onFinish = async () => {
    this.props?.navigation?.navigate(ScreenName.LOGIN_SCREEN);
    // NavigationService.reset(ScreenName.SALARY_INFOMATION_SCREEN)

    // let isFirstUserApp = await AsyncStorage.getItem(AsyncStorageKeys.IS_FIRST_USE_APP);
    // if (isFirstUserApp == null) {
    //     NavigationService.reset(ScreenName.INTRODUCTION_SCREEN)
    // } else {

    // }
  };

  render() {
    return (
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
        source={images.splash_vts}></ImageBackground>
      // <View
      //     style={{
      //         flex: 1
      //     }}
      // >
      //     <View
      //         style={{
      //             height: sizes._150sdp,
      //             width: sizes.width,
      //             backgroundColor: '#A30408',
      //         }}
      //     >
      //         <Text>Header</Text>
      //     </View>
      //     <View
      //         style={styles.viewRoot}
      //     >

      //     </View>
      // </View>
    );
  }
}

export const styles = StyleSheet.create({
  viewRoot: {
    flex: 1,
    marginTop: -sizes._80sdp,
    paddingTop: sizes._24sdp,
    borderTopStartRadius: sizes._20sdp,
    borderTopEndRadius: sizes._20sdp,
    backgroundColor: colors._color_white,
  },
});
