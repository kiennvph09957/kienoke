import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import party from '../../../../assets/images/party';
import cargr from '../../../../assets/images/cargr';
import carbl from '../../../../assets/images/carbl';
import carorg from '../../../../assets/images/carorg';

import sizes from '../../../../res/sizes';
import Imagefunction from './Imagefunction';
import {ScreenName} from '../../../AppContainer';
import Oderrice from '../screenpay/Oderrice';
// import {useNavigation} from '@react-navigation/native';
interface Props {
  onclick1: () => void;
  onclick2: () => void;
}
interface State {}

export default class Fromimage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Imagefunction
              svxml={party}
              width={52}
              height={52}
              title={'Đặt cơm'}
              onPress={this.props.onclick1}
            />
          </View>
          <View>
            <Imagefunction
              svxml={cargr}
              width={52}
              height={52}
              title={'Đặt xe'}
              onPress={this.props.onclick2}
            />
          </View>
          <View>
            <Imagefunction
              svxml={carbl}
              width={52}
              height={52}
              title={'Lorem'}
              onPress={this.props.onclick1}
            />
          </View>
          <View>
            <Imagefunction
              svxml={carorg}
              width={52}
              height={52}
              title={'Lorem'}
              onPress={this.props.onclick1}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Imagefunction
              svxml={party}
              width={52}
              height={52}
              title={'Đặt cơm'}
              onPress={this.props.onclick1}
            />
          </View>
          <View>
            <Imagefunction
              svxml={cargr}
              width={52}
              height={52}
              title={'Đặt xe'}
              onPress={this.props.onclick1}
            />
          </View>
          <View>
            <Imagefunction
              svxml={carbl}
              width={52}
              height={52}
              title={'Lorem'}
              onPress={this.props.onclick1}
            />
          </View>
          <View>
            <Imagefunction
              svxml={carorg}
              width={52}
              height={52}
              title={'Lorem'}
              onPress={this.props.onclick1}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes._72sdp,
  },
});
