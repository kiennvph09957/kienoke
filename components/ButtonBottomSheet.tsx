import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import sizes from '../res/sizes';
type Props = {
  titleBtn: string;
  onPress: () => void;
};

type State = {};

export class ButtonBottomSheet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: '#E5E5E5',
          width: sizes._199sdp,
          height: sizes._48sdp,
          justifyContent: 'center',
          borderColor: '#676565',
          borderRadius: sizes._5sdp
        }}
        onPress={this.props.onPress}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: sizes._18sdp,
            lineHeight: sizes._24sdp,
            color: '#4D4B4B',
            fontWeight: '500',
          }}>
          {this.props.titleBtn}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonBottomSheet;
