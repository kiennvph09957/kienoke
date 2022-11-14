import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import sizes from '../../res/sizes';

interface Props {
  rectStyle: object;
  textStyle: object;
  textValue: string;
}

interface State {}

export default class SubColorChart extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.react, this.props.rectStyle]} />
        <Text style={this.props.textStyle}>{this.props.textValue}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes._8sdp,
  },
  react: {
    width: sizes._12sdp,
    height: sizes._12sdp,
    borderRadius: sizes._12sdp / 2,
  },
});
