import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../res/colors';
import sizes from '../res/sizes';
import Input from './InputuserLogin';
import Inputp from './InputpassLogin';
import Button from './ButtonLogin';
import FaceID from './FaceIDLogin';
import FingID from './FingIDLongin';
import {ScreenName} from '../container/AppContainer';

interface Props {
  onPressCHangpass: any;
  onPressRetrievalpass: any;

  navigationLog: any;
}
interface State {
  changetexxt: any;
  changepass: any;
  hiden: any;
  alertshow: any;
  alertshownull: any;
}

export default class FromLogin extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      changetexxt: '',
      changepass: '',
      hiden: true,
      alertshow: !1,
      alertshownull: !2,
    };
  }
  render() {
    const user = 'VNSight';
    const pass = 'VNSight901@';
    return (
      <>
        <View style={styles.title_container}>
          <Text style={styles.title}>Đăng nhập</Text>
        </View>
        <>
          <>
            {/* nhập user */}
            <View style={styles.usercontainer}>
              <View style={styles.text_containerus}>
                <Text style={styles.text}>Mã nhân viên/Email </Text>
                <Text style={styles.text_star}>*</Text>
              </View>

              <Input
                onChangeText={val => this.setState({changetexxt: val})}
                keyboardType={'default'}
                secureTextEntry={false}
                value={this.state.changetexxt}
                clear={() => this.setState({changetexxt: ''})}
              />
            </View>
            {/* nhập mật khẩu */}
            <View style={styles.passcontainer}>
              <View style={styles.text_containerps}>
                <Text style={styles.text}>Mật khẩu </Text>
                <Text style={styles.text_star}>*</Text>
              </View>

              <Inputp
                onChangeText={val => this.setState({changepass: val})}
                keyboardType={'default'}
                secureTextEntry={this.state.hiden}
                value={this.state.changepass}
                clear={() => this.setState({changepass: ''})}
                hidden={() => {
                  this.state.hiden
                    ? this.setState({hiden: false})
                    : this.setState({hiden: true});
                }}
              />
              {/* thông báo alert */}
              {this.state.alertshow && (
                <Text style={styles.text_alert}>
                  {
                    'Sai tài khoản hoặc mật khẩu, bạn vui lòng nhập lại mật khẩu, mật khẩu phải có ký tự đặc biệt, chữ in hoa, chữ in thường, chữ số '
                  }
                </Text>
              )}
              {this.state.alertshownull && (
                <Text style={styles.text_alertnull}>
                  {
                    'Tài khoản hoặc mật khẩu không được để trống bạn vui lòng nhập tài khoản:VNSight , mật khẩu:VNSight901@'
                  }
                </Text>
              )}
            </View>
            {/* bắt sự kiện quên mk và đổi mk */}
            <View style={styles.navi_container}>
              <TouchableOpacity
                onPress={() =>
                  this.props.onPressCHangpass.navigate(
                    ScreenName.ChangepasswordScreen,
                  )
                }>
                <Text style={styles.title_doimk}>Đổi mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.onPressRetrievalpass.navigate(
                    ScreenName.ResertPassword,
                  )
                }>
                <Text style={styles.title_quenmk}>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>
          </>
          <>
            {/* bắt sự kiện đăng nhập */}
            <Button
              onPress={() => {
                if (
                  this.state.changetexxt != '' ||
                  this.state.changepass != ''
                ) {
                  if (
                    this.state.changetexxt != user ||
                    this.state.changepass != pass
                  ) {
                    this.setState({alertshow: 2});
                  } else {
                    this.props.navigationLog.navigate(ScreenName.Intro);
                    this.setState({alertshow: !1});
                    this.setState({alertshownull: !2});
                  }
                } else {
                  this.setState({alertshow: !1});
                  this.setState({alertshownull: 2});
                }
                // this.props.navigationLog.navigate(ScreenName.HOME);
              }}
            />
          </>
          <>
            {/* Đăng nhập bằng f và vân tay */}
            <View style={styles.ID_login}>
              <View style={{marginLeft: -sizes._50sdp}}>
                <FaceID />
              </View>
              <View style={{marginLeft: sizes._70sdp}}>
                <FingID />
              </View>
            </View>
          </>
          {/* version */}
          <View style={styles.info_container}>
            <Text style={styles.info}>@Copyright VTS, version 2.0</Text>
          </View>
        </>
      </>
    );
  }
}
const styles = StyleSheet.create({
  title_container: {
    width: sizes._150sdp,
    height: sizes._34sdp,
    marginTop: sizes._56sdp,
    marginLeft: sizes._27sdp,
  },
  title: {
    fontSize: sizes._30sdp,
    fontWeight: '600',
    lineHeight: sizes._34sdp,
    color: '#4D4B4B',
    textAlign: 'left',
  },
  usercontainer: {
    marginTop: -sizes._63sdp,
  },
  text_containerus: {
    flexDirection: 'row',
    width: sizes._175sdp,
    height: sizes._34sdp,
    marginLeft: sizes._27sdp,
    marginTop: sizes._73sdp,
  },
  text: {
    fontSize: sizes._18sdp,
    lineHeight: sizes._34sdp,
    fontWeight: '400',
    textAlign: 'left',
    color: '#4D4B4B',
  },
  text_star: {
    color: colors._color_red,
    fontSize: sizes._18sdp,
    lineHeight: sizes._34sdp,
    fontWeight: '400',
    textAlign: 'left',
  },
  passcontainer: {
    marginTop: -sizes._55sdp,
  },
  text_containerps: {
    flexDirection: 'row',
    width: sizes._175sdp,
    height: sizes._34sdp,
    marginLeft: sizes._27sdp,
    marginTop: sizes._75sdp,
  },
  navi_container: {
    marginTop: sizes._15sdp,
    marginLeft: sizes._27sdp,
    flexDirection: 'row',
  },
  title_doimk: {
    width: sizes._108sdp,
    height: sizes._34sdp,
    fontSize: sizes._18sdp,
    lineHeight: sizes._34sdp,
    fontWeight: '400',
    color: '#4D4B4B',
  },
  title_quenmk: {
    width: sizes._135sdp,
    height: sizes._34sdp,
    fontSize: sizes._18sdp,
    lineHeight: sizes._34sdp,
    fontWeight: '400',
    color: '#676565',
    marginLeft: sizes._150sdp,
  },
  ID_login: {
    flexDirection: 'row',
    marginTop: sizes._50sdp,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: sizes._35sdp,
  },
  info_container: {
    flex: 1,
    width: sizes._243sdp,
    height: sizes._25sdp,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: sizes._90sdp,
    // backgroundColor: 'transparent',
  },
  info: {
    fontSize: sizes._16sdp,
    lineHeight: sizes._27sdp,
    fontWeight: '400',
    textAlign: 'center',
    color: '#676565',
    marginTop: sizes._50sdp,
  },
  text_alert: {
    marginLeft: sizes._25sdp,
    marginTop: sizes._15sdp,
    fontSize: sizes._18sdp,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#EF0B0B',
  },
  text_alertnull: {
    marginLeft: sizes._25sdp,
    marginTop: sizes._15sdp,
    fontSize: sizes._18sdp,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#EF0B0B',
  },
});
