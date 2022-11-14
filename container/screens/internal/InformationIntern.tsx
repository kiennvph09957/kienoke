import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppHeader from '../../../components/AppHeader';
import ButtonInern from '../../../components/internal/ButtonInern';
import Inforlist from '../../../components/internal/Inforlist';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {
  activeInfor: any;
  activeYC: any;
  activeDN: any;
}
const datalist = [
  {
    id: 1,
    title: 'Kỹ sư quản lý dịch vụ',
    slary: '15M VNĐ ~ 30M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Khoa học kỹ thuật',
    time: 'Toàn thời gian',
    macv: 'VPTT_69_3',
    slnv: 3,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
  {
    id: 2,
    title: 'Kỹ sư quản lý Dev',
    slary: '25M VNĐ ~ 30M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Công nghệ thông tin',
    time: 'Toàn thời gian',
    macv: 'CNTT_69_3',
    slnv: 3,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
  {
    id: 3,
    title: 'Kỹ sư quản lý',
    slary: '15M VNĐ ~ 30M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Khoa học ',
    time: 'Toàn thời gian',
    macv: 'VP_69_3',
    slnv: 2,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
  {
    id: 4,
    title: 'Dịch vụ',
    slary: '15M VNĐ ~ 20M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Dịch vụ',
    time: 'Toàn thời gian',
    macv: 'DV_6_3',
    slnv: 5,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
  {
    id: 5,
    title: 'Quản lý ',
    slary: '15M VNĐ ~ 30M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Quản trị nhân sự',
    time: 'Toàn thời gian',
    macv: 'VPQL_99_3',
    slnv: 1,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
  {
    id: 6,
    title: 'Kỹ sư',
    slary: '15M VNĐ ~ 30M VNĐ',
    date: '30/12/2021',
    direction:
      'Tòa nhà Viettel, khu Công nghệ cao \n Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam',
    gtc: 'Trung tâm dịch vụ sau bán hàng là đơn vị  trực thuộc Tổng Công ty VHTT, với nhiệm vụ là Bảo hành sửa chữa thiết bị do Viettel sản xuất bán cho khách hàng. Với phương châm  lôn đặt tiêu chí chất lượng, hiệu quả và đáp ứng tối đa sự hài lòng của khách hàng.',
    dvtd: 'Tổng Công ty Công nghiệp Công nghệ cao Viettel',
    ngnghe: 'Kỹ thuật',
    time: 'Toàn thời gian',
    macv: 'VPKS_69_4',
    slnv: 10,
    khac: 'Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi nộp hồ sơ tham gia dự tuyển và khi vào làm việc tại Viettel nếu trúng  tuyển.',
  },
];
export default class InformationIntern extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeInfor: true,
      activeDN: false,
      activeYC: false,
    };
  }
  InActiveinfor = () => {
    this.setState({activeInfor: !this.state.activeInfor});
    this.setState({activeYC: false});
    this.setState({activeDN: false});
  };
  InActiveYC = () => {
    this.setState({activeInfor: false});
    this.setState({activeYC: !this.state.activeYC});
    this.setState({activeDN: false});
  };
  InActiveDN = () => {
    this.setState({activeInfor: false});
    this.setState({activeYC: false});
    this.setState({activeDN: !this.state.activeDN});
  };
  render() {
    const {state} = this.props.navigation;
    const data = state.params.params;
    const storeData = async (value: any) => {
      try {
        const jsonValue = JSON.stringify({value: data});
        await AsyncStorage.setItem('@storage_Key', jsonValue);
      } catch (e) {
        // saving error
      }
    };
    return (
      <View style={styles.container}>
        {/* header */}
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          title
          textTittle={'Tuyển dụng nội bộ chi tiết'}
        />
        <View style={styles.container_from}>
          {datalist.map(
            (item: any) =>
              item.id == data.id && (
                <>
                  {/* title */}
                  <View style={styles.title_container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Icon name="share-social" size={24} color="#645D5D" />
                  </View>
                  {/* Lương */}
                  <View style={styles.sd_container}>
                    <View style={styles.slary_container}>
                      <Image source={images.ic_slary} />
                      <Text style={styles.slary}>{item.slary}</Text>
                    </View>
                    {/* ngày tháng */}
                    <View style={styles.date_container}>
                      <Image source={images.Calendar} />
                      <Text style={styles.date}>{item.date}</Text>
                    </View>
                  </View>
                  {/* chi tiết ngắn gọn */}
                  <View style={styles.direc_container}>
                    <Image source={images.localhome} style={styles.img_local} />
                    <Text style={styles.direc}>{item.direction}</Text>
                  </View>
                  {/* Tabclick */}
                  <View style={styles.tab}>
                    <TouchableOpacity
                      style={
                        this.state.activeInfor
                          ? styles.inforTabActive
                          : styles.inforTab
                      }
                      onPress={this.InActiveinfor}>
                      <Text
                        style={
                          this.state.activeInfor
                            ? styles.titleTabActive
                            : styles.titleTab
                        }>
                        Thông tin
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.activeYC
                          ? styles.inforTabActive
                          : styles.inforTab
                      }
                      onPress={this.InActiveYC}>
                      <Text
                        style={
                          this.state.activeYC
                            ? styles.titleTabActive
                            : styles.titleTab
                        }>
                        Yêu cầu
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.activeDN
                          ? styles.inforTabActive
                          : styles.inforTab
                      }
                      onPress={this.InActiveDN}>
                      <Text
                        style={
                          this.state.activeDN
                            ? styles.titleTabActive
                            : styles.titleTab
                        }>
                        Đãi ngộ
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.scroll}>
                    {/* giới thiệu chung */}
                    <View>
                      <Text style={styles.gtc}>Giới thiệu chung</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.gtc}</Text>
                    </View>
                    {/* Thôg tin công việc */}
                    <View>
                      <Text style={styles.gtc}>Thông tin công việc</Text>
                      <Inforlist
                        img={images.localhome}
                        titles={'Đơn vị tuyển dụng'}
                        texts={item.dvtd}
                      />
                      <Inforlist
                        img={images.career1}
                        titles={'Ngành nghề '}
                        texts={item.ngnghe}
                      />
                      <Inforlist
                        img={images.stopwatch1}
                        titles={'Thời gian làm việc'}
                        texts={item.time}
                      />
                      <Inforlist
                        img={images.binary_code1}
                        titles={'Mã công việc'}
                        texts={item.macv}
                      />
                      <Inforlist
                        img={images.success1}
                        titles={'Số lượng cần tuyển'}
                        texts={item.slnv}
                      />
                    </View>
                    {/* Thông tin khác */}
                    <View style={{marginTop: sizes._24sdp}}>
                      <Text style={styles.gtc}>Thông tin khác</Text>
                    </View>
                    <View>
                      <Text style={styles.gtc_title}>{item.khac}</Text>
                    </View>
                    {/* button  */}
                    <View style={styles.button}>
                      <ButtonInern onPresssave={() => storeData()} />
                    </View>
                  </ScrollView>
                </>
              ),
          )}
        </View>
      </View>
    );
  }
  handleRefresh() {
    throw new Error('Method not implemented.');
  }
}
const styles = StyleSheet.create({
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
    padding: sizes._24sdp,
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
  img_local: {
    marginTop: -sizes._20sdp,
    marginLeft: -sizes._20sdp,
  },
  direc: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    marginLeft: -sizes._20sdp,
  },
  tab: {
    flexDirection: 'row',
  },
  inforTabActive: {
    width: sizes._80sdp,
    height: sizes._32sdp,
    borderBottomWidth: sizes._5sdp,
    borderBottomColor: '#D20B2E',
    alignItems: 'center',
    marginHorizontal: sizes._20sdp,
  },
  inforTab: {
    width: sizes._80sdp,
    height: sizes._32sdp,
    alignItems: 'center',
    marginHorizontal: sizes._20sdp,
  },
  titleTabActive: {
    width: sizes._75sdp,
    height: sizes._26sdp,
    fontSize: sizes._18sdp,
    fontWeight: '700',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
  titleTab: {
    width: sizes._75sdp,
    height: sizes._26sdp,
    fontSize: sizes._18sdp,
    fontWeight: '700',
    lineHeight: sizes._27sdp,
  },
  scroll: {
    height: sizes._900sdp,
    marginHorizontal: sizes._21sdp,
    marginTop: sizes._20sdp,
  },
  gtc: {
    fontSize: sizes._18sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
    color: '#4D4B4B',
  },
  gtc_title: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#676565',
  },
  button: {
    alignItems: 'center',
    margin: sizes._40sdp,
  },
});
