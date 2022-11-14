import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

interface Props {
  style?: any;
  textStyle?: any;
  text?: string;
  onPress?: any;
}

interface State {}

export default class TextLabel extends Component<Props, State> {
  state = {};

  render() {
    const {style, textStyle, text} = this.props;
    return (
      <>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={style}>
            <Text style={textStyle}>{text}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}
