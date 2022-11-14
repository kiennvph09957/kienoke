import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sizes from '../../../../res/sizes';

interface Props {
  title: any;
  onPress: () => void;
  onPressIn: () => void;
}

interface State {}

export default class Buttoncancle extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPressIn={this.props.onPressIn}
        onPress={this.props.onPress}
        style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: sizes._128sdp,
    width: sizes._113sdp,
    height: sizes._42sdp,
    paddingTop: sizes._13sdp,
    backgroundColor: '#676565',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: -sizes._15sdp,
    fontSize: sizes._14sdp,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
