import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native-paper';

import AppHeader from '../../../components/AppHeader';
import BtnCustom from '../../../components/overtime/CustomBtnl';
import colors from '../../../res/colors';
import images from '../../../res/images';
import sizes from '../../../res/sizes';

interface Props {
  navigation?: any;
}

interface State {
  locations: any;
  reason: any;
  reasonDetail: any;
  startTime: any;
  endTime: any;
  leaderName: any;
}

const dataLocations = [
  {label: 'Số 1 Trần Hữu Dực', value: 'tru_so_0'},
  {label: 'Hòa Lạc', value: 'tru_so_1'},
  {label: 'Cầu Giấy', value: 'tru_so_2'},
  {label: 'Ba Đình', value: 'tru_so_3'},
];

const dataTask = [
  {label: 'Đi họp', value: 'cv_0'},
  {label: 'Đi hỗ trợ', value: 'cv_1'},
  {label: 'Đi thảo luận', value: 'cv_2'},
  {label: 'Đi kí kết', value: 'cv_3'},
];

export default class DetailOverTime extends Component<Props, State> {
  state: State = {
    locations: null,
    reason: null,
    reasonDetail: null,
    startTime: null,
    endTime: null,
    leaderName: null,
  };

  goBackScreen = () => {
    this.props.navigation.goBack();
  };

  contentHeader = () => (
    <View style={styles.containHeader}>
      <View style={[styles.stepSize, {backgroundColor: colors._color_white}]}>
        <Text
          style={[
            styles.textStep,
            {color: colors._color_red_pare_primary, fontWeight: '700'},
          ]}>
          1
        </Text>
      </View>
      <Text style={styles.titleHeader}>Chi tiết đăng ký làm thêm giờ</Text>
      <View style={[styles.stepSize]}>
        <Text
          style={[
            styles.textStep,
            {color: colors._color_white, fontWeight: '700'},
          ]}>
          2
        </Text>
      </View>
    </View>
  );

