import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import sizes from '../res/sizes';
type Props = {
  titleBtn: string;
  onPress: () => void;
  // navigation: any;
};

type State = {};

export class ButtonBottomSheetManualTime extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: '#fff',
            width: sizes._145sdp,
            height: sizes._48sdp,
            justifyContent: 'center',
            borderColor: '#ED1B2F',
            borderRadius: sizes._5sdp,
            marginLeft: sizes._53sdp,
            marginRight: 6.5,
          }}
          // navigation={this.props.navigation}
          onPress={this.props.onPress}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: sizes._18sdp,
              lineHeight: sizes._24sdp,
              color: '#4D4B4B',
              fontWeight: '500',
            }}>
            {this.props.titleBtn}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ButtonBottomSheetManualTime;
