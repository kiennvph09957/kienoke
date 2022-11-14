import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import sizes from '../../../res/sizes';

interface Props {}

interface State {}

export default class ScreenHomeTCD extends Component<Props, State> {
  data = [
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
      work: 'Đi họp',
      getin: 'Trụ sở Tập Đoàn ',
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
      work: 'Đi họp',
      getin: 'Trụ sở Tập Đoàn ',
      dicription: 'Họp chốt giao diện với Ban CNTT về dự án VTS Insight',
      nameLD: 'Bùi Nam Giang',
      CVLD: 'Giám đốc Trung tâm Công nghệ Thông tin - Tổng công ty Giải pháp Doanh nghiệp Viettel',
      Sdt: '0978898989',
    },
  

  ];
  RenderItem_list = ({item}: any) => {
    return (
      <View style={styles.container_ren}>
        <View style={styles.container_list}>
          <Text style={styles.text_title}> {item.title}</Text>
          <Text style={styles.text_time}>{item.time}</Text>
        </View>
        <View style={styles.container_list}>
          <Icon name="calendar-clock" size={18} color="#AFAFAF" />
          <Text style={styles.text}>{item.date_time}</Text>
          <Icon name="chevron-right" size={24} color="#000000" />
        </View>
        <View style={styles.container_listw}>
          <Icon name="format-list-checks" size={18} color="#AFAFAF" />
          <Text style={styles.textw}>{item.work}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Danh sách {'('}
          {this.data.length}
          {')'}
        </Text>
        <FlatList
          data={this.data}
          renderItem={this.RenderItem_list}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  title: {
    fontSize: sizes._20sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
  container_ren: {
    // marginTop: 25,
  },
  container_list: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes._10sdp,
  },
  container_listw: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: sizes._1sdp,
    borderBottomColor: '#C3C3C3',
    paddingBottom: sizes._20sdp,
    marginTop: sizes._10sdp,
  },
  text_title: {
    fontSize: sizes._21sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
    color: '#263238',
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#727070',
  },
  textw: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#727070',
    marginLeft: sizes._20sdp,
  },
  text_time: {
    fontSize: sizes._14sdp,
    fontWeight: '400',
    fontStyle: 'italic',
    lineHeight: sizes._27sdp,
    color: '#727070',
  },
});
