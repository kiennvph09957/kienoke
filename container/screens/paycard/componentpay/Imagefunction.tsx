import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import sizes from '../../../../res/sizes';
interface Props {
  svxml: any;
  width: any;
  height: any;
  title: any;
  onPress: () => void;
}
export default class Imagefunction extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.props.onPress}>
            <SvgXml
              xml={this.props.svxml}
              width={this.props.width}
              height={this.props.height}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: sizes._35sdp,
    paddingRight: sizes._15sdp,
    paddingBottom: sizes._24sdp,
  },
  text: {
    paddingTop: sizes._5sdp,
    textAlign: 'center',
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._20sdp,
    color: '#4D4B4B',
  },
});
