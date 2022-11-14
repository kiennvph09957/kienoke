import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Dots from '../components/Dots';
import LineBottomSheet from './LineBottomSheet';
import sizes from '../res/sizes';
import ContentBottomSheet from './ContentBottomSheet';
import ButtonBottomSheet from './ButtonBottomSheet';

interface Props {
  // windowHeight_: number;
  // initialSnapIndex: number;
  onPressOut: () => void;
  onPress: () => void;
  isShow: boolean;
}
export class BottomSheetKeeping extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handlerBtn = () => {
    console.log('');
  };
  render() {
    return (
      <Modal
        visible={this.props.isShow}
        // snapPoints={[this.props.windowHeight_]}
        // initialSnapIndex={this.props.initialSnapIndex}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}>
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

            <ContentBottomSheet
              star="*"
              titleWork="Loại công"
              title="Đi làm cả ngày"
            />
            <ContentBottomSheet
              star="*"
              titleWork="Loại công"
              title="X- Công chế độ tính lương thời gian
            "
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: sizes._38sdp,
              }}>
              <ButtonBottomSheet
                onPress={this.handlerBtn}
                titleBtn="Chấm công đã khoá"
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default BottomSheetKeeping;

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
});
