import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../res/colors';
import sizes from '../../../../res/sizes';
import Square from '../../../../components/SquareLogin';
export default class Headerpay extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0.25, y: 0.0}}
        end={{x: 0.25, y: 1.0}}
        colors={['#A30408', '#FF030A']}
        style={styles.logo_container}>
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
    width: '100%',
    height: sizes._screen_height / 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors._color_red,
  },
  squarebottom: {
    marginTop: sizes._160sdp,
    marginLeft: sizes._100sdp,
    transform: [{rotate: '-120deg'}],
  },
  squaretop: {
    marginTop: -sizes._150sdp,
    marginLeft: sizes._130sdp,
    transform: [{rotate: '-120deg'}],
  },
  squareleft: {
    marginTop: -sizes._270sdp,
    marginLeft: -sizes._400sdp,
    transform: [{rotate: '-140deg'}],
  },
});
