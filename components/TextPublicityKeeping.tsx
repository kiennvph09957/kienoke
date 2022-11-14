import {Text, View} from 'react-native';
import React, {Component} from 'react';
import sizes from '../res/sizes';

interface Props {
  title?: string | any;
  style?: any | string;
}
export class TextPublicityKeeping extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text
          style={this.props.style}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default TextPublicityKeeping;


// {
//   fontSize: sizes._18sdp,
//   color: '#4D4B4B',
//   // lineHeight: 27,
//   fontStyle: 'normal',
//   fontWeight: '400',
//   marginLeft: sizes._16sdp,
// }
