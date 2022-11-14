import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import sizes from '../../../res/sizes';
import colors from '../../../res/colors';

import images from '../../../res/images';

type Props = {
  show?: boolean;
  close?: () => void;
};
interface State {}

export default class ModalSeen extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  renderHeader = () => (
    <View>
      <View style={styles.headerContainer}>
        <Text style={{fontWeight: '700', fontSize: 20, color: '#000000'}}>
          Thông báo
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 18,
            color: '#000000',
            top: sizes._15sdp,
            height: sizes._91sdp,
            width: sizes._307sdp,
          }}>
          Gửi đóng góp{' '}
          <Text style={{fontWeight: '700'}}>
            cải tiến chức năng Vì VTS tốt lên
          </Text>{' '}
          của hệ thống Viettel Family thành công.
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#3C3C43',
          top: sizes._40sdp,
          opacity: 0.35,
        }}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          top: sizes._52sdp,

          alignItems: 'center',
        }}
        onPress={this.props.close}>
        <Text style={{fontWeight: '700', fontSize: 18, color: '#4D4B4B'}}>
          Đóng
        </Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <Modal
          visible={this.props.show}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}>
          <View style={styles.container}>
            <View style={styles.content}>{this.renderHeader()}</View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._color_gray_translucen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    zIndex: 1,
    height: sizes._212sdp,
    width: sizes._346sdp,
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
  },

  headerContainer: {
    left: sizes._25sdp,
    top: sizes._25sdp,
  },
});
