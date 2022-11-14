import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../res/sizes';
import colors from '../res/colors';
const FAKEDATA = [
  {
    id: 1,
    img: require('../assets/imgFake/birthday-candle1.png'),
    mission: 'Hôm nay sinh nhật của ',
    description: 'Trangntt17 và 6 đồng chí khác.',
    complementary: null,
    time: null,
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '10 phút',
  },
  {
    id: 2,
    img: require('../assets/imgFake/calendar1.png'),
    mission: 'Lịch họp',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '20 phút',
  },
  {
    id: 3,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ sản xuất kinh doanh năm 2021',
    complementary: null,
    time: null,
    detailed: 'của bạn chậm tiến độ. Bạn vui lòng cập nhật tiến độ hoàn thành.',
    dateTime: '30 phút',
  },
  {
    id: 4,
    img: require('../assets/imgFake/vector_1.png'),
    mission: 'Nhiệm vụ',
    description:
      'Xây dựng kế hoạch chuyển đổi số nội bộ TCT giải pháp Doanh nghiệp Viettel',
    complementary: null,
    time: null,
    detailed: 'của bạn sắp đến hạn. Bạn vui lòng cập nhật tiến độ hoàn thành.',
    dateTime: '40 phút',
  },
  {
    id: 5,
    img: require('../assets/imgFake/vector_2.png'),
    mission: 'Nhiệm vụ',
    description: 'Rà soát ATTT nội bộ TCT VTS',
    complementary: null,
    time: null,
    detailed:
      'vừa được giao cho bạn. Bạn vui lòng cập nhật tiến độ hoàn thành.',
    dateTime: '50 phút',
  },
  {
    id: 7,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '60 phút',
  },
  {
    id: 8,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '10 phút',
  },
  {
    id: 9,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '20 phút',
  },
  {
    id: 10,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '120 phút',
  },
  {
    id: 11,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '30 phút',
  },
  {
    id: 12,
    img: require('../assets/imgFake/vector.png'),
    mission: 'Nhiệm vụ',
    description: 'Báo cáo nhiệm vụ trọng tâm tháng 10',
    complementary: 'sẽ diễn ra vào lúc',
    time: '8h30',
    detailed: 'Hãy chúc họ những điều tốt đẹp nhất',
    dateTime: '70 phút',
  },
];

// interface Props {
//   navigation: any;
// }
export class NotificationItem extends React.Component {
  renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={styles.mItems}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={[
              styles.mItems_,
              {
                backgroundColor:
                  index % 2 == 0 ? colors._color_white : colors._color_white,
                marginTop: index % 2 == 0 ? 10 : 10,
              },
            ]}>
            <View style={{flex: 2}}>
              <Image
                style={{
                  width: sizes._32sdp,
                  height: sizes._32sdp,
                  marginLeft: 12,
                  marginTop: 18,
                }}
                source={item?.img}></Image>
            </View>
            <View style={{flex: 12, marginTop: 8, marginRight: 8}}>
              <Text style={{lineHeight: 24, fontSize: 16, fontWeight: '400'}}>
                {item?.mission}
                {''}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: colors._color_black,
                  }}>
                  {'"'} {item?.description} {'"'}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '300',
                      color: colors._color_black,
                    }}>
                    {item?.complementary}{' '}
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: colors._color_black,
                      }}>
                      {item?.time}{' '}
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '300',
                          color: colors._color_black,
                        }}>
                        {item?.detailed}
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  fontStyle: 'italic',
                  marginVertical: 8,
                }}>
                {item?.dateTime}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  listHeaderComponent() {
    const items = FAKEDATA.length;
    return (
      <View style={styles.mTextContainer}>
        <Text style={styles.mText}> Thông báo</Text>
        <Text style={styles.mText_}>
          {' ('}
          {items}
          {')'}
        </Text>
      </View>
    );
  }

  render() {
    // const {navigation} = this.props.navigation;
    return (
      <View
        style={{
          paddingVertical: sizes._6sdp,
          backgroundColor: '#fff',
          borderTopLeftRadius: sizes._20sdp,
          borderTopRightRadius: sizes._20sdp,
        }}>
        <FlatList
          data={FAKEDATA || []}
          renderItem={this.renderItem}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
          ListHeaderComponent={this.listHeaderComponent}
        />
      </View>
    );
  }
}

export default NotificationItem;

const styles = StyleSheet.create({
  mTextContainer: {
    flexDirection: 'row',
  },
  mText: {
    fontSize: sizes._22sdp,
    fontWeight: '700',
    lineHeight: sizes._24sdp,
    color: '#4D4B4B',
    marginLeft: sizes._16sdp,
    marginTop: sizes._16sdp,
  },
  mText_: {
    fontSize: sizes._22sdp,
    fontWeight: '700',
    lineHeight: sizes._24sdp,
    color: '#4D4B4B',
    marginLeft: sizes._3sdp,
    marginTop: sizes._16sdp,
  },
  mItems: {
    flexDirection: 'row',
  },
  mItems_: {
    flexDirection: 'row',
    width: sizes._csreen_width - 32,
    // height: sizes._120sdp,
    marginHorizontal: sizes._16sdp,
    borderRadius: sizes._10sdp,
    elevation: 5,
    marginBottom: 5,
    shadowColor: '#000',
  },
});
