import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import sizes from '../res/sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  onChangeText: (value: any) => void;
  keyboardType: any;
  secureTextEntry: any;
  value: any;
  clear: () => void;
}
export default class Inputuser extends Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={styles.textinput_container}>
          <View>
            <TextInput
              onChangeText={this.props.onChangeText}
              secureTextEntry={this.props.secureTextEntry}
              keyboardType={this.props.keyboardType}
              style={styles.input}
              numberOfLines={1}
              value={this.props.value}
            />
          </View>
        </View>
        <View>
          <Pressable delayLongPress={500} onPress={this.props.clear}>
            {({pressed}) => (
              <Ionicons
                name="close-circle"
                size={24}
                color={pressed ? '#D20B2E' : '#676565'}
                style={styles.iconinut_container}
              />
            )}
          </Pressable>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  textinput_container: {
    width: sizes._screen_width - 50,
    height: sizes._55sdp,
    marginLeft: sizes._27sdp,
    marginTop: sizes._5sdp,
    borderRadius: sizes._5sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
  },
  input: {
    width: sizes._screen_width - 110,
    height: sizes._55sdp,
    color: '#4D4B4B',
    fontSize: sizes._18sdp,
    lineHeight: sizes._34sdp,
    fontWeight: '400',
    marginTop: sizes._2sdp,
    marginLeft: sizes._20sdp,
  },
  iconinut_container: {
    marginLeft: sizes._345sdp,
    marginTop: -sizes._40sdp,
  },
});
