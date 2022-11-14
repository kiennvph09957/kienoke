import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import sizes from '../../../../res/sizes';
interface Props {
  name: any;
  size: any;
  color: any;
  onPress: any;
  title: string;
}
export default class Payiconback extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={this.props.name}
          color={this.props.color}
          size={this.props.size}
          onPress={this.props.onPress}
        />
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: sizes._20sdp,
    fontWeight: '600',
    lineHeight: sizes._27sdp,
    color: '#FFFFFF',
    marginLeft:sizes._7sdp
  },
});
