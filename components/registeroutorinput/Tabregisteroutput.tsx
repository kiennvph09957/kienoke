import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ScreenHomeCD from '../../container/screens/registeroutorinput/ScreenHomeCD';
import sizes from '../../res/sizes';

interface Props {
  onPressInCD?: any;
  onPressCD?: any;

  onPressInDD?: any;
  onPressDD?: any;

  onPressInTCD?: any;
  onPressTCD?: any;

  style_stateCD: any;
  style_stateDD: any;
  style_stateTCD: any;
}

interface State {}
export default class Tabregisteroutput extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        {/* Chưa duyệt */}
        <TouchableOpacity
          style={
            this.props.style_stateCD
              ? styles.touchabale_container_active
              : styles.touchabale_container
          }
          onPressIn={this.props.onPressInCD}
          onPress={this.props.onPressCD}>
          <Text
            style={this.props.style_stateCD ? styles.text_active : styles.text}>
            Chưa duyệt
          </Text>
        </TouchableOpacity>
        {/* Đã duyệt */}
        <TouchableOpacity
          style={
            this.props.style_stateDD
              ? styles.touchabale_container_active
              : styles.touchabale_container
          }
          onPressIn={this.props.onPressInDD}
          onPress={this.props.onPressDD}>
          <Text
            style={this.props.style_stateDD ? styles.text_active : styles.text}>
            Đã duyệt
          </Text>
        </TouchableOpacity>
        {/* Từ chối */}
        <TouchableOpacity
          style={
            this.props.style_stateTCD
              ? styles.touchabale_container_active
              : styles.touchabale_container
          }
          onPressIn={this.props.onPressInTCD}
          onPress={this.props.onPressTCD}>
          <Text
            style={
              this.props.style_stateTCD ? styles.text_active : styles.text
            }>
            Từ chối duyệt
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: sizes._23sdp,
  },

  touchabale_container: {
    width: sizes._117sdp,
    height: sizes._42sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchabale_container_active: {
    width: sizes._117sdp,
    height: sizes._42sdp,
    borderRadius: sizes._20sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#ED1C24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._25sdp,
  },
  text_active: {
    fontSize: sizes._18sdp,
    fontWeight: '600',
    lineHeight: sizes._25sdp,
    color: '#000000',
  },
});
