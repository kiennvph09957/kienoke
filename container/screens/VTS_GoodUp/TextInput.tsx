import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

import sizes from '../../../res/sizes';
sizes;
const TextInputs = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          left: sizes._32sdp,
          top: sizes._65sdp,
          color: '#4D4B4B',
          fontFamily: 'FS PF BeauSans Pro',
        }}>
        Tiêu đề{' '}
        <Text
          style={{
            color: '#D30026',
            fontWeight: '600',
            fontSize: 20,
          }}>
          *
        </Text>
      </Text>
      <TextInput
        style={{
          fontSize: 20,
          left: sizes._32sdp,
          top: sizes._80sdp,
          height: sizes._52sdp,
          width: '85%',
          borderRadius: sizes._5sdp,
          borderWidth: sizes._1sdp,

          borderColor: '#929292',
        }}
        numberOfLines={1}
        value={text}
        onChangeText={value => setText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInputs;
