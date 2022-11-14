import {
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import sizes from './../../../res/sizes';
interface Props {
  checkModalMealTransfer: any;
  click: (e: any) => void;
}
interface State {
  value: any;
}
export default class ModalMealTransfer extends Component<Props, State> {
  state: State = {
    value: 1,
  };
  render() {
    const data = [
      {
        id: '1',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 1,
        date: '2',
        day: '5',
        price: '200000',
        status: '2',
      },
      {
        id: '2',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 21,
        date: '3',
        day: '5',
        price: '600000',
        status: '1',
      },
      {
        id: '3',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '7',
        month: '6',
        year: '2022',
        check: 1,
        date: '1',
        day: '4',
        price: '500000',
        status: '2',
      },
      {
        id: '4',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 1,
        date: '18',
        day: '4',
        price: '200000',
        status: '2',
      },
      {
        id: '5',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 32,
        date: '28',
        day: '2',
        price: '800000',
        status: '1',
      },
      {
        id: '6',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 1,
        date: '17',
        day: '3',
        price: '400000',
        status: '2',
      },
      {
        id: '7',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '6',
        year: '2022',
        check: 1,
        date: '2',
        day: '5',
        price: '440000',
        status: '0',
      },
      {
        id: '8',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '5',
        month: '6',
        year: '2022',
        check: 1,
        date: '3',
        day: '5',
        price: '120000',
        status: '1',
      },
      {
        id: '9',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '2',
        month: '6',
        year: '2022',
        check: 1,
        date: '1',
        day: '4',
        price: '330000',
        status: '2',
      },
      {
        id: '10',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 32,
        date: '28',
        day: '2',
        price: '100000',
        status: '1',
      },
      {
        id: '11',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '2',
        month: '5',
        year: '2022',
        check: 1,
        date: '30',
        day: '4',
        price: '330000',
        status: '2',
      },
      {
        id: '12',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 32,
        date: '30',
        day: '2',
        price: '100000',
        status: '1',
      },
      {
        id: '13',
        name: 'bữa sáng',
        checkMeal: 0,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 1,
        date: '2',
        day: '5',
        price: '200000',
        status: '0',
      },
    ];
    const state = this.props.checkModalMealTransfer;
    const newData = data.find((item: any) => item.id == state.id);
    return (
      <Modal animationType="slide" transparent={true} visible={state.check}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => this.props.click('')}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              Chọn số suất ăn muốn chuyển
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', marginVertical: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      value: +this.state.value - +1,
                    })
                  }>
                  <Icon name="minuscircle" size={28} color={'#F4DDE1'} />
                </TouchableOpacity>
                <TextInput
                  style={styles.inputValue}
                  keyboardType="numeric"
                  value={`${this.state.value}`}
                  onChangeText={value => this.setState({value: value})}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      value: +this.state.value + +1,
                    })
                  }>
                  <Icon name="pluscircle" size={28} color={'#D20B2E'} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.gotMore}
                onPress={() => (
                  this.setState({value: 1}),
                  this.props.click({
                    quantity: this.state.value,
                    command: 'transfer',
                  })
                )}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
                  Chuyển suất
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTexTT}>
              Chuyển suất trong trường hợp không có nhu cầu ăn bữa đã đặt
            </Text>
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
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
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
  inputValue: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 5,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 30,
    marginHorizontal: sizes._10sdp,
  },
  gotMore: {
    backgroundColor: '#D20B2E',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
