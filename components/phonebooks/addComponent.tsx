import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Checkboxcomponent from './checkboxcomponent';
import sizes from '../../res/sizes';
class addComponent extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible: any) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredViewOn}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Đơn vị</Text>
              <View style={styles.highline}></View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  placeholder="Tên đơn vị, mã đơn vị"
                  style={styles.viewSearch}
                />
                <FontAwesome5
                  name="search"
                  size={24}
                  color="#727070"
                  style={{marginTop: 20, marginLeft: -40}}
                />
              </View>
              {/* from */}
              <View style={{flexDirection: 'row'}}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons
                      name="add-circle"
                      size={24}
                      color="#000"
                      style={styles.ionIconModal}
                    />
                    <Text style={{marginLeft: 10, marginTop: 10}}>
                      {
                        'Công ty mẹ - tập đoàn công nghiệp - \n viễn thông quân đội Viettel'
                      }
                    </Text>
                  </View>
                  <View style={{marginLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Ionicons
                        name="add-circle"
                        size={24}
                        color="#000"
                        style={styles.ionIconModal}
                      />
                      <Text style={{marginLeft: 10, marginTop: 10}}>
                        Khối cơ quan tập đoàn
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons
                        name="add-circle"
                        size={24}
                        color="#000"
                        style={styles.ionIconModal}
                      />
                      <Ionicons
                        name="remove-circle-sharp"
                        size={24}
                        color="#D20B2E"
                        style={styles.ionIconModal}
                      />
                      <Text style={{marginLeft: 10, marginTop: 10}}>
                        Khối cơ quan tập đoàn
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={{marginLeft: 20}}>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="add-circle"
                          size={24}
                          color="#000"
                          style={styles.ionIconModal}
                        />
                        <Text style={{marginLeft: 10, marginTop: 10}}>
                          Tổng công ty viễn thông viettel
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="add-circle"
                          size={24}
                          color="#000"
                          style={styles.ionIconModal}
                        />
                        <Text style={{marginLeft: 10, marginTop: 10}}>
                          Tổng công ty mạng lưới viettel
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="add-circle"
                          size={24}
                          color="#000"
                          style={styles.ionIconModal}
                        />
                        <Text style={{marginLeft: 10, marginTop: 10}}>
                          Khối Cơ Quan Đơn vị
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{padding: 10}}>
                  <>
                    <Checkboxcomponent />
                  </>
                  <>
                    <Checkboxcomponent />
                  </>
                  <>
                    <Checkboxcomponent />
                  </>
                  <>
                    <Checkboxcomponent />
                  </>
                  <>
                    <Checkboxcomponent />
                  </>
                  <>
                    <Checkboxcomponent />
                  </>
                </View>
              </View>
              {/* from */}
              <View style={styles.modalView1}>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Hủy
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonAcept]}
                  onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Đồng ý</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Ionicons
          name="add-circle"
          size={24}
          color="#727070"
          style={styles.iconAdd}
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ionIconModal: {
    marginTop: 10,
    position: 'relative',
  },
  highline: {
    marginTop: -5,
    marginLeft: -20,
    width: 350,
    borderWidth: 0.2,
    borderColor: '#A3ACB2',
  },
  viewSearch: {
    marginTop: 10,
    marginLeft: -20,
    fontSize: 16,
    height: 48,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: '#A3ACB2',
    width: 350,
  },
  iconAdd: {
    backgroundColor: 'white',
    marginLeft: 340,
  },
  centeredView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredViewOn: {
    height: '100%',
    backgroundColor: '#99999999',
    shadowOpacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView1: {
    flexDirection: 'row',
  },
  modalView: {
    width: 382,
    height: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    width: 150,
    height: 42,
    borderRadius: 20,
    padding: 10,
  },
  buttonCancel: {
    borderWidth: 0.5,
    width: 150,
    height: 42,
    borderColor: '#727070',
    backgroundColor: '#ffff',
  },
  buttonAcept: {
    backgroundColor: '#727070',
    marginLeft: 20,
    width: 150,
    height: 42,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginTop: -30,
    fontWeight: '600',
    color: '#4D4B4B',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default addComponent;
