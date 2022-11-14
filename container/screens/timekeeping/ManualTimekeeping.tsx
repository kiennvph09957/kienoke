import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import React, {Component} from 'react';
import colors from '../../../res/colors';
import HeaderKeeping from '../../../components/HeaderKeeping';
import CustomSvgBottom from '../../../res/CustomSvgBottom';
import sizes from '../../../res/sizes';
import TextPublicityKeeping from '../../../components/TextPublicityKeeping';
import BodyInfoKeepingManualTime from '../../../components/BodyInfoKeepingManualTime';
interface Props {
  navigation: string | any;
}
export class ManualTimekeeping extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: colors._color_white_black,
        }}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />

        <HeaderKeeping
          navigation={this.props.navigation}
          titleHeader="Chấm công thủ công"
        />

        {/* <View>

        </View> */}
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: sizes._100sdp,
            backgroundColor: colors._color_white,
            borderTopLeftRadius: sizes._20sdp,
            borderTopRightRadius: sizes._20sdp,
          }}>
          <TextPublicityKeeping
            title="Chấm công ngày 28/8/2021"
            style={{
              fontSize: sizes._18sdp,
              color: '#4D4B4B',
              lineHeight: sizes._27sdp,
              marginTop: sizes._18sdp,
              fontStyle: 'normal',
              fontWeight: '700',
              marginLeft: sizes._16sdp,
            }}
          />
          <BodyInfoKeepingManualTime navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default ManualTimekeeping;
