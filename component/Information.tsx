import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import sizes from '../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
const Info = [
  {
    id: 1,
    title: 'Thông tin chung',
    img: require('../assets/images/businessman-information.png'),
  },
  {
    id: 2,
    title: 'Diễn biến lương chức danh',
    img: require('../assets/images/salary.png'),
  },
  {
    id: 3,
    title: 'Diễn biến lương bảo hiểm',
    img: require('../assets/images/moneybag.png'),
  },
  {
    id: 4,
    title: 'Quá trình phụ cấp lương',
    img: require('../assets/images/donation.png'),
  },
  {
    id: 5,
    title: 'Quá trình tham gia BHXH',
    img: require('../assets/images/user1.png'),
  },
  {
    id: 6,
    title: 'Quá trình công tác',
    img: require('../assets/images/cap.png'),
  },
  {
    id: 7,
    title: 'Quá trình đào tạo nghiên cứu',
    img: require('../assets/images/presentation.png'),
  },
  {
    id: 8,
    title: 'Quá trình chuyển diện đối tượng',
    img: require('../assets/images/step1.png'),
  },
  {
    id: 9,
    title: 'Khen thưởng và kỉ luật',
    img: require('../assets/images/trophy.png'),
  },
  {
    id: 10,
    title: 'Thuế và giảm trừ',
    img: require('../assets/images/tax.png'),
  },
  {
    id: 11,
    title: 'Sáng kiên ý tưởng',
    img: require('../assets/images/idea.png'),
  },
  {
    id: 12,
    title: 'Hồ sơ kèm theo',
    img: require('../assets/images/folder.png'),
  },
  {
    id: 13,
    title: 'Quan hệ gia đình',
    img: require('../assets/images/family.png'),
  },
];

const Information = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}: {item: any; index: any}) => {
    const backgroundColor = item.id === selectedId ? '#ECEFF1' : 'transparent';
    const coloricons = item.id === selectedId ? '#D20B2E' : '#676565';
    const fontWeight = item.id === selectedId ? '700' : '400';
    const fontSize = item.id === selectedId ? 20 : 18;
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          left: sizes._17sdp,
          borderBottomLeftRadius: sizes._10sdp,
          borderTopLeftRadius: sizes._10sdp,
          height: sizes._58sdp,
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
          <View style={{position: 'absolute', flexDirection: 'row'}}>
            <Image
              style={{
                width: 24,
                height: 24,
                left: sizes._39sdp,
                top: sizes._20sdp,
                tintColor: coloricons,
              }}
              source={item?.img}></Image>
          </View>
          <View>
            <Text
              style={{
                top: sizes._8sdp,
                left: sizes._77sdp,
                lineHeight: sizes._52sdp,
                fontSize: fontSize,
                fontWeight: fontWeight,
                letterSpacing: -0.24,
              }}>
              {item?.title}
              {''}
            </Text>
          </View>
          <View
            style={{
              top: sizes._22sdp,
              position: 'absolute',
              right: sizes._55sdp,
            }}>
            <Icon name="right" color={coloricons} size={18}></Icon>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View>
        <FlatList
          data={Info || []}
          renderItem={renderItem}
          extraData={selectedId}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
      </View>

      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({});
