import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';

import colors from '../res/colors';
import sizes from '../res/sizes';
import ListCV from './ListCV';
import Information from './Information';
import images from '../res/images';
import AppHeader from '../components/AppHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
interface Props {
  navigation: any;
}
const emptyData: any = [];
const renderNullItem = () => null;
export default class Profile extends Component<Props> {
  renderEmty = () => (
    <>
      <View
        style={{
          padding: sizes._10sdp,
          top: sizes._8sdp,
          height: sizes._300sdp,
        }}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              lineHeight: sizes._27sdp,
              left: sizes._35sdp,
            }}>
            Thông tin cá nhân
          </Text>
        </View>
        <ListCV />
      </View>
      <View style={styles.boderadius} />
      <View style={{marginTop: sizes._55sdp, backgroundColor: 'transparent'}}>
        <Information></Information>
      </View>
    </>
  );

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppHeader
          user={true}
          infoUser={{
            name: 'Nguyễn Thị Hoa',
            position: 'Kĩ sư giải pháp nghiệp vụ',
            uriImage: images.Ellipse2,
          }}
          back
          onBackPress={() => this.props.navigation.goBack()}
          logoStyle
          rightContent
          qrCode
          onQRCodePress={() => console.log('qrcode')}
          seach1
          onSeach1={() => console.log('search')}
        />
        <View style={styles.contentContainer}>
          <FlatList
            data={emptyData}
            renderItem={renderNullItem}
            ListEmptyComponent={this.renderEmty()}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors._color_white,
  },

  boderadius: {
    position: 'absolute',
    width: '80%',
    height: 0,
    left: sizes._45sdp,
    top: sizes._320sdp,
    borderColor: '#929292',
    borderWidth: sizes._1sdp,
  },
  contentContainer: {
    backgroundColor: colors._color_white,
    width: '100%',
    borderTopRightRadius: sizes._20sdp,
    borderTopLeftRadius: sizes._20sdp,
    height: sizes._screen_height,
    flex: 1,
  },
});
