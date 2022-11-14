import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {}

interface State {}

export default class Searchcategory extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput placeholder="Tìm Kiếm" style={styles.text_input} />
        </View>
        <TouchableOpacity style={styles.icons_container}>
          <Icon name="search" size={24} color="#727070" style={styles.icons} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  input_container: {
    width: sizes._380sdp,
    height: sizes._48sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#A3ACB2',
    borderRadius: sizes._30sdp,
  },
  text_input: {
    paddingLeft: sizes._18sdp,
    paddingTop: sizes._13sdp,
    paddingRight: sizes._55sdp,
  },
  icons_container: {
    marginLeft: -sizes._50sdp,
    width: sizes._50sdp,
    height: sizes._50sdp,
  },
  icons: {
    paddingTop: sizes._12sdp,
  },
});
