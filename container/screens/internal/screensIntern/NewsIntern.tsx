import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import CountListintern from '../../../../components/internal/CountListintern';
import ItemRender from '../../../../components/internal/ItemRender';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {
  params?: any;
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
export default class NewsIntern extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  RenderItem = ({item}: any) => {
    return (
      <ItemRender
        title={item.title}
        date={item.date}
        slary={item.slary}
        direction={item.direction}
        navigation={() =>
          this.props?.navigation?.navigate(ScreenName.InformationIntern, {
            params: item,
          })
        }
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <CountListintern
            title={'Danh Sách tin tuyển dụng'}
            count={datalist.length}
          />
        </View>

        <ScrollView style={styles.container_scroll}>
          <FlatList
            renderItem={this.RenderItem}
            data={datalist}
            keyExtractor={item => `${item.id}`}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container_scroll: {
    top: sizes._30sdp,
    left: 0,
    right: 0,
    bottom: sizes._35sdp,
    position: 'absolute',
  },
});
