import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';
import Button from '../componentpay/Button';
import Buttoncancle from '../componentpay/Buttoncancle';
import Modallink from './Modallink';
interface Props {
  onpressin: any;
}
interface State {
  submit: any;
  isvisible: boolean;
}
export default class Itemlist extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      submit: true,
      isvisible: false,
    };
  }
  changeVisible = (bo: any) => {
    this.setState({isvisible: bo});
  };
  render() {
    return (
      <View style={styles.rencomtainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.texttitle}>{'Bếp ăn Tập đoàn'}</Text>
          <Text style={styles.textadress}>
            {'Trụ sở số 1, 212 Hồ Tùng Mậu,\n Nam Từ Liêm'}
          </Text>
        </View>
        {/* Modal huỷ*/}
        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.isvisible}
          onRequestClose={() => this.changeVisible(false)}>
          <Modallink
            onPressSM={() => this.changeVisible(false)}
            onPressEX={() => this.changeVisible(false)}
          />
        </Modal>
        {/* Modal huỷ*/}
        <View style={styles.buttoncontainer}>
          {this.state.submit ? (
            <Button
              title={'Liên kết'}
              onPressIn={this.props.onpressin}
              onPress={() => {
                this.setState({submit: false});
              }}
            />
          ) : (
            <Buttoncancle
              title={'Huỷ liên kết'}
              onPress={() => this.setState({submit: true})}
              onPressIn={() => this.changeVisible(true)}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rencomtainer: {
    flex: 1,
    paddingBottom: -sizes._15sdp,
    justifyContent: 'center',
    alignContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  textcontainer: {
    width: sizes._screen_width - 200,
    borderBottomColor: '#F3F5F8',
    borderBottomWidth: sizes._1sdp,
    marginLeft: sizes._50sdp,
  },
  texttitle: {
    fontSize: sizes._16sdp,
    fontWeight: '600',
    color: '#4D4B4B',
  },
  textadress: {
    paddingBottom: sizes._15sdp,
    fontSize: sizes._14sdp,
    fontWeight: '400',
    color: '#676565',
  },
  buttoncontainer: {
    marginLeft: sizes._270sdp,
    marginTop: -sizes._60sdp,
  },
});
