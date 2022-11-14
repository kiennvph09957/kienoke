import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Modal} from 'react-native-paper';
import AppHeader from '../../../../components/AppHeader';
import InputChangePassNew from '../../../../components/changepassword/InputChangePassNew';
import InputResertPass from '../../../../components/changepassword/InputResertPass';
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

interface State {
  visible: any;
}

export default class ResetPasswordNewPas extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back={true}
          title
          textTittle={'Nhập mật khẩu mới'}
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        {/* From */}
        <View style={styles.from_container}>
          <View style={styles.logo_container}>
            <Image source={images.Logo} />
          </View>
          {/* inputpasnew */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Mật khẩu mới</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputChangePassNew />
          </View>
          {/* inputresetpass */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Nhập lại mật khẩu mới</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputResertPass />
          </View>
          {/* Button */}
          <View style={styles.btn_container}>
            <ButtonBack
              title={'Huỷ'}
              onPerss={() =>
                this.props?.navigation?.navigate(ScreenName.LOGIN_SCREEN)
              }
            />
            <ButtonNext
              title={'Đổi mật khẩu'}
              onNext={() => {
                this.setState({visible: true});
              }}
            />
          </View>
        </View>
        {/* Modal*/}
        <Modal
          visible={this.state.visible}
          onDismiss={() => this.setState({visible: false})}>
          <View style={styles.modle}>
            <View style={styles.text_modal}>
              <Text style={styles.text_noti_modal}>Thông báo</Text>
            </View>
            <View style={styles.title_noti_modal_contain}>
              <Text style={styles.title_noti_modal}>
                {
                  'Bạn đã thưc hiện đổi mật khẩu thành \n công. Bạn vui lòng đăng nhập để tiếp\n tục sử dụng dịch vụ.'
                }
              </Text>
            </View>
            <TouchableOpacity
              style={styles.tou_modal}
              onPress={() => {
                this.props.navigation.navigate(ScreenName.LOGIN_SCREEN),
                  this.setState({visible: false});
              }}>
              <Text style={styles.tou_text_modal}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  modle: {
    alignContent: 'center',
    justifyContent: 'center',
    width: sizes._347sdp,
    height: sizes._220sdp,
    backgroundColor: colors._color_white,
    marginLeft: sizes._39sdp,
    borderRadius: sizes._10sdp,
  },
  text_modal: {
    marginTop: sizes._23sdp,
    // marginLeft: sizes._90sdp,
  },
  text_noti_modal: {
    color: '#4D4B4B',
    fontSize: sizes._23sdp,
    fontWeight: '700',
    lineHeight: sizes._34sdp,
    textAlign: 'center',
  },
  title_noti_modal_contain: {
    marginBottom: sizes._22sdp,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title_noti_modal: {
    color: '#4D4B4B',
    fontSize: sizes._18sdp,
    fontWeight: '700',
    textAlign: 'left',
    marginLeft: sizes._37sdp,
    lineHeight: sizes._27sdp,
  },
  tou_modal: {
    borderTopColor: '#727070',
    borderTopWidth: sizes._1sdp,
  },
  tou_text_modal: {
    marginTop: sizes._15sdp,
    textAlign: 'center',
    color: '#EF0B0B',
    fontSize: sizes._23sdp,
    fontWeight: '700',
  },
});
