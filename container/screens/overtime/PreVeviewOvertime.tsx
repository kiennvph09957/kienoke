import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import AppHeader from '../../../components/AppHeader';
import images from '../../../res/images';

interface Props {}

interface State {}

export default class PreVeviewOverTime extends Component<Props, State> {
  state = {};

  renderHeader = () => (
    <View>
      <View>{/* <Image  source={images.}/> */}</View>
      <View>
        <Text>2</Text>
      </View>
    </View>
  );
  render() {
    return (
      <SafeAreaView>
        <AppHeader back contentCustom contentCustomJSX={this.renderHeader} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
