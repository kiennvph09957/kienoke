import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
interface Props {
  checkModalSearch: () => void;
  checkButtonSearch: any;
}
interface State {
  isFocus: any;
}
export default class ModalSearch extends Component<Props, State> {
  state: State = {
    isFocus: null,
  };

  render() {
    const local_data = [
      {
        value: '1',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '2',
        lable: 'Bếp ăn Tập A',
      },
      {
        value: '3',
        lable: 'Bếp ăn Tập B',
      },
      {
        value: '4',
        lable: 'Bếp ăn Tập C',
      },
      {
        value: '5',
        lable: 'Bếp ăn Tập D',
      },
      {
        value: '6',
        lable: 'Bếp ăn Tập E',
      },
      {
        value: '7',
        lable: 'Bếp ăn Tập F',
      },
      {
        value: '8',
        lable: 'Bếp ăn Tập G',
      },
    ];
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.checkButtonSearch}>
        <View style={[styles.centeredView, styles.flex]}>
          {/* khoảng không */}
          <TouchableWithoutFeedback
            onPress={() => this.props.checkModalSearch()}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
          {/* list  */}
          <View style={styles.modalView}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => this.props.checkModalSearch()}>
                  <Icon name="left" color="black" size={20} />
                </TouchableOpacity>
                <Text style={styles.modalTextTitle}>Tìm kiếm địa chỉ khám</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.checkModalSearch()}>
                <Text style={styles.modalTextTitle}>Hủy</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{fontSize: 18, marginTop: sizes._40sdp}}>
                Tỉnh/Thành phố{' '}
                <Text style={{color: 'red', fontWeight: '600'}}>*</Text>
              </Text>

              <Dropdown
                style={[styles.dropdown, {width: '100%'}]}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                renderRightIcon={() => <Image source={images.Arrow_Right_2} />}
                value={''}
                data={local_data}
                valueField="value"
                labelField="lable"
                placeholder={!this.state.isFocus ? '-- Chọn -- ' : '...'}
                onChange={(ex: any) => {
                  // this.setState({value: ex.value});
                  // this.setState({isFocus: false});
                }}
                // onFocus={() => this.setState({isFocus: true})}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, marginTop: sizes._30sdp}}>
                Chuyên khoa{' '}
                <Text style={{color: 'red', fontWeight: '600'}}>*</Text>
              </Text>

              <Dropdown
                style={[styles.dropdown, {width: '100%'}]}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                renderRightIcon={() => <Image source={images.Arrow_Right_2} />}
                value={''}
                data={local_data}
                valueField="value"
                labelField="lable"
                placeholder={!this.state.isFocus ? '-- Chọn -- ' : '...'}
                onChange={(ex: any) => {
                  // this.setState({value: ex.value});
                  // this.setState({isFocus: false});
                }}
                // onFocus={() => this.setState({isFocus: true})}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.close}
                onPress={() => this.props.checkModalSearch()}>
                <Text style={{color: 'black'}}>Hủy bỏ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.checkModalSearch()}
                style={styles.add}>
                <Text style={{color: '#fff'}}>Tìm kiếm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    shadowColor: 'black',
    elevation: 10,
  },

  modalTextTitle: {
    color: '#4D4B4B',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 10,
  },

  add: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#676565',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
  },

  close: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    marginRight: 20,
    paddingVertical: sizes._10sdp,
    borderWidth:1,
    borderColor:'black'
  },
  dropdown: {
    marginTop: sizes._10sdp,
    height: sizes._48sdp,
    width: sizes._218sdp,
    cornerRadius: sizes._8sdp,
    paddingHorizontal: sizes._15sdp,
    borderColor: 'rgb(218, 218, 218)',
    borderWidth: 1,
    borderRadius: 5,
  },

  selectedTextStyle: {
    width: sizes._160sdp,
    height: sizes._17sdp,
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    top: sizes._5sdp,
    textAlign: 'left',
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
});
