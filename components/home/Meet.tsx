import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import MeetItem from './MeetItem';
import Icons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

interface Props {
  isShow?: any;
  datePick?: any;
}

interface State {}

const data = [
  {
    name: 'Rà soát tiến độ thực hiện dự án App VTS Insight năm 2021',
    address: 'Phòng họp 1 tầng 3 - Tòa nhà VIettel - Số 1 Trần Hữu Dực',
    date: '10/09/2021',
    time: {
      start: '08:30',
      end: ' 11:30',
    },
  },
  {
    name: 'Rà soát tiến độ thực hiện dự án App VTS Insight năm 2021',
    address: 'Phòng họp 1 tầng 3 - Tòa nhà VIettel - Số 1 Trần Hữu Dực',
    date: '15/09/2021',
    time: {
      start: '08:30',
      end: ' 11:30',
    },
  },
  {
    name: 'Rà soát tiến độ thực hiện dự án App VTS Insight năm 2021',
    address: 'Phòng họp 1 tầng 3 - Tòa nhà VIettel - Số 1 Trần Hữu Dực',
    date: '17/09/2021',
    time: {
      start: '08:30',
      end: ' 11:30',
    },
  },
];

const formatDate = (date: any) => {
  if (
    moment(date).format('DD/MM/YYYY') ===
    moment().add(-1, 'days').format('DD/MM/YYYY')
  ) {
    return 'Hôm qua';
  }
  if (
    moment(date).format('DD/MM/YYYY') ===
    moment(new Date()).format('DD/MM/YYYY')
  ) {
    return 'Hôm nay';
  }
  if (
    moment(date).format('DD/MM/YYYY') ===
    moment().add(1, 'days').format('DD/MM/YYYY')
  ) {
    return 'Ngày mai';
  }
  return moment(date).format('DD/MM/YYYY');
};

export default class Meet extends Component<Props, State> {
  renderItem = ({item}: any) => <MeetItem item={item} />;
  render() {
    return (
      <>
        <View style={styles.meetContainer}>
          <View style={styles.meetLeft}>
            <Text style={styles.titleMeet}>Lịch họp</Text>
            <Text style={styles.titleMeetSub}>
              Bạn có <Text style={styles.titleMeet}>3</Text> lịch họp
            </Text>
          </View>
          <View style={styles.meetRight}>
            <TouchableWithoutFeedback onPress={() => this.props.isShow()}>
              <View style={styles.options}>
                <Text style={styles.textOptions}>
                  {formatDate(this.props.datePick)}
                </Text>
                <View style={styles.spaceOptions} />
                <Icons
                  name="chevron-down"
                  size={sizes._24sdp}
                  color={colors._color_text_title}
                  style={{marginTop: sizes._5sdp}}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={this.renderItem}
          listKey={'meet-event'}
          keyExtractor={item => item.date}
          horizontal
          pagingEnabled
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          persistentScrollbar={true}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  meetContainer: {
    marginTop: sizes._20sdp,
    paddingHorizontal: sizes._16sdp,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  meetLeft: {
    flex: 0.65,
  },
  meetRight: {
    flex: 0.35,
    justifyContent: 'center',
    alignContent: 'center',
  },
  options: {
    flexDirection: 'row',
    padding: sizes._12sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_boder_meet,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes._5sdp,
  },
  textOptions: {
    fontSize: sizes._font_size_big_big,
    color: colors._color_black,
    fontWeight: '400',
  },
  spaceOptions: {
    width: sizes._8sdp,
  },
  titleMeet: {
    fontWeight: 'bold',
    fontSize: sizes._font_size_big,
    color: colors._color_text_title,
  },
  titleMeetSub: {
    fontWeight: '400',
    fontSize: sizes._font_size_big,
    color: colors._color_text_title,
  },
});
