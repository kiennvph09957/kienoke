import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import images from '../res/images';
import sizes from '../res/sizes';
interface Props {}
export default class FingIDLongin extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.fing}>
        <Image source={images.ic_vts_fing} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  fing: {
    width: sizes._50sdp,
    height: sizes._50sdp,
  },
});
