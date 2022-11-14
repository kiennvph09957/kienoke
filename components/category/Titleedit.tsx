import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import sizes from '../../res/sizes';

interface Props {
  onPress: () => void;
  svg: any;
}

interface State {}

export default class Title_edit extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>Ưa thích</Text>
        </View>
        <View style={styles.ic_container}>
          <TouchableOpacity onPress={this.props.onPress}>
            <SvgXml xml={this.props.svg} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text_container: {
    width: sizes._107sdp,
    height: sizes._31sdp,
  },
  text: {
    color: '#4D4B4B',
    fontSize: sizes._18sdp,
    fontWeight: '700',
  },
  ic_container: {
    marginLeft: sizes._250sdp,
  },
});
