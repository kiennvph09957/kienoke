import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import AppHeader from '../../../../components/AppHeader';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';
import Headerpay from '../componentpay/Headerpay';
import Itemlist from '../componentpay/Itemlist';
import Payiconback from '../componentpay/Payiconback';
import Search from '../componentpay/Search';

interface Props {
  navigation: any;
}

interface State {}

export default class Oderrice extends Component<Props, State> {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.homecontainer}
        behavior={'padding'}
        keyboardVerticalOffset={-500}>
        <View style={styles.headercontainer}>
          <AppHeader
            back
            onBackPress={() => this.props.navigation.goBack()}
            title
            textTittle={'Đặt cơm'}
          />
        </View>
        <View style={styles.fromcontainer}>
          <View style={styles.search}>
            <Search />
          </View>
          <View style={styles.listcontainer}>
            <ScrollView style={styles.listcontainer}>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
              <View style={{marginBottom: 30, width: '100%', height: 50}}>
                <Itemlist
                  onpressin={() =>
                    this.props.navigation.navigate(ScreenName.LINK_SCREEN)
                  }
                />
              </View>
            </ScrollView>
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
    height: sizes._50sdp,
    marginTop: sizes._24sdp,
    borderBottomColor: '#F3F5F8',
    borderBottomWidth: sizes._2sdp,
  },
  listcontainer: {
    width: sizes._screen_width,
    flex: 1,
    // alignContent: 'center',
    // justifyContent: 'center',
    // left: -sizes._62sdp,
    marginTop: sizes._20sdp,
    marginBottom: sizes._20sdp,
  },
});
