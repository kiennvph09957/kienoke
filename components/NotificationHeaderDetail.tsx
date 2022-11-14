import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import sizes from '../res/sizes';

export class NotificationHeaderDetail extends React.Component {
  render() {
    return <View style={styles.mTextContainer_}></View>;
  }
}

export default NotificationHeaderDetail;

const styles = StyleSheet.create({
  mTextContainer_: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
});
