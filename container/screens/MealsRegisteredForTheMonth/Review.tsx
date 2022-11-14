import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import images from '../../../res/images';
import {ProgressBar} from 'react-native-paper';

export default class Review extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '30%'}}>
          <View>
            <Text style={{fontSize: 44, color: '#4D4B4B', fontWeight: '500'}}>
              4.7
            </Text>
            <Text>225 Đánh giá</Text>
          </View>
        </View>
        <View style={{width: '70%'}}>
          <View style={styles.review}>
            <View style={styles.imageStar}>
              <Image source={images.Frame5} />
            </View>
            <View style={styles.box}>
              <ProgressBar
                progress={0.7}
                color="#D20B2E"
                style={{backgroundColor: '#E7E7E7'}}
              />
            </View>
          </View>
          <View style={styles.review}>
            <View style={styles.imageStar}>
              <Image source={images.Frame4} />
            </View>
            <View style={styles.box}>
              <ProgressBar
                progress={0.6}
                color="#D20B2E"
                style={{backgroundColor: '#E7E7E7'}}
              />
            </View>
          </View>
          <View style={styles.review}>
            <View style={styles.imageStar}>
              <Image source={images.Frame3} />
            </View>
            <View style={styles.box}>
              <ProgressBar
                progress={0.4}
                color="#D20B2E"
                style={{backgroundColor: '#E7E7E7'}}
              />
            </View>
          </View>
          <View style={styles.review}>
            <View style={styles.imageStar}>
              <Image source={images.Frame2} />
            </View>

            <View style={styles.box}>
              <ProgressBar
                progress={0.3}
                color="#D20B2E"
                style={{backgroundColor: '#E7E7E7'}}
              />
            </View>
          </View>
          <View style={styles.review}>
            <View style={styles.imageStar}>
              <Image source={images.Frame1} />
            </View>
            <View style={styles.box}>
              <ProgressBar
                progress={0.2}
                color="#D20B2E"
                style={{backgroundColor: '#E7E7E7'}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes._20sdp,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  review: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  star: {
    backgroundColor: '#E7E7E7',
    width: '100%',
    height: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  box: {
    width: '75%',
  },

  imageStar: {
    flexDirection: 'row',
    width: '25%',
    marginRight: 10,
    justifyContent: 'flex-end',
  },
});
