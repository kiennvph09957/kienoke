import {Text, View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import images from '../../../res/images';
import colors from '../../../res/colors';
import Radialgradient from '../../../components/Radialgradient';
import NotificationHeader from '../../../components/NotificationHeader';
import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';
export class NotificationsScreen extends Component {
  // UI
  render() {
    const {mContainer} = styles;
    return (
      <View style={mContainer}>
        <AppHeader
          back
          user
          infoUser={{
            name: 'Lê Thành Công',
            position: 'Giám đốc',
            uriImage: images.Ellipse_1,
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <NotificationHeader />
        </View>
      </View>
    );
  }
}

export default NotificationsScreen;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: colors._color_white,
  },
});
