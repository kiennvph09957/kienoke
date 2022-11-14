import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';
interface State {
  checkMenu: any;
}
interface Props {
  navigation: any;
}
export default class Menu extends Component<Props, State> {
  state: State = {
    checkMenu: false,
  };

  click = (check: any) => {
    this.setState({checkMenu: check});
  };

  render() {
    const {checkMenu} = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.click(!checkMenu)}>
          <Image source={images.hamberger} style={styles.iconMenu} />
        </TouchableOpacity>
        <Modal animationType="fade" transparent={true} visible={checkMenu}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => this.click(!checkMenu)}>
              <View style={{flex: 0.5, width: '100%'}}></View>
            </TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Pressable
                style={({pressed}: any) => [
                  {
                    backgroundColor: pressed && '#F2F4F8',
                  },
                  styles.boxMenu,
                ]}
                onPress={() =>
                  this.props?.navigation?.navigate(ScreenName.CALENDER_SCREEN)
                }>
                <Image source={images.Calendar} />
                <Text style={styles.liText}>Xem lịch tháng</Text>
              </Pressable>
              <Pressable
                style={({pressed}: any) => [
                  {
                    backgroundColor: pressed && '#F2F4F8',
                  },
                  styles.boxMenu,
                ]}
                onPress={() =>
                  this.props?.navigation?.navigate(
                    ScreenName.Kitchen_list_screen,
                  )
                }>
                <Image source={images.PaperPlus} />
                <Text style={styles.liText}>Đặt cơm định kỳ</Text>
              </Pressable>
              <Pressable
                style={({pressed}: any) => [
                  {
                    backgroundColor: pressed && '#F2F4F8',
                  },
                  styles.boxMenu,
                ]}
                onPress={() =>
                  this.props?.navigation?.navigate(
                    ScreenName.MEALS_CAN_BE_RECEIVED,
                  )
                }>
                <Image source={images.download} />
                <Text style={styles.liText}>Suất ăn có thể nhận</Text>
              </Pressable>
              <Pressable
                style={({pressed}: any) => [
                  {
                    backgroundColor: pressed && '#F2F4F8',
                  },
                  styles.boxMenu,
                ]}
                onPress={() =>
                  this.props?.navigation?.navigate(ScreenName.MealYouTransfer)
                }>
                <Image source={images.up} />
                <Text style={styles.liText}>Suất ăn bạn chuyển</Text>
              </Pressable>
            </View>
            <TouchableWithoutFeedback onPress={() => this.click(!checkMenu)}>
              <View style={{flex: 6, width: '100%'}}></View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconMenu: {
    marginRight: sizes._15sdp,
    width: 24,
    height: 24,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  boxMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  liText: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 8,
    marginTop: 20,
  },
});
