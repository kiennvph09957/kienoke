import React, {Component} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import sizes from '../../res/sizes';

interface Props {
  item?: any;
  onChangeActiveItem?: any;
}

interface State {}

export default class TaskItem extends Component<Props, State> {
  format = (qty: number) => {
    return 0 < qty && qty < 10 ? `0${qty}` : qty;
  };

  render() {
    const {id, quantity, label, icon, icon_active, selected} = this.props.item;
    return (
      <Pressable unstable_pressDelay={3000}>
        {({pressed}: any) => (
          <LinearGradient
            start={pressed ? {x: 0.67, y: -0.5} : {x: 0, y: 0.0915}}
            end={pressed ? {x: 0.1, y: 0} : {x: 0, y: 1}}
            locations={[0, 1]}
            colors={
              pressed
                ? [colors._color_white_phase, colors._color_red_rose]
                : [colors._color_white_bright, colors._color_white_sombre]
            }
            style={[
              styles.container,
              {
                borderColor: pressed
                  ? colors._color_red_dark
                  : colors._color_gray_drag,
              },
            ]}>
            <View style={styles.content}>
              <Text style={styles.textSub}>
                {label === 'Hoàn thành'
                  ? this.format(quantity) + '%'
                  : this.format(quantity)}
              </Text>

              <SvgXml
                xml={pressed ? icon_active : icon}
                width={sizes._24sdp}
                height={sizes._24sdp}
                style={styles.icon}
              />
            </View>
            <View>
              <Text style={styles.subLabel}>{label}</Text>
            </View>
          </LinearGradient>
        )}
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: sizes._screen_width / 2 - sizes._48sdp,
    borderColor: colors._color_boder_meet,
    borderWidth: sizes._1sdp,
    borderRadius: sizes._15sdp,
  },
  content: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  textSub: {
    color: colors._color_red_dark,
    fontSize: sizes._46sdp,
    marginLeft: sizes._16sdp,
  },
  icon: {
    position: 'absolute',
    top: sizes._16sdp,
    right: sizes._16sdp,
  },
  subLabel: {
    fontSize: sizes._16sdp,
    color: colors._color_black,
    lineHeight: sizes._24sdp,
    marginLeft: sizes._16sdp,
    marginBottom: sizes._8sdp,
  },
});
