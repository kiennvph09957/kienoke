import {Alert, Linking, Platform} from 'react-native';
interface Props {
  phone: any;
}
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class CallNumber extends Component<Props> {
  render() {
    console.log('callNumber ----> ', this.props.phone);
    let phoneNumber = this.props.phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${this.props.phone}`;
    } else {
      phoneNumber = `tel:${this.props.phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
    return (
      <View>
        <Text>CallNumber</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
