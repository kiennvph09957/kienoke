import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sizes from '../../../../res/sizes';

interface Props {
  title: any;
  onPress: () => void;
}

interface State {}

export default class Buttonlink extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.stybutton}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  stybutton: {
    borderRadius: sizes._128sdp,
    width: sizes._350sdp,
    height: sizes._45sdp,
    marginTop: sizes._20sdp,
    backgroundColor: '#D20B2E',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: sizes._14sdp,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
