import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import ListOfMeals from './ListOfMeals';
import AppHeader from '../../../components/AppHeader';
import {TextInput} from 'react-native-paper';
interface Props {
  navigation: any;
  type: any;
  value: Number;
}
interface State {
  value: any;
  modalShowMeal: any;
}
export default class DetailMealsCanBeReceived extends Component<Props, State> {
  state: State = {
    modalShowMeal: false,
    value: '1',
  };
  render() {
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
        time: '22/06/2022',
        avatar:
          'https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85',
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
    const {state} = this.props.navigation;
    const {modalShowMeal} = this.state;

    return (
      <View style={styles.container}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Suất ăn có thể nhận"
        />
        <View style={styles.checkcalader}>
          <SafeAreaView>
            <ScrollView>
              <View style={{marginHorizontal: 20}}>
                {dataPro.map(
                  item =>
                    item.id == state.params.id && (
                      <View style={styles.listData}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation?.navigate(
                                ScreenName.MEALS_CAN_BE_RECEIVED,
                              )
                            }>
                            <Icon name="left" size={20} />
                          </TouchableOpacity>
                          <Image
                            style={styles.image}
                            source={{
                              uri: `${item.avatar}`,
                            }}
                          />
                          <View>
                            <Text style={{fontSize: 15, fontWeight: '700'}}>
                              {item.name}
                            </Text>
                            <Text>Bữa trưa ngày : </Text>
                            <Text>{item.time}</Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.gotMore}
                          onPress={() =>
                            this.setState({modalShowMeal: !modalShowMeal})
                          }>
                          <Text style={styles.btt}>Nhận suất ăn</Text>
                        </TouchableOpacity>
                      </View>
                    ),
                )}
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.2,
                  opacity: 0.2,
                  marginVertical: 10,
                }}></View>
              <View
                style={{
                  marginHorizontal: 20,
                }}>
                {/* text chi tiết */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>Chi tiết xuất ăn</Text>
                  <Text style={styles.amount}>x10</Text>
                </View>
                {/* trạng thái */}
                {dataPro.map(
                  item =>
                    item.id == state.params.id && (
                      <View style={{marginTop: 10}}>
                        {item.status == 1 ? (
                          <Text>
                            <View style={styles.statusSuss}></View> Đã thanh
                            toán
                          </Text>
                        ) : (
                          <Text>
                            <View style={styles.statusFail}></View> Chưa thanh
                            toán
                          </Text>
                        )}
                      </View>
                    ),
                )}

                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#4D4B4B'}}>
                    Bếp ăn Tập đoàn
                  </Text>
                  <Text>Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm</Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: '#4D4B4B',
                      marginTop: 30,
                    }}>
                    Thực đơn
                  </Text>
                  <ListOfMeals />
                </View>

                <View style={styles.tt}>
                  <Text style={styles.ttMeal}>Loại</Text>
                  <Text style={styles.ttMeal}>Bữa trưa</Text>
                </View>
                <View style={styles.tt}>
                  <Text style={styles.ttMeal}>Ngày ăn</Text>
                  <Text style={styles.ttMeal}>
                    Hôm nay{' '}
                    {dataPro.map(
                      item => item.id == state.params.id && item.time,
                    )}
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={styles.ttMeal}>Giá suất</Text>
                  <Text style={styles.ttMeal}>30.000VNĐ</Text>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        {/* nhận thêm */}
        <Modal animationType="slide" transparent={true} visible={modalShowMeal}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback
              onPress={() => this.setState({modalShowMeal: !modalShowMeal})}>
              <View style={{flex: 1, width: '100%'}}></View>
            </TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalTextTitle}>
                Chọn số suất ăn nhận thêm
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', marginVertical: 20}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        value: +this.state.value - +1,
                      })
                    }>
                    <Icon name="minuscircle" size={28} color={'#F4DDE1'} />
                  </TouchableOpacity>

                  <TextInput
                    style={styles.inputValue}
                    keyboardType="numeric"
                    value={`${this.state.value}`}
                    onChangeText={value => this.setState({value: value})}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        value: +this.state.value + +1,
                      })
                    }>
                    <Icon name="pluscircle" size={28} color={'#D20B2E'} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.gotMore}
                  onPress={() =>
                    this.setState({modalShowMeal: !modalShowMeal})
                  }>
                  <Text
                    style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
                    Nhận thêm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  iconBack: {
    marginLeft: sizes._15sdp,
    marginTop: 25,
  },
  main: {
    backgroundColor: '#fff',
    height: '90%',
    marginTop: sizes._72sdp,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
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

  amount: {
    backgroundColor: '#D20B2E',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
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
  tt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  // nhận thêm xuất
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },

  modalTextTitle: {
    textAlign: 'center',
    color: '#D30026',
    fontWeight: '600',
    fontSize: 20,
  },

  inputValue: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 5,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 30,
    marginHorizontal: sizes._10sdp,
  },
  ttMeal: {
    fontSize: 16,
    fontWeight: '400',
  },
  container: {
    flex: 1,
  },
  iconheader: {
    marginTop: -70,
    marginLeft: sizes._7sdp,
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: sizes._27sdp,
    fontWeight: '600',
    marginLeft: sizes._7sdp,
    color: 'black',
  },
  checkcalader: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  btt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});
