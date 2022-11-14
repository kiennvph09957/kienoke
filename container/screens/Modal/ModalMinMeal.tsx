import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
interface Props {
  check: any;
  close: (e: any) => void;
}
interface State {
  modalMins: any;
}
export default class ModalMinMeal extends Component<Props, State> {
  state: State = {
    modalMins: false,
  };

  // xác nhận bỏ món hoặc thêm món
  showToast = (x: String) => {
    x == 'add'
      ? ToastAndroid.show('Thêm suất ăn thành công ', ToastAndroid.SHORT)
      : ToastAndroid.show('Bỏ suất ăn thành công ', ToastAndroid.SHORT);
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.check}>
        <View style={[styles.centeredView, styles.flex]}>
          <TouchableWithoutFeedback onPress={() => this.props.close('')}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>Bỏ xuất ăn</Text>
            <Text style={styles.modalTexTT}>
              Bạn có chắc muốn bỏ xuất ăn không?
            </Text>
            <View
              style={[
                styles.flex,
                {
                  flexDirection: 'row',
                  marginTop: 20,
                },
              ]}>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => this.props.close('cancel')}>
                <Text style={{color: '#fff'}}>Bỏ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.close('')}
                style={styles.close}>
                <Text style={{color: '#fff'}}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.close('')}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: 308,
  },

  modalTextTitle: {
    textAlign: 'center',
    color: '#D30026',
    fontWeight: '600',
    fontSize: 20,
  },
  modalTexTT: {
    color: '#4D4B4B',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  cancel: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#D30026',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
    marginRight: 30,
  },

  close: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#676565',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
  },
});
