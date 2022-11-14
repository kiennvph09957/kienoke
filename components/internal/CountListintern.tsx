import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import sizes from '../../res/sizes';

interface Props {
  title: any;
  count?: any;
}

interface State {}

export default class CountListintern extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={styles.text_count}>{'(' + this.props.count + ')'}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: sizes._24sdp,
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '700',
    lineHeight: sizes._28sdp,
    color: '#000000',
  },
  text_count: {
    paddingLeft: sizes._5sdp,
    fontSize: sizes._18sdp,
    fontWeight: '500',
    lineHeight: sizes._28sdp,
    // color: '#000000',
  },
});
