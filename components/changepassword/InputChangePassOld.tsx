import React, {Component} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../../res/sizes';

interface Props {}

interface State {
  hiden: any;
  value: any;
}

export default class InputChangePassOld extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      hiden: true,
      value: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            value={this.state.value}
            placeholder="********"
            secureTextEntry={this.state.hiden}
            onChangeText={val => this.setState({value: val})}
          />
        </View>
        <Pressable
          style={styles.icon_contaner}
          delayLongPress={500}
          onPress={() =>
            this.state.hiden
              ? this.setState({hiden: false})
              : this.setState({hiden: true})
          }>
          {({pressed}) => (
            <Icon
              size={24}
              name={pressed ? 'eye' : 'eye-off'}
              color={'#727070'}
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
