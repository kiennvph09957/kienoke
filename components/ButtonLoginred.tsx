import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
interface Props {
  onPress: (event: any) => void;
}
export default class ButtonLoginred extends React.Component<Props> {
  render() {
    return (
      <>
        <TouchableOpacity
          // style={styles.button_container}
          onPress={this.props.onPress}>
          <LinearGradient
            colors={['#9D0721', '#FF0C1E']}
            end={{x: 0.5, y: 1}}
            start={{x: 0.4, y: 0}}
            style={styles.button_container}>
            <Text style={styles.text_button}>Đăng nhập</Text>
          </LinearGradient>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button_container: {
    width: sizes._360sdp,
    height: sizes._52sdp,
    borderRadius: sizes._30sdp,
    left: sizes._27sdp,
    top: sizes._40sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_button: {
    fontSize: sizes._20sdp,
    fontWeight: '400',
    lineHeight: sizes._24sdp,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
