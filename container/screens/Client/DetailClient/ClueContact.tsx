import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
interface Props {
  type: any;
  data: any;
}
export default class ClueContact extends Component<Props> {
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
                Họ và Tên : <Text style={{color: 'black'}}>{item.name}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Chức vụ : <Text style={{color: 'black'}}>{item.position}</Text>
              </Text>
            </View>

            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Ngày sinh :{' '}
                <Text style={{color: 'black'}}> {item.birthday}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Địa chỉ : <Text style={{color: 'black'}}> {item.address}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Email : <Text style={{color: 'black'}}> {item.email}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Điện thoại : <Text style={{color: 'black'}}> {item.phone}</Text>
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
  status: {
    backgroundColor: 'aqua',
    paddingHorizontal: sizes._10sdp,
    paddingVertical: sizes._7sdp,
    borderRadius: 10,
    borderColor: '#108330',
    borderWidth: 1,
  },
  statusSuccessful: {
    color: '#108330',
    fontSize: 16,
    fontWeight: '600',
  },
});
