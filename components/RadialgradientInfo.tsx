import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import RadialGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
import SquareBttom from './SquareBttom';
import SquareRight from './SquareRight';
export class RadialgradientInfo extends Component {
  render() {
    const ENDX = sizes._41sdp / sizes._100sdp;
    const ENDY = 107.54 / sizes._100sdp;
    const STARTX = sizes._55sdp / sizes._100sdp;
    const STARTY = sizes._20sdp / sizes._100sdp;
    return (
      <View style={{flex: 1}}>
        <RadialGradient
          colors={['#FF030A', '#A30408']}
          end={{x: ENDX, y: ENDY}}
          start={{x: STARTX, y: STARTY}}
          style={styles.readiaGradient}>
          <View style={styles.mVuong}>
            <SquareBttom />
          </View>
          <View style={styles.mVuong_}>
            <SquareRight />
          </View>
        </RadialGradient>
      </View>
    );
  }
}

export default RadialgradientInfo;

const styles = StyleSheet.create({
  readiaGradient: {
    width: sizes._screen_width,
    height: '100%',
    flexDirection: 'row',
  },
  mVuong: {
    left: sizes._300sdp,
    right: '-21.75%',
    top: '6.55%',
    bottom: '77.36%',
    transform: [{rotate: '-130deg'}],
    //
  },
  mVuong_: {
    left: sizes._280sdp,
    right: '-47.86%',
    top: '-10.85%',
    bottom: '95.26%',
    transform: [{rotate: '-130deg'}],
  },
});
