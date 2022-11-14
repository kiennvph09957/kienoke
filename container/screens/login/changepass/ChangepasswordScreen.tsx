import React, {Component} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // Modal,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader';
import InputChangePassNew from '../../../../components/changepassword/InputChangePassNew';
import InputChangpassUs from '../../../../components/changepassword/InputChangpassUs';
import InputResertPass from '../../../../components/changepassword/InputResertPass';
import colors from '../../../../res/colors';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import InputChangePassOld from '../../../../components/changepassword/InputChangePassOld';
import ButtonApply from '../../../../components/changepassword/ButtonApply';
import {ScreenName} from '../../../AppContainer';
import {Modal} from 'react-native-paper';

interface Props {
  navigation?: any;
}

interface State {
  visible: any;
  show: any;
}

export default class ChangepasswordScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      show: !1,
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {/* header */}
        <AppHeader
          back={true}
          title
          textTittle="Đổi mật khẩu"
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
            <InputChangpassUs />
          </View>
          {/* inputpasold */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Mật khẩu cũ</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputChangePassOld />
          </View>
          {/* inputpasnew */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Mật khẩu mới</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputChangePassNew />
          </View>
          {this.state.show && (
            <Text style={styles.text_aler}>
              {
                'Bạn vui lòng đặt lại mật khẩu, mật khẩu mới phải có ký \ntự đặc biệt, chữ in hoa, chữ in thường, chữ số và không chứa các cụm từ dễ đoán'
              }
            </Text>
          )}
          {/* inputresetpass */}
          <View style={styles.inP_container}>
            <View style={styles.idUss_container}>
              <Text style={styles.title}>Nhập lại mật khẩu mới</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <InputResertPass />
          </View>
          {/* buttonxacnhan */}
          <View style={styles.but_container}>
            <ButtonApply
              OnModal={() => {
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
      </KeyboardAvoidingView>
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
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
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
  but_container: {
    marginTop: sizes._80sdp,
    marginLeft: sizes._107sdp,
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
  text_aler: {
    marginLeft: sizes._20sdp,
    marginTop: sizes._50sdp,
    fontSize: sizes._18sdp,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#EF0B0B',
  },
});
