import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
export class SquareRight extends Component {
  render() {
    const ENDX = 74.732;
    const ENDY = 50.24;
    const STARTX = 24.911;
    const STARTY = 50.24;
    return (
      <View>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.66)', 'rgba(255, 255, 255, 0)']}
          // colors={['#000', '#000']}
          end={{x: ENDX, y: ENDY}}
          start={{x: STARTX, y: STARTY}}
          style={styles.linearGradient}></LinearGradient>
      </View>
    );
  }
}

export default SquareRight;

const styles = StyleSheet.create({
  linearGradient: {
    width: sizes._100sdp,
    height: sizes._100sdp,
    borderRadius: 5,
    opacity: 0.2,
  },
});
