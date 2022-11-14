import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TitleCard from './TitleCard';
import sizes from '../../res/sizes';
import colors from '../../res/colors';

type Props = {};

type State = {};

export class InfoCard extends Component<Props, State> {
  render() {
    const {mContainer, mStyleTitle, viewHorizontal, mStyleName, mStyleTitleFl} =
      styles;

    return (
      <View style={mContainer}>
        <TitleCard title="Nhân viên" style={mStyleTitle} />
        <View style={viewHorizontal}>
          <TitleCard title="Nguyễn Thị" style={mStyleTitleFl} />
          <TitleCard title="Hoa" style={mStyleName} />
        </View>

        {/* input */}
        <View
          style={{
            width: sizes._206sdp,
            height: sizes._27sdp,
            borderWidth: 1,
            alignSelf :"flex-end", 
            backgroundColor : colors._color_white,
            borderColor : colors._color_white,
            borderRadius : sizes._5sdp
          }}></View>

        <TitleCard title="Kỹ sư Giải pháp Nghiệp vụ" style={mStyleTitle} />
        <TitleCard title="Trung tâm Công nghệ Thông tin" style={mStyleTitle} />
        <TitleCard title="024.62556789" style={mStyleTitle} />
      </View>
    );
  }
}

export default InfoCard;

const styles = StyleSheet.create({
  mContainer: {
    marginRight: sizes._34sdp,
    position: 'absolute',
    right: 0,
    paddingTop: sizes._48sdp,
  },
  mStyleTitle: {
    fontSize: sizes._20sdp,
    color: colors._color_white,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    textAlign: 'right',
  },
  mStyleTitleFl: {
    fontSize: sizes._20sdp,
    color: colors._color_white,
    fontWeight: '400',
    marginTop: sizes._30sdp,
    textAlign: 'right',
  },
  viewHorizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mStyleName: {
    textAlign: 'right',
    fontSize: sizes._48sdp,
    fontWeight: '700',
    color: colors._color_white,
    paddingLeft: sizes._6sdp,
  },
});
