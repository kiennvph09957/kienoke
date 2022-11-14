import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../../components/AppHeader';
import sizes from './../../../../res/sizes';
import images from './../../../../res/images';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalCallPhone from './../../Modal/ModalCallPhone';
interface State {
  checkCallPhone: any;
  phone: any;
}
interface Props {
  navigation: any;
}
export default class HealthAdvice extends Component<Props, State> {
  state: State = {
    checkCallPhone: false,
    phone: null,
  };
  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Danh sách Quân y </Text>
      <TouchableOpacity>
        <Image source={images.home_page1} style={{marginRight: sizes._20sdp}} />
      </TouchableOpacity>
    </View>
  );
  sms = (phone: any) => {
    console.log(Platform.OS);
    const url =
      Platform.OS === 'android'
        ? `sms:${phone}?body=your message`
        : `sms:${phone}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('Unsupported url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  email = (email: any) => {
    Linking.openURL(`mailto:${email}`);
  };
  render() {
    const data = [
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 1,
        name: 'Nguyễn Thị Thanh Hường1',
        phone: '0946588786',
      },
      {
        avatar:
          'https://i0.wp.com/s1.anhdep24.net/images/2019/09/23/anh-gai-xinh-toc-ngan-de-thuong-hinh-9.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 2,
        name: 'Nguyễn Thị Thanh Hường2',
        phone: '0496487234',
      },
      {
        avatar:
          'https://blogchiase.vn/wp-content/uploads/2021/08/anh-gai-xinh-che-mat-4.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 3,
        name: 'Nguyễn Thị Thanh Hường3',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 4,
        name: 'Nguyễn Thị Thanh Hường4',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 5,
        name: 'Nguyễn Thị Thanh Hường5',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 6,
        name: 'Nguyễn Thị Thanh Hường6',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 7,
        name: 'Nguyễn Thị Thanh Hường7',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 8,
        name: 'Nguyễn Thị Thanh Hường8',
        phone: '0946588786',
      },
      {
        avatar:
          'https://anhdep123.com/wp-content/uploads/2020/05/anh-gai-dep-che-mat-7.jpg',
        email: 'huongntt@viettel.com.vn',
        id: 9,
        name: 'Nguyễn Thị Thanh Hường9',
        phone: '0946588786',
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
            <ScrollView>
              <View style={{marginHorizontal: sizes._20sdp, marginTop: 20}}>
                <Text style={styles.titleMain}>
                  Danh sách Quân y hỗ trợ tư vấn (11)
                </Text>
                {data.map((item: any) => (
                  <View style={{marginTop: 30}}>
                    <View style={styles.call}>
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
                      <View style={styles.call}>
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              checkCallPhone: !this.state.checkCallPhone,
                              phone: item.phone,
                            })
                          }>
                          <Image source={images.Group11753} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.sms(item.phone)}
                          style={{marginHorizontal: sizes._20sdp}}>
                          <Image source={images.Group11754} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.email(item.email)}>
                          <Image source={images.Group11755} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={[styles.call, {marginTop: sizes._20sdp}]}>
                      <Text style={styles.titleMain}>{item.name}</Text>
                      <Icon name="right" size={20} />
                    </TouchableOpacity>

                    <Text style={[styles.name]}>Email: {item.email}</Text>
                    <Text style={[styles.name]}>Mobile: {item.phone}</Text>
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
  titleMain: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  boxImage1: {
    width: 110,
    height: 110,
    borderRadius: 50,
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
  call: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: '#727070',
    marginTop: 5,
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(240, 240, 240)',
    marginVertical: sizes._20sdp,
  },
});
