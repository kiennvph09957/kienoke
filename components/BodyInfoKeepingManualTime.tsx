import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import sizes from '../res/sizes';
import colors from '../res/colors';
import ContentBottomSheetManualTime from './ContentBottomSheetManualTime';
import CheckBoxManualTime from './CheckBoxManualTime';
import CheckBoxManualTimeDD from './CheckBoxManualTimeDD';
import ButtonBottomSheetManualTime from './ButtonBottomSheetManualTime';

import ButtonBottomSheetManualTime_ from './ButtonBottomSheetManualTime_';

interface State {}
interface Props {

  navigation: any | string;
}

export class BodyInfoKeepingManualTime extends React.Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mContainer}>
        <View
          style={{
            borderWidth: 1,
            // flex: 5,
            backgroundColor: colors._color_white,
            borderColor: colors._color_white,
            borderRadius: sizes._10sdp,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <ContentBottomSheetManualTime
            star="*"
            titleWork="Loại công"
            title="Đi làm cả ngày"
          />
          <View>
            <CheckBoxManualTime />
          </View>

          <ContentBottomSheetManualTime
            star="*"
            titleWork="Địa điểm"
            title="Địa điểm"
          />
          <View>
            <CheckBoxManualTimeDD />
          </View>
        </View>

        <View style={styles.contentMu}>
          <ButtonBottomSheetManualTime
            onPress={() => {
              console.log('');
              this.props.navigation.goBack();
            }}
            titleBtn="Huỷ bỏ"
          />
          <ButtonBottomSheetManualTime_
            onPress={() => {
              this.props.navigation.goBack();
            }}
            titleBtn="Chấm công"
          />
        </View>
      </View>
    );
  }
}

export default BodyInfoKeepingManualTime;

const styles = StyleSheet.create({
  mContainer: {
    // flex: 1,
    width: sizes._screen_width - sizes._32sdp,
    // height: '75%',

    marginHorizontal: sizes._16sdp,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: sizes._12sdp,
  },
  contentMu: {
    // flex: 2,
    flexDirection: 'row',
    marginTop: sizes._39sdp,
  },
});
