import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';

interface Props {
  title: any;
  onPress: () => void;
  onPressIn: any;
}

interface State {}

export default class Button extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPressIn={this.props.onPressIn}
        style={styles.stybutton}
        onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  stybutton: {
    borderRadius: sizes._128sdp,
    width: sizes._84sdp,
    height: sizes._42sdp,
    paddingTop: sizes._13sdp,
    backgroundColor: '#D20B2E',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: -sizes._15sdp,
    fontSize: sizes._14sdp,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
