import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ScreenName} from '../../AppContainer';
import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';
import Icons from 'react-native-vector-icons/AntDesign';

import {Card, Searchbar} from 'react-native-paper';
import ic_add_file from '../../../assets/svgs/ic_add_file';
interface Props {
  navigation: any;
}

interface State {
  data: any;
  search: any;
}

export default class HomeScreen extends Component<Props, State> {
  state: State = {
    data: [
      {
        id: '1',
        name: 'Chuyển đối số lĩnh vực dầu khí PVI',
        unit: 'Khách hàng lớn',
        status: 'Đang thực hiện',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '2',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Đang thực hiện',
        progress: 'Xây dựng hệ thống Reputa',
        AM: 'Nguyễn Văn A',
        PM: 'Nguễn Văn Kiên',
      },
      {
        id: '3',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Chậm thông tin',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '4',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Đang thực hiện',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '5',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Chậm thông tin',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '6',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Chậm thông tin',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '7',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Nguy cơ chậm',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
      {
        id: '8',
        name: 'Bảo mật an toàn thông tin doanh nghiệp trên không gian mạng',
        unit: 'TT.CNTT',
        status: 'Đang thực hiện',
        progress: 'Xây dựng hệ thống vOffice',
        AM: 'Nguyễn Văn Sơn',
        PM: 'Đào Trọng Trình',
      },
    ],
    search: '',
  };
  format = (qty: number) => {
    return 0 < qty && qty < 10 ? `0${qty}` : qty;
  };

  render() {
    const {data} = this.state;

    return (
      <View style={{flex: 1}}>
        <AppHeader
          title
          textTittle={'Dự án'}
          back
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        <View style={styles.main}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                flexShrink: 1,
              }}>
              <TextInput
                style={styles.textInput}
                placeholder="Tên dự án"
                onChangeText={search => {
                  this.setState({search});
                }}
                value={this.state.search}
              />
              <Icons
                style={{top: sizes._32sdp, right: sizes._22sdp}}
                size={24}
                name="search1"
                color={'#727070'}></Icons>
            </View>
            <Text style={styles.text1}>
              Danh sách dự án ({this.format(this.state.data.length)})
            </Text>
            <View style={{paddingTop: sizes._90sdp}}>
              {data.map((item: any) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props?.navigation?.navigate(
                        ScreenName.Project_Details,
                        {
                          item: item,
                        },
                      )
                    }>
                    <Card
                      elevation={3}
                      style={{
                        margin: sizes._14sdp,
                        borderRadius: sizes._10sdp,
                      }}>
                      <View style={{padding: sizes._16sdp}}>
                        <Text style={styles.text}>
                          • Tên dự án:
                          <Text style={styles.text_}>{item?.name}</Text>
                        </Text>

                        <Text style={styles.text}>
                          • Đơn vị:
                          <Text style={styles.text_}>{item?.unit}</Text>
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={styles.text}>• Trạng thái:</Text>
                          {item?.status == 'Đang thực hiện' && (
                            <View style={styles.status}>
                              <Text style={styles.status_text}>
                                {item?.status}
                              </Text>
                            </View>
                          )}
                          {item?.status == 'Chậm thông tin' && (
                            <View style={styles.status1}>
                              <Text style={styles.status_text1}>
                                {item?.status}
                              </Text>
                            </View>
                          )}
                          {item?.status == 'Nguy cơ chậm' && (
                            <View style={styles.status2}>
                              <Text style={styles.status_text2}>
                                {item?.status}
                              </Text>
                            </View>
                          )}
                        </View>

                        <Text style={styles.text}>
                          • Tiến độ:
                          <Text style={styles.text_}>{item?.progress}</Text>
                        </Text>

                        <Text style={styles.text}>
                          • AM:
                          <Text style={styles.text_}>{item?.AM}</Text>
                        </Text>

                        <Text style={styles.text}>
                          • PM:
                          <Text style={styles.text_}>{item?.PM}</Text>
                        </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexShrink: 1,
  },
  main: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
    overflow: 'hidden',
  },
  textInput: {
    top: sizes._22sdp,
    width: '92%',
    height: sizes._48sdp,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: sizes._22sdp,
    borderColor: '#A3ACB2',
    left: sizes._18sdp,
    fontStyle: 'italic',
    fontSize: 17,
  },
  text1: {
    top: sizes._94sdp,
    left: sizes._18sdp,
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#817E7E',
    marginVertical: sizes._5sdp,
  },
  text_: {
    color: '#727070',
  },

  status_text: {
    color: '#07669B',
    fontSize: 16,
    fontWeight: '400',
  },
  status: {
    backgroundColor: '#CEEEFF',
    borderRadius: sizes._30sdp,
    borderWidth: sizes._1sdp,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: sizes._148sdp,
    height: sizes._38sdp,
    marginLeft: sizes._8sdp,
    borderColor: '#07669B',
  },

  status_text1: {
    color: '#ED1B2F',
    fontSize: 16,
    fontWeight: '400',
  },
  status1: {
    backgroundColor: '#FFF3F4',
    borderRadius: sizes._30sdp,
    borderWidth: sizes._1sdp,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: sizes._148sdp,
    height: sizes._38sdp,
    marginLeft: sizes._8sdp,
    borderColor: '#ED1B2F',
  },
  status_text2: {
    color: '#CB6608',
    fontSize: 16,
    fontWeight: '400',
  },
  status2: {
    backgroundColor: '#FFFEE4',
    borderRadius: sizes._30sdp,
    borderWidth: sizes._1sdp,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: sizes._148sdp,
    height: sizes._38sdp,
    marginLeft: sizes._8sdp,
    borderColor: '#CB6608',
  },
});
