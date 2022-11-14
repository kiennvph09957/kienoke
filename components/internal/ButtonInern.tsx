import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sizes from '../../res/sizes';

interface Props {
  onPresssave?: any;
}

interface State {}

export default class ButtonInern extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.luu} onPress={this.props.onPresssave}>
          <Text
            style={{
              fontSize: sizes._21sdp,
              fontWeight: '500',
              lineHeight: sizes._24sdp,
              color: '#4D4B4B',
              textAlign: 'center',
            }}>
            Lưu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.apply}>
          <Text
            style={{
              fontSize: sizes._21sdp,
              fontWeight: '500',
              lineHeight: sizes._24sdp,
              color: '#FFFFFF',
              textAlign: 'center',
            }}>
            Ứng tuyển
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  luu: {
    marginHorizontal: sizes._10sdp,
    width: sizes._160sdp,
    height: sizes._48sdp,
    borderRadius: sizes._30sdp,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizes._1sdp,
    borderColor: '#4D4B4B',
  },
  apply: {
    width: sizes._160sdp,
    height: sizes._48sdp,
    borderRadius: sizes._30sdp,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#676565',
  },
});
