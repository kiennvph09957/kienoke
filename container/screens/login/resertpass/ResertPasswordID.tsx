import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../../../components/AppHeader';
import ButtonBack from '../../../../components/resetpassword/ButtonBack';
import ButtonNext from '../../../../components/resetpassword/ButtonNext';
import InputIdUs from '../../../../components/resetpassword/InputIdUs';
import colors from '../../../../res/colors';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {}

export default class ResertPassword extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back={true}
          title
          textTittle={'Nhập mã nhân viên/Email'}
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        {/* From */}
        <View style={styles.from_container}>
          <View style={styles.logo_container}>
            <Image source={images.Logo} />
          </View>
          {/* inputus */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Mã nhân viên/Email</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputIdUs />
          </View>
          <View style={styles.btn_container}>
            <ButtonBack
              title={'Quay lại'}
              onPerss={() => this.props?.navigation?.goBack()}
            />
            <ButtonNext
              title={'Tiếp tục'}
              onNext={() =>
                this.props?.navigation?.navigate(ScreenName.ResertPasswordCMTND)
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  from_container: {
    flex: 1,
    backgroundColor: colors._color_white,
    borderRadius: sizes._20sdp,
  },
  logo_container: {
    marginTop: sizes._47sdp,
    marginLeft: sizes._65sdp,
  },
  inP_container: {
    marginTop: sizes._59sdp,
  },
  idUss_container: {
    flexDirection: 'row',
    marginLeft: sizes._16sdp,
    width: sizes._175sdp,
    height: sizes._34sdp,
  },
  title: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
  },
  star: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    marginLeft: sizes._2sdp,
    color: '#EF0B0B',
  },
  input_container: {
    marginTop: sizes._89sdp,
  },
  btn_container: {
    flexDirection: 'row',
    marginTop: sizes._70sdp,
    marginLeft: sizes._53sdp,
  },
});
