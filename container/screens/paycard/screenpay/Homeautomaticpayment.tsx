import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import AppHeader from '../../../../components/AppHeader';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';
import Fromimage from '../componentpay/Fromimage';
import Headerpay from '../componentpay/Headerpay';
import Payiconback from '../componentpay/Payiconback';
import Search from '../componentpay/Search';
interface Props {
  navigation: any;
}
interface State {}
export default class Homeautomaticpayment extends Component<Props, State> {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.homecontainer}
        behavior={'padding'}
        keyboardVerticalOffset={-500}>
        <AppHeader
          back
          title
          textTittle="Thanh toán tự động"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.fromcontainer}>
          <View style={styles.search}>
            <Search />
          </View>
          <View style={styles.list}>
            <Fromimage
              onclick1={() =>
                this.props?.navigation?.navigate(ScreenName.ODERRICE_SCREEN)
              }
              onclick2={() =>
                this.props?.navigation?.navigate(ScreenName.CALENDER_SCREEN)
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    width: '100%',
  },
  headercontainer: {
    flex: 1,
    flexGrow: 0.2,
    width: '100%',
  },
  headericoncontainer: {
    marginTop: -70,
    marginLeft: sizes._20sdp,
  },
  fromcontainer: {
    width: '100%',
    height: sizes._screen_height,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  search: {
    width: '100%',
    height: sizes._50sdp,
    marginTop: sizes._24sdp,
    borderBottomColor: '#F3F5F8',
    borderBottomWidth: sizes._2sdp,
  },
  list: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -sizes._35sdp,
  },
});
