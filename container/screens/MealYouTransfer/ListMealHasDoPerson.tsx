import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import sizes from '../../../res/sizes';
import images from '../../../res/images';
import {ScreenName} from '../../AppContainer';
import ListMealNoTecipientYet from './ListMealNoTecipientYet';

interface Props {
  navigation?: any;
  data_id: any;
}
export default class ListMealHasDoPerson extends Component<Props> {
  render() {
    const data = [
      {
        id: 1,
        data_id: '1',
        name: 'Bữa trưa1',
        price: 20000,
        status: 1,
        day: 20,
        thu: 3,
      },
      {
        id: 2,
        data_id: '1',
        name: 'Bữa trưa2',
        price: 30000,
        status: 1,
        day: 21,
        thu: 4,
      },
      {
        id: 3,
        data_id: '1',
        name: 'Bữa trưa3',
        price: 40000,
        status: 1,
        day: 22,
        thu: 5,
      },
      {
        id: 4,
        data_id: '1',
        name: 'Bữa trưa4',
        price: 50000,
        status: 1,
        day: 23,
        thu: 6,
      },
      {
        id: 5,
        data_id: '1',
        name: 'Bữa trưa5',
        price: 60000,
        status: 1,
        day: 24,
        thu: 7,
      },
      {
        id: 6,
        data_id: '2',
        name: 'Bữa trưa6',
        price: 60000,
        status: 1,
        day: 24,
        thu: 7,
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
          'https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg',
      },
      {
        id: 3,
        data_id: 1,
        name: 'doan3',
        avatar:
          'https://www.chapter3d.com/wp-content/uploads/2020/06/ky-thuat-chup-anh-nhiep-anh.jpg',
      },
      {
        id: 4,
        data_id: 1,
        name: 'doan4',
        avatar:
          'https://chiasemeohay.com/wp-content/uploads/2016/04/MG_0294.jpg',
      },
      {
        id: 5,
        data_id: 2,
        name: 'doan5',
        avatar:
          'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png',
      },
      {
        id: 6,
        data_id: 2,
        name: 'doan6',
        avatar:
          'https://duongducchanh.com/wp-content/uploads/2019/10/DCI_7394cc.jpg',
      },
      {
        id: 7,
        data_id: 3,
        name: 'doan7',
        avatar:
          'https://v5m6g2b4.rocketcdn.me/wp-content/uploads/2020/12/3edae1dd0a.jpeg',
      },
      {
        id: 8,
        data_id: 1,
        name: 'doan8',
        avatar:
          'https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA',
      },
    ];
    const dataNew = data.filter(item => item.data_id == this.props.data_id);

    let newData: any = [];
    dataNew.map(item => {
      users.filter(user => {
        if (user.data_id == item.id) {
          newData.push(user);
        }
      });
    });

    // ghép những mảng có data_id trùng nhau vào 1 nhóm
    const outObject = newData.reduce(function (a: any, e: any) {
      let estKey = e['data_id'];

      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});

    return (
      <View style={{marginTop: 10, marginHorizontal: sizes._20sdp}}>
        {dataNew.length > 0 ? (
          <>
            <View style={styles.header}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                Đã có người nhận
              </Text>
              <TouchableOpacity style={styles.next}>
                <Text>Xem tất cả</Text>
                <Icon name="right" size={10} color={'black'} />
              </TouchableOpacity>
            </View>
            {dataNew.map((item: any) => {
              for (let i = 0; i < Object.keys(outObject).length; i++) {
                if (item.id == Object.keys(outObject)[i]) {
                  const valueUser: any = Object.values(outObject)[i];
                  
                  return (
                    <View key={item.id}>
                      <View style={styles.displayFlex}>
                        <View style={styles.displayFlex}>
                          <View style={styles.today}>
                            <Text style={styles.day}>{item.day}</Text>
                            <Text style={styles.thu}>Thứ {item.thu}</Text>
                          </View>

                          <View>
                            <Text style={styles.textLunch}>{item.name}</Text>
                            <Text style={{marginHorizontal: sizes._10sdp}}>
                              Giá :{' '}
                              {Number(item.price)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                              vnđ
                            </Text>
                          </View>
                        </View>

                        <TouchableOpacity style={styles.gotMore}>
                          <Text style={styles.cancel}>Hủy chuyển xuất</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.displayFlex}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation?.navigate(ScreenName.Detail, {
                              id: item.id,
                              user:valueUser
                            })
                          }>
                          <Text style={styles.detail}>
                            Xem chi tiết <Icon name="right" size={14} />{' '}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.displayFlex}>
                          <View style={{flexDirection: 'row'}}>
                            {valueUser.map((user: any, index: any) => {
                              if (valueUser.length > 4) {
                                if (index < 3) {
                                  return (
                                    <Image
                                      style={styles.image}
                                      source={{
                                        uri: `${user.avatar}`,
                                      }}
                                    />
                                  );
                                }
                              } else {
                                return (
                                  <Image
                                    style={styles.image}
                                    source={{
                                      uri: `${user.avatar}`,
                                    }}
                                  />
                                );
                              }
                            })}
                          </View>
                          {valueUser.length > 4 ? (
                            <Text style={styles.tt}>
                              +{valueUser.length - 3}
                            </Text>
                          ) : (
                            <></>
                          )}
                          <Text style={{marginLeft: 5, fontSize: 14}}>
                            {valueUser.length} người đã nhận
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.hr}></View>
                    </View>
                  );
                }
              }
            })}

            <ListMealNoTecipientYet />
          </>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={images.koco1} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes._20sdp,
  },

  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  today: {
    backgroundColor: '#F8455B',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
  },

  textLunch: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: sizes._10sdp,
    marginVertical: sizes._10sdp,
    fontFamily: 'vincHand',
    textTransform: 'capitalize',
  },
  gotMore: {
    borderRadius: 20,
    backgroundColor: '#D20B2E',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  detail: {
    marginTop: sizes._10sdp,
    fontSize: 14,
    fontWeight: '600',
  },

  image: {
    width: 22,
    height: 22,
    borderRadius: 20,
    marginLeft: -10,
    borderColor: '#676563',
    borderWidth: 1,
  },
  tt: {
    backgroundColor: '#44CBC6',
    width: 22,
    height: 22,
    borderRadius: 20,
    marginLeft: -10,
    borderColor: 'rgb(225, 225, 225)',
    borderWidth: 1,
    paddingLeft: 2,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    opacity: 0.1,
    marginVertical: 10,
  },
  day: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 24,
  },
  thu: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  cancel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});
