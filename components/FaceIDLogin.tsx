import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import images from '../res/images';
import sizes from '../res/sizes';
interface Props {}
export default class FaceIDLogin extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.face}>
        <Image source={images.ic_vts_face} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  face: {
    width: sizes._50sdp,
    height: sizes._50sdp,
  },
});
