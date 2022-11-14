import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../../components/AppHeader';
import images from '../../../../res/images';
import {ScreenName} from '../../../AppContainer';
import {Dropdown} from 'react-native-element-dropdown';
import sizes from '../../../../res/sizes';
import {RadioButton} from 'react-native-paper';
import ExaminationContents from './ExaminationContents';
import DateExamination from './DateExamination';
import ListItem from './ListItem';
import ModalSearch from '../../Modal/ModalSearch';
interface Props {
  navigation: any;
}
interface State {
  valueSelect: any;
  isFocus: any;
  valueTextra: any;
  checked: any;
  checkButtonSearch: any;
}
export default class AddResultMedicalExamination extends Component<
  Props,
  State
> {
  state: State = {
    valueSelect: null,
    isFocus: false,
    valueTextra: null,
    checked: 'checked',
    checkButtonSearch: false,
  };

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Thêm kết quả khám</Text>
      <TouchableOpacity>
        <Image source={images.home_page1} style={{marginRight: sizes._20sdp}} />
      </TouchableOpacity>
    </View>
  );

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
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          contentCustom
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginTop: 10, marginHorizontal: sizes._20sdp}}>
                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
                  Thông tin khám
                </Text>
                {/* Ngày khám */}
                <DateExamination />
                {/* bệnh viện */}
                <View>
                  <Text style={{fontSize: 18, marginTop: sizes._30sdp}}>
                    Bệnh viện{' '}
                    <Text style={{color: 'red', fontWeight: '600'}}>*</Text>
                  </Text>

                  <Dropdown
                    style={[styles.dropdown, {width: '100%'}]}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.containerStyle}
                    iconStyle={styles.iconStyle}
                    renderRightIcon={() => (
                      <Image source={images.Arrow_Right_2} />
                    )}
                    value={this.state.valueSelect}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder={!this.state.isFocus ? '-- Chọn -- ' : '...'}
                    onChange={(ex: any) => {
                    }}
                  />
                </View>
                <View style={{position: 'relative'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginTop: sizes._30sdp,
                    }}>
                    Kết luận{' '}
                    <Text
                      style={{
                        color: 'red',
                        fontWeight: '600',
                      }}>
                      *
                    </Text>
                  </Text>
                  <TextInput
                    onChangeText={text => this.setState({valueTextra: text})}
                    value={this.state.valueTextra}
                    multiline={true}
                    style={styles.textra}
                    underlineColorAndroid="transparent"
                    returnKeyType={'default'}
                  />
                  {this.state.valueTextra !== null &&
                    this.state.valueTextra !== '' && (
                      <TouchableOpacity
                        style={styles.cancel}
                        onPress={() => this.setState({valueTextra: ''})}>
                        <Image source={images.cancel} />
                      </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      checked:
                        this.state.checked == 'second' ? 'checked' : 'second',
                    })
                  }
                  style={styles.radio}>
                  <RadioButton
                    value="second"
                    status={
                      this.state.checked === 'second' ? 'checked' : 'unchecked'
                    }
                    onPress={() =>
                      this.setState({
                        checked:
                          this.state.checked == 'second' ? 'checked' : 'second',
                      })
                    }
                  />
                  <Text style={{fontSize: 18, fontWeight: '400'}}>
                    Quân y có thể xem hồ sơ của tôi
                  </Text>
                </TouchableOpacity>
                <View style={styles.hr}></View>
                {/* nội dung khám */}
                <ExaminationContents />
                {/* <tìm kiếm */}
                <TouchableOpacity
                  style={styles.input}
                  onPress={() =>
                    this.setState({
                      checkButtonSearch: !this.state.checkButtonSearch,
                    })
                  }>
                  <Text>Tìm kiếm</Text>
                  <Image source={images.search} />
                </TouchableOpacity>


                {/* hiện chon */}
                <ListItem />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color: 'black'}}>Hủy bỏ</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.add}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color: '#fff'}}>Lưu</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
          {/* tìm kiếm */}
          <ModalSearch
            checkModalSearch={() =>
              this.setState({checkButtonSearch: !this.state.checkButtonSearch})
            }
            checkButtonSearch={this.state.checkButtonSearch}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
    overflow: 'hidden',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
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

  placeholderStyle: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    marginTop: sizes._5sdp,
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
  containerStyle: {
    marginTop: -sizes._50sdp,
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  textra: {
    borderWidth: 1,
    borderColor: 'rgb(218, 218, 218)',
    marginTop: 10,
    height: 100,
    textAlignVertical: 'top',
    padding: 5,
  },
  cancel: {
    position: 'absolute',
    right: 10,
    top: 70,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
  input: {
    paddingHorizontal: sizes._20sdp,
    paddingVertical: sizes._10sdp,
    borderColor: '#929292',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
    borderWidth: 1,
    borderColor: 'black',
  },
});
