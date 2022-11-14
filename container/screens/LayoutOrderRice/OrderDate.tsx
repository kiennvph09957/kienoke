import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  ToastAndroid,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import images from './../../../res/images';
import sizes from './../../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import SeeMenu from './SeeMenu';
import {ScreenName} from './../../AppContainer';
import ModalMinMeal from './../Modal/ModalMinMeal';
import ModalAddMeal from './../Modal/ModalAddMeal';
import ModalCheckMeal from './../Modal/ModalCheckMeal';
import moment from 'moment';
import ModalMealTransfer from './../Modal/ModalMealTransfer';
import ModalGetExtraMeals from './../Modal/ModalGetExtraMeals';
interface State {
  checkList: any;
  modalMins: any;
  modalAdd: any;
  checkMeal: any;
  checkNameMeal: any;
  value: any;
  idCheck: any;
  checkModalMealTransfer: any;
  checkModalGetExtraMeals: any;
  data: any;
  pro_id: any;
  pressed: any;
  idValueCheck: any;
  idMealCheck: any;
}
interface Props {
  navigation: any;
  weeArr: any;
}

export default class OrderDate extends Component<Props, State> {
  state: State = {
    checkList: false, //hiện xem chi tiết
    modalMins: false, //hiện modal giảm số lượng
    modalAdd: false, //hiện modal tăng số lượng
    checkMeal: false, //hiện modal chọn bữa ăn (sáng ,trưa, tối)
    checkNameMeal: null, //check tên bữa ăn (sáng , trưa , tối)
    value: null, //lưu giá trị khi nhập input
    idCheck: null, //check id khi ấn xem thực đơn
    checkModalMealTransfer: false, //hiện modal chuyển suất ăn
    checkModalGetExtraMeals: false, //hiện modal nhân thêm
    data: [
      {
        id: '1',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 1,
        date: '22',
        day: '5',
        price: '200000',
        status: '2',
      },
      {
        id: '2',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 21,
        date: '23',
        day: '5',
        price: '600000',
        status: '1',
      },
      {
        id: '3',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '7',
        month: '6',
        year: '2022',
        check: 1,
        date: '1',
        day: '4',
        price: '500000',
        status: '2',
      },
      {
        id: '4',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '1',
        month: '6',
        year: '2022',
        check: 1,
        date: '5',
        day: '4',
        price: '200000',
        status: '1',
      },
      {
        id: '5',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 32,
        date: '23',
        day: '2',
        price: '800000',
        status: '1',
      },
      {
        id: '6',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '6',
        year: '2022',
        check: 2,
        date: '22',
        day: '3',
        price: '400000',
        status: '1',
      },
      {
        id: '7',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '6',
        year: '2022',
        check: 1,
        date: '23',
        day: '5',
        price: '440000',
        status: '1',
      },
      {
        id: '8',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '5',
        month: '6',
        year: '2022',
        check: 1,
        date: '3',
        day: '5',
        price: '120000',
        status: '1',
      },
      {
        id: '9',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '2',
        month: '6',
        year: '2022',
        check: 1,
        date: '1',
        day: '4',
        price: '330000',
        status: '2',
      },
      {
        id: '10',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '5',
        year: '2022',
        check: 32,
        date: '28',
        day: '2',
        price: '100000',
        status: '1',
      },
      {
        id: '11',
        name: 'bữa trưa',
        checkMeal: 1,
        quantity: '2',
        month: '6',
        year: '2022',
        check: 1,
        date: '4',
        day: '4',
        price: '330000',
        status: '2',
      },
      {
        id: '12',
        name: 'bữa tối',
        checkMeal: 2,
        quantity: '1',
        month: '6',
        year: '2022',
        check: 32,
        date: '23',
        day: '2',
        price: '100000',
        status: '1',
      },
      {
        id: '13',
        name: 'bữa sáng',
        checkMeal: 0,
        quantity: '3',
        month: '6',
        year: '2022',
        check: 1,
        date: '2',
        day: '5',
        price: '200000',
        status: '0',
      },
    ],
    pro_id: null,
    pressed: false,
    idValueCheck: null, //check id theo sp
    idMealCheck: null, //check id bữa ăn
  };

