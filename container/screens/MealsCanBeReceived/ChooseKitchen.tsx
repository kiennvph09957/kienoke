import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenName} from '../../AppContainer';
import AppHeader from '../../../components/AppHeader';
interface Props {
  navigation: any;
}
interface State {
  data: any;
  pro_id: any;
}
export default class ChooseKitchen extends Component<Props, State> {
  state: State = {
    data: [
      {
        id: 1,
        name: 'Bếp ăn Tập đoàn1',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 1,
      },
      {
        id: 2,
        name: 'Bếp ăn Tập đoàn2',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 0,
      },
      {
        id: 3,
        name: 'Bếp ăn Tập đoàn3',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 0,
      },
      {
        id: 4,
        name: 'Bếp ăn Tập đoàn4',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 0,
      },
      {
        id: 5,
        name: 'Bếp ăn Tập đoàn5',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 0,
      },
      {
        id: 6,
        name: 'Bếp ăn Tập đoàn6',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
        status: 0,
      },
    ],
    pro_id: null,
  };
  setStatus = (item: any) => {
    if (item.status == 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === item.id) {
          this.state.data[i].status = 1;
          this.setState({data: this.state.data});
        }
      }
    } else if (item.status == 1) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === item.id) {
          this.state.data[i].status = 0;
          this.setState({data: this.state.data});
        }
      }
    }
  };
  render() {
    const {data} = this.state;

    return (
      <View style={styles.mContainer}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Chọn bếp ăn"
        />

        <View style={styles.main}>
          <SafeAreaView>
            <SafeAreaView>
              <ScrollView>
                <View style={{marginHorizontal: sizes._20sdp}}>
                  <View style={{position: 'relative', marginTop: 20}}>
                    <Image source={images.search} style={styles.search} />
                    <TextInput
                      style={styles.input}
                      placeholder="Tìm kiếm ..."
                    />
                    <Image source={images.Calendar} style={styles.calendar} />
                  </View>
                </View>

                <View style={styles.hr}></View>

                {data.map((item: any) => {
                  return (
                    <View
                      style={{
                        marginHorizontal: sizes._20sdp,
                        marginVertical: 10,
                      }}>
                      <View style={styles.list}>
                        <View style={{width: '60%'}}>
                          <Text style={{fontSize: 15, fontWeight: '600'}}>
                            {item.name}
                          </Text>
                          <Text style={{fontSize: 14, fontWeight: '400'}}>
                            {item.address}
                          </Text>
                        </View>

                        {item.status == 0 ? (
                          <View>
                            <TouchableOpacity
                              style={styles.gotMore}
                              onPress={() => (
                                this.setState({pro_id: item.id}),
                                this.setStatus(item)
                              )}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 16,
                                  fontWeight: '400',
                                }}>
                                Chọn
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <View>
                            <TouchableOpacity
                              style={styles.selected}
                              onPress={() => (
                                this.setState({pro_id: item.id}),
                                this.setStatus(item)
                              )}>
                              <Text
                                style={{
                                  color: '#D20B2E',
                                  fontSize: 16,
                                  fontWeight: '500',
                                }}>
                                Đang Chọn
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                      <View style={styles.hr}></View>
                    </View>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },

  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },

  input: {
    width: '100%',
    paddingHorizontal: sizes._40sdp,
  },
  search: {
    position: 'absolute',
    left: 8,
    top: 13,
  },
  calendar: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gotMore: {
    borderRadius: 20,
    backgroundColor: '#D20B2E',
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '100%',
  },
  selected: {
    borderRadius: 20,
    backgroundColor: '#F2F4F8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
});
