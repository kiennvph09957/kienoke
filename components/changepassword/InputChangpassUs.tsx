import React, {Component} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../../res/sizes';

interface Props {}

interface State {
  text: any;
}

export default class InputChangpassUs extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            value={this.state.text}
            placeholder="098700"
            onChangeText={val => this.setState({text: val})}
          />
        </View>
        <Pressable
          delayLongPress={300}
          style={styles.icon_contaner}
          onPress={() => {
            this.setState({text: ''});
          }}>
          {({pressed}) => (
            <Icon
              size={24}
              name={'close-circle'}
              color={pressed ? '#EF0B0B' : '#727070'}
            />
          )}
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  input_container: {
    paddingLeft: sizes._12sdp,
    paddingRight: sizes._50sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
    width: sizes._380sdp,
    height: sizes._48sdp,
    marginLeft: sizes._18sdp,
    borderRadius: sizes._5sdp,
  },
  icon_contaner: {
    marginLeft: -sizes._42sdp,
    marginTop: sizes._13sdp,
    width: sizes._30sdp,
    height: sizes._30sdp,
  },
});
