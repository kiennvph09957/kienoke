import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import images from '../../../../res/images';
import sizes from './../../../../res/sizes';
interface Props {
  type: any;
}
export default class InfoGeneral extends Component<Props> {
  render() {
      
    const data = [
      {
        field: 'Vận chuyển1',
        address: 'Số 200 Nguyễn Sơn, P.Bồ Đề, Q.Long Biên, Hà Nội1',
        business: 'Vận tải hàng không1',
        business_name: 'Tổng công ty Hàng không Việt Nam1',
        business_type: 'Cổ phần nhà nước1',
        code: '01001075281',
        customers: 'TCT - KHDN trong nước1',
        data_id: 1,
        email: 'Telesale@vietnamailine.com1',
        founding_date: '27/05/20221',
        id: 1,
        number_GPKD: ' 01 001 075 281',
        phone: '237894759801',
        status: 1,
        unit_name: 'Trung tâm bán hàng doanh nghiệp1',
        website: 'https: //www.vietnamarlines.com */1',
      },
      {
        field: 'Vận chuyển2',
        address: 'Số 200 Nguyễn Sơn, P.Bồ Đề, Q.Long Biên, Hà Nội2',
        business: 'Vận tải hàng không2',
        business_name: 'Tổng công ty Hàng không Việt Nam2',
        business_type: 'Cổ phần nhà nước2',
        code: '01001075282',
        customers: 'TCT - KHDN trong nước2',
        data_id: 2,
        email: 'Telesale@vietnamailine.com2',
        founding_date: '27/05/20222',
        id: 2,
        number_GPKD: ' 01 001 075 282',
        phone: '237894759802',
        status: 1,
        unit_name: 'Trung tâm bán hàng doanh nghiệp2',
        website: 'https: //www.vietnamarlines.com */2',
      },
      {
        field: 'Vận chuyển3',
        address: 'Số 200 Nguyễn Sơn, P.Bồ Đề, Q.Long Biên, Hà Nội3',
        business: 'Vận tải hàng không3',
        business_name: 'Tổng công ty Hàng không Việt Nam3',
        business_type: 'Cổ phần nhà nước3',
        code: '01001075283',
        customers: 'TCT - KHDN trong nước3',
        data_id: 3,
        email: 'Telesale@vietnamailine.com3',
        founding_date: '27/05/20223',
        id: 3,
        number_GPKD: ' 01 001 075 283',
        phone: '237894759803',
        status: 1,
        unit_name: 'Trung tâm bán hàng doanh nghiệp3',
        website: 'https: //www.vietnamarlines.com */3',
      },
      {
        field: 'Vận chuyển4',
        address: 'Số 200 Nguyễn Sơn, P.Bồ Đề, Q.Long Biên, Hà Nội4',
        business: 'Vận tải hàng không4',
        business_name: 'Tổng công ty Hàng không Việt Nam4',
        business_type: 'Cổ phần nhà nước4',
        code: '01001075284',
        customers: 'TCT - KHDN trong nước4',
        data_id: 4,
        email: 'Telesale@vietnamailine.com4',
        founding_date: '27/05/20224',
        id: 4,
        number_GPKD: ' 01 001 075 284',
        phone: '237894759804',
        status: 1,
        unit_name: 'Trung tâm bán hàng doanh nghiệp4',
        website: 'https: //www.vietnamarlines.com */4',
      },
    ];
    return (
      <>
        {data.map((item: any) => {
          if (item.data_id == this.props.type) {
            return (
              <View style={styles.box}>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Tên doanh nghiệp/tổ chức :{' '}
                    <Text style={{color: 'black'}}>{item.business_name}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Ngày thành lập :{' '}
                    <Text style={{color: 'black'}}>{item.founding_date}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Loại doanh nghiệp/ tổ chức :{' '}
                    <Text style={{color: 'black'}}> {item.business_type}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Địa chỉ chi tiết trụ sở chính :{' '}
                    <Text style={{color: 'black'}}> {item.address}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Đối tượng khách hàng :{' '}
                    <Text style={{color: 'black'}}> {item.customers}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Tên đơn vị :{' '}
                    <Text style={{color: 'black'}}> {item.unit_name}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Số GPKD/QĐTL :{' '}
                    <Text style={{color: 'black'}}> {item.number_GPKD}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Mã số thuế:{' '}
                    <Text style={{color: 'black'}}> {item.code}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Lĩnh vực :{' '}
                    <Text style={{color: 'black'}}> {item.field}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Ngành nghề kinh doanh:{' '}
                    <Text style={{color: 'black'}}> {item.business}</Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Tình trạng hoạt động :{' '}
                    <Text style={{color: 'black'}}>
                      {item == 0 ? 'Không hoạt động' : 'Hoạt động'}
                    </Text>
                  </Text>
                </View>
                <View style={styles.li}>
                  <Image
                    source={images.Ellipse111}
                    style={{width: 5, height: 5, marginRight: 10}}
                  />
                  <Text style={styles.liList}>
                    Điện thoại liên hệ:{' '}
                    <Text style={{color: 'black'}}> {item.phone}</Text>
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
                    Website :{' '}
                    <Text style={{color: 'black'}}> {item.website}</Text>
                  </Text>
                </View>
              </View>
            );
          }
        })}
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
