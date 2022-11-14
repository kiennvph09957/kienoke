import React, {Component} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sizes from '../res/sizes';
interface Props {
  onPress: (event: any) => void;
}
export default class ButtonLogin extends React.Component<Props> {
  render() {
    return (
      <>
        <Pressable
          delayLongPress={300}
          onPress={this.props.onPress}
          // style={({pressed}) => [styles.button_container]}
        >
          {({pressed}) => (
            <LinearGradient
              colors={pressed ? ['#9D0721', '#FF0C1E'] : ['#676565', '#676565']}
              // angle={180}
              end={{x: 0.46, y: 1}}
              start={{x: 0.4, y: 0}}
              style={styles.button_container}>
              <Text style={styles.text_button}>Đăng nhập</Text>
            </LinearGradient>
          )}
        </Pressable>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button_container: {
    width: sizes._360sdp,
    height: sizes._52sdp,
    borderRadius: sizes._30sdp,
    marginLeft: sizes._27sdp,
    marginTop: sizes._50sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_button: {
    fontSize: sizes._20sdp,
    fontWeight: '400',
    lineHeight: sizes._24sdp,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
