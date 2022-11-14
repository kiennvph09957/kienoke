import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import colors from '../../../../res/colors';
import sizes from '../../../../res/sizes';
import Radiangradent from '../../../../components/RadiangradentLogin';
import FromLogin from '../../../../components/FromLogin';
import {ScreenName} from '../../../AppContainer';
import AppHeader from '../../../../components/AppHeader';
import images from '../../../../res/images';

interface Props {
  navigation: any;
}
interface State {}
export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={-200}
          style={styles.container}>
          <AppHeader
            logo={true}
            logoUri={images.logo_vts}
            logoStyle={styles.logoStyle}
          />
          <View style={styles.form_container}>
            <FromLogin
              onPressCHangpass={this.props?.navigation}
              onPressRetrievalpass={this.props?.navigation}
              navigationLog={this.props?.navigation}
            />
          </View>
        </KeyboardAvoidingView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: sizes._screen_width,
    height: sizes._184sdp,
  },
  logoStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  form_container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors._color_white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input_container: {
    width: sizes._360sdp,
    height: sizes._52sdp,
    marginTop: sizes._5sdp,
    marginLeft: sizes._27sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
    borderRadius: sizes._5sdp,
    flexDirection: 'row',
  },
});
