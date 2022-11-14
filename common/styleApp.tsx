import {StyleSheet} from 'react-native';
import colors from '../res/colors';
import sizes from '../res/sizes';

export const styleApp = StyleSheet.create({
    viewRoot: {
      flex: 1,
      marginTop: -sizes._80sdp,
      paddingTop: sizes._24sdp,
      borderTopStartRadius: sizes._20sdp,
      borderTopEndRadius: sizes._20sdp,
      backgroundColor: colors._color_white,
    },
    shadow: {
        elevation: 5,
        shadowColor: '#AAAAAA',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
      },
});