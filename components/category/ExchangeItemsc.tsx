import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import svgs from '../../res/svgs';
import ItemcategoryTab from './ItemcategoryTab';

interface Props {
  navigation?: any;
  parmas?: any;
}
const data = [
  {
    id: 1,
    svgactive: svgs.chat,
    title: 'Vì VTS tốt lên',
    svg: svgs.chat_out,
    screen: 'VTS_GoodUp',
  },

  {
    id: 2,
    svgactive: svgs.cover,
    title: 'Thông báo',
    svg: svgs.cover_out,
    screen: 'NotificationsScreen',
  },
  {
    id: 3,
    svgactive: svgs.contac,
    title: 'Danh bạ',
    svg: svgs.contac_out,
    screen: 'PhoneBook',
  },
  {
    id: 4,
    svgactive: svgs.news,
    title: 'Thanh toán \n tự động',
    svg: svgs.news_out,
    screen: 'Homeautomaticpayment',
  },
  {
    id: 5,
    svgactive: svgs.recru,
    title: 'Đánh giá \n xuất ăn',
    svg: svgs.recru_outline,
    screen: 'Index_vote',
  },
  {
    id: 6,
    svgactive: svgs.recru,
    title: 'Tuyển dụng \n nội bộ',
    svg: svgs.recru_outline,
    screen: 'HomeIntern',
  },
  {
    id: 7,
    svg: svgs.user4_out,
    title: 'Đăng ký \n Vào ra',
    svgactive: svgs.user4,
    screen: 'HomeRegisterout',
  },
  {
    id: 8,
    svg: svgs.user4_out,
    title: 'Nhập OTP',
    svgactive: svgs.user4,
    screen: 'ScreenOTP',
  },
];
interface State {}

export default class ExchangeItemsc extends Component<Props, State> {
  onNext = (screen: any) => this.props.navigation?.navigate(screen);

  renderItem = ({item}: any) => {
    return (
      <View style={{flex: 1, marginBottom: 20}}>
        <ItemcategoryTab
          item={item}
          onNext={this.onNext}
          add={this.props.parmas}
        />
      </View>
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
