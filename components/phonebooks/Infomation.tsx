import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sizes from '../../res/sizes';
import Checkbox from '../../components/phonebooks/checkboxcomponent';
import AppHeader from '../AppHeader';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
interface Props {
  navigation?: any;
}
export default class Information extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader back={true} title={true} textTittle="Chi tiết danh bạ" />
        <View style={styles.viewChose}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://nld.mediacdn.vn/291774122806476800/2022/3/18/1-16476006017451762464477.jpg',
              }}
              style={styles.cirleShape}
            />
          </View>
          <View style={{marginLeft: 10, marginTop: 30}}>
            <Text style={styles.textinfor}>Putin</Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>Tổng giám đốc</Text>
          </View>
          <View style={styles.highline}></View>
          <View style={styles.iconItem}>
            <View>
              <View style={[styles.iconBackroundItem]}>
                <MaterialCommunityIcons
                  name="phone-in-talk"
                  size={sizes._24sdp}
                  color="#676565"
                />
              </View>
            </View>
            <View>
              <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
                <MaterialCommunityIcons
                  name="cellphone-message"
                  size={sizes._24sdp}
                  color="#676565"
                />
              </View>
            </View>
            <View>
              <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
                <MaterialCommunityIcons
                  name="email"
                  size={sizes._24sdp}
                  color="#676565"
                />
              </View>
            </View>
            <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
              <Ionicons name="heart" size={sizes._24sdp} color="#676565" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 60,
              marginLeft: 40,
              marginRight: 8,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>Gọi</Text>
            <Text style={{fontSize: 16, marginLeft: 15}}>SMS</Text>
            <Text style={{fontSize: 16, marginLeft: 15}}>Email</Text>
            <Text style={{fontSize: 16}}>Yêu thích</Text>
          </View>
          <View style={styles.highline1}></View>
          <View style={{flexDirection: 'column', marginLeft: 30}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', padding: 15}}>
                <Text style={{marginBottom: 8}}>
                  Email: Honm@viettel.com.vn
                </Text>
                <Text style={{marginBottom: 8}}>Điện thoại: 0978453545</Text>
                <Text style={{marginBottom: 8}}>Mã nhân viên: 098438</Text>
                <Text style={{marginBottom: 8}}>Giới tính: Nam</Text>
                <Text style={{marginBottom: 8}}>Năm Sinh: 1979</Text>
                <Text>
                  Đơn vị: Ban Tổng Giám đốc - Tổng Công ty Giải pháp Doanh
                  nghiệp Viettel
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.highline1}></View>
          <View style={{marginLeft: 20, flexDirection: 'row'}}>
            <Checkbox />
            <Text style={{marginTop: 10}}>Nhắc sinh nhật</Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 193,
              height: 48,
              borderRadius: 70,
              backgroundColor: '#727070',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation?.goBack();
            }}>
            <Text style={{color: '#ffff'}}>Thêm danh bạ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  highline1: {
    marginLeft: 30,
    width: 340,
    borderWidth: 0.2,
    borderColor: '#A3ACB2',
    marginTop: 10,
  },
  highline: {
    marginLeft: 30,
    width: 340,
    borderWidth: 0.2,
    borderColor: '#A3ACB2',
    marginTop: 10,
  },
  iconBackroundItem: {
    top: 175,
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconItem: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 90,
  },
  cirleShape: {
    marginTop: 40,
    width: 123,
    height: 123,
    borderRadius: 70,
    backgroundColor: '#ffff',
  },

  textinfor: {
    marginLeft: 10,
    fontSize: 20,
    lineHeight: 27,
    color: '#000',
  },
  textName: {
    marginLeft: 10,
    fontSize: 20,
    lineHeight: 27,
    color: '#ffff',
  },
  viewChose: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
