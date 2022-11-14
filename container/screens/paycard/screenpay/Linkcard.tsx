import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import AppHeader from '../../../../components/AppHeader';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';
import Button from '../componentpay/Buttonlink';
import Headerpay from '../componentpay/Headerpay';
import Itemlist from '../componentpay/Itemlist';
import Payiconback from '../componentpay/Payiconback';

interface Props {
  navigation: any;
}

interface State {}

export default class Linkcard extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.homecontainer}
        behavior={'padding'}
        keyboardVerticalOffset={-500}>
        <View style={styles.headercontainer}>
          <AppHeader
            back
            title
            textTittle={'Suất ăn có thể nhận'}
            onBackPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.fromcontainer}>
          <View style={styles.search}>
            <Icon
              name="left"
              size={24}
              color="#000"
              style={{marginTop: sizes._10sdp}}
              onPress={() => this.props?.navigation?.goBack()}
            />
            <View style={{marginLeft: sizes._10sdp}}>
              <Text style={styles.texttitle}>{'Bếp ăn Tập đoàn'}</Text>
              <Text style={styles.textadress}>
                {'Trụ sở số 1, 212 Hồ Tùng Mậu,Nam Từ Liêm'}
              </Text>
            </View>
          </View>
          <View style={styles.list}>
            <View>
              <Text
                style={{
                  color: '#4D4B4B',
                  fontSize: sizes._15sdp,
                  fontWeight: '400',
                  marginTop: -sizes._62sdp,
                }}>
                {'Tài khoản Viettelpay'}
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="Nhập số điện thoại liên kết"
                keyboardType="phone-pad"
                style={{
                  width: sizes._350sdp,
                  height: sizes._50sdp,
                  marginTop: -sizes._30sdp,
                  borderRadius: sizes._10sdp,
                }}
                underlineColor={'#FFFFFF'}
              />
              <Button
                title={'Liên kết thẻ'}
                onPress={() =>
                  this.props.navigation.navigate(ScreenName.ODERRICE_SCREEN)
                }
              />
            </View>
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
    flexGrow: 0.4,
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
    flexGrow: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
    marginTop: sizes._91sdp,
    position: 'absolute',
  },
  search: {
    width: '100%',
    height: sizes._70sdp,
    marginTop: sizes._24sdp,
    marginLeft: sizes._35sdp,
    borderBottomColor: '#F3F5F8',
    borderBottomWidth: sizes._2sdp,
    flexDirection: 'row',
  },
  texttitle: {
    fontSize: sizes._20sdp,
    fontWeight: '600',
    color: '#4D4B4B',
  },
  textadress: {
    fontSize: sizes._14sdp,
    fontWeight: '400',
    color: '#676565',
  },
  list: {
    width: sizes._screen_width,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: sizes._32sdp,
    marginTop: -sizes._432sdp,
  },
});
