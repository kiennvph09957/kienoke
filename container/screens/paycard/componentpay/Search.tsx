import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import sizes from '../../../../res/sizes';
export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <Icon name="search1" size={18} color="#676565" />
        </View>
        <View style={styles.searchcontainer}>
          <TextInput placeholder="Tìm kiếm..." />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: sizes._315sdp,
    height: sizes._52sdp,
    marginLeft: sizes._32sdp,
    alignContent: 'center',
  },
  iconcontainer: {
    marginTop: sizes._15sdp,
  },
  searchcontainer: {
    color: '#676565',
    marginLeft: sizes._7sdp,
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
  },
});
