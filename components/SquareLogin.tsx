import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Squareradian from 'react-native-linear-gradient';
import sizes from '../res/sizes';

export default class Square extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Squareradian
          style={styles.square_radian}
          start={{x: 0.6, y: 0.2}}
          end={{x: 0.2, y: 0.6}}
          colors={['#FFFFFF', '#FFFFFF']}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  square_radian: {
    width: sizes._100sdp,
    height: sizes._100sdp,
    borderRadius: sizes._20sdp,
    opacity: 0.15,
  },
});
