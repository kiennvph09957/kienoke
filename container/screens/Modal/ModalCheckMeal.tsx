import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';

interface Props {
  check: any;
  close: (e: any) => void;
}
interface State {
  forcus: any;
}
export default class ModalCheckMeal extends Component<Props, State> {
  state: State = {
    forcus: false,
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
          <View style={styles.modalViewSelect}>
            <Pressable
              style={({pressed}: any) => [
                {
                  backgroundColor: pressed && '#F2F4F8',
                },
              ]}
              onPress={() => this.props.close(0)}>
              <Text style={styles.text}>Bữa sáng</Text>
            </Pressable>
            <Pressable
              style={({pressed}: any) => [
                {
                  backgroundColor: pressed && '#F2F4F8',
                },
              ]}
              onPress={() => this.props.close(1)}>
              <Text style={styles.text}>Bữa trưa</Text>
            </Pressable>
            <Pressable
              style={({pressed}: any) => [
                {
                  backgroundColor: pressed && '#F2F4F8',
                },
              ]}
              onPress={() => this.props.close(2)}>
              <Text style={styles.text}>Bữa tối</Text>
            </Pressable>
          </View>
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
  // chọn bữa
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  modalViewSelect: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 1,
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});
