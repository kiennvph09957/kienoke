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
// import List_Project from './List_Project';
import {Card, Title, Paragraph} from 'react-native-paper';
interface Props {
  navigation: any;
}

interface State {
  data: any;
}

export default class HomeScreen extends Component<Props, State> {
  state: State = {
    data: [
      {
        idd: '1',
        name1: 'Giai đoạn 1',
        stagename: 'demo',
        implementation: '15/11/2021',
        unit: 'TTCNTT',
        responsible: 'Nguyễn Ngọc Sơn',
        startday: '15/11/2021',
        endday: '31/12/2021',
      },
      {
        idd: '2',
        name1: 'Giai đoạn 2',
        stagename: 'demo',
        implementation: '15/11/2021',
        unit: 'TTCNTT',
        responsible: 'Nguyễn Văn Sơn',
        startday: '15/11/2021',
        endday: '31/12/2021',
      },
      {
        idd: '3',
        name1: 'Giai đoạn 3',
        stagename: 'demo',
        implementation: '15/11/2021',
        unit: 'TTCNTT',
        responsible: 'Nguyễn Văn Kiên',
        startday: '15/11/2021',
        endday: '31/12/2021',
      },
    ],
  };
  format = (qty: number) => {
    return 0 < qty && qty < 10 ? `0${qty}` : qty;
  };
  render() {
    const {data} = this.state;
    const {state} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <AppHeader
          title
          textTittle={'Chi tiết dự án'}
          back
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        <View style={styles.main}>
          <ScrollView>
            <View style={{paddingLeft: sizes._24sdp, marginTop: sizes._20sdp}}>
              <Text style={styles.text}>
                • Tên dự án:
                <Text style={styles.text_}>{state.params.item.name}</Text>
              </Text>
              <Text style={styles.text}>
                • Đơn vị:
                <Text style={styles.text_}>{state.params.item.unit}</Text>
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>• Trạng thái:</Text>
                {state.params.item.status == 'Đang thực hiện' && (
                  <View style={styles.status}>
                    <Text style={styles.status_text}>
                      {state.params.item.status}
                    </Text>
                  </View>
                )}
                {state.params.item.status == 'Chậm thông tin' && (
                  <View style={styles.status1}>
                    <Text style={styles.status_text1}>
                      {state.params.item.status}
                    </Text>
                  </View>
                )}
                {state.params.item.status == 'Nguy cơ chậm' && (
                  <View style={styles.status2}>
                    <Text style={styles.status_text2}>
                      {state.params.item.status}
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.text}>
                • AM <Text style={styles.text_}>{state.params.item.AM}</Text>
              </Text>
              <Text style={styles.text}>
                • PM <Text style={styles.text_}>{state.params.item.PM}</Text>
              </Text>
            </View>
            <Text style={styles.text1}>
              Danh sách Milestone theo dự án (
              {this.format(this.state.data.length)})
            </Text>

            <View style={{paddingTop: sizes._15sdp}}>
              {data.map((item: any) => {
                return (
                  <Card
                    elevation={3}
                    style={{
                      margin: sizes._14sdp,
                      borderRadius: sizes._10sdp,
                    }}>
                    <View style={{padding: sizes._16sdp}}>
                      <Text style={styles.text}>
                        • Tên Milestone:
                        <Text style={styles.text_}>{item?.name1}</Text>
                      </Text>

                      <Text style={styles.text}>
                        • Tên giai đoạn:
                        <Text style={styles.text_}>{item?.stagename}</Text>
                      </Text>

                      <Text style={styles.text}>
                        • Tiến độ thực hiện:
                        <Text style={styles.text_}>{item?.implementation}</Text>
                      </Text>

                      <Text style={styles.text}>
                        • Đơn vị:
                        <Text style={styles.text_}>{item?.unit}</Text>
                      </Text>

                      <Text style={styles.text}>
                        • Người chịu trách nhiệm:
                        <Text style={styles.text_}>{item?.responsible}</Text>
                      </Text>

                      <Text style={styles.text}>
                        • Ngày bắt đầu:
                        <Text style={styles.text_}>{item?.startday}</Text>
                      </Text>
                      <Text style={styles.text}>
                        • Ngày kết thúc:
                        <Text style={styles.text_}>{item?.endday}</Text>
                      </Text>
                    </View>
                  </Card>
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
    paddingTop: sizes._25sdp,
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
