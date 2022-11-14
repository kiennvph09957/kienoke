import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import sizes from '../../../../res/sizes';

export default class Thetotalamount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_containerus}>
          <Text style={styles.text}>Tổng số tiền</Text>
        </View>
        <View style={styles.textnumbercontainer}>
          <Text style={styles.textnumber}>1.320.000.000 VNĐ</Text>
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
    fontSize: sizes._18sdp,
    fontWeight: '500',
    color: '#4D4B4B',
  },
  textnumbercontainer: {
    marginLeft: -sizes._35sdp,
    width: sizes._150sdp,
    height: sizes._100sdp,
  },
  textnumber: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    color: '#4D4B4B',
  },
});
