import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../../components/AppHeader';
import ButtonInern from '../../../components/internal/ButtonInern';
import Inforlist from '../../../components/internal/Inforlist';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import svgs from '../../../res/svgs';
import {ScreenName} from '../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {}
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
export default class InforRegisOut extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  renderHeader = () => (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.so1}>
          <SvgXml xml={svgs.one2} />
        </View>

        <Text style={styles.textHeader}>Chi tiết đăng ký vào ra</Text>
        <Icon name="home" size={24} color="#FFFFFF" style={styles.so3} />
      </View>
    </View>
  );
  render() {
    const {state} = this.props.navigation;
    const datas = state.params.params;

    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back
          contentCustom
          onBackPress={() => this.props.navigation.goBack()}
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.container_from}>
          {data.map(
            (item: any) =>
              item.id == datas.id && (
                <>
                  {/* title */}
                  <View style={styles.title_container}>
                    <Text style={styles.title}>Thông tin đăng ký</Text>
                  </View>
                  <ScrollView style={styles.scroll}>
                    {/* Người đăng ký */}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Người đăng ký</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.nameregis}</Text>
                    </View>
                    {/* Mã nhân viên */}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Mã nhân viên</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.Sdt}</Text>
                    </View>
                    {/* Nơi đến */}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Nơi đến</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.work}</Text>
                    </View>
                    {/* Chi tiết lý do họp */}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Chi tiết lý do</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.dicription}</Text>
                    </View>
                    {/* Bắt đâukt*/}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Bắt đầu kết thúc</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.date_time}</Text>
                    </View>
                    <View
                      style={{
                        borderTopColor: '#000000',
                        borderTopWidth: 1,
                        marginTop: 20,
                      }}></View>
                    {/* title */}
                    <View style={{marginTop: sizes._10sdp}}>
                      <Text style={styles.title}>Lãnh đạo phê duyệt</Text>
                    </View>
                    {/* Bắt đâukt*/}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Họ tên</Text>
                      <Text style={styles.star}>*</Text>
                    </View>

                    <View>
                      <Text style={styles.gtc_title}>{item.nameLD}</Text>
                    </View>

                    {/* Chức vụ*/}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Chức vụ</Text>
                      <Text style={styles.star}>*</Text>
                    </View>

                    <View>
                      <Text style={styles.gtc_title}>{item.CVLD}</Text>
                    </View>

                    {/* SĐT*/}
                    <View style={styles.view_s}>
                      <Text style={styles.gtc}>Số điện thoại</Text>
                      <Text style={styles.star}>*</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.Sdt}</Text>
                    </View>
                    {/* button  */}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => this.props.navigation.goBack()}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: sizes._18sdp,
                          color: '#FFFFFF',
                        }}>
                        Đóng
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </>
              ),
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_s: {
    flexDirection: 'row',
    marginTop: sizes._20sdp,
  },
  star: {
    marginLeft: sizes._5sdp,
    color: '#ED1C24',
    fontSize: sizes._18sdp,
    fontWeight: '500',
    lineHeight: sizes._27sdp,
  },
  container: {
    flex: 1,
  },
  container_from: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: sizes._20sdp,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: sizes._20sdp,
    paddingLeft: sizes._20sdp,
  },
  title: {
    fontSize: sizes._18sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
  sd_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: sizes._20sdp,
  },
  slary_container: {
    width: sizes._214sdp,
    height: sizes._36sdp,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',
    borderRadius: sizes._8sdp,
    alignItems: 'center',
  },
  slary: {
    fontSize: sizes._16sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
  },
  date_container: {
    width: sizes._151sdp,
    height: sizes._36sdp,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',
    borderRadius: sizes._8sdp,
    alignItems: 'center',
  },
  date: {
    fontSize: sizes._16sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
  },
  direc_container: {
    width: sizes._380sdp,
    height: sizes._67sdp,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',
    borderRadius: sizes._8sdp,
    alignItems: 'center',
    margin: sizes._20sdp,
    textAlign: 'left',
  },
  scroll: {
    height: sizes._900sdp,
    marginHorizontal: sizes._21sdp,
    marginTop: sizes._20sdp,
  },
  gtc: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    lineHeight: sizes._27sdp,
    color: '#6F7474',
  },
  gtc_title: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: sizes._150sdp,
    height: sizes._51sdp,
    backgroundColor: '#676565',
    borderRadius: sizes._30sdp,
    marginTop: sizes._30sdp,
    marginLeft: sizes._132sdp,
    marginBottom: sizes._40sdp,
  },
  textHeader: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: sizes._27sdp,
    marginLeft: sizes._10sdp,
    marginTop: sizes._10sdp,
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
    marginTop: sizes._8sdp,
    height: sizes._26sdp,
    width: sizes._26sdp,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: sizes._20sdp,
    fontFamily: 'FS PF BeauSans Pro',
  },
});
