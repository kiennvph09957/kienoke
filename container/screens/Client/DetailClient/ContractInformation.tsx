import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
interface Props {
  type: any;
  data: any;
}
export default class ContractInformation extends Component<Props> {
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
                Tên hợp đồng :{' '}
                <Text style={{color: 'black'}}>{item.contract_name}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Số hợp đồng :{' '}
                <Text style={{color: 'black'}}>{item.some_contract}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Thời gian : <Text style={{color: 'black'}}> {item.time}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Trạng thái :{' '}
                <Text style={{color: 'black'}}>
                  {' '}
                  {item.status == 1 ? 'Đã ký' : 'Chưa ký'}
                </Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Giá trị hợp đồng:{' '}
                <Text style={{color: 'black'}}> {item.contract_value}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Ngày hiệu lực :{' '}
                <Text style={{color: 'black'}}> {item.time_start}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Hết hạn: <Text style={{color: 'black'}}> {item.time_end}</Text>
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
