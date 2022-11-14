import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import sizes from '../../../res/sizes';

export class Meal extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: sizes._10sdp,
          left: sizes._32sdp,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text style={styles.text}>Loại</Text>
            <Text style={styles.text}>Ngày ăn</Text>
            <Text style={styles.text}>Giá</Text>
          </View>
          <View
            style={{
              left: sizes._150sdp,
              width: sizes._150sdp,

              alignItems: 'flex-end',
            }}>
            <Text style={styles.text_}>Bữa trưa</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                height: sizes._32sdp,
              }}>
              Hôm nay
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                height: sizes._32sdp,
                top: sizes._47sdp,
                position: 'absolute',
              }}>
              20/10/2020
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                height: sizes._32sdp,
                top: sizes._9sdp,
              }}>
              30.000VNĐ
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Meal;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400',
    height: sizes._32sdp,
  },
  text_: {
    fontSize: 14,
    fontWeight: '600',
    height: sizes._32sdp,
  },
});
