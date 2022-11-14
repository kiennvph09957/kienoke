import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import sizes from '../../res/sizes';
import {SvgXml} from 'react-native-svg';
import {svgViettel} from '../../assets/svg/logo_viettel';
import {imgGirl} from '../../assets/svg/girlimg';

import {cardMin} from '../../assets/svg/svgCardMin';
import {cardMax} from '../../assets/svg/svgCardMax';
import InfoCard from './InfoCard';
type Props = {};

type State = {};

export class BodyCard extends Component<Props, State> {
  render() {
    return (
      <View style={styles.mContainer}>
        <View style={styles.mLogo}>
          <SvgXml
            xml={svgViettel}
            width={sizes._111sdp}
            height={sizes._20sdp}></SvgXml>
        </View>
        <View>
          {/* Ảnh */}
          <View
            style={{
              paddingLeft: sizes._45sdp,
              paddingTop: sizes._3sdp,
              zIndex: 0,
              position: 'absolute',
            }}>
            <SvgXml
              xml={imgGirl}
              width={sizes._274sdp}
              height={sizes._351sdp}></SvgXml>
          </View>
          {/* Vector */}
          <View style={{marginTop: sizes._178sdp}}>
            <View
              style={{
                zIndex: 1,
                position: 'absolute',
                top: sizes._13sdp,
                bottom: 0,
                paddingLeft: sizes._16sdp,
                paddingRight: sizes._16sdp,
              }}>
              <SvgXml
                xml={cardMin}
                width={sizes._382sdp}
                height={sizes._258sdp}></SvgXml>

              {/* ///// */}
              {/* <View
                style={{
                  position: 'absolute',
                  right: sizes._24sdp,
                  top: sizes._32sdp,
                  
                }}> */}
              {/* <InfoCard /> */}
              {/* </View> */}
            </View>
            <View
              style={{
                zIndex: 0,
                position: 'absolute',
                top: 0,
                bottom: 0,
                paddingLeft: sizes._16sdp,
                paddingRight: sizes._16sdp,
              }}>
              <SvgXml
                xml={cardMax}
                width={sizes._382sdp}
                height={sizes._270sdp}></SvgXml>
            </View>

            <View
              style={{
                zIndex: 2,
              }}>
              <InfoCard />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BodyCard;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  mLogo: {
    paddingTop: sizes._24sdp,
    alignItems: 'center',
  },
});
