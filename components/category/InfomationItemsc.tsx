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
    svg: svgs.analytics_out,
    title: 'Thông tin KI',
    svgactive: svgs.analytics,
    screen: 'PropertyInfor',
  },

  {
    id: 2,
    svg: svgs.doctor_out,
    title: 'Khám \n sức khoẻ',
    svgactive: svgs.doctor,
    screen: 'HealthCheckupSchedule',
  },
  {
    id: 3,
    svg: svgs.calenders_out,
    title: 'Thông tin \n chấm công',
    svgactive: svgs.calenders,
    screen: 'InfoTimekeeping',
  },
  {
    id: 4,
    svg: svgs.salary_out,
    title: 'Thông tin \n lương',
    svgactive: svgs.salary,
    screen: 'SalaryInfomation',
  },
  {
    id: 5,
    svg: svgs.information_out,
    title: 'Thông tin \n cá nhân',
    svgactive: svgs.information,
    screen: 'PersonalInformation',
  },
  {
    id: 6,
    svg: svgs.identity_card_out,
    title: 'Đăng ký thẻ \n nhân viên',
    svgactive: svgs.identity_card,
    screen: 'headerInsurance',
  },
  {
    id: 7,
    svg: svgs.health_insurance_out,
    title: 'Kết quả \n khám',
    svgactive: svgs.health_insurance,
    screen: 'AddResultMedicalExamination',
  },
  {
    id: 8,
    svg: svgs.identity_card_out,
    title: 'Thông tin chung',
    svgactive: svgs.identity_card,
    screen: 'GeneralInformation',
  },
];
interface State {}

export default class InfomationItemsc extends Component<Props, State> {
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
