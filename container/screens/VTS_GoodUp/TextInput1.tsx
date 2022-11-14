import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import sizes from '../../../res/sizes';
import images from '../../../res/images';

const TextInput1 = () => {
  const [text1, setText1] = useState('');

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          left: sizes._32sdp,
          top: sizes._115sdp,
          color: '#4D4B4B',
          fontFamily: 'FS PF BeauSans Pro',
        }}>
        Nội dung{' '}
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
          padding: 5,
          borderColor: '#929292',
          width: '85%',
          height: sizes._99sdp,
          borderRadius: sizes._5sdp,
          borderWidth: sizes._1sdp,
          left: sizes._32sdp,
          top: sizes._130sdp,
          textAlignVertical: 'top',
        }}
        onChangeText={setText1}
        value={text1}
        multiline
        numberOfLines={3}
      />

      <View>
        <TouchableOpacity
          onPress={() => setText1('')}
          style={{
            width: sizes._24sdp,
            height: sizes._24sdp,
            marginLeft: '85%',
          }}>
          <Image
            source={images.cancel}
            style={{
              top: sizes._40sdp,

              width: sizes._24sdp,
              height: sizes._24sdp,
            }}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInput1;
