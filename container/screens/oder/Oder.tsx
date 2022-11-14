import React, {Component} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import sizes from '../../../res/sizes';
import Checkcalader from './containers/Checkcalader';
import Dropdonw from './containers/Dropdonwoder';
import Showsum from './show/ShowsumaMonth';
import Showexport from './show/Showexportregistration';
import Showexportrevice from './show/Showexportreceived';
import Showexportmoved from './show/Showexporthasmoved';
import Showexportotal from './show/Showthetotalamount';
import AppHeader from '../../../components/AppHeader';
import Showevent from './containers/Showevent';
interface Props {
  navigation: any;
}
interface State {}
export default class Oder extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          title
          textTittle={'Lịch tháng'}
        />

        <View style={styles.checkcalader}>
          <Dropdonw />
          <ScrollView>
            <View style={styles.view_calender}>
              <Checkcalader navigation={this.props?.navigation} />
            </View>
            <View style={styles.show}>
              <Showevent
                title={'Tổng số suất ăn trong tháng'}
                numberShow={44}
                textstyle={styles.text}
              />

              <Showevent
                title={'Số xuất đã đăng ký'}
                numberShow={30}
                textstyle={styles.textstyles}
              />
              <Showevent
                title={'Số xuất đã nhận'}
                numberShow={14}
                textstyle={styles.textstyles}
              />
              <Showevent
                title={'Số xuất đã chuyển'}
                numberShow={10}
                textstyle={styles.textstyles}
              />
              <Showevent
                title={'Tổng số tiền'}
                numberShow={'1.320.000 VNĐ'}
                textstyle={styles.text}
              />
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
  checkcalader: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  calender: {
    flex: 1,
    marginLeft: sizes._24sdp,
    backgroundColor: 'red',
  },
  view_calender: {
    marginTop: sizes._32sdp,
  },
  show: {
    marginTop: sizes._32sdp,
    marginLeft: -sizes._20sdp,
    marginBottom: sizes._30sdp,
  },
  text: {
    fontSize: sizes._19sdp,
    fontWeight: '500',
  },
  textstyles: {
    fontSize: sizes._17sdp,
    fontWeight: '400',
  },
});
