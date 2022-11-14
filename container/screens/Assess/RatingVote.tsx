import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Ratting from './Ratting';
import sizes from '../../../res/sizes';

export default class RatingVote extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            left: sizes._32sdp,
          }}>
          <Text
            style={{
              top: sizes._20sdp,

              fontSize: 20,
              fontWeight: '600',
            }}>
            Đánh giá suất ăn
          </Text>
          <View style={{top: sizes._40sdp, height: sizes._20sdp}}>
            <Text style={styles.text_}>Chất lượng bữa ăn</Text>
            <Ratting />
          </View>
          <View style={{paddingTop: sizes._120sdp}}>
            <Text style={styles.text_}>Thời gian phục vụ </Text>
            <Ratting />
          </View>
          <View style={{paddingTop: sizes._100sdp}}>
            <Text style={styles.text_}>Trình bày bữa ăn</Text>
            <Ratting />
          </View>
          <View style={{paddingTop: sizes._100sdp}}>
            <Text style={styles.text_}>Thái độ phục vụ</Text>
            <Ratting />
          </View>
          <View style={{paddingTop: sizes._100sdp}}>
            <Text style={styles.text_}>An toàn vệ sinh thực phẩm</Text>
            <Ratting />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text_: {
    color: '#4D4B4B',
    fontSize: 14,
    fontWeight: '400',
  },
});
