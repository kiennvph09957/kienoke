import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FlastListComponent from './recentlyComponent';
import FavoriteComponent from './favoriteComponent';
import BirthdayComponent from './birthdayComponent';
import Calendar from '../../components/phonebooks/Calendar';
import CirleIcon from '../../components/phonebooks/addComponent';
interface Props {
  onPress: () => void;
  navigation: any;
}
interface State {
  colorId: any;
  textId: any;
  touchable: any;
  calendar: any;
  modalVisible: false;
}
const RECENTLY = 'RECENTLY';
class bodyBottomadd extends Component<Props, State> {
  setModalVisible = (visible: any) => {
    this.setState({modalVisible: visible});
  };

  constructor(props: any) {
    super(props);
    this.state = {
      colorId: 0,
      textId: 0,
      touchable: 0,
      calendar: 0,
      modalVisible: false,
    };
  }
  onPress = (id: any) => {
    this.setState({colorId: id, textId: id, touchable: id, calendar: id});
  };

  render() {
    return (
      <View style={styles.viewChose}>
        <Text style={styles.nameDonvi}>Đơn vị</Text>
       <View style={{flexDirection:'row'}}>
       <Text style={styles.nameCompany}>
          Tập đoàn công nghệ viễn thông quân đội
        </Text>
          <CirleIcon />
       </View>
        <View
          style={{
            marginLeft: 11,
            marginRight: 23,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Nhân viên, số điện thoại, email, đơn vị"
            style={styles.viewSearch}>
            <FontAwesome5
              name="search"
              size={24}
              color="#727070"
              // style={styles.iconSearch}
            />
          </TextInput>
        </View>
        <View style={styles.viewTouchable}>
          <View>
            <TouchableOpacity
              style={
                this.state.colorId === 1
                  ? styles.styleTouchableChange
                  : styles.styleTouchable
              }
              onPress={() => this.onPress(1)}>
              <Text
                style={this.state.colorId === 1 ? styles.textNew : styles.textOld}>
                Gần đây
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 6}}>
            <TouchableOpacity
              style={
                this.state.colorId === 2
                  ? styles.styleTouchableChange
                  : styles.styleTouchable
              }
              onPress={() => this.onPress(2)}>
              <Text
                style={this.state.colorId === 2 ? styles.textNew : styles.textOld}>
                Yêu thích
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={
                this.state.colorId === 3
                  ? styles.styleTouchableChange
                  : styles.styleTouchable
              }
              onPress={() => this.onPress(3)}>
              <Text
                style={this.state.colorId === 3 ? styles.textNew : styles.textOld}>
                Sinh nhật
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            lineHeight: 27,
            color: '#4D4B4B',
            marginLeft: 23,
            fontWeight: 'bold',
          }}>
          Danh bạ hay liên lạc (10 dong chi)
        </Text>
        <View>
          {this.state.calendar === 3 ? (
            <Calendar
              navigation={this.props.navigation}
              onPress={this.props.onPress}
            />
          ) : null}
        </View>
        <View style={styles.viewFlastlist}>
          {this.state.touchable === 1 ? (
            <FlastListComponent navigation={this.props.onPress} />
          ) : null}
          {this.state.touchable === 0 ? (
            <FlastListComponent navigation={this.props.onPress} />
          ) : null}
          {this.state.touchable === 2 ? (
            <FavoriteComponent item={undefined} index={undefined} />
          ) : null}
          {this.state.touchable === 3 ? (
            <BirthdayComponent item={undefined} index={undefined} />
          ) : null}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewFlastlist: {
    backgroundColor: '#ffff',
    flex: 1,
    width: '100%',
  },
  nameDonvi: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 27,
    color: '#676565',
    marginLeft: 23,
  },
  nameCompany: {
    fontSize: 16,
    lineHeight: 27,
    color: '#000',
    marginLeft: 23,
  },
  viewChose: {
    flex: 1,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewSearch: {
    width: 370,
    fontSize: 16,
    height: 48,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#A3ACB2',
    marginTop: 10,
  },
  viewTouchable: {
    marginLeft: 19,
    // borderWidth: 1,
    marginTop: 10,
    alignItems: 'center',
    height: 38,
    flexDirection: 'row',
  },
  styleTouchable: {
    backgroundColor: '#CCCCCC',
    borderColor: '#F5F5F5',
    padding: 8,
    alignItems: 'center',
    borderWidth: 1,
    width: 110,
    height: 38,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  styleTouchableChange: {
    padding: 6,
    borderColor: '#ED1C24',
    alignItems: 'center',
    borderWidth: 1,
    width: 110,
    height: 38,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textOld: {
    color: '#000',
  },
  textNew: {
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default bodyBottomadd;
