import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../res/colors';
import sizes from '../res/sizes';
import images from '../res/images';

interface Props {
  back?: boolean;
  onBackPress?: any;
  title?: boolean;
  textTittle?: any;
  logo?: boolean;
  logoUri?: any;
  logoStyle?: any;
  user?: boolean;
  infoUser?: any;
  contentCustom?: any;
  contentCustomJSX?: any;
  rightContent?: boolean;
  seach?: boolean;
  onSeachPress?: any;
  setting?: boolean;
  onSettingPress?: any;
  qrCode?: boolean;
  onQRCodePress?: any;
  seach1?: boolean;
  onSeach1?: any;
}
interface State {}

//Kiểm tra thiết bị
const isAndroid = Platform.OS === 'android';

export default class AppHeader extends Component<Props, State> {
  render() {
    const {
      onBackPress,
      title,
      textTittle,
      logo,
      logoUri,
      logoStyle,
      back,
      user,
      infoUser,
      rightContent,
      seach,
      onSeachPress,
      setting,
      onSettingPress,
      contentCustom,
      contentCustomJSX,
      qrCode,
      onQRCodePress,
      onSeach1,
      seach1,
    } = this.props;

    return (
      <>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image
          source={images.bg_header_app}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />

        <View style={styles.container}>
          {/* Start header */}
          {back && (
            <MaterialIcons
              name="arrow-back-ios"
              size={sizes._24sdp}
              color={colors._color_white}
              style={styles.icon}
              onPress={() => this.props.onBackPress()}
            />
          )}

          {/* Content header */}
          {title && (
            <Text
              style={[
                styles.titleContent,
                {marginHorizontal: back ? 0 : sizes._16sdp},
              ]}>
              {textTittle}
            </Text>
          )}
          {user && (
            <>
              <Image
                source={infoUser.uriImage}
                style={styles.avatar}
                resizeMode="cover"
              />

              <Appbar.Content
                title={infoUser.name}
                subtitle={infoUser.position}
                titleStyle={styles.titleUser}
                subtitleStyle={styles.subTitleUser}
              />
            </>
          )}

          {logo && (
            <Image source={logoUri} resizeMode="contain" style={logoStyle} />
          )}

          {contentCustom && contentCustomJSX}

          {/* End Headert */}
          {rightContent && (
            <>
              {seach && (
                <Ionicons
                  name={isAndroid ? 'search-sharp' : 'ios-search-sharp'}
                  size={sizes._24sdp}
                  color={colors._color_white}
                  style={styles.iconCenter}
                  onPress={() => onSeachPress()}
                />
              )}

              {setting && (
                <MaterialIcons
                  name={'settings'}
                  size={sizes._24sdp}
                  color={colors._color_white}
                  onPress={onSettingPress}
                  style={styles.icon}
                />
              )}
              {seach1 && (
                <TouchableOpacity onPress={() => onSeach1()}>
                  <Image source={images.Search12} style={styles.icon}></Image>
                </TouchableOpacity>
              )}
              {qrCode && (
                <TouchableOpacity onPress={() => onQRCodePress()}>
                  <Image source={images.QRCode} style={styles.icon}></Image>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: sizes._header_height,
    paddingTop: sizes._statusbar_height,
    marginBottom: sizes._16sdp,
  },
  avatar: {
    width: sizes._49sdp,
    height: sizes._49sdp,
    borderRadius: sizes._49sdp / 2,
    borderColor: colors._color_white,
    borderWidth: sizes._1sdp,
  },
  colorHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: sizes._screen_width,
    height: sizes._csreen_height / 4,
  },
  rectLeft: {
    opacity: 0.2,
    position: 'absolute',
    top: '6.75%',
    left: 0.93 * sizes._csreen_width - sizes._100sdp,
    borderRadius: sizes._15sdp,
    transform: [{rotate: '130deg'}],
  },
  rectRight: {
    opacity: 0.2,
    position: 'absolute',
    top: '1.5%',
    left: '6%',
    borderRadius: sizes._10sdp,
    transform: [{rotate: '130deg'}],
  },
  rectRightSub: {
    opacity: 0.2,
    position: 'absolute',
    top: '5%',
    left: '-4.46%',
    borderRadius: sizes._15sdp,
    transform: [{rotate: '115deg'}],
  },
  rectLeftSub: {
    opacity: 0.2,
    position: 'absolute',
    top: '-12%',
    left: '86%',
    borderRadius: sizes._15sdp,
    transform: [{rotate: '130deg'}],
  },
  titleContent: {
    flex: 1,
    fontSize: sizes._font_size_big,
    fontWeight: '400',
    color: colors._color_white,
  },
  titleUser: {
    color: colors._color_white,
    fontSize: sizes._font_size_big,
  },
  subTitleUser: {
    color: colors._color_white,
    fontSize: sizes._font_size_large,
  },
  icon: {
    marginHorizontal: sizes._16sdp,
  },
  iconCenter: {
    marginLeft: sizes._16sdp,
  },
});
