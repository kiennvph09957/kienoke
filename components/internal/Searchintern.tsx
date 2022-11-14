import React, {Component} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import sizes from '../../res/sizes';

interface Props {}

interface State {}

export default class Searchintern extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_text}>
          <TextInput style={styles.text_input} placeholder={'Tìm kiếm'} />
        </View>
        <Pressable style={styles.container_icon}>
          <Icon name="search" size={24} color={'#727070'} />
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  container_text: {
    width: sizes._400sdp,
    height: sizes._50sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
    borderRadius: sizes._30sdp,
  },
  text_input: {
    paddingLeft: sizes._20sdp,
    paddingRight: sizes._70sdp,
  },
  container_icon: {
    width: sizes._30sdp,
    height: sizes._30sdp,
    marginLeft: -sizes._50sdp,
    marginTop: sizes._12sdp,
  },
});
