import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';

interface Props {
  click: () => void;
  checkButton: any;
  navigation: any;
}
interface State {
  check: any;
}
export default class ModalSetting extends Component<Props, State> {
  state: State = {
    check: 0,
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.checkButton}>
        <View style={[styles.centeredView, styles.flex]}>
          <TouchableWithoutFeedback onPress={() => this.props.click()}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.case}
              onPress={() => (
                this.props.click(),
                this.props.navigation.navigate(
                  ScreenName.AddResultMedicalExamination,
                )
              )}>
              <Text style={styles.caseText}>Thêm kết quả khám</Text>
              <View style={styles.imageLogo}>
                <Image source={images.add22} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.case}
              onPress={() => (
                this.props.click(),
                this.props.navigation.navigate(
                  ScreenName.ReputableMedicalAddress,
                )
              )}>
              <Text style={styles.caseText}>Địa chỉ KCB uy tín</Text>
              <View style={styles.imageLogo}>
                <Image source={images.hospital11} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.case}
              onPress={() => (
                this.props.click(),
                this.props.navigation.navigate(ScreenName.HealthAdvice)
              )}>
              <Text style={styles.caseText}>Tư vấn sức khỏe</Text>
              <View style={styles.imageLogo}>
                <Image source={images.healthcare33} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => this.props.click()}>
            <Image source={images.Group1766} />
          </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    position: 'relative',
  },
  modalView: {
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 90,
    right: 0,
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
});
