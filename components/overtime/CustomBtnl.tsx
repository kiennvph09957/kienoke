import React, {Component} from 'react';
import {Pressable, StyleSheet, TextStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import colors from '../../res/colors';
import sizes from '../../res/sizes';

interface Props {
  text?: any;
  onPress?: any;
  isCancel?: boolean;
}

interface State {}

const textLabel = (
  checked: boolean,
  cActive: any,
  cDissable: any,
): TextStyle => ({
  fontWeight: checked ? '700' : '400',
  color: checked ? cActive : cDissable,
});

export default class BtnCustom extends Component<Props, State> {
  state = {};

  render() {
    const {text, onPress, isCancel} = this.props;
    return (
      <Pressable
        style={({pressed}) => [
          styles.container,
          {
            borderColor: pressed
              ? colors._color_red_dark
              : colors._color_gray_text_light,
          },
        ]}
        delayLongPress={300}
        onPress={() => this.props.onPress()}>
        {isCancel
          ? ({pressed}) => (
              <Text
                style={[
                  textLabel(
                    pressed,
                    colors._color_black,
                    colors._color_gray_light,
                  ),
                  styles.textLable,
                ]}>
                {text}
              </Text>
            )
          : ({pressed}: any) => (
              <LinearGradient
                start={pressed ? {x: 0.67, y: -1} : {x: 0, y: 0}}
                end={pressed ? {x: 0.2, y: 0} : {x: 0, y: 0}}
                locations={[0, 1]}
                colors={
                  pressed
                    ? [colors._color_red_pare, colors._color_red_pare_light]
                    : [
                        colors._color_gray_text_light,
                        colors._color_gray_text_light,
                      ]
                }
                style={styles.btnSize}>
                <Text
                  style={[
                    {
                      color: colors._color_white,
                      fontWeight: pressed ? '700' : '500',
                    },
                    styles.textBtn,
                  ]}>
                  Xác nhận
                </Text>
              </LinearGradient>
            )}
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: sizes._160sdp,
    height: sizes._48sdp,
    borderRadius: sizes._30sdp,
    borderWidth: sizes._1sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLable: {
    fontSize: sizes._font_size_big_big,
  },
  btnSize: {
    width: sizes._160sdp,
    height: sizes._50sdp,
    borderRadius: sizes._30sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: sizes._font_size_big_big,
  },
});
