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
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../../res/images';
import SelectOptionn from '../../../components/registeroutorinput/SelectOptionn';
import {SvgXml} from 'react-native-svg';
import svgs from '../../../res/svgs';
import DateTimepickerRegiss from '../../../components/registeroutorinput/DateTimepickerRegiss';
import DateTimePickerLate from '../../../components/registeroutorinput/DateTimePickerLate';

interface Props {
  navigation: any;
}
interface State {
  dataloadLocal: any;
  dataloadWork: any;
  valueCT: any;
}
const data = [
  {
    id: 1,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi họp',
    getin: 'Trụ sở Tập Đoàn ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 2,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  30/08/2021  -  18:10  31/08/2021',
    work: 'Đi Làm',
    getin: 'Trụ sở Viettel ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 3,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi Bàn giao',
    getin: 'Tập đoàn VNPT',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 4,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi Gặp đối tác',
    getin: 'Trung Tâm Hội Nghị ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 5,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi giảng dạy',
    getin: 'Trụ sở Bưu chính',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 6,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Chuyển đơn vị',
    getin: 'Trụ sở VTT ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 7,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi họp',
    getin: 'Trung tâm TJJK',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 8,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Điều chuyển',
    getin: 'Trụ sở VTSD ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
  {
    id: 9,
    title: 'TTNS - Nội bộ Tập Đoàn',
    time: 'vài giây trước',
    date_time: '15:08  31/08/2021  -  18:10  31/08/2021',
    work: 'Đi làm',
    getin: 'TTTHSDN ',
    dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
    nameLD: 'Bùi Nam Giang',
    CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
    Sdt: '0978898989',
  },
];

export default class ScreenRegisterOt extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataloadLocal: [],
      dataloadWork: [],
      valueCT: '',
    };
  }
  showAlert = () =>{
    Alert.alert(
      "",
      "Đăng ký thành công",
      [
        
      ],
      {
        cancelable: true,  
      },
      
    );

  }
 
  componentDidMount() {
    data.map(item => {
      this.state.dataloadLocal.push({value: item.id, lable: item.getin});
      // this.setState({dataload: newDataLocal});
    });
    data.map(item => {
      this.state.dataloadWork.push({value: item.id, lable: item.work});
      // this.setState({dataload: newDataLocal});
    });
  }
  renderHeader = () => (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.so1}>
          <SvgXml xml={svgs.one1} />
        </View>

        <Text style={styles.textHeader}>Chi tiết đăng ký vào ra</Text>

        <View style={styles.so2}>
          <SvgXml xml={svgs.tow1} />
        </View>
        <Icon name="home" size={24} color="#FFFFFF" style={styles.so3} />
      </View>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          contentCustom
          onBackPress={() => this.props.navigation.goBack()}
          contentCustomJSX={this.renderHeader()}
        />
        <ScrollView style={styles.from}>
          <Text style={styles.infortext}>Thông tin đăng ký</Text>
          {/* chọn nơi đến */}
          <View>
            <View style={styles.texts}>
              <Text style={styles.text_title}>Nơi đến</Text>
              <Text style={styles.text_start}>*</Text>
            </View>
            <SelectOptionn local_data={this.state.dataloadLocal} />
          </View>
          {/* Chọn lý do đăng ký */}
          <View>
            <View style={styles.texts}>
              <Text style={styles.text_title}>Lý do đăng ký</Text>
              <Text style={styles.text_start}>*</Text>
            </View>
            <SelectOptionn local_data={this.state.dataloadWork} />
          </View>
          {/* Nhập chi tiết lý do */}
          <View>
            <View style={styles.texts}>
              <Text style={styles.text_title}>Chi tiết lý do</Text>
              <Text style={styles.text_start}>*</Text>
            </View>
            <TextInput
              style={{
                width: sizes._350sdp,
                height: sizes._80sdp,
                borderColor: '#929292',
                borderWidth: sizes._1sdp,
                marginLeft: sizes._30sdp,
                padding: sizes._20sdp,
                borderRadius: sizes._7sdp,
                textAlignVertical: 'top',
              }}
              value={this.state.valueCT}
              onChangeText={val => this.setState({valueCT: val})}
            />
            <Pressable
              delayLongPress={300}
              onPress={() => this.setState({valueCT: ''})}
              style={{
                position: 'absolute',
                left: sizes._347sdp,
                top: sizes._51sdp,
              }}>
              {({pressed}) => (
                <Icon
                  name="ios-close-circle"
                  size={24}
                  color={pressed ? '#000000' : '#676565'}
                />
              )}
            </Pressable>
          </View>
          {/* CHọn ngày bắt đầu và kết thúc */}
          <View>
            <View>
              <View style={styles.texts}>
                <Text style={styles.text_title}>Bắt đầu - Kết thúc</Text>
                <Text style={styles.text_start}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View>
                  <DateTimepickerRegiss />
                </View>
                <Text
                  style={{
                    position: 'absolute',
                    left: sizes._204sdp,
                    top: sizes._15sdp,
                    fontSize: sizes._26sdp,
                    fontWeight: '400',
                    color: '#000000',
                  }}>
                  -
                </Text>
                <View>
                  <DateTimePickerLate />
                </View>
              </View>
            </View>
          </View>
          {/* Nhập lãnh đạo phê duyệt */}
          <View>
            <View style={styles.texts}>
              <Text style={styles.text_title}>Lãnh đạo phê duyệt</Text>
              <Text style={styles.text_start}>*</Text>
            </View>
            <TextInput
              style={{
                borderColor: '#929292',
                borderWidth: sizes._1sdp,
                width: sizes._350sdp,
                marginLeft: sizes._30sdp,
                borderRadius: sizes._7sdp,
                paddingLeft: sizes._20sdp,
              }}
            />
          </View>

          {/* Nút bắt sự kiện */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              margin: sizes._30sdp,
            }}>
            <TouchableOpacity style={styles.button_ress}
            onPress={()=> this.props.navigation.goBack() }
            >
              <Text style={styles.texxt_ress}>Huỷ bỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_apply}
            onPress={this.showAlert}
            >
              <Text style={styles.texxt_apply}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  },
  text: {
    color: '#EF0B0B',
    fontSize: 16,
    fontFamily: 'FS PF BeauSans Pro',
    fontWeight: '500',
  },
  so1: {
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
    marginLeft:sizes._20sdp,
    height: sizes._26sdp,
    width: sizes._26sdp,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FS PF BeauSans Pro',
  },
  so2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FS PF BeauSans Pro',
    marginLeft: sizes._30sdp,
  },

  from: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  infortext: {
    fontSize: sizes._18sdp,
    fontWeight: '600',
    color: '#000000',
    marginLeft: sizes._31sdp,
    marginTop: sizes._29sdp,
    fontFamily: 'FS PF BeauSans Pro',
  },
  texts: {
    flexDirection: 'row',
    marginLeft: sizes._31sdp,
    marginTop: sizes._20sdp,
    marginBottom: sizes._5sdp,
  },
  text_title: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    color: '#6F7474',
    fontFamily: 'FS PF BeauSans Pro',
  },
  text_start: {
    color: '#ED1B2F',
    marginLeft: 2,
    fontSize: sizes._18sdp,
    fontWeight: '400',
    fontFamily: 'FS PF BeauSans Pro',
  },
  button_ress: {
    width: sizes._160sdp,
    height: sizes._51sdp,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676565',
    borderWidth: sizes._1sdp,
    borderRadius: sizes._30sdp,
  },
  button_apply: {
    width: sizes._160sdp,
    height: sizes._51sdp,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676565',
    borderWidth: sizes._1sdp,
    borderRadius: sizes._30sdp,
    backgroundColor: '#676565',
  },
  texxt_ress: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    color: '#4D4B4B',
    fontFamily: 'FS PF BeauSans Pro',
  },
  texxt_apply: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'FS PF BeauSans Pro',
  },
});