  dateSelected = (time: any) => (
    <TouchableWithoutFeedback>
      <View style={[styles.piker, styles.customDate]}>
        <Text style={styles.placeholderStyle}>
          {time == null ? (
            'dd/mm/yyyy'
          ) : (
            <Text
              style={{fontStyle: 'normal', color: colors._color_text_title}}>
              {time}
            </Text>
          )}
        </Text>

        <Image
          source={images.event_note_rounded}
          resizeMode="contain"
          style={styles.iconDate}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  renderContent = () => (
    <View style={styles.containerFrom}>
      <Text style={styles.titleContent}>Thông tin đăng ký</Text>
      {/* Địa điểm */}
      <Text style={styles.textLabel}>
        Địa điểm <Text style={styles.textAttention}> *</Text>
      </Text>
      <Dropdown
        labelField="label"
        valueField="value"
        data={dataLocations}
        placeholder={'-- Chọn --'}
        placeholderStyle={[
          styles.placeholderStyle,
          {fontSize: sizes._font_size_big_big},
        ]}
        selectedTextStyle={{color: colors._color_text_title}}
        value={this.state.locations}
        onChange={item => {
          this.setState(prevState => ({...prevState, locations: item.value}));
        }}
        style={styles.piker}
      />
      {/* Lý do đăng ký */}
      <Text style={styles.textLabel}>
        Lý do đăng ký <Text style={styles.textAttention}> *</Text>
      </Text>
      <Dropdown
        labelField="label"
        valueField="value"
        data={dataTask}
        placeholder={'-- Chọn --'}
        placeholderStyle={[
          styles.placeholderStyle,
          {fontSize: sizes._font_size_big_big},
        ]}
        selectedTextStyle={{color: colors._color_text_title}}
        value={this.state.reason}
        onChange={item => {
          this.setState(prevState => ({...prevState, reason: item.value}));
        }}
        style={styles.piker}
      />
      {/* Lý do */}
      <Text style={styles.textLabel}>Chi tiết lý do</Text>
      <View style={styles.editText}>
        <TextInput
          caretHidden
          multiline={true}
          style={styles.txtCustom}
          value={this.state.reasonDetail}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          onChangeText={val =>
            this.setState(prev => ({...prev, reasonDetail: val}))
          }
        />
        <TouchableOpacity
          onPress={() =>
            this.setState(prev => ({...prev, reasonDetail: null}))
          }>
          <Image
            source={images.cancel}
            resizeMode="contain"
            style={styles.clearBtn}
          />
        </TouchableOpacity>
      </View>
      {/* Chọn thời gian bắt đầu */}
      <Text style={styles.textLabel}>
        Bắt đầu - Kết thúc <Text style={styles.textAttention}> *</Text>
      </Text>
      <View style={styles.datePick}>
        {this.dateSelected(this.state.startTime)}

        <View style={styles.spacing}>
          <Text>-</Text>
        </View>
        {this.dateSelected(this.state.endTime)}
      </View>
      {/* Nhập lãnh đạo */}
      <Text style={styles.textLabel}>
        Lãnh đạo phê duyệt<Text style={styles.textAttention}> *</Text>
      </Text>

      <TextInput
        caretHidden
        underlineColorAndroid="transparent"
        autoCorrect={false}
        style={styles.editText}
      />

      {/* Button */}
      <View style={styles.btn}>
        <BtnCustom text="Hủy" isCancel onPress={this.goBackScreen} />
        <View style={styles.btnSpacing} />
        <BtnCustom text="Đăng ký" isCancel={false} />
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader
          back
          contentCustom
          contentCustomJSX={this.contentHeader()}
          onBackPress={this.goBackScreen}
        />
        <View style={styles.content}>{this.renderContent()}</View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors._color_white,
    borderTopRightRadius: sizes._20sdp,
    borderTopLeftRadius: sizes._20sdp,
    paddingTop: sizes._20sdp,
    paddingBottom: sizes._22sdp,
  },
  containHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: sizes._16sdp,
  },
  titleHeader: {
    fontSize: sizes._font_size_big,
    fontWeight: '400',
    color: colors._color_white,
    flex: 1,
    paddingLeft: sizes._16sdp,
  },
  titleContent: {
    fontSize: sizes._font_size_big_big,
    fontWeight: '700',
    color: colors._color_black,
  },
  textLabel: {
    fontSize: sizes._font_size_big_big,
    color: colors._color_text_title,
    fontWeight: '500',
    marginTop: sizes._16sdp,
    marginBottom: sizes._8sdp,
  },
  textAttention: {
    fontSize: sizes._font_size_big_big,
    color: colors._color_red_note,
    fontWeight: '500',
  },
  stepSize: {
    width: sizes._26sdp,
    height: sizes._26sdp,
    borderRadius: sizes._26sdp / 2,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStep: {
    fontSize: sizes._font_size_big_big,
  },
  containerFrom: {
    paddingHorizontal: sizes._32sdp,
  },
  placeholderStyle: {
    fontStyle: 'italic',
    color: colors._color_gray_text,
  },
  piker: {
    height: sizes._52sdp,
    borderWidth: sizes._1sdp,
    paddingHorizontal: sizes._16sdp,
    borderRadius: sizes._5sdp,
    borderColor: colors._color_gray_border,
  },
  editText: {
    flexDirection: 'row',
    borderRadius: sizes._5sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_gray_border,
    textAlignVertical: 'top',
  },
  txtCustom: {
    height: sizes._80sdp,
    flex: 1,
    textAlignVertical: 'top',
    color: colors._color_text_title,
    paddingHorizontal: sizes._8sdp,
  },
  clearBtn: {
    marginVertical: sizes._8sdp,
    marginRight: sizes._8sdp,
    height: sizes._24sdp,
    width: sizes._24sdp,
  },
  datePick: {
    flexDirection: 'row',
  },
  dateCotanier: {
    flexDirection: 'row',
  },
  customDate: {
    width: sizes._screen_width / 2 - sizes._48sdp,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDate: {
    width: sizes._24sdp,
    height: sizes._24sdp,
    marginLeft: sizes._16sdp,
  },
  spacing: {
    paddingHorizontal: sizes._16sdp,
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputCustom: {
    height: sizes._52sdp,
    borderRadius: sizes._5sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_gray_border,
    paddingHorizontal: sizes._8sdp,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes._32sdp,
  },
  btnSpacing: {
    width: sizes._16sdp,
  },
});
