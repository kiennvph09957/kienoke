import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

interface Props {
  onPress: () => void;
  name?: string | any;
  size?: number | any;
  color?: string | any;
}

export class IconSetting extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Icons
          style={{marginHorizontal: 8}}
          size={this.props.size}
          name={this.props.name}
          color={this.props.color}
          onPress={this.props.onPress}></Icons>
      </View>
    );
  }
}

export default IconSetting;

const styles = StyleSheet.create({});
