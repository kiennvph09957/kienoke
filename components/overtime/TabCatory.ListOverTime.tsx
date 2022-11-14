import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../res/colors';
import sizes from '../../res/sizes';

interface Props {
  item?: any;
  onActiveLabel?: any;
}

interface State {}

const itemActive = (check: boolean): ViewStyle => ({
  borderWidth: check ? sizes._1sdp : 0,
  borderRadius: check ? sizes._20sdp : 0,
  borderColor: check ? colors._color_red_flaming : 'none',
});
const labelActive = (check: boolean): TextStyle => ({
  color: check ? colors._color_black : colors._color_text_title,
  fontWeight: check ? '700' : '400',
});

export default class TabCatory extends Component<Props, State> {
  state = {};

  render() {
    const {id, label, actived, action} = this.props.item;
    return (
      <TouchableOpacity
        onPress={() => this.props.onActiveLabel(this.props.item)}>
        <View style={[itemActive(actived), styles.container]}>
          <Text style={[labelActive(actived), styles.label]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes._16sdp,
    paddingVertical: sizes._8sdp,
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    fontSize: sizes._font_size_big_big,
  },
});
