import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
interface Props {
  onNext?: any;
  title: any;
}

interface State {}

export default class ButtonNext extends Component<Props, State> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onNext}>
        <LinearGradient
          colors={['#9D0721', '#FF0C1E']}
          // angle={180}
          end={{x: 0.52, y: 1}}
          start={{x: 0.48, y: 0}}
          style={styles.button_container}>
          <Text style={styles.text_button}>{this.props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_container: {
    width: sizes._145sdp,
    height: sizes._48sdp,
    borderRadius: sizes._10sdp,
    justifyContent: 'center',
  },
  text_button: {
    textAlign: 'center',
    fontSize: sizes._20sdp,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
