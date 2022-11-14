import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {Component, useState} from 'react';

import sizes from '../../../res/sizes';
import Count from './Count';
const LunchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [color, setColor] = useState();
  const changeColor1 = () => {
    setColor('#D30026');
  };
  const changeColor2 = () => {
    setColor('#676565');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',

          position: 'absolute',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
          }}>
          Thiết lập địnhk kỳ
        </Text>
        <Switch
          style={{left: sizes._180sdp}}
          trackColor={{false: '#F2F4F8', true: '#D30026'}}
          thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Count />
        <Text style={styles.text}>Thứ 2</Text>
      </View>

      <View style={{top: sizes._80sdp}}>
        <Count />
        <Text style={styles.text}>Thứ 3</Text>
      </View>
      <View style={{top: sizes._160sdp}}>
        <Count />
        <Text style={styles.text}>Thứ 4</Text>
      </View>
      <View style={{top: sizes._240sdp}}>
        <Count />
        <Text style={styles.text}>Thứ 5</Text>
      </View>
      <View style={{top: sizes._320sdp}}>
        <Count />
        <Text style={styles.text}>Thứ 6</Text>
      </View>
      <View style={{top: sizes._400sdp}}>
        <Count />
        <Text style={styles.text}>Thứ 7</Text>
      </View>
      <View style={{top: sizes._480sdp}}>
        <Count />
        <Text style={styles.text}>Chủ nhật</Text>
      </View>
      <TouchableOpacity
        onPress={changeColor1}
        style={[
          styles.btn1,
          color === '#D30026'
            ? {backgroundColor: '#D30026'}
            : {backgroundColor: '#676565'},
        ]}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF'}}>
          Đặt lại
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn2,
          color === '#676565'
            ? {backgroundColor: '#D30026'}
            : {backgroundColor: '#676565'},
        ]}
        onPress={changeColor2}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF'}}>
          Đồng ý
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn1: {
    height: sizes._48sdp,
    top: sizes._600sdp,
    width: sizes._155sdp,

    borderRadius: sizes._128sdp,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  btn2: {
    height: sizes._48sdp,
    top: sizes._600sdp,
    width: sizes._155sdp,

    borderRadius: sizes._128sdp,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: sizes._200sdp,
  },
  text: {
    position: 'absolute',
    top: sizes._54sdp,
    left: sizes._35sdp,
    fontSize: 18,
    fontWeight: '400',
  },
});
