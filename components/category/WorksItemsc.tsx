import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import svgs from '../../res/svgs';
import ItemcategoryTab from './ItemcategoryTab';

interface Props {
  navigation?: any;
  parmas?: any;
}

interface State {}
const data = [
  {
    id: 1,
    svg: svgs.project_out,
    title: 'Dự án',
    svgactive: svgs.project,
    screen: 'ListOvertime',
  },

  {
    id: 2,
    svg: svgs.time_management_out,
    title: 'Dự án\n Lịch họp',
    svgactive: svgs.time_management,
    screen: 'ListOvertime',
  },
  {
    id: 3,
    svg: svgs.addfile_out,
    title: 'Văn bản đến',
    svgactive: svgs.addfile,
    screen: 'ListOvertime',
  },
  {
    id: 4,
    svg: svgs.tick_mark_out,
    title: 'Phê duyệt \n chấm công',
    svgactive: svgs.tick_mark,
    screen: 'SalaryInfomation',
  },
  {
    id: 5,
    svg: svgs.user4_out,
    title: 'Đăng ký \n làm thêm giờ',
    svgactive: svgs.user4,
    screen: 'ListOvertime',
  },
  {
    id: 6,
    svg: svgs.refund_out,
    title: 'Phần mềm \n tài chính',
    svgactive: svgs.refund,
    screen: 'Homeautomaticpayment',
  },
  {
    id: 7,
    svg: svgs.home_rest_day_calendar_page_outline,
    title: 'Đăng ký \n trực nghỉ',
    svgactive: svgs.home_rest_day_calendar_page,
    screen: 'ListOvertime',
  },
  {
    id: 8,
    svg: svgs.calenders_out,
    title: 'Đăng ký nghỉ\n thêm ngày',
    svgactive: svgs.calenders,
    screen: 'ListOvertime',
  },
  {
    id: 9,
    svg: svgs.workflows_out,
    title: 'Quản lý \n công việc',
    svgactive: svgs.workflows,
    screen: 'ListOvertime',
  },
];

export default class WorksItemsc extends Component<Props, State> {
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
