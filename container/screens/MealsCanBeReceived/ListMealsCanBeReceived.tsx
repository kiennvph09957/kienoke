import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import sizes from '../../../res/sizes';
import images from '../../../res/images';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation?: any;
}
interface State {
  value: Number;
  checkMenu: Number;
  checkListAll: any;
}
export default class ListMealsCanBeReceived extends Component<Props, State> {
  state: State = {
    value: 1,
    checkMenu: 1,
    checkListAll: false,
  };
  listData = (item: any) => (
    <View>
      <View style={styles.listData}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: `${item.avatar}`,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 15, fontWeight: '700'}}>{item.name}</Text>
            <Text>Bữa trưa ngày : </Text>
            <Text>{item.time}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.gotMore}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '400',
            }}>
            Nhận suất ăn
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view}>
        <View>
          <TouchableOpacity
            style={styles.viewDetail}
            onPress={() => {
              this.props.navigation.navigate(
                ScreenName.DETAIL_MEALS_CAN_BE_RECEIVED,
                {
                  id: item.id,
                },
              );
            }}
            key={item.id}>
            <Text>Xem chi tiết</Text>
            <Icon name="right" size={10} color={'black'} />
          </TouchableOpacity>
        </View>
        <View>
          {item.status == 1 ? (
            <Text>
              <View style={styles.statusSuss}></View> Đã thanh toán
            </Text>
          ) : (
            <Text>
              <View style={styles.statusFail}></View> Chưa thanh toán
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.2,
          opacity: 0.2,
          marginVertical: 10,
        }}></View>
    </View>
  );
  render() {
    const local_data = [
      {
        value: '1',
        lable: 'Bếp ăn Tập đoàn1',
      },
      {
        value: '2',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '3',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '4',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '5',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '6',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '7',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '8',
        lable: 'Bếp ăn Tập đoàn',
      },
    ];
    const dataPro = [
      {
        id: 1,
        name: 'Lê Văn Việt1',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 1,
      },
      {
        id: 2,
        name: 'Lê Văn Việt2',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 1,
      },
      {
        id: 3,
        name: 'Lê Văn Việt3',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 2,
      },
      {
        id: 4,
        name: 'Lê Văn Việt4',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 1,
      },
      {
        id: 5,
        name: 'Lê Văn Việt5',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 1,
      },
      {
        id: 6,
        name: 'Lê Văn Việt6',
        time: '07/05/2022',
        avatar:
          'https://s1.media.ngoisao.vn/resize_580/news/2020/08/29/anh-sau-ngoisaovn-w640-h897.jpg',
        status: 1,
      },
    ];
    const {checkMenu} = this.state;

    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.margin}>
            <Dropdown
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              iconStyle={styles.iconStyle}
              containerStyle={styles.containerStyle}
              maxHeight={200}
              value={checkMenu}
              data={local_data}
              showsVerticalScrollIndicator={false}
              valueField="value"
              labelField="lable"
              placeholder={'Chọn bếp ăn'}
              onChange={(ex: any) => this.setState({checkMenu: ex.value})}
            />
            <View style={{position: 'relative', marginTop: 20}}>
              <Image source={images.search} style={styles.search} />
              <TextInput style={styles.input} placeholder="Tìm kiếm ..." />
              <Image source={images.Calendar} style={styles.calendar} />
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.2,
              opacity: 0.5,
              marginVertical: 10,
            }}></View>

          <View>
            {checkMenu == 1 ? (
              <View style={styles.margin}>
                <View style={styles.header}>
                  <Text style={{fontSize: 20, fontWeight: '700'}}>Hôm nay</Text>
                  <TouchableOpacity
                    style={styles.next}
                    onPress={() =>
                      this.setState({checkListAll: !this.state.checkListAll})
                    }>
                    <Text>Xem tất cả</Text>
                    <Icon name="right" size={10} color={'black'} />
                  </TouchableOpacity>
                </View>
                {dataPro.map((item, index) => {
                  if (this.state.checkListAll == false) {
                    if (index < 3) {
                      return this.listData(item);
                    }
                  } else {
                    return this.listData(item);
                  }
                })}
              </View>
            ) : (
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image source={images.khongco} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: sizes._20sdp,
  },
  dropdown: {
    marginTop: 30,
    height: sizes._48sdp,
    width: '100%',
    backgroundColor: '#F2F4F8',
    cornerRadius: sizes._8sdp,
    paddingHorizontal: sizes._15sdp,
    borderRadius: 10,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    left: sizes._12sdp,
  },
  selectedTextStyle: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: sizes._40sdp,
  },
  search: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  calendar: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes._20sdp,
  },

  gotMore: {
    borderRadius: 20,
    backgroundColor: '#D20B2E',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusSuss: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#1EA162',
  },
  statusFail: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  imageError: {
    width: '100%',
    height: '100%',
  },
  containerStyle: {
    marginTop: -sizes._50sdp,
  },
});
