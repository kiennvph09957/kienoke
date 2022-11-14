import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import sizes from '../../res/sizes';

interface Props {
  img: any;
  titles: any;
  texts: any;
}

interface State {}

export default class Inforlist extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.img} />
        </View>
        <View style={styles.text_container}>
          <View>
            <Text style={styles.title}>{this.props.titles}</Text>
          </View>
          <View>
            <Text style={styles.text}>{this.props.texts}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: sizes._23sdp,
    marginTop: sizes._15sdp,
  },
  text_container: {
    width: '100%',
    borderStyle: 'dotted',
    borderBottomWidth: sizes._1sdp,
    borderBottomColor: '#AFAFAF',
    paddingBottom: sizes._15sdp,
    marginLeft: sizes._15sdp,
  },
  title: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#727070',
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
});
