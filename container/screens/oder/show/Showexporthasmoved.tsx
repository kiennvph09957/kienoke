import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import sizes from '../../../../res/sizes';

export default class Exporthasmoved extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_containerus}>
          <Text style={styles.text}>Số suất ăn đã chuyển</Text>
        </View>
        <View style={styles.textnumbercontainer}>
          <Text style={styles.textnumber}>10</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -sizes._10sdp,
    marginLeft: sizes._28sdp,
  },
  text_containerus: {
    width: sizes._250sdp,
    height: sizes._50sdp,
  },
  text: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    color: '#4D4B4B',
  },
  textnumbercontainer: {
    marginLeft: sizes._95sdp,
    width: sizes._30sdp,
    height: sizes._30sdp,
  },
  textnumber: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    color: '#4D4B4B',
  },
});
