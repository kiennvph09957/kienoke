import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../../components/AppHeader';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import {ScrollView} from 'react-native-gesture-handler';
import ModalCallPhone from './../../Modal/ModalCallPhone';

interface State {
  checkCallPhone: any;
  phone: any;
}
interface Props {
  navigation: any;
}

export default class ReputableMedicalAddress extends Component<Props, State> {
  state: State = {
    checkCallPhone: false,
    phone: null,
  };
  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Địa chỉ khám chữa bệnh uy tín</Text>
      <TouchableOpacity>
        <Image source={images.home_page1} style={{marginRight: sizes._20sdp}} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const data = [
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$1',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch1',
        hospital: 'Đại học y1$1',
        id: 1,
        name: 'Nguyễn Anh Đạt11',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$2',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch2',
        hospital: 'Đại học y1$2',
        id: 2,
        name: 'Nguyễn Anh Đạt12',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$3',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch3',
        hospital: 'Đại học y1$3',
        id: 3,
        name: 'Nguyễn Anh Đạt13',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$4',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch4',
        hospital: 'Đại học y1$4',
        id: 4,
        name: 'Nguyễn Anh Đạt14',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$5',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch5',
        hospital: 'Đại học y1$5',
        id: 5,
        name: 'Nguyễn Anh Đạt15',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$6',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch6',
        hospital: 'Đại học y1$6',
        id: 6,
        name: 'Nguyễn Anh Đạt16',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$7',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch7',
        hospital: 'Đại học y1$7',
        id: 7,
        name: 'Nguyễn Anh Đạt17',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$8',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch8',
        hospital: 'Đại học y1$8',
        id: 8,
        name: 'Nguyễn Anh Đạt18',
        phone: '0329903787',
      },
      {
        address:
          'Phòng khám VIP 12, tầng 5, nhà H, 01, Tôn Thất Tùng, Trung Liệt, Đống Đa, Hà Nội1$9',
        avatar:
          'https://didongviet.vn/tin-tuc/wp-content/uploads/2022/01/cute-didongviet.jpg',
        department: 'Tim mạch9',
        hospital: 'Đại học y1$9',
        id: 9,
        name: 'Nguyễn Anh Đạt19',
        phone: '0329903787',
      },
    ];

    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          contentCustom
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginHorizontal: sizes._20sdp,
                  marginTop: sizes._20sdp,
                }}>
                <Text style={[styles.list, {marginBottom: sizes._20sdp}]}>
                  Danh sách ({data.length})
                </Text>
                {data.map((item: any) => (
                  <View>
                    <Text
                      style={[
                        styles.name,
                        {
                          marginVertical: 10,
                        },
                      ]}>
                      PGS.TS: <Text style={styles.list}>{item.name}</Text>
                    </Text>
                    <View
                      style={[
                        styles.flex,
                        {
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <View
                        style={{
                          width: '70%',
                        }}>
                        <View style={[styles.flex, styles.text]}>
                          <View style={styles.li}></View>
                          <Text style={[styles.name]}>
                            Bệnh viện :
                            <Text style={styles.list}>{item.hospital}</Text>
                          </Text>
                        </View>
                        <View style={[styles.flex, styles.text]}>
                          <View style={styles.li}></View>
                          <Text style={[styles.name]}>
                            Khoa :
                            <Text style={styles.list}>{item.department}</Text>
                          </Text>
                        </View>
                        <View style={[styles.flex, styles.text]}>
                          <View style={styles.li}></View>
                          <Text style={[styles.name]}>
                            Hotline:
                            <Text style={styles.list}>{item.phone}</Text>
                          </Text>
                        </View>
                        <View
                          style={[styles.flex, styles.text, {width: '80%'}]}>
                          <View style={styles.li}></View>
                          <Text style={[styles.name]}>
                            Địa chỉ:
                            <Text style={styles.list}>{item.address}</Text>
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                          width: '30%',
                        }}>
                        <View style={styles.boxImage1}>
                          <View style={styles.boxImage2}>
                            <Image
                              style={styles.image}
                              source={{
                                uri: `${item.avatar}`,
                              }}
                            />
                          </View>
                        </View>

                        <TouchableOpacity
                          style={styles.phone}
                          onPress={() =>
                            this.setState({
                              phone: item.phone,
                              checkCallPhone: !this.state.checkCallPhone,
                            })
                          }>
                          <Image source={images.Vector1} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.hr}></View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>

          {/* hiện thông báo có muốn gọi không */}
          <ModalCallPhone
            checkCallPhone={this.state.checkCallPhone}
            phone={this.state.phone}
            checkModalCallPhone={() =>
              this.setState({
                checkCallPhone: !this.state.checkCallPhone,
                phone: null,
              })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
    overflow: 'hidden',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: '#727070',
  },
  li: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginLeft: sizes._20sdp,
    marginRight: sizes._10sdp,
  },
  text: {
    marginVertical: sizes._10sdp,
  },
  list: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },

  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(240, 240, 240)',
    marginVertical: sizes._20sdp,
  },
  boxImage1: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginTop: -40,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 15,
  },
  boxImage2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 3,
  },
  phone: {
    marginTop: 20,
  },
});
