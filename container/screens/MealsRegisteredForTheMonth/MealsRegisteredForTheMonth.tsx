import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import images from '../../../res/images';
import {ScreenName} from '../../AppContainer';
import ListOfMeals from './ListOfMeals';
import sizes from '../../../res/sizes';
import ListMealRecipient from './ListMealRecipient';
import Icon from 'react-native-vector-icons/AntDesign';
import Review from './Review';
import CommentAndReview from './CommentAndReview';
import MealStatistics from './MealStatistics';
import AppHeader from '../../../components/AppHeader';

interface Props {
  navigation: any;
}
interface State {}

export default class MealsRegisteredForTheMonth extends Component<
  Props,
  State
> {
  render() {
    const {state} = this.props.navigation;
    const time = state.params.time;
    const data = [
      {
        id: 1,
        name: 'Bữa trưa1',
        price: 20000,
        status: 1,
        day: 20,
        thu: 3,
        month: 5,
        year: 2022,
      },
      {
        id: 2,
        name: 'Bữa sáng',
        price: 30000,
        status: 1,
        day: 12,
        thu: 5,
        month: 5,
        year: 2022,
      },
      {
        id: 3,
        name: 'Bữa tối',
        price: 40000,
        status: 1,
        day: 12,
        thu: 5,
        month: 5,
        year: 2022,
      },
      {
        id: 4,
        name: 'Bữa trưa',
        price: 50000,
        status: 1,
        day: 12,
        thu: 5,
        month: 5,
        year: 2022,
      },
      {
        id: 5,
        name: 'Bữa trưa5',
        price: 60000,
        status: 1,
        day: 24,
        thu: 7,
        month: 5,
        year: 2022,
      },
    ];
    const dataFood = [
      {
        id: 1,
        user_id: 1,
        nameFool: 'Bún bò trộn1',
        time: '2022-05-13',
      },
      {
        id: 2,
        user_id: 2,
        nameFool: 'Bún bò trộn2',
        time: '2022-05-14',
      },
      {
        id: 3,
        user_id: 3,
        nameFool: 'Bún bò trộn3',
        time: '2022-05-15',
      },
      {
        id: 4,
        user_id: 4,
        nameFool: 'Bún bò trộn4',
        time: '2022-05-14',
      },
      {
        id: 5,
        user_id: 5,
        nameFool: 'Bún bò trộn5',
        time: '2022-05-15',
      },
      {
        id: 6,
        user_id: 6,
        nameFool: 'Bún bò trộn6',
        time: '2022-05-13',
      },
      {
        id: 7,
        user_id: 1,
        nameFool: 'Bún bò trộn7',
        time: '2022-05-19',
      },
      {
        id: 8,
        user_id: 2,
        nameFool: 'Bún bò trộn8',
        time: '2022-05-15',
      },
      {
        id: 9,
        user_id: 3,
        nameFool: 'Bún bò trộn9',
        time: '2022-05-15',
      },
    ];
    const users = [
      {
        id: 1,
        data_id: 1,
        name: 'doan1',
        avatar:
          'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
      },
      {
        id: 2,
        data_id: 1,
        name: 'doan2',
        avatar:
          'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png',
      },
      {
        id: 2,
        data_id: 1,
        name: 'doan3',
        avatar:
          'https://www.chapter3d.com/wp-content/uploads/2020/06/ky-thuat-chup-anh-nhiep-anh.jpg',
      },
      {
        id: 3,
        data_id: 1,
        name: 'doan4',
        avatar:
          'https://chiasemeohay.com/wp-content/uploads/2016/04/MG_0294.jpg',
      },
      {
        id: 4,
        data_id: 2,
        name: 'doan4',
        avatar:
          'https://chiasemeohay.com/wp-content/uploads/2016/04/MG_0294.jpg',
      },
      {
        id: 5,
        data_id: 2,
        name: 'doan4',
        avatar:
          'https://chiasemeohay.com/wp-content/uploads/2016/04/MG_0294.jpg',
      },
      {
        id: 6,
        data_id: 3,
        name: 'doan4',
        avatar:
          'https://chiasemeohay.com/wp-content/uploads/2016/04/MG_0294.jpg',
      },
    ];
    const idUser = dataFood.map(item => {
      if (item.time == time.date.dateString) {
        return item.user_id;
      }
    });
    let dataUser: any = [];
    users.filter(user => {
      for (let i = 0; i < idUser.length; i++) {
        if (user.id == idUser[i]) {
          dataUser.push(user);
        }
      }
    });
    let dataMeal: any = [];
    dataUser.map((user: any) => {
      for (let i = 0; i < dataFood.length; i++) {
        if (
          user.id == dataFood[i].user_id &&
          dataFood[i].time == time.date.dateString
        ) {
          dataMeal.push(dataFood[i]);
        }
      }
    });
    console.log(dataMeal);

    return (
      <View style={styles.mContainer}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Chi tiết suất ăn "
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={[styles.listData, styles.flexCenter]}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: '700'}}>
                    {time.day_name}, Ngày {time.date.day}/{time.date.month}/
                    {time.date.year}
                  </Text>
                  <Text>Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Text style={styles.textNumber}>4</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    suất
                  </Text>
                </View>
              </View>

              <View style={styles.hr}></View>

              <MealStatistics data={dataMeal} />
              <View
                style={{
                  marginHorizontal: 20,
                }}>
                {/* text chi tiết */}
                <View
                  style={[
                    styles.flexCenter,
                    {
                      marginTop: 20,
                    },
                  ]}>
                  <Text style={styles.text}>Danh sách người nhận suất ăn</Text>
                </View>

                <ListMealRecipient dataUser={dataUser} />

                <View>
                  <Text style={styles.tt}>Thực đơn</Text>
                  <ListOfMeals />
                </View>

                <View style={styles.tt}>
                  <Text style={{fontSize: 16}}>Giá </Text>
                  <Text style={styles.ttMeal}>30.000 vnđ</Text>
                </View>
              </View>

              <View style={styles.headerr}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>Đánh giá</Text>
                <TouchableOpacity
                  style={styles.next}
                  onPress={() =>
                    this.props.navigation?.navigate(ScreenName.DetailReview)
                  }>
                  <Text>Xem tất cả</Text>
                  <Icon name="right" size={10} color={'black'} />
                </TouchableOpacity>
              </View>
              {/* tổng đánh giá */}
              <Review />

              {/* đánh giá của từng người */}
              <CommentAndReview />
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //
  mContainer: {
    flex: 1,
  },

  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },

  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listData: {
    marginTop: sizes._20sdp,
    paddingVertical: 15,
    marginHorizontal: sizes._20sdp,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4D4B4B',
    marginTop: 10,
  },

  tt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  ttMeal: {
    fontSize: 16,
    fontWeight: '500',
    color: '#D30026',
  },
  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: sizes._20sdp,
    marginTop: 10,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: '800',
  },
  td: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4B4B',
    marginTop: 20,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    opacity: 0.2,
    marginVertical: 10,
  },
});
