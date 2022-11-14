import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../../res/images';

export default class ListMealNoTecipientYet extends Component {
  render() {
    return (
      <View style={{marginTop: 10}}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Chưa có người nhận
          </Text>
          <TouchableOpacity style={styles.next}>
            <Text>Xem tất cả</Text>
            <Icon name="right" size={10} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.displayFlex}>
          <View style={styles.displayFlex}>
            <View style={styles.today}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 24,
                }}>
                20
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Thứ 3
              </Text>
            </View>

            <View>
              <Text style={styles.textLunch}>
                Bữa trưa <Image source={images.dropdown} />
              </Text>
              <Text style={{marginHorizontal: sizes._10sdp}}>
                Giá :{' '}
                {Number(30000)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                vnđ
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.gotMore}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '400'}}>
                Hủy nhận xuất
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.displayFlex}>
          <TouchableOpacity>
            <Text style={styles.detail}>
              Xem chi tiết <Icon name="right" size={14} />{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.displayFlex}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://aphoto.vn/wp-content/uploads/2016/08/chup-hinh-nguoc-nang-dep.jpg',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: 'https://nguyenkim.com/images/companies/_1/Content/tin-tuc/may-anh-quay-phim/neu-thac-mac-cam-may-anh-chup-gai-khong-dep-bang-thang-xai-dien-thoai-thi-hay-doc-ngay-bai-nay-01.jpg',
                }}
              />

              <Text style={styles.tt}>+3</Text>
            </View>

            <Text style={{marginLeft: 5, fontSize: 14}}>05 người đã nhận</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.7,
            opacity: 0.6,
            marginVertical: 10,
          }}></View>
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
    backgroundColor: '#1EA162',
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
});
