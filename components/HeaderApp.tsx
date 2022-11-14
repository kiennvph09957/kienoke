import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  Platform,
  Text,
} from 'react-native';
import colors from '../res/colors';
import images from '../res/images';
import sizes from '../res/sizes';

interface Iprops {
  title?: string;
  iconLeft?: ImageSourcePropType;
  subTitle?: string;
  iconRight?: ImageSourcePropType;
  onLeftPress?: any;
}

export default class HeaderApp extends React.Component<Iprops> {
  getWithTitle = () => {
    const {iconLeft, iconRight} = this.props;
    if (iconLeft && iconRight) {
      return 0.53;
    } else if (iconLeft || iconRight) {
      return 0.59;
    } else {
      return 0.63;
    }
  };

  render() {
    const {title, iconLeft, iconRight, subTitle, onLeftPress} = this.props;
    return (
      <View
        style={{
          // height: sizes._150sdp,
          height: sizes._180sdp,
          width: sizes.width,
          backgroundColor: '#A30408',
        }}>
        <Image
          source={images.bg_header_app}
          style={{
            width: sizes.width,
            position: 'absolute',
            bottom: 0,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: sizes._67sdp + sizes._20sdp,
            width: sizes.width,
            paddingLeft: sizes._10sdp,
            paddingRight: sizes._16sdp,
            justifyContent: 'space-between',
            // height: sizes._70sdp
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {iconLeft ? (
              <TouchableOpacity
                onPress={() => {
                  this.props.onLeftPress();
                }}
                style={
                  {
                    paddingTop: sizes._15sdp,
                    paddingBottom: sizes._15sdp,
                    // paddingRight: sizes._3sdp,
                  }
                }>
                <Image
                  source={iconLeft}
                  resizeMode="contain"
                  style={{width: sizes._24sdp, height: sizes._24sdp}}
                />
              </TouchableOpacity>
            ) : null}

            <View
              style={{
                marginLeft: sizes._10sdp,
                width: sizes.width * this.getWithTitle(),
                height: sizes._50sdp,
                justifyContent: 'center',
              }}>
              {title ? (
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: sizes._20sdp,
                    color: colors._color_white,
                    lineHeight: sizes._27sdp,
                  }}>
                  {title}
                </Text>
              ) : null}
              {subTitle ? (
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: sizes._16sdp,
                    color: colors._color_white,
                    lineHeight: sizes._24sdp,
                  }}>
                  {subTitle}
                </Text>
              ) : null}
            </View>
          </View>

          {iconRight ? (
            <TouchableOpacity
              onPress={() => {
                this.props.onLeftPress();
              }}
              style={{
                paddingRight: sizes._15sdp,
                alignItems: 'flex-end',
              }}>
              <Image
                source={iconRight}
                resizeMode="contain"
                style={{width: sizes._24sdp, height: sizes._24sdp}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
