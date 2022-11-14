import {Text, View} from 'react-native';
import React, {Component} from 'react';
import sizes from '../res/sizes';
export class LineBottomSheet extends Component {
  render() {
    return (
      <View
        style={{
          width: sizes._screen_width,
          borderWidth: 0.2,
          borderColor: '#727070',
        }}></View>
    );
  }
}

export default LineBottomSheet;
