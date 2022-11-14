import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';
import Icons from 'react-native-vector-icons/AntDesign';
import Regiscalader from './Regiscalader';
import Vatical from './Vatical';
import moment from 'moment';
import {ScreenName} from '../../AppContainer';
import images from '../../../res/images';
interface Props {
  navigation: any;
}
interface State {
  open: boolean;
  onDay: any;
  dateSelect: any;

  error1: boolean;
}

export default class RegisterVacation extends Component<Props, State> {
  state = {
    onDay: moment().format('YYYY-MM-DD'),
    open: false,
    dateSelect: '',
    error1: false,
  };
  changeDate = (date: any) => {
    this.setState({onDay: date});
  };
  changeOpen = () => {
    let chek = this.state.open;
    this.setState({
      open: !chek,
    });
  };
  changeText = (val: any) => {
    this.setState({
      dateSelect: val,
      error1: false,
    });
  };

  renderHeader = () => (
    <View style={{flex: 1}}>
      {this.state.dateSelect === '' ? (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={styles.so1}>
            <Text style={styles.text}>1</Text>
          </View>

          <Text style={styles.textHeader}>Đăng ký trực nghỉ</Text>

          <View style={styles.so2}>
            <Text style={styles.text2}>2</Text>
          </View>
          <View style={styles.so3}>
            <Text style={styles.text2}>3</Text>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={styles.so1}>
            <Image
              source={images.tiker}
              style={{height: sizes._13sdp, width: sizes._17sdp}}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: sizes._26sdp,
              width: sizes._26sdp,
              borderRadius: 125,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: sizes._15sdp,
            }}>
            <Text
              style={{
                color: '#EF0B0B',
                fontSize: 16,
                fontFamily: 'FS PF BeauSans Pro',
                fontWeight: '500',
              }}>
              2
            </Text>
          </View>

          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '400',
              fontSize: 20,
              lineHeight: sizes._27sdp,
              left: sizes._20sdp,
            }}>
            Đăng ký trực nghỉ
          </Text>

          <View
            style={{
              height: sizes._26sdp,
              width: sizes._26sdp,
              borderRadius: 125,
              alignItems: 'center',
              justifyContent: 'center',

              marginLeft: sizes._100sdp,
              borderColor: '#FFFFFF',
              borderWidth: 1,
            }}>
            <Text style={styles.text2}>3</Text>
          </View>
        </View>
      )}
    </View>
  );
  checkButton = () => {
    let select = this.state.dateSelect;
    if (select == '') {
      return false;
    } else {
      return true;
    }
  };
  onClick = () => {
    if (this.checkButton()) {
      this.props?.navigation?.navigate(ScreenName.RegistrationForm, {
        data: this.state.dateSelect,
      });
    } else {
      this.setState({error1: true});
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader back contentCustom contentCustomJSX={this.renderHeader()} />

        <View style={styles.main}>
          <ScrollView>
            <View style={{marginLeft: sizes._18sdp}}>
              <Text style={styles.textbody}>
                Đợt nghỉ <Text style={{color: '#EE0033'}}> *</Text>
              </Text>
              <TouchableOpacity
                onPress={() => this.changeOpen()}
                style={styles.select}>
                <Text style={styles.textSelect}>
                  {this.state.dateSelect == '' ? (
                    '- - Chọn - -'
                  ) : (
                    <Text
                      style={{
                        color: '#4D4B4B',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      {this.state.dateSelect}
                    </Text>
                  )}
                </Text>
                <Icons
                  name="down"
                  size={18}
                  style={{marginLeft: sizes._30sdp}}
                />
              </TouchableOpacity>
              {this.state.error1 && (
                <Text style={{color: 'red'}}>Chưa chọn nội dung đợt nghỉ</Text>
              )}
            </View>
            <View style={{marginTop: sizes._30sdp}}>
              <Regiscalader onDay={this.state.onDay} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: sizes._58sdp,
                marginLeft: sizes._10sdp,
                paddingBottom: sizes._50sdp,
              }}>
              <Pressable
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#676565' : '#FFFFFF'},
                  styles.button,
                ]}
                onPress={this.onClick}>
                {({pressed}) => (
                  <Text>
                    {pressed ? (
                      <Text style={styles._text1}>Đăng ký nghỉ</Text>
                    ) : (
                      <Text style={styles._text}>Đăng ký nghỉ</Text>
                    )}
                  </Text>
                )}
              </Pressable>
              <Pressable
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#676565' : '#FFFFFF'},
                  styles.button,
                ]}
                onPress={this.onClick}>
                {({pressed}) => (
                  <Text>
                    {pressed ? (
                      <Text style={styles._text1}>Đăng ký trực</Text>
                    ) : (
                      <Text style={styles._text}>Đăng ký trực</Text>
                    )}
                  </Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
        <Vatical
          isShow={this.state.open}
          toggleDate={this.changeOpen}
          changeText={this.changeText}
          changeDate={this.changeDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
    overflow: 'hidden',
  },
  textHeader: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: sizes._27sdp,
    left: sizes._10sdp,
  },
  text: {
    color: '#EF0B0B',
    fontSize: 16,
    fontFamily: 'FS PF BeauSans Pro',
    fontWeight: '500',
  },
  so1: {
    backgroundColor: '#FFFFFF',
    height: sizes._26sdp,
    width: sizes._26sdp,
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
    right: sizes._10sdp,
    fontFamily: 'FS PF BeauSans Pro',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'FS PF BeauSans Pro',
    fontWeight: '500',
  },
  so3: {
    height: sizes._26sdp,
    width: sizes._26sdp,
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',

    left: sizes._25sdp,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    fontFamily: 'FS PF BeauSans Pro',
  },
  so2: {
    height: sizes._26sdp,
    width: sizes._26sdp,
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FS PF BeauSans Pro',
    marginLeft: sizes._100sdp,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },

  textbody: {
    fontSize: 18,
    fontFamily: 'FS PF BeauSans Pro',
    marginTop: sizes._29sdp,
    color: '#4D4B4B',
  },
  select: {
    height: sizes._52sdp,
    width: '95%',
    borderColor: '#929292',
    borderWidth: 1,
    marginTop: sizes._13sdp,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSelect: {
    color: '#727070',
    fontSize: 18,
    fontStyle: 'italic',
    marginLeft: sizes._12sdp,
    width: '80%',
    fontFamily: 'FS PF BeauSans Pro',
  },
  button: {
    height: sizes._48sdp,
    width: '38%',
    borderColor: '#676565',
    borderWidth: 1,
    borderRadius: sizes._30sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _text: {
    color: '#4D4B4B',
    fontSize: sizes._18sdp,
    fontFamily: 'FS Magistral',
    fontWeight: '500',
  },
  _text1: {
    color: '#FFFFFF',
    fontSize: sizes._18sdp,
    fontFamily: 'FS Magistral',
    fontWeight: '500',
  },
});
