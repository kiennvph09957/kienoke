import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import AppHeader from '../../../../components/AppHeader';
import ButtonBack from '../../../../components/resetpassword/ButtonBack';
import ButtonNext from '../../../../components/resetpassword/ButtonNext';
import InputIdUs from '../../../../components/resetpassword/InputIdUs';
import colors from '../../../../res/colors';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import svgs from '../../../../res/svgs';
import {ScreenName} from '../../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {}

export default class ResertPasswordCMTND extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back={true}
          title
          textTittle={'Nhập CMTND'}
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        {/* From */}
        <View style={styles.from_container}>
          {/* logo */}
          <View style={styles.logo_container}>
            <Image source={images.Logo} />
          </View>
          {/* image */}
          <View style={styles.img_container}>
            <Image source={images.CMT} />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text}>
              {
                ' Nhập số Chứng minh thư nhân dân (CMTND) của bạn \n vào ô nhập liệu bên dưới để lấy mã xác thực OTP'
              }
            </Text>
          </View>
          {/* inputus */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Số chứng minh nhân dân</Text>
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
              title={'Tiếp tực'}
              onNext={() =>
                this.props?.navigation?.navigate(ScreenName.ResetPasswordOTP)
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
  img_container: {
    width: sizes._350sdp,
    height: sizes._100sdp,
    marginLeft: sizes._37sdp,
    marginTop: sizes._75sdp,
  },
  text_container: {
    marginLeft: sizes._18sdp,
    marginTop: sizes._15sdp,
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
  },
  inP_container: {
    marginTop: sizes._37sdp,
  },
  idUss_container: {
    flexDirection: 'row',
    marginLeft: sizes._16sdp,
    width: sizes._200sdp,
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
