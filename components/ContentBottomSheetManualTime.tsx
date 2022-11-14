import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgdone} from '../assets/svg/svgdone';
import sizes from '../res/sizes';
type Props = {
  titleWork: string | any;
  title: string | any;
  star: string | any;
  //   style: string | any;
};

export class ContentBottomSheetManualTime extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: sizes._24sdp}}>
          <Text style={styles.mText}>{this.props.titleWork}</Text>
          <Text style={styles.mStar}>{this.props.star}</Text>
        </View>
      </View>
    );
  }
}

export default ContentBottomSheetManualTime;
const styles = StyleSheet.create({
  mText: {
    fontSize: sizes._18sdp,
    lineHeight: sizes._20sdp,
    color: '#676565',
    fontWeight: '400',
    fontStyle: 'normal',
    marginLeft: sizes._32sdp,
  },
  mStar: {
    color: '#EF0B0B',
    fontSize: sizes._16sdp,
    marginLeft: sizes._12sdp,
    // marginTop: sizes._24sdp,
  },
});
