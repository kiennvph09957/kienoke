import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Dots from './Dots';
import LineBottomSheet from './LineBottomSheet';
import sizes from '../res/sizes';
import ContentBottomSheet from './ContentBottomSheet';
import ButtonBottomSheetCancel from './ButtonBottomSheetCancel';
import {SvgXml} from 'react-native-svg';
import {iconss} from '../assets/svgs/ic_delete_btn';
import ButtonBottomSheetManualTime from './ButtonBottomSheetManualTime';

import ButtonBottomSheetManualTime_ from './ButtonBottomSheetManualTime_';
interface Props {
  // windowHeight_: number;
  // initialSnapIndex: number;
  onPress: () => void;
  onPressOut: () => void;
  isShow: boolean;

  // onPressIn: () => void;
}
interface State {
  hiddenBottomSheet: boolean;
  hiddenBottomSheet_: boolean;
  textInput: string;
  behavior: any;
}
export class BottomSheetCancelKeeping extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);

    this.state = {
      hiddenBottomSheet: true,
      hiddenBottomSheet_: false,
      textInput: '',
      behavior: sizes._384sdp,
    };
  }

  handlerBtn = () => {
    this.setState({hiddenBottomSheet: false});
    this.setState({hiddenBottomSheet_: true});
  };

  // componentDidUpdate() {
  //   this.clearText()
  // }

  clearText() {}

  render() {
    // console.log(this.state.textInput);
    return (
      <View>
        {/* <Modal></Modal> */}
        <Modal
          // bool={true}
          // isShow={this.props.isShow}
          visible={this.props.isShow}
          // snapPoints={[this.props.windowHeight_]}
          // initialSnapIndex={this.props.initialSnapIndex}
          animationType="slide"
          transparent={true}
          // hardwareAccelerated ={false}
          statusBarTranslucent={true}>
          {/* <TouchableOpacity> */}
          {this.state.hiddenBottomSheet && (
            <TouchableOpacity
              onPressOut={this.props.onPressOut}
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.68)',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: sizes._384sdp,
                  position: 'absolute',
                  bottom: 0,
                  borderTopLeftRadius: sizes._40sdp,
                  borderTopRightRadius: sizes._40sdp,
                }}>
                <View
                  style={{
                    // borderWidth: 1,
                    // marginTop: sizes._19sdp,
                    // width: sizes._48sdp,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      marginVertical: sizes._19sdp,
                      width: sizes._48sdp,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Dots style={styles.mDots} />
                  <Text style={styles.mTextDate}>28/08/2021</Text>
                  <Text style={styles.mText} onPress={this.props.onPress}>
                    Huỷ
                  </Text>
                </View>
                <View style={{marginTop: 24}}>
                  <LineBottomSheet />
                </View>
                <ContentBottomSheet
                  star="*"
                  titleWork="Loại công"
                  title="Đi làm cả ngày"
                />
                <ContentBottomSheet
                  star="*"
                  titleWork="Loại công"
                  title="X- Công chế độ tính lương thời gian"
                />
                {/* </View> */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: sizes._38sdp,
                  }}>
                  <ButtonBottomSheetCancel
                    onPress={this.handlerBtn}
                    titleBtn="Huỷ chấm công"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          {/* </TouchableOpacity> */}
          {this.state.hiddenBottomSheet_ && (
            <TouchableOpacity
              onPressOut={this.props.onPressOut}
              style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.68)'}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: this.state.behavior,
                  position: 'absolute',
                  bottom: 0,
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  borderTopLeftRadius: sizes._40sdp,
                  borderTopRightRadius: sizes._40sdp,
                }}>
                <View
                  style={{
                    // borderWidth: 1,
                    // marginTop: sizes._19sdp,
                    // width: sizes._48sdp,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      marginVertical: sizes._19sdp,
                      width: sizes._48sdp,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Dots style={styles.mDots} />
                  <Text style={styles.mTextDate}>28/08/2021</Text>
                  <Text style={styles.mText} onPress={this.props.onPress}>
                    Huỷ
                  </Text>
                </View>
                <View style={{marginTop: 24}}>
                  <LineBottomSheet />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 32,
                    marginTop: 16,
                    marginBottom: 6,
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 18,
                    }}>
                    Lý do
                  </Text>
                  <Text style={{marginLeft: 6, color: '#E82130'}}>*</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    // width: sizes._350sdp,
                    height: sizes._110sdp,
                    marginHorizontal: 10,
                    marginLeft: sizes._33sdp,
                    marginRight: sizes._31sdp,
                    borderColor: '#727070',
                    borderRadius: sizes._8sdp,
                  }}>
                  <SvgXml
                    onPress={() => {
                      this.setState({textInput: ''});
                      console.log('ok');
                    }}
                    xml={iconss}
                    width={sizes._24sdp}
                    height={sizes._24sdp}
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      top: 4,
                      right: 4,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 0,
                    }}>
                    <TextInput
                      value={this.state.textInput}
                      onChangeText={val => {
                        this.setState({textInput: val});
                        this.setState({behavior: '80%'});
                      }}
                      multiline={true}
                      placeholder="Lý do bạn huỷ chấm công...?"
                    />
                  </View>
                </View>
                <View style={styles.contentMu}>
                  <ButtonBottomSheetManualTime
                    onPress={() => {
                      console.log('opk');
                      // this.props.navigation.goBack();
                    }}
                    titleBtn="Huỷ bỏ"
                  />
                  <ButtonBottomSheetManualTime_
                    onPress={() => {
                      // this.props.navigation.goBack();
                    }}
                    titleBtn="Cập nhật"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </Modal>
      </View>
    );
  }
}

export default BottomSheetCancelKeeping;

const styles = StyleSheet.create({
  mDots: {
    width: sizes._17sdp,
    height: sizes._17sdp,
    borderRadius: sizes._17sdp,
    backgroundColor: '#0F5DD2',
    marginLeft: sizes._34sdp,
    marginTop: sizes._12sdp,
  },
  mTextDate: {
    fontSize: sizes._26sdp,
    color: '#4D4B4B',
    fontWeight: '600',
    marginLeft: sizes._24sdp,
  },
  mText: {
    position: 'absolute',
    right: sizes._30sdp,
    fontSize: sizes._20sdp,
    color: '#D20B2E',
    marginTop: sizes._6sdp,
  },
  contentMu: {
    flexDirection: 'row',
    marginTop: sizes._39sdp,
  },
});
