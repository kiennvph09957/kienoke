import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../components/AppHeader';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScrollView} from 'react-native-gesture-handler';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation: any;
}
interface State {}
export default class CustomerLookup extends Component<Props, State> {
  renderHeader = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>Khách hàng</Text>
      <TouchableOpacity style={{marginRight: 20}}>
        <Image source={images.Groupa1} />
      </TouchableOpacity>
    </View>
  );
  render() {
    const data = [
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội1',
        date: '15/01/2001',
        email: 'quach123@gmail.com',
        id: 1,
        name: 'Tập Đoàn Dầu khí Việt Nam1',
        name_represent: 'Nguyễn Văn Quách1',
        phone: '0696229615',
        status: 1,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội2',
        date: '15/01/2002',
        email: 'quach123@gmail.com',
        id: 2,
        name: 'Tập Đoàn Dầu khí Việt Nam2',
        name_represent: 'Nguyễn Văn Quách2',
        phone: '0696229615',
        status: 1,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội3',
        date: '15/01/2003',
        email: 'quach123@gmail.com',
        id: 3,
        name: 'Tập Đoàn Dầu khí Việt Nam3',
        name_represent: 'Nguyễn Văn Quách3',
        phone: '0696229615',
        status: 1,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội4',
        date: '15/01/2004',
        email: 'quach123@gmail.com',
        id: 4,
        name: 'Tập Đoàn Dầu khí Việt Nam4',
        name_represent: 'Nguyễn Văn Quách4',
        phone: '0696229615',
        status: 0,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội5',
        date: '15/01/2005',
        email: 'quach123@gmail.com',
        id: 5,
        name: 'Tập Đoàn Dầu khí Việt Nam5',
        name_represent: 'Nguyễn Văn Quách5',
        phone: '0696229615',
        status: 0,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội6',
        date: '15/01/2006',
        email: 'quach123@gmail.com',
        id: 6,
        name: 'Tập Đoàn Dầu khí Việt Nam6',
        name_represent: 'Nguyễn Văn Quách6',
        phone: '0696229615',
        status: 1,
      },
      {
        address: ' P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy - Hà Nội7',
        date: '15/01/2007',
        email: 'quach123@gmail.com',
        id: 7,
        name: 'Tập Đoàn Dầu khí Việt Nam7',
        name_represent: 'Nguyễn Văn Quách7',
        phone: '0696229615',
        status: 0,
      },
    ];
    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          contentCustom
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.box}>
                <View style={{position: 'relative', width: '100%'}}>
                  <TextInput style={styles.input} placeholder="Tìm kiếm" />
                  <Image source={images.search} style={styles.search} />
                </View>

                <Text style={styles.titleList}>
                  Danh sách khách hàng ({data.length})
                </Text>
              </View>

              {data.map((item: any) => (
                <TouchableOpacity
                  style={styles.boxlist}
                  onPress={() =>
                    this.props.navigation?.navigate(ScreenName.DetailClient, {
                      id: item.id,
                      name: item.name,
                    })
                  }>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>
                      Địa chỉ :{' '}
                      <Text style={{color: 'black'}}> {item.address}</Text>
                    </Text>
                  </View>
                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>Trạng thái : </Text>

                    {item.status == 1 && (
                      <View style={styles.status}>
                        <Text style={styles.statusSuccessful}>
                          {' '}
                          Đang hợp tác
                        </Text>
                      </View>
                    )}
                    {item.status == 0 && (
                      <View style={[styles.status1, {borderColor: '#A3049C'}]}>
                        <Text style={styles.statusFail}> Dừng hợp tác</Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>
                      Đại diện pháp luật :{' '}
                      <Text style={{color: 'black'}}>
                        {item.name_represent}
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>
                      Ngày thành lâp :{' '}
                      <Text style={{color: 'black'}}>{item.date}</Text>
                    </Text>
                  </View>
                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>
                      Email : <Text style={{color: 'red'}}>{item.email}</Text>
                    </Text>
                  </View>
                  <View style={styles.li}>
                    <Image
                      source={images.Ellipse111}
                      style={{width: 5, height: 5, marginRight: 10}}
                    />
                    <Text style={styles.liList}>
                      Điện thoại :{' '}
                      <Text style={{color: 'black'}}>{item.phone}</Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
  input: {
    width: '100%',
    borderColor: '##A3ACB2',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 17,
  },
  box: {
    marginLeft: sizes._20sdp,
    marginRight: sizes._20sdp,
  },
  search: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  titleList: {
    color: '#4D4B4B',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: sizes._20sdp,
  },

  boxlist: {
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: '#fff',
    paddingHorizontal: sizes._30sdp,
    paddingVertical: sizes._10sdp,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4D4B4B',
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
  statusFail: {
    color: '#A3049C',
    fontSize: 16,
    fontWeight: '600',
  },
  status1: {
    backgroundColor: '#fff',
    paddingHorizontal: sizes._10sdp,
    paddingVertical: sizes._7sdp,
    borderRadius: 10,
    borderColor: '#108330',
    borderWidth: 1,
  },
});
