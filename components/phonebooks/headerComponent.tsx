import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../res/images';
import sizes from '../../res/sizes';
import AppHeader from '../AppHeader';
interface Props {}

interface State {}

class backgroundHeader extends Component<Props, State> {
  render() {
    return (
      <AppHeader
        back={true}
        user={true}
        infoUser={{
          name: 'Lê Thành Công',
          position: 'Giám đốc',
          uriImage: images.Ellipse_1,
        }}
        rightContent
        seach={true}
        setting={true}
      />
    );
  }
}
const styles = StyleSheet.create({});
export default backgroundHeader;
