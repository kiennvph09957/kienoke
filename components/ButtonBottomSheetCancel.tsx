import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
type Props = {
  titleBtn: string;
  onPress: () => void;
};

type State = {};

export class ButtonBottomSheetCancel extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <LinearGradient
            style={styles.linearGradient}
            colors={['#9D0721', '#FF0C1E']}
            end={{x: 0.5, y: 1}}
            start={{x: 0.4, y: 0}}>
            <Text
              style={{
                // zIndex: 1,
                textAlign: 'center',
                fontSize: sizes._18sdp,
                lineHeight: sizes._24sdp,
                color: '#FFF',
                fontWeight: '500',
                // position: 'absolute',
                // top: 0,
                justifyContent: 'center',
              }}>
              {this.props.titleBtn}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ButtonBottomSheetCancel;

const styles = StyleSheet.create({
  linearGradient: {
    width: sizes._179sdp,
    height: sizes._48sdp,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes._5sdp,
  },
});
