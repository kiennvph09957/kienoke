import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';

interface Props {
  checkModalCallPhone: () => void;
  checkCallPhone: any;
  phone: any;
}
interface State {
  check: any;
}
export default class ModalCallPhone extends Component<Props, State> {
  state: State = {
    check: 0,
  };
  callPhone = () => {
    let phoneNumber = this.props.phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${this.props.phone}`;
    } else {
      phoneNumber = `tel:${this.props.phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  render() {
    console.log(this.props)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.checkCallPhone}>
        <View style={[styles.centeredView, styles.flex]}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              Bạn có muốn gọi cho người này không ?
            </Text>
            <Text style={styles.modalTexTT}>{this.props.phone}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.add}
                onPress={() => (
                  this.props.checkModalCallPhone(), this.callPhone()
                )}>
                <Text style={{color: '#fff'}}>Gọi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.checkModalCallPhone()}
                style={styles.close}>
                <Text style={{color: '#fff'}}>Huỷ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    position: 'relative',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    shadowColor: 'black',
    elevation: 10,
  },
  case: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    marginVertical: 10,
  },
  caseText: {
    backgroundColor: '#DADADA',
    fontSize: 18,
    fontWeight: '400',
    borderRadius: 30,
    paddingRight: sizes._50sdp,
    paddingLeft: sizes._20sdp,
    paddingVertical: sizes._10sdp,
    color: '#000000',
    position: 'absolute',
    right: 50,
  },
  imageLogo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 40,
  },
  buttonClose: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  modalTextTitle: {
    textAlign: 'center',
    color: '#D30026',
    fontWeight: '600',
    fontSize: 20,
  },
  modalTexTT: {
    color: '#4D4B4B',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
  },
  add: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#D30026',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
    marginRight: 20,
  },

  close: {
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: '#676565',
    borderRadius: 30,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
  },
});
