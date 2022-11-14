import React, {Children, Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import BackgroundHeader from '../../../components/phonebooks/headerComponent';
import BodyPhoneBook from '../../../components/phonebooks/listComponent';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation?: any;
}
export default class PhoneBook extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <BackgroundHeader />
        <BodyPhoneBook
          onPress={() => {
            this.props.navigation.navigate(ScreenName.INFORMATION);
          }}
          navigation={undefined}
        />
      </View>
    );
  }
}
