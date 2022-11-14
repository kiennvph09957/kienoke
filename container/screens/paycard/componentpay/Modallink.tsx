import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import sizes from '../../../../res/sizes';
import Buttonmodal from './Buttonmodal';

interface Props {
  onPressSM: () => void;
  onPressEX: () => void;
}

interface State {}

export default class Modallink extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>{'Huỷ liên kết'}</Text>
        </View>
        <View style={styles.texttcontainer}>
          <Text style={styles.textt}>{' Bếp ăn Tập đoàn'}</Text>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>
            {'  Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm'}
          </Text>
        </View>
        <View style={styles.textquetcon}>
          <Text style={styles.text}>
            {' Bạn có chắc muốn huỷ liên kết thẻ \n Viettel với bếp ăn này?'}
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Buttonmodal
              onPress={this.props.onPressSM}
              style={styles.stybutton}
              title={'Huỷ liên kết'}
            />
          </View>
          <View style={styles.button}>
            <Buttonmodal
              onPress={this.props.onPressEX}
              style={styles.stybuttoncancle}
              title={'Đóng'}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: sizes._315sdp,
    height: sizes._300sdp,
    borderRadius: sizes._20sdp,
    marginLeft: sizes._50sdp,
    marginTop: sizes._200sdp,
    shadowColor: '#000',
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 1,
    shadowRadius: 30.0,
    elevation: 40,
  },
  titlecontainer: {
    marginTop: -sizes._40sdp,
  },
  texttcontainer: {
    marginTop: sizes._20sdp,
  },
  title: {
    fontSize: sizes._20sdp,
    fontWeight: '600',
    textAlign: 'center',
    color: '#D30026',
  },
  textt: {
    fontSize: sizes._16sdp,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4D4B4B',
  },
  textcontainer: {
    width: sizes._284sdp,
    paddingBottom: sizes._10sdp,
    borderBottomWidth: sizes._1sdp,
    borderBottomColor: '#F3F5F8',
  },
  textquetcon: {
    marginTop: sizes._15sdp,
  },
  text: {
    fontSize: sizes._14sdp,
    fontWeight: '400',
    textAlign: 'center',
    color: '#4D4B4B',
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginTop: sizes._30sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: sizes._40sdp,
  },
  stybutton: {
    borderRadius: sizes._128sdp,
    width: sizes._84sdp,
    height: sizes._42sdp,
    paddingTop: sizes._13sdp,
    backgroundColor: '#D20B2E',
    alignContent: 'center',
    justifyContent: 'center',
  },
  stybuttoncancle: {
    borderRadius: sizes._128sdp,
    width: sizes._84sdp,
    height: sizes._42sdp,
    paddingTop: sizes._13sdp,
    backgroundColor: '#676565',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
