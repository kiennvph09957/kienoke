import React, {Component} from 'react';
import {Modal, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import TextLabel from './TextLabel';

interface Props {
  isOptions: boolean;
  onChangeIconSetting: any;
}

interface State {}

export default class ModalIconSetting extends Component<Props, State> {
  render() {
    return (
      <Modal
        visible={this.props.isOptions}
        transparent={true}
        animationType="fade">
        <TouchableWithoutFeedback onPress={this.props.onChangeIconSetting}>
          <View style={{flex: 1}}>
            <View style={styles.optionsSetting}>
              <TextLabel
                style={styles.item}
                textStyle={styles.textItem}
                text="Account"
                onPress={this.props.onChangeIconSetting}
              />
              <View style={styles.space} />
              <TextLabel
                style={styles.item}
                textStyle={styles.textItem}
                text="Setting"
                onPress={this.props.onChangeIconSetting}
              />
              <View style={styles.space} />
              <TextLabel
                style={styles.item}
                textStyle={styles.textItem}
                text="Logout"
                onPress={this.props.onChangeIconSetting}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  optionsSetting: {
    backgroundColor: colors._color_white,
    position: 'absolute',
    right: 0,
    top: sizes._header_height / 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: sizes._5sdp,
  },
  item: {
    width: sizes._156sdp,
    height: sizes._48sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    color: colors._color_text_title,
    fontSize: sizes._font_size_big_big,
    fontWeight: '700',
  },
  space: {
    height: sizes._1sdp,
    backgroundColor: colors._color_gray_text_light,
    opacity: 0.2,
  },
});
