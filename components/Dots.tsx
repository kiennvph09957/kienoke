import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';

type Props = {
  style: any;
};

type State = {};

export default class Dots extends Component<Props, State> {
  render() {
    return <View style={this.props.style}></View>;
  }
}
