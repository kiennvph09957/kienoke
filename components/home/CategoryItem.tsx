import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
interface Props {
  item?: any;
  index?: any;
  isEnd?: any;
  onSelectedItem?: any;
}

interface State {}

const containerCustom = (selected: any, last: any): ViewStyle => ({
  borderColor: selected ? colors._color_red_fire : colors._color_gray_pale,
  flexDirection: last ? 'row-reverse' : 'row',
});

const textCustom = (selected: any): TextStyle => ({
  color: selected ? colors._color_black : colors._color_text_title,
  fontWeight: selected ? '700' : '400',
});

export default class CategoryItem extends Component<Props, State> {
  render() {
    const {id, icon, icon_active, value, selected, screen} = this.props.item;

    const charChangeLine = `
    `;

    return (
      <Pressable
        unstable_pressDelay={3000}
        onPress={() => this.props.onSelectedItem(screen)}>
        {({pressed}: any) => (
          <View
            style={[
              styles.container,
              containerCustom(pressed, this.props.isEnd),
            ]}>
            <SvgXml
              xml={pressed ? icon_active : icon}
              width={sizes._24sdp}
              height={sizes._24sdp}
              style={styles.icon}
            />

            <View style={styles.space} />
            <View style={styles.lablel}>
              <Text style={[styles.textLabel, textCustom(pressed)]}>
                {value.replace('¥n', charChangeLine)}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes._screen_width / 2 - sizes._32sdp,
    borderWidth: sizes._1sdp,
    backgroundColor: colors._color_white,
    borderRadius: sizes._10sdp,
    marginTop: sizes._16sdp,
    paddingHorizontal: sizes._16sdp,
  },
  icon: {
    marginVertical: sizes._22sdp,
  },
  space: {
    width: sizes._16sdp,
  },
  lablel: {
    flex: 1,
  },
  textLabel: {
    fontSize: sizes._font_size_big_big,
  },
});
