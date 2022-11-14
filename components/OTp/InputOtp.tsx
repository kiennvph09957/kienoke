import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet} from 'react-native';
import sizes from '../../res/sizes';
interface Props {}

interface State {}

export default class InputOtp extends Component<Props, State> {
  render() {
    return (
      <OTPInputView
        style={styles.container}
        pinCount={6}
        // code={''} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        // autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: sizes._70sdp,
    margin: sizes._30sdp,
    backgroundColor:'transparent'
  },
  underlineStyleBase: {
    borderColor: '#C1C3C6',
    width: sizes._48sdp,
    height: sizes._62sdp,
    borderWidth: 1,
    color: '#141616',
    backgroundColor: '#FFFFFF',
    borderRadius: sizes._11sdp,
    fontSize: sizes._36sdp,
    fontWeight: '400',
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
    borderWidth: 1,
    color: '#141616',
    backgroundColor: '#FFFFFF',
    borderRadius: sizes._11sdp,
    fontSize: sizes._36sdp,
    fontWeight: '400',
  },
});
