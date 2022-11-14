import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
interface Props {
  type: any;
  data: any;
}
export default class CustomercareInfo extends Component<Props> {
  render() {
    const dataNew = this.props.data.filter(
      (item: any) => item.data_id == this.props.type,
    );
    return (
      <>
        {dataNew.map((item: any) => (
          <View style={styles.box}>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Chiến dịch :{' '}
                <Text style={{color: 'black'}}>{item.campaign}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Loại hình chăm sóc :{' '}
                <Text style={{color: 'black'}}>{item.type_care}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Xếp hạng đơn vị :{' '}
                <Text style={{color: 'black'}}> {item.unit_rating}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Giá trị chăm sóc tập thể :{' '}
                <Text style={{color: 'black'}}>
                  {' '}
                  {item.value_collective_care}
                </Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Họ và Tên: <Text style={{color: 'black'}}> {item.name}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Chức vụ : <Text style={{color: 'black'}}> {item.position}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Đơn vị cấp 2:{' '}
                <Text style={{color: 'black'}}> {item.second_level_unit}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Số điện thoại:{' '}
                <Text style={{color: 'black'}}> {item.phone}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Vai trò: <Text style={{color: 'black'}}> {item.role}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Đơn vị tạo:{' '}
                <Text style={{color: 'black'}}> {item.generating_unit}</Text>
              </Text>
            </View>
          </View>
        ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: '#fff',
    paddingHorizontal: sizes._30sdp,
    paddingVertical: sizes._10sdp,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  li: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  liList: {
    fontSize: 16,
    fontWeight: '400',
  },
});
