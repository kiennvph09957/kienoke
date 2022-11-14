import React from 'react';
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import sizes from '../res/sizes';

const DATA = [
  {
    id: '1',
    title: 'Hoant71@viettel.com.vn',
    img: require('../assets/images/email.png'),
  },
  {
    id: '2',
    title: '0978453545',
    img: require('../assets/images/phone.png'),
  },
  {
    id: '3',
    title: 'Kỹ sư giải pháp nghiệp vụ',
    img: require('../assets/images/suitcase.png'),
  },
  {
    id: '4',
    title: 'Phòng Tiêu chuẩn định mức',
    img: require('../assets/images/team1.png'),
  },
  {
    id: '5',
    title: 'Trung tâm Công nghê thông tin',
    img: require('../assets/images/home.png'),
  },
];

export class ListCV extends React.Component {
  renderItem = ({item}: {item: any; index: any}) => {
    return (
      <View style={{}}>
        <View style={{position: 'absolute', width: '100%'}}>
          <Image
            style={{
              width: 24,
              height: 24,
              left: sizes._39sdp,
              top: sizes._24sdp,
              tintColor: '#AFAFAF',
            }}
            source={item?.img}></Image>
        </View>
        <View>
          <Text
            style={{
              top: sizes._11sdp,
              left: sizes._74sdp,
              lineHeight: sizes._52sdp,
              fontSize: 18,
              fontWeight: '400',
              letterSpacing: -0.24,
            }}>
            {item?.title}
            {''}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={DATA || []}
          renderItem={this.renderItem}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
      </View>
    );
  }
}

export default ListCV;

const styles = StyleSheet.create({});
