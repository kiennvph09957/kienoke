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

export class ContentBottomSheet extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{}}>
        <View style={{flexDirection: 'row', marginTop: sizes._24sdp}}>
          <Text style={styles.mText}>{this.props.titleWork}</Text>
          <Text style={styles.mStar}>{this.props.star}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: sizes._15sdp,
            marginLeft: sizes._32sdp,
          }}>
          <SvgXml xml={svgdone} width={24} height={24}></SvgXml>
          <Text style={styles.mTextTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default ContentBottomSheet;
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
  mTextTitle: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._20sdp,
    color: '#4D4B4B',
    marginLeft: sizes._10sdp,
    marginTop: sizes._6sdp,
  },
});
