import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../res/colors';
import images from '../res/images';
import sizes from '../res/sizes';
import Square from './SquareLogin';
export default class Radiangradent extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0.25, y: 0.0}}
        end={{x: 0.25, y: 1.0}}
        colors={['#A30408', '#FF030A']}
        style={styles.logo_container}>
        <View style={styles.logo_vts}>
          <Image source={images.logo_vts} />
        </View>
        <View style={styles.squarebottom}>
          <Square />
        </View>
        <View style={styles.squaretop}>
          <Square />
        </View>
        <View style={styles.squareleft}>
          <Square />
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  logo_container: {
    flex: 1,
    width: '100%',
    height: sizes._184sdp,
    // flexGrow: 0.2,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors._color_red,
  },
  logo_vts: {
    alignContent: 'center',
    justifyContent: 'center',
    left: sizes._150sdp,
    top: -25,
  },
  form_container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors._color_white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  squarebottom: {
    top: sizes._10sdp,
    left: sizes._130sdp,
    transform: [{rotate: '-120deg'}],
  },
  squaretop: {
    top: -70,
    left: sizes._140sdp,
    transform: [{rotate: '-120deg'}],
  },
  squareleft: {
    top: -55,
    left: -295,
    transform: [{rotate: '-140deg'}],
  },
});
