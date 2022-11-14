import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import Searchintern from '../../../components/internal/Searchintern';
import TabbarTopIntern from '../../../components/internal/TabbarTopIntern';
import sizes from '../../../res/sizes';

interface Props {
  navigation?: any;
}

interface State {}

export default class HomeIntern extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {/* Headerapp */}
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          title
          textTittle={'Đăng ký nội bộ'}
        />
        {/* From app */}
        <View style={styles.container_from}>
          {/* Tìm kiếm */}
          <View style={styles.container_search}>
            <Searchintern />
          </View>
          {/* Tabbar */}
          <View style={styles.tabbar}>
            <TabbarTopIntern navigationtab={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_from: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  container_search: {
    marginTop: sizes._21sdp,
    marginLeft: sizes._10sdp,
  },
  tabbar: {
    marginTop: sizes._80sdp,
  },
});
