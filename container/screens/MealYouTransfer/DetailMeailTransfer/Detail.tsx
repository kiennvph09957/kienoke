import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../../res/sizes';
import ListOfMeals from '../ListOfMeals';
import ListMealRecipient from './ListMealRecipient';
import AppHeader from '../../../../components/AppHeader';
interface Props {
  navigation: any;
}
interface State {}
export default class Detail extends Component<Props, State> {
  render() {
    const {state} = this.props.navigation;
    const data = [
      {
        id: 1,
        name: 'Bữa trưa1',
        price: 20000,
        status: 1,
        date: 20,
        day: 3,
        month: 6,
        year: 2022,
      },
      {
        id: 2,
        name: 'Bữa trưa2',
        price: 30000,
        status: 1,
        date: 21,
        day: 4,
        month: 6,
        year: 2022,
      },
      {
        id: 3,
        name: 'Bữa trưa3',
        price: 40000,
        status: 1,
        date: 22,
        day: 5,
        month: 6,
        year: 2022,
      },
      {
        id: 4,
        name: 'Bữa trưa4',
        price: 50000,
        status: 1,
        date: 23,
        day: 6,
        month: 6,
        year: 2022,
      },
      {
        id: 5,
        name: 'Bữa trưa5',
        price: 60000,
        status: 1,
        date: 24,
        day: 7,
        month: 6,
        year: 2022,
      },
    ];
    const dataChoose: any = data.find(item => item.id == state.params.id);
    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Chi tiết suất ăn"
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={{marginHorizontal: 20}}>
                <View style={styles.listData}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: '700'}}>
                        Thứ {dataChoose.day}, Ngày {dataChoose.date}/
                        {dataChoose.month}/{dataChoose.year}
                      </Text>
                      <Text>Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm</Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    4 suất
                  </Text>
                </View>
              </View>

              <View style={styles.hr}></View>

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
                  <Text style={styles.text}>Danh sách người nhận suất ăn</Text>
                </View>

                <ListMealRecipient data={state.params.user} />

                <View>
                  <Text style={styles.td}>Thực đơn</Text>
                  <ListOfMeals />
                </View>

                <View style={styles.tt}>
                  <Text style={styles.ttMeal}>Loại</Text>
                  <Text style={styles.ttMeal}>Bữa ăn</Text>
                </View>
                <View style={styles.tt}>
                  <Text style={styles.ttMeal}>Ngày ăn</Text>
                  <Text style={styles.ttMeal}>
                    Hôm nay {dataChoose.date}/{dataChoose.month}/
                    {dataChoose.year}
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
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  listData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes._20sdp,
    paddingVertical: 15,
  },

  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4D4B4B',
  },

  tt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  ttMeal: {
    fontSize: 16,
    fontWeight: '400',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
  td: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4B4B',
    marginTop: 30,
  },
});
