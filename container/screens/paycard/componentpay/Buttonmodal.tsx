import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import sizes from '../../../../res/sizes';
interface Props {
  title: any;
  style: any;
  onPress: () => void;
}
export default class Buttonmodal extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: -sizes._15sdp,
    fontSize: sizes._14sdp,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
