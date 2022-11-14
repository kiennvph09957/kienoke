import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import svgs from '../../res/svgs';
import Item_category from './Itemcategory';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {
  navigation?: any;
  minus?: any;
}

interface State {}
const data = [
  {
    id: 1,
    svg: svgs.ic_riceoderoutline,
    title: 'Đặt cơm',
    svgactive: svgs.ic_riceoder,
    screen: 'LayoutOrderRice',
  },

  {
    id: 2,
    svg: svgs.calenders_out,
    title: 'Thông tin \n chấm công',
    svgactive: svgs.calenders,
    screen: 'InfoTimekeeping',
  },
  {
    id: 3,
    svg: svgs.doctor_out,
    title: 'Khám \nsức khoẻ',
    svgactive: svgs.doctor,
    screen: 'HealthCheckupSchedule',
  },
  {
    id: 4,
    svg: svgs.user4_out,
    title: 'Đăng ký \n làm thêm giờ',
    svgactive: svgs.user4,
    screen: 'ListOvertime',
  },
  {
    id: 5,
    svg: svgs.workflows_out,
    title: 'Setting',
    svgactive: svgs.workflows,
    screen: 'Setting',
  },
  {
    id: 6,
    svg: svgs.addfile_out,
    title: 'Thông tin \n cá nhân',
    svgactive: svgs.addfile,
    screen: 'Profile',
  },
  {
    id: 7,
    svg: svgs.chat_out,
    title: 'Vì VTS tốt lên',
    svgactive: svgs.chat,
    screen: 'VTS_GoodUp',
  },
  {
    id: 8,
    svg: svgs.adds_out,
    title: 'Thêm\n danh mục',
    svgactive: svgs.adds,
    screen: 'HomeScreen',
  },
];

export default class ListItemcategory extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  onNext = (screen: any) => this.props.navigation?.navigate(screen);
  jsonValue: any = AsyncStorage.getItem('@storage_Key');
  renderItem = ({item}: any) => {
    try {
      return this.jsonValue != null ? JSON.parse(this.jsonValue) : null;
    } catch (e) {
      // error reading value
    }

    return (
      <Item_category
        item={item}
        onNext={this.onNext}
        Onclickclear={this.props.minus}
      />
    );
  };
  render() {
    console.log(this.jsonValue);
    return (
      <View>
        <FlatList
          keyExtractor={item => `${item.id}`}
          data={data}
          renderItem={this.renderItem}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 21}} />}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
        />

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#727070',
            width: 362,
            height: 0,
            paddingTop: 31,
            marginLeft: 15,
          }}></View>
      </View>
    );
  }
}
