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
import {ScreenName} from '../../AppContainer';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import AppHeader from '../../../components/AppHeader';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  navigation: any;
}
interface State {
  data: any;
}
export default class Kitchen_list extends Component<Props, State> {
  state: State = {
    data: [
      {
        id: 1,
        name: 'Bếp ăn Tập đoàn1',
        address: 'Trụ sở số 1, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
      {
        id: 2,
        name: 'Bếp ăn Tập đoàn2',
        address: 'Trụ sở số 12, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
      {
        id: 3,
        name: 'Bếp ăn Tập đoàn3',
        address: 'Trụ sở số 13, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
      {
        id: 4,
        name: 'Bếp ăn Tập đoàn4',
        address: 'Trụ sở số 14, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
      {
        id: 5,
        name: 'Bếp ăn Tập đoàn5',
        address: 'Trụ sở số 15, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
      {
        id: 6,
        name: 'Bếp ăn Tập đoàn6',
        address: 'Trụ sở số 16, 212 Hồ Tùng Mậu, Nam Từ Liêm',
      },
    ],
  };

  render() {
    const {data} = this.state;

    return (
      <View style={{flex: 1}}>
        <AppHeader
          title
          textTittle={'Lịch ăn định kỳ'}
          back
          onBackPress={() => this.props?.navigation?.goBack()}
        />

        <View style={styles.main}>
          <ScrollView>
            <View style={{marginHorizontal: sizes._20sdp}}>
              <View style={{marginTop: sizes._20sdp}}>
                <Image source={images.search} style={styles.search} />
                <TextInput
                  style={styles.input}
                  placeholder="Tìm kiếm bếp ăn... "
                />
              </View>
            </View>
            <View style={styles.gach}></View>

            {data.map((item: any) => {
              return (
                <View
                  style={{
                    marginHorizontal: sizes._20sdp,
                    marginVertical: sizes._10sdp,
                  }}>
                  <View style={styles.list}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props?.navigation?.navigate(ScreenName.Kitchen, {
                            item: item,
                          });
                        }}>
                        <Text style={{fontSize: 15, fontWeight: '600'}}>
                          {item.name}
                        </Text>

                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                          {item.address}
                        </Text>
                        <View
                          style={{
                            top: sizes._20sdp,
                            left: sizes._340sdp,
                            position: 'absolute',
                          }}>
                          <Icon
                            name="arrowright"
                            color={'#4D4B4B'}
                            size={24}></Icon>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingTop: sizes._65sdp,
                      borderBottomColor: 'black',
                      position: 'absolute',
                      borderBottomWidth: 0.2,
                      opacity: 0.2,
                      marginVertical: sizes._10sdp,
                      width: '92%',
                    }}></View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    paddingHorizontal: sizes._40sdp,
  },
  search: {
    position: 'absolute',
    left: sizes._10sdp,
    top: sizes._15sdp,
  },

  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFF',
    width: sizes._319sdp,
    height: sizes._70sdp,
  },
  gach: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    opacity: 0.2,
    marginVertical: sizes._10sdp,
  },
});
