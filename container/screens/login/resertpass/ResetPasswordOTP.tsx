import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

export default class ResetPasswordOTP extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back={true}
          title
          textTittle={'Nhập mã xác thực OTP'}
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
              <Text style={styles.title}>Mã xác thực OTP</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputIdUs />
            <Text style={styles.title_noti}>
              {
                'Nhập mã xác thực được gửi về địa chỉ email của bạn \n để tiến hành đổi mật khẩu mới.'
              }
            </Text>
          </View>
          <View style={styles.btn_text}>
            <Text style={styles.text}>Không nhận được mã xác thực?</Text>
            <TouchableOpacity style={styles.text_tou}>
              <Text style={styles.text_reset}>Gửi lại</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn_container}>
            <ButtonBack
              title={'Quay lại'}
              onPerss={() => this.props?.navigation?.goBack()}
            />
            <ButtonNext
              title={'Tiếp tục'}
              onNext={() =>
                this.props?.navigation?.navigate(ScreenName.ResetPasswordNewPas)
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
  title_noti: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    marginTop: sizes._50sdp,
    marginLeft: sizes._16sdp,
  },
  star: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    marginLeft: sizes._5sdp,
    color: '#EF0B0B',
  },
  input_container: {
    marginTop: sizes._89sdp,
  },
  btn_text: {
    flexDirection: 'row',

    marginTop: sizes._37sdp,
    marginLeft: sizes._16sdp,
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
  },
  text_tou: {
    marginLeft: sizes._2sdp,
    borderBottomColor: '#EF0B0B',
    borderBottomWidth: sizes._2sdp,
  },
  text_reset: {
    fontSize: sizes._18sdp,
    fontWeight: '700',
    color: '#EF0B0B',
  },
  btn_container: {
    flexDirection: 'row',
    marginTop: sizes._20sdp,
    marginLeft: sizes._53sdp,
  },
});
