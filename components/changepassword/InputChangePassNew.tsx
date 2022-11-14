import React, {Component} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../../res/sizes';

interface Props {}

interface State {
  hiden: any;
  value: any;
}

export default class InputChangePassNew extends Component<Props, State> {
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
            placeholder="********"
            value={this.state.value}
            secureTextEntry={this.state.hiden}
            onChangeText={val => this.setState({value: val})}
          />
        </View>
        <View style={styles.icon_contaner}>
          <Pressable
            delayLongPress={300}
            onPress={() => this.setState({value: ''})}>
            {({pressed}) => (
              <>
                <Icon
                  size={24}
                  name={'close-circle'}
                  color={pressed ? '#EF0B0B' : '#727070'}
                />
              </>
            )}
          </Pressable>
          <Pressable
            delayLongPress={300}
            onPress={() =>
              this.state.hiden
                ? this.setState({hiden: false})
                : this.setState({hiden: true})
            }>
            {({pressed}) => (
              <>
                <Icon
                  size={24}
                  name={pressed ? 'eye' : 'eye-off'}
                  color={'#727070'}
                  style={{paddingHorizontal: 19}}
                />
              </>
            )}
          </Pressable>
        </View>
        {/* <Pressable
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
        </Pressable> */}
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
    paddingRight: sizes._90sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
    width: sizes._380sdp,
    height: sizes._48sdp,
    marginLeft: sizes._18sdp,
    borderRadius: sizes._5sdp,
  },
  icon_contaner: {
    marginLeft: -sizes._90sdp,
    marginTop: sizes._13sdp,
    width: sizes._90sdp,
    height: sizes._30sdp,
    flexDirection: 'row',
  },
});
