import {Text,SafeAreaView, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
interface Props {
  onPress: () => void;
  name: string;
  size: number;
  color: string;
}
export class IconBack extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Icons
          size={this.props.size}
          name={this.props.name}
          color={this.props.color}
          onPress={this.props.onPress}></Icons>
      </View>
    );
  }
}

export default IconBack;
const styles = StyleSheet.create({

});
