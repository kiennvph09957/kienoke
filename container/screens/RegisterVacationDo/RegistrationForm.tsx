import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';
import Icons from 'react-native-vector-icons/AntDesign';
import images from '../../../res/images';
import WordContent from './WordContent';
interface Props {
  navigation: any;
}
interface State {
  textInput: any;
  numberPhone: any;
  errorPhone: any;
  open: boolean;
  dateSelect: any;
  error2: any;
  error3: any;
}

export default class RegistrationForm extends Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);

    this.state = {
      textInput: '',
      numberPhone: '',
      errorPhone: '',
      open: false,
      dateSelect: '',
      error2: '',
      error3: '',
    };
  }
  changeOpen = () => {
    let chek = this.state.open;
    this.setState({
      open: !chek,
    });
  };
  changeText = (val: any) => {
    this.setState({
      dateSelect: val,
    });
  };
  renderHeader = () => (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.so1}>
          <Image
            style={{height: sizes._13sdp, width: sizes._17sdp}}
            source={images.tiker}
          />
        </View>
        <View style={styles.so2}>
          <Image
            style={{height: sizes._13sdp, width: sizes._17sdp}}
            source={images.tiker}
          />
        </View>
        <View style={styles.so3}>
          <Text style={styles.text}>3</Text>
        </View>
        <Text style={styles.textHeader}>Đăng ký trực nghỉ</Text>
      </View>
    </View>
  );
  validates = () => {
    //check ô nhập
    let textInput = this.state.textInput;
    if (!textInput.trim()) {
      this.setState({error2: 'Không được bỏ trống chi tiết công việc'});
    } else {
      this.setState({error2: ''});
    }
    // check số điện thoại
    let numberPhone = this.state.numberPhone;
    if (!numberPhone.trim()) {
      this.setState({errorPhone: 'Không được bỏ trống số điện thoại'});
    } else if (numberPhone.length < 10 || numberPhone.length > 10) {
      this.setState({errorPhone: 'số điện thoại phải là 10 số'});
    } else if (numberPhone.charAt(0) != 0) {
      this.setState({errorPhone: 'số điện thoại không đúng định dạng'});
    } else {
      this.setState({errorPhone: ''});
    }
    //check chọn
    let select = this.state.dateSelect;
    if (select == '') {
      this.setState({error3: 'Chưa chọn nội dung công việc'});
    } else {
      return true;
    }
  };

  render() {
    const {state} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          contentCustom
          onBackPress={() => this.props.navigation.goBack()}
          contentCustomJSX={this.renderHeader()}
        />

        <View style={styles.main}>
          <ScrollView>
            <View style={{marginLeft: sizes._23sdp, marginTop: sizes._32sdp}}>
              <Text style={styles.htext}>{state.params.data}</Text>
              <View style={{flexDirection: 'row', marginTop: sizes._32sdp}}>
                <View style={styles.styleImage}>
                  <Image source={images.Group_calender} />
                </View>
                <Text style={styles.textdk}>Đăng ký các ngày</Text>
              </View>
              <View style={{marginTop: sizes._10sdp}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily: 'FS PF BeauSans Pro',
                  }}>
                  Nội dung công việc<Text style={{color: '#EE0033'}}>*</Text>
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
                {this.state.error3 ? (
                  <Text style={{color: '#EE0033'}}>{this.state.error3}</Text>
                ) : null}
              </View>
              <View style={{top: sizes._25sdp}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily: 'FS PF BeauSans Pro',
                  }}>
                  Chi tiết công việc<Text style={{color: '#EE0033'}}>*</Text>
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.textInput}
                    value={this.state.textInput}
                    onChangeText={value => this.setState({textInput: value})}
                    multiline
                    numberOfLines={3}></TextInput>

                  <TouchableOpacity
                    onPress={() => this.setState({textInput: ''})}
                    style={{
                      width: sizes._24sdp,
                      height: sizes._24sdp,
                      right: sizes._30sdp,
                    }}>
                    <Image
                      source={images.cancel}
                      style={{
                        top: sizes._13sdp,
                      }}></Image>
                  </TouchableOpacity>
                </View>
                {this.state.error2 ? (
                  <Text style={{color: '#EE0033', marginTop: sizes._9sdp}}>
                    {this.state.error2}
                  </Text>
                ) : null}
              </View>
              <View style={{paddingTop: sizes._55sdp}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily: 'FS PF BeauSans Pro',
                  }}>
                  Điện thoại di động<Text style={{color: '#EE0033'}}>*</Text>
                </Text>
                <TextInput
                  style={{
                    fontSize: 20,

                    marginTop: sizes._20sdp,
                    height: sizes._52sdp,
                    width: '95%',
                    borderRadius: sizes._5sdp,
                    borderWidth: sizes._1sdp,

                    borderColor: '#929292',
                  }}
                  numberOfLines={1}
                  keyboardType="numeric"
                  value={this.state.numberPhone}
                  onChangeText={value => this.setState({numberPhone: value})}
                />
                {this.state.errorPhone ? (
                  <Text style={{color: '#EE0033'}}>
                    {this.state.errorPhone}
                  </Text>
                ) : null}
              </View>
            </View>

            <View style={styles.btn}>
              <Pressable
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#676565' : '#FFFFFF'},
                  styles.button,
                ]}
                onPress={this.validates}>
                {({pressed}) => (
                  <Text>
                    {pressed ? (
                      <Text style={styles._text1}>Đăng ký </Text>
                    ) : (
                      <Text style={styles._text}>Đăng ký </Text>
                    )}
                  </Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
        <WordContent
          isShow={this.state.open}
          toggleDate={this.changeOpen}
          changeText={this.changeText}
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
    marginLeft: sizes._30sdp,
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
    left: sizes._15sdp,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
    left: sizes._5sdp,
    borderColor: '#FFFFFF',
    borderWidth: 1,
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
  htext: {
    color: '#000000',
    fontFamily: 'FS PF BeauSans Pro',
    fontSize: 18,
    fontWeight: '600',
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
  styleImage: {
    height: sizes._52sdp,
    width: sizes._52sdp,
    backgroundColor: '#E0E0E0',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdk: {
    left: sizes._10sdp,
    top: sizes._15sdp,
    color: '#263238',
    fontSize: 18,
    fontWeight: '500',
  },
  textInput: {
    padding: 5,
    borderColor: '#929292',
    width: '95%',
    height: sizes._99sdp,
    borderRadius: sizes._5sdp,
    borderWidth: sizes._1sdp,
    top: sizes._10sdp,
    textAlignVertical: 'top',
    fontSize: 18,
  },
  btn: {
    alignItems: 'center',
    marginTop: sizes._58sdp,
    marginLeft: sizes._10sdp,
    paddingBottom: sizes._50sdp,
  },
});
