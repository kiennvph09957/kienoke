import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import sizes from '../../../res/sizes';
import colors from '../../../res/colors';

import images from '../../../res/images';
import {style} from '../../../common/rn-wave-bottom-bar-custom/src/styles/bottom.tab.styles';

type Props = {
  isShow?: boolean;
  toggleDate?: () => void;
  takePhotoCamera?: any;
  choosePhoto?: any;
};
interface State {
  // image: any;
  // images: any;
}

export default class ModalCus extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   image: null,
    //   images: null,
    // };
  }
  renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={this.props.toggleDate}>
          <Icons
            name="chevron-back"
            size={sizes._24sdp}
            color={colors._color_gray_text_light}
          />
        </TouchableOpacity>
        <Text style={[styles.textHeader, {marginLeft: sizes._28sdp}]}>
          Chọn ảnh
        </Text>
      </View>

      <TouchableOpacity
        onPress={this.props.toggleDate}
        style={{marginRight: sizes._30sdp}}>
        <Text style={styles.textHeader}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );

  renderContent = () => <></>;

  renderFooter = () => (
    <View style={styles.footerContainer}>
      <Pressable
        onPress={() => this.props.takePhotoCamera()}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#676565' : colors._color_white},

          styles.bgImage,
        ]}>
        <Image source={images.camera}></Image>
        <Text style={{top: sizes._8sdp}}>Chụp ảnh</Text>
      </Pressable>
      <View></View>

      <View style={styles.spaceFooter} />

      <Pressable
        onPress={() => this.props.choosePhoto()}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#676565' : colors._color_white},
          styles.choosePhoto,
        ]}>
        <Image style={{tintColor: '#676565'}} source={images.photo}></Image>
        <Text style={{top: sizes._8sdp}}>Thư viện</Text>
      </Pressable>
    </View>
  );

  render() {
    return (
      <View>
        <Modal
          visible={this.props.isShow}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.props.toggleDate}>
              <View style={{width: '100%', flex: 1, zIndex: 0}} />
            </TouchableWithoutFeedback>
            <View style={styles.content}>
              <View style={styles.indicator} />

              {this.renderHeader()}

              {this.renderContent()}

              {this.renderFooter()}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._color_gray_translucen,
  },
  content: {
    zIndex: 1,
    bottom: 0,
    position: 'absolute',
    width: sizes._csreen_width,
    backgroundColor: colors._color_white,
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  indicator: {
    height: sizes._5sdp,
    width: sizes._50sdp,
    backgroundColor: colors._color_black,
    opacity: 0.15,
    borderRadius: sizes._3sdp,
    margin: sizes._16sdp,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: sizes._16sdp,
  },
  headerRight: {
    flexDirection: 'row',
    flex: 1,
  },
  textHeader: {
    fontSize: sizes._font_size_big,
    color: colors._color_text_title,
    fontWeight: '600',
  },

  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes._22sdp,
    paddingTop: sizes._50sdp,
    marginBottom: sizes._30sdp,
  },
  spaceFooter: {
    width: sizes._30sdp,
    paddingLeft: sizes._60sdp,
  },
  bgImage: {
    height: sizes._118sdp,
    width: sizes._118sdp,
    borderColor: '#676565',
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePhoto: {
    height: sizes._118sdp,
    width: sizes._118sdp,
    borderColor: '#676565',
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
