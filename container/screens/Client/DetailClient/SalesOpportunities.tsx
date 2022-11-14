import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
interface Props {
  type: any;
  data: any;
}
export default class SalesOpportunities extends Component<Props> {
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
                Cơ hội :{' '}
                <Text style={{color: 'black'}}>{item.opportunity}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Đầu mối : <Text style={{color: 'black'}}>{item.clue}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Dịch vụ dự kiến :{' '}
                <Text style={{color: 'black'}}> {item.expected_service}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Giai đoạn kinh doanh :{' '}
                <Text style={{color: 'black'}}> {item.business_stage}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Ngày kết thúc dự kiến:{' '}
                <Text style={{color: 'black'}}> {item.expected_end_date}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Doanh thu dự kiến :{' '}
                <Text style={{color: 'black'}}> {item.expected_revenue}</Text>
              </Text>
            </View>
            <View style={styles.li}>
              <Image
                source={images.Ellipse111}
                style={{width: 5, height: 5, marginRight: 10}}
              />
              <Text style={styles.liList}>
                Mô tả : <Text style={{color: 'black'}}> {item.describe}</Text>
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
