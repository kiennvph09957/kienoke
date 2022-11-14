import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BodyCard from '../../../components/card/BodyCard';
import AppHeader from '../../../components/AppHeader';

type Props = {};

type State = {};
export class CardRegistration extends Component<Props, State> {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader back title textTittle="Đăng ký thẻ nhân viên" />
        <View style={{flex: 1}}>
          <BodyCard />
        </View>
      </View>
    );
  }
}

export default CardRegistration;

const styles = StyleSheet.create({});
