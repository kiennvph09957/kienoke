import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../../components/AppHeader';
import sizes from '../../../../res/sizes';
import images from '../../../../res/images';
import ModalSetting from '../../Modal/ModalSetting';
interface Props {
  navigation: any;
}
interface State {
  checkButton: any;
}
export default class HealthCheckupSchedule extends Component<Props, State> {
  state: State = {
    checkButton: false,
  };
  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Lịch sử khám sức khoẻ</Text>
      <TouchableOpacity>
        <Image source={images.home_page1} style={{marginRight: sizes._20sdp}} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const data = [
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp1',
        health: 1,
        id: 1,
        name: 'Bệnh viện ĐKQT VinMec1',
        time: '25/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp2',
        health: 2,
        id: 2,
        name: 'Bệnh viện ĐKQT VinMec2',
        time: '26/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp3',
        health: 3,
        id: 3,
        name: 'Bệnh viện ĐKQT VinMec3',
        time: '27/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp4',
        health: 4,
        id: 4,
        name: 'Bệnh viện ĐKQT VinMec4',
        time: '28/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp5',
        health: 5,
        id: 5,
        name: 'Bệnh viện ĐKQT VinMec5',
        time: '29/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp6',
        health: 6,
        id: 6,
        name: 'Bệnh viện ĐKQT VinMec6',
        time: '30/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp7',
        health: 7,
        id: 7,
        name: 'Bệnh viện ĐKQT VinMec7',
        time: '31/05/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp8',
        health: 8,
        id: 8,
        name: 'Bệnh viện ĐKQT VinMec8',
        time: '1/06/2022',
      },
      {
        conclude:
          'Cận loạn thị, đáy mắt cận, viêm amidan mã tính, tiền sử viêm dạ dày cấp9',
        health: 9,
        id: 9,
        name: 'Bệnh viện ĐKQT VinMec9',
        time: '2/06/2022',
      },
    ];
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <AppHeader
          back
          contentCustom
          onBackPress={() => this.props.navigation.goBack()}
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.list}>
                <Text style={styles.titleMain}>
                  Danh sách khám sức khỏe ({data.length})
                </Text>
                {data.map(item => (
                  <View key={item.id}>
                    <View
                      style={[
                        styles.flex,
                        styles.headerList,
                        {justifyContent: 'space-between'},
                      ]}>
                      <Text
                        style={[
                          styles.titleList,
                          {
                            fontSize: 18,
                          },
                        ]}>
                        Khám định kỳ
                      </Text>
                      <Text
                        style={[
                          styles.titleList,
                          {
                            fontSize: 16,
                          },
                        ]}>
                        {item.time}
                      </Text>
                    </View>
                    <View>
                      <View
                        style={[
                          styles.flex,
                          {
                            marginVertical: sizes._5sdp,
                          },
                        ]}>
                        <Image
                          source={images.Group1672}
                          style={{marginRight: 10}}
                        />
                        <Text style={styles.text}>Bệnh viện: {item.name}</Text>
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.flex,
                          {
                            justifyContent: 'space-between',
                          },
                        ]}>
                        <View
                          style={[
                            styles.flex,
                            {
                              marginVertical: sizes._5sdp,
                            },
                          ]}>
                          <Image
                            source={images.Group1669}
                            style={{marginRight: 10}}
                          />
                          <Text style={styles.text}>
                            Sức khỏe: {item.health}
                          </Text>
                        </View>
                        <Image source={images.arrow_right} />
                      </TouchableOpacity>

                      <View
                        style={[
                          styles.flex,
                          {
                            marginVertical: sizes._5sdp,
                          },
                        ]}>
                        <Image
                          source={images.Group1671}
                          style={{marginRight: 10}}
                        />
                        <Text style={[styles.text, {flexShrink: 1}]}>
                          Kết luận: <Text>{item.conclude}</Text>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.hr}></View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        {this.state.checkButton == false && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({checkButton: true})}>
            <Image source={images.Group1746} />
          </TouchableOpacity>
        )}
        <ModalSetting
          checkButton={this.state.checkButton}
          navigation={this.props.navigation}
          click={() => this.setState({checkButton: !this.state.checkButton})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
    overflow: 'hidden',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerList: {
    backgroundColor: '#E9E9E9',
    borderRadius: 30,
    paddingHorizontal: sizes._15sdp,
    paddingVertical: sizes._15sdp,
    marginVertical: sizes._20sdp,
  },
  list: {
    marginHorizontal: sizes._20sdp,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  titleMain: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  titleList: {
    fontWeight: '600',
    color: '#727070',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
});
