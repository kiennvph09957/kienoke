import {View, StyleSheet, StatusBar} from 'react-native';
import React, {Component} from 'react';
import colors from '../../../res/colors';
import Radialgradient from '../../../components/Radialgradient';
import NotificationHeaderDetail from '../../../components/NotificationHeaderDetail';
import AppHeader from '../../../components/AppHeader';
import images from '../../../res/images';
export class DetailNotificationScreen extends Component {
  render() {
    return (
      <View style={styles.mContainer}>
        <AppHeader
          back
          user
          infoUser={{
            name: 'Lê Thành Công',
            position: 'Giám đốc',
            uriImage: images.Ellipse_1,
          }}
        />
        <View style={{flex: 1}}>
          <NotificationHeaderDetail />
        </View>
      </View>
    );
  }
}

export default DetailNotificationScreen;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: colors._color_black,
  },
});
