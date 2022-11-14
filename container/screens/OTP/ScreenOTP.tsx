import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import InputOtp from '../../../components/OTp/InputOtp';
import images from '../../../res/images';
import sizes from '../../../res/sizes';

interface Props {
  navigation?: any;
}

interface State {
  timer: any;
}

export default class ScreenOTP extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      timer: 99,
    };
  }
  interval: any;
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({timer: prevState.timer - 1})),
      1000,
    );
  }
  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    // console.log(this.state.timer);
    return (
      <View style={styles.container}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          logo={true}
          logoUri={images.logo_vts}
          logoStyle={styles.logoStyle}
        />
        <View style={styles.from}>
          <Text style={styles.text}>Xác nhận</Text>
          <Text style={styles.text_ti}>
            Vui lòng nhập mã xác thực gửi đến số
          </Text>
          <Text style={styles.phone_num}>+84 978453545</Text>
          <InputOtp />
          <Text style={styles.time_donw}>
            {'Mã xác thực hiệu lực : ' + this.state.timer + 's'}
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: sizes._30sdp,
            }}>
            <Text style={styles.aler}>Không nhận được SMS mã xác nhận</Text>
            <TouchableOpacity onPress={() => this.setState({timer: 99})}>
              <Text style={styles.re}>Gửi lại mã</Text>
            </TouchableOpacity>
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
  from: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    borderRadius: sizes._20sdp,
  },
  logoStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    margin: sizes._30sdp,
    fontSize: sizes._30sdp,
    fontWeight: '400',
    lineHeight: sizes._45sdp,
    color: '#52575A',
    fontFamily: 'FS PF BeauSans Pro',
  },
  text_ti: {
    marginLeft: sizes._30sdp,
    fontSize: sizes._18sdp,
    fontWeight: '400',
    color: '#4D4B4B',
    fontFamily: 'FS PF BeauSans Pro',
  },
  phone_num: {
    marginLeft: sizes._30sdp,
    fontSize: sizes._18sdp,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'FS PF BeauSans Pro',
  },
  time_donw: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    color: '#4D4B4B',
    marginLeft: sizes._30sdp,
    fontFamily: 'FS PF BeauSans Pro',
  },
  aler: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    color: '#141616',
    fontFamily: 'FS PF BeauSans Pro',
  },
  re: {
    fontSize: sizes._18sdp,
    fontWeight: '600',
    color: '#D20B2E',
    fontFamily: 'FS PF BeauSans Pro',
  },
});
