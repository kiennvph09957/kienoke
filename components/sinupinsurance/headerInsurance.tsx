import React, {Component} from 'react';
import {View} from 'react-native';
import AppHeader from '../AppHeader';

type Props = {};

type State = {};

export default class headerInsurance extends Component<Props, State> {
  render() {
    return <AppHeader title={true} back={true} textTittle="Đăng ký thẻ BHYT" />;
  }
}
