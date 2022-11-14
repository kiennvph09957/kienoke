import React, {Component} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import svgs from '../../res/svgs';
import ItemcategoryTab from './ItemcategoryTab';

interface Props {
  navigation?: any;
  parmas?: any;
}
const data = [
  {
    id: 1,
    svg: svgs.car_out,
    title: 'Đặt xe',
    svgactive: svgs.car,
    screen: 'LayoutOrderRice',
  },

  {
    id: 2,
    svg: svgs.ic_riceoderoutline,
    title: 'Đặt cơm',
    svgactive: svgs.ic_riceoder,
    screen: 'LayoutOrderRice',
  },
  {
    id: 3,
    svg: svgs.medicalrecord_out,
    title: 'Khai báo y tế\n địa chỉ',
    svgactive: svgs.medicalrecord,
    screen: 'ReputableMedicalAddress',
  },
  {
    id: 4,
    svg: svgs.computer_out,
    title: 'Thông tin\n tài sản',
    svgactive: svgs.computer,
    screen: 'PropertyInfor',
  },
  {
    id: 5,
    svg: svgs.otp_out,
    title: 'Sinh OTP',
    svgactive: svgs.otp,
    screen: 'SplashScreen',
  },
  {
    id: 6,
    svg: svgs.user4_out,
    title: 'Đăng ký\n vào ra',
    svgactive: svgs.user4,
    screen: 'DetailOverTime',
  },
  {
    id: 7,
    svg: svgs.wallet_out,
    title: 'Ví Viettel Pay',
    svgactive: svgs.wallet,
    screen: 'Homeautomaticpayment',
  },
  {
    id: 8,
    svg: svgs.sprint_out,
    title: 'Giải chạy',
    svgactive: svgs.sprint,
    screen: 'HealthAdvice',
  },
  {
    id: 9,
    svg: svgs.speech_out,
    title: 'Thông tin\n khách hàng',
    svgactive: svgs.speech,
    screen: 'CustomerLookup',
  },
  {
    id: 10,
    svg: svgs.relax_out,
    title: 'Đăng ký\n nghỉ phép',
    svgactive: svgs.relax,
    screen: 'SplashScreen',
  },
  {
    id: 11,
    svg: svgs.remind_out,
    title: 'Nhắc nhở',
    svgactive: svgs.remind,
    screen: 'SplashScreen',
  },
  {
    id: 12,
    svg: svgs.save_file_out,
    title: 'Lưu tài liệu',
    svgactive: svgs.save_file,
    screen: 'SplashScreen',
  },
];
interface State {}

export default class UtilitiesItemsc extends Component<Props, State> {
  onNext = (screen: any) => this.props.navigation?.navigate(screen);
  renderItem = ({item}: any) => {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{paddingBottom: 21}}>
          <ItemcategoryTab
            item={item}
            onNext={this.onNext}
            add={this.props.parmas}
          />
        </View>
      </ScrollView>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          paddingLeft: 21,
        }}>
        <FlatList
          keyExtractor={item => `${item.id}`}
          data={data}
          renderItem={this.renderItem}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 1}} />}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
        />
      </View>
    );
  }
}