  add = (item: any) => {};

  setData = (check: any) => {
    const pro = this.state.data.find(
      (item: any) => item.id == this.state.pro_id,
    );
    if (check.command) {
      // this.setState({idValueCheck: this.state.pro_id});
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === this.state.pro_id) {
          this.state.data[i].quantity =
            check.command == 'add'
              ? `${+pro.quantity + +check.quantity}`
              : `${+pro.quantity - +check.quantity}`;
          this.setState({data: this.state.data});
        }
      }
    } else {
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === this.state.pro_id) {
          this.state.data[i].quantity =
            this.state.value == null
              ? check == 'add'
                ? `${+pro.quantity + +1}`
                : `${+pro.quantity - +1}`
              : `${this.state.value}`;

          this.setState({data: this.state.data, value: null});
        }
      }
    }
  };

  // xác nhận bỏ món hoặc thêm món
  showToast = (x: any) => {
    // kiểu tra props truyên từ thằng con lên có phải là 1 object không
    if (x.command) {
      x.command == 'add' &&
        (ToastAndroid.show('Thêm suất ăn thành công ', ToastAndroid.SHORT),
        this.setData(x));

      x.command == 'cancel' &&
        (this.setData(x),
        ToastAndroid.show('Bỏ suất ăn thành công ', ToastAndroid.SHORT));
      x.command == 'transfer' &&
        (this.setData(x),
        ToastAndroid.show('Chuyển suất thành công', ToastAndroid.SHORT));
      x.command == '' && '';
    } else {
      x == 'add' &&
        (ToastAndroid.show('Thêm suất ăn thành công ', ToastAndroid.SHORT),
        this.setData('add'));

      x == 'cancel' &&
        (this.setData('cancel'),
        ToastAndroid.show('Bỏ suất ăn thành công ', ToastAndroid.SHORT));

      x == '' && '';
    }
  };
  render() {
    const {idCheck} = this.state;
    const checkDayInMonth = moment(
      `${moment().year()}-${moment().month() + 1}`,
      'YYYY-MM',
    ).daysInMonth();
    const list = (item: any) => {
      return (
        <View style={{marginTop: 20}}>
          <View style={styles.container}>
            <View style={styles.container}>
              <View
                style={[
                  [
                    item.status == 0 && styles.fail,
                    item.status == 1 && styles.loading,
                    item.status == 2 && styles.success,
                    styles.padding,
                    styles.borderRadius,
                  ],
                  styles.padding,
                ]}>
                <Text
                  style={[
                    styles.date,
                    item.status == 0 ? {color: 'black'} : {color: '#fff'},
                  ]}>
                  {item.date}
                </Text>
                <Text
                  style={[
                    styles.day,
                    item.status == 0 ? {color: 'black'} : {color: '#fff'},
                  ]}>
                  Thứ {item.day}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({checkMeal: true, idMealCheck: item.id})
                  }>
                  <Text style={styles.textLunch}>
                    {item.name} <Image source={images.dropdown} />
                  </Text>
                </TouchableOpacity>

                <Text style={{marginHorizontal: sizes._10sdp}}>
                  Giá :{' '}
                  {(Number(item.price) * Number(item.quantity))
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/gs, ',')}
                  vnđ
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalMins: !this.state.modalMins,
                    pro_id: item.id,
                  })
                }>
                {item.status == 0 ? (
                  <Icon name="minuscircleo" size={28} />
                ) : (
                  <Icon name="minuscircle" size={28} />
                )}
              </TouchableOpacity>

              <TextInput
                style={
                  this.state.pressed == true &&
                  item.id == this.state.idValueCheck
                    ? [
                        {
                          borderColor: 'red',
                        },
                        styles.input,
                      ]
                    : [
                        {
                          borderColor: 'thistle',
                        },
                        styles.input,
                      ]
                }
                onFocus={() =>
                  this.setState({
                    pressed: !this.state.pressed,
                    idValueCheck: item.id,
                  })
                }
                onBlur={() =>
                  this.setState({
                    pressed: false,
                  })
                }
                keyboardType="numeric"
                value={
                  this.state.value !== null &&
                  this.state.idValueCheck == item.id
                    ? this.state.value
                    : item.quantity
                }
                onChangeText={value => this.setState({value: value})}
              />

              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalAdd: !this.state.modalAdd,
                    pro_id: item.id,
                  })
                }>
                {item.status == 0 ? (
                  <Icon name="pluscircleo" size={28} />
                ) : (
                  <Icon name="pluscircle" size={28} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <View style={{marginLeft: sizes._10sdp}}>
              {item.status == 0 && (
                <Text>
                  <View style={[styles.status, styles.statusFailed]}></View> Đặt
                  không thành công
                </Text>
              )}
              {item.status == 1 && (
                <Text>
                  <View
                    style={[
                      styles.status,
                      styles.statusSuccessfully,
                    ]}></View>{' '}
                  Đặt thành công
                </Text>
              )}
              {item.status == 2 && (
                <Text>
                  <View style={[styles.status, styles.statusBooked]}></View> Đã
                  đặt
                </Text>
              )}
            </View>

            <TouchableOpacity
              style={[
                styles.gotMore,
                styles.borderRadius,
                item.status == 0 && {backgroundColor: '#E7E7E7'},
              ]}
              onPress={() =>
                this.setState({
                  pro_id: item.id,
                  checkModalGetExtraMeals: !this.state.checkModalGetExtraMeals,
                })
              }>
              <Text
                style={[
                  styles.day,
                  item.status == 0 ? {color: 'black'} : {color: '#fff'},
                ]}>
                Nhận thêm
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => (
                item.id !== null && this.setState({idCheck: item.id}),
                item.id == this.state.idCheck && this.setState({idCheck: null})
              )}>
              <Text style={styles.select}>
                Xem thực đơn <Icon name="right" size={14} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(ScreenName.MealReview)
              }>
              <Text style={styles.select}>
                Đánh giá <Icon name="right" size={14} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  checkModalMealTransfer: !this.state.checkModalMealTransfer,
                  pro_id: item.id,
                })
              }>
              <Text style={styles.select}>
                Chuyển suất <Icon name="right" size={14} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    return (
      <View
        style={{
          position: 'relative',
        }}>
        <Animated.View
          style={{
            marginHorizontal: sizes._20sdp,
          }}>
          {/* hôm nay */}
          <Text style={styles.title}>Hôm nay</Text>
          {this.state.data.map((item: any) => {
            if (
              item.date == moment().date() &&
              item.month == moment().month() + 1
            ) {
              if (this.state.idMealCheck == null) {
                if (item.checkMeal == 1)
                  return (
                    <>
                      <View>{list(item)}</View>
                      {item.id == idCheck && <SeeMenu id={item.id} />}
                    </>
                  );
              } else if (this.state.idMealCheck !== null) {
                console.log('first');

                if (
                  item.checkMeal == this.state.checkNameMeal &&
                  item.id == this.state.idMealCheck
                )
                  return (
                    <>
                      <View>{list(item)}</View>
                      {item.id == idCheck && <SeeMenu id={item.id} />}
                    </>
                  );
              }
            }
          })}

          <View style={styles.hr}></View>

          {/* ngày mai */}
          <Text style={styles.title}>Ngày mai</Text>
          {this.state.data.map((item: any) => {
            if (
              (moment().date() == checkDayInMonth && checkDayInMonth == 31) ||
              (moment().date() == checkDayInMonth && checkDayInMonth == 30)
            ) {
              console.log(item,'âsda')
              if (item.date == 1 && item.month == moment().month() + 2) {
                if (item.checkMeal == this.state.checkNameMeal) {
                  return (
                    <>
                      <View>{list(item)}</View>
                      {item.id == idCheck && <SeeMenu id={item.id} />}
                    </>
                  );
                }
              }
            } else if (checkDayInMonth <= 30 || checkDayInMonth <= 31) {
              if (
                item.date == moment().date() + 1 &&
                item.month == moment().month() + 1
              ) {
                if (item.checkMeal == this.state.checkNameMeal) {
                  return (
                    <>
                      <View>{list(item)}</View>
                      {item.id == idCheck && <SeeMenu id={item.id} />}
                    </>
                  );
                }
              }
            }
          })}
          <View style={styles.hr}></View>

          {/* tuần này */}
          <Text style={styles.title}>Tuần này</Text>

          {/* xem chi tiết */}
          {this.state.checkList == false && (
            <TouchableOpacity
              style={[styles.seeMore, styles.flex, {marginTop: 10}]}
              onPress={() => this.setState({checkList: !this.state.checkList})}>
              <Text style={styles.more}>
                Xem chi tiết
                <Icon name="up" size={15} />
              </Text>
            </TouchableOpacity>
          )}

          {this.state.checkList == true && (
            <>
              {this.state.data.map((item: any) => {
                for (let i = 0; i < this.props.weeArr.length; i++) {
                  if (
                    item.month == moment().month() + 1 &&
                    item.date == this.props.weeArr[i]
                  ) {
                    if (item.checkMeal == this.state.checkNameMeal) {
                      return (
                        <View key={item.id}>
                          <View>{list(item)}</View>
                          {item.id == idCheck && <SeeMenu id={item.id} />}
                        </View>
                      );
                    }
                  }
                }
              })}
              <TouchableOpacity
                style={[styles.seeMore, styles.flex, {marginVertical: 30}]}
                onPress={() =>
                  this.setState({checkList: !this.state.checkList})
                }>
                <Text style={styles.more}>
                  Hủy bỏ
                  <Icon name="up" size={15} />
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>

        {/* Thông báo bỏ hoặc thêm suất */}
        <ModalMinMeal
          check={this.state.modalMins}
          close={(e: any) => (
            this.setState({modalMins: !this.state.modalMins}), this.showToast(e)
          )}
        />
        {/* thông báo thêm món */}
        <ModalAddMeal
          check={this.state.modalAdd}
          close={(e: any) => {
            this.setState({modalAdd: !this.state.modalAdd}), this.showToast(e);
          }}
        />
        {/* chọn bữa ăn */}
        <ModalCheckMeal
          check={this.state.checkMeal}
          close={(e: any) => {
            this.setState({checkMeal: !this.state.checkMeal});
            e !== '' && this.setState({checkNameMeal: e});
          }}
        />

        {/* chuyển suất */}
        <ModalMealTransfer
          checkModalMealTransfer={{
            check: this.state.checkModalMealTransfer,
            id: this.state.pro_id,
          }}
          click={(e: any) => (
            this.setState({
              checkModalMealTransfer: !this.state.checkModalMealTransfer,
            }),
            this.showToast(e)
          )}
        />
        {/* nhận suất */}
        <ModalGetExtraMeals
          checkModalGetExtraMeals={{
            check: this.state.checkModalGetExtraMeals,
            id: this.state.pro_id,
          }}
          click={(e: any) => (
            this.setState({
              checkModalGetExtraMeals: !this.state.checkModalGetExtraMeals,
            }),
            this.showToast(e)
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  borderRadius: {
    borderRadius: 20,
  },

  flex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fail: {
    backgroundColor: '#E7E7E7',
  },
  loading: {
    backgroundColor: '#1EA162',
  },
  success: {
    backgroundColor: '#F8455B',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 30,
    marginHorizontal: sizes._10sdp,
  },

  textLunch: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: sizes._10sdp,
    marginVertical: sizes._10sdp,
    textTransform: 'capitalize',
  },
  gotMore: {
    backgroundColor: '#D20B2E',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  select: {
    marginTop: sizes._10sdp,
    fontSize: 14,
    fontWeight: '600',
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  statusBooked: {
    backgroundColor: '#F0C017',
  },
  statusSuccessfully: {
    backgroundColor: '#1EA162',
  },
  statusFailed: {
    backgroundColor: '#D30026',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
  seeMore: {
    flexDirection: 'row',
    paddingHorizontal: sizes._12sdp,
    backgroundColor: '#F2F4F8',
    width: '100%',
    borderRadius: 10,
  },
  more: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: sizes._10sdp,
    paddingVertical: sizes._10sdp,
  },
  day: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  date: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  pro: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
  },
  buttonReview: {
    marginTop: sizes._10sdp,
    borderRadius: 5,
  },
  textReview: {
    fontSize: 14,
    fontWeight: '600',
  },
});
