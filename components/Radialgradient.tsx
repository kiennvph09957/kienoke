import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import RadialGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
import SquareBttom from './SquareBttom';
import SquareRight from './SquareRight';
import IconBack from './IconBack';
import IconSetting from './IconSetting';
import IconSearch from './IconSearch';
import Avatar from './Avatar';
import colors from '../res/colors';
export class Radialgradient extends Component {
  render() {
    const ENDX = 41 / 100;
    const ENDY = 107.54 / 100;
    const STARTX = 55 / 100;
    const STARTY = 20 / 100;
    return (
      <View style={{height: '20%'}}>
        <RadialGradient
          colors={['#FF030A', '#A30408']}
          end={{x: ENDX, y: ENDY}}
          start={{x: STARTX, y: STARTY}}
          style={styles.readiaGradient}>
          <View style={styles.mVuong}>
            <SquareBttom />
          </View>
          <View style={styles.mVuong_}>
            <SquareRight />
          </View>
          <View style={styles.mBackIcon}>
            <IconBack
              color={colors._color_white}
              name="left"
              size={24}
              onPress={() => console.log('')}
            />
          </View>
          <View style={styles.mImage}>
            <Avatar />
          </View>
          <View style={styles.mTextContainer}>
            <View style={styles.mTextStyle}>
              <Text style={styles.mText}>Lê Thành Công</Text>
            </View>
            <Text style={styles.mText_}>Phó tổng giám đốc</Text>
          </View>
          <View style={styles.mIconContainer}>
            <IconSearch
              color={colors._color_white}
              name="search1"
              size={24}
              onPress={() => console.log('')}
            />
            <IconSetting
              color={colors._color_white}
              name="setting"
              size={24}
              onPress={() => console.log('')}
            />
          </View>
        </RadialGradient>
      </View>
    );
  }
}

export default Radialgradient;

const styles = StyleSheet.create({
  readiaGradient: {
    width: sizes._screen_width,
    height: '100%',
    flexDirection: 'row',
  },
  mVuong: {
    left: sizes._300sdp,
    right: '-21.75%',
    top: '6.55%',
    bottom: '77.36%',
    transform: [{rotate: '-130deg'}],
    //
  },
  mVuong_: {
    left: sizes._280sdp,
    right: '-47.86%',
    top: '-10.85%',
    bottom: '95.26%',
    transform: [{rotate: '-130deg'}],
  },
  mBackIcon: {
    position: 'absolute',
    left: 8,
    right: '0%',
    top: 52,
    bottom: ' 0%',
  },
  mImage: {
    left: 38,
    // top: 43,
    position: 'absolute',
    // left: 8,
    right: '0%',
    top: 42,
    bottom: ' 0%',
    flexDirection: 'row',
  },
  mTextContainer: {
    position: 'absolute',
    left: 95,
    top: sizes._40sdp,
  },
  mTextStyle: {
    bottom: ' 0%',
    width: 250,
    height: 29,
  },
  mText: {
    fontSize: sizes._20sdp,
    fontWeight: '400',
    lineHeight: 25,
    color: colors._color_white,
  },
  mText_: {
    fontSize: 16.8,
    fontWeight: '400',
    lineHeight: 25,
    color: colors._color_white,
  },
  mIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 52,
    // justifyContent :"space-between"
  },
});
