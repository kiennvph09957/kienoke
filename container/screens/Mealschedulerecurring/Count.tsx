import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {Component, useState} from 'react';

import sizes from '../../../res/sizes';

import images from '../../../res/images';

const Count = () => {
  const [count, setCount] = useState(0);

  const onPress = () =>
    setCount(prevCount => (prevCount <= 0 ? 0 : prevCount - 1));
  const onPress1 = () => setCount(prevCount => prevCount + 1);

  return (
    <View>
      <View
        style={{
          top: sizes._55sdp,
          position: 'absolute',

          flexDirection: 'row',
          left: 0,
        }}>
        <BouncyCheckbox
          size={20}
          fillColor="#D30026"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#D30026'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={(isChecked: boolean) => {}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{marginLeft: sizes._270sdp}}>
            <Image source={images.btncount}></Image>
          </TouchableOpacity>

          <View style={styles.count}>
            <Text>{count}</Text>
          </View>
          <TouchableOpacity
            onPress={onPress1}
            style={{marginLeft: sizes._50sdp}}>
            <Image source={images.btncount1}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Count;
const styles = StyleSheet.create({
  count: {
    height: sizes._24sdp,
    width: sizes._24sdp,
    marginLeft: sizes._310sdp,
    position: 'absolute',
    borderWidth: sizes._1sdp,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes._5sdp,
    borderColor: '#8F9294',
    top: sizes._6sdp,
  },
});
