// React Native Custom Star Rating Bar
// https://aboutreact.com/react-native-custom-star-rating-bar/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import sizes from '../../../res/sizes';

const Ratting = () => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(3);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity key={item} onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('./Image/star.png')
                    : require('./Image/star1.png')
                }
              />
            </TouchableOpacity>
          );
        })}
        <View></View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomRatingBar />
        <View
          style={{
            right: -165,
            top: sizes._30sdp,
            alignItems: 'flex-end',
            position: 'absolute',
          }}>
          {defaultRating === 1 && (
            <Text
              style={{
                color: '#D30026',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Rất kém
            </Text>
          )}
          {defaultRating === 2 && (
            <Text
              style={{
                color: '#D30026',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Kém
            </Text>
          )}
          {defaultRating === 3 && (
            <Text
              style={{
                color: '#D66905',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Trung bình
            </Text>
          )}
          {defaultRating === 4 && (
            <Text
              style={{
                color: '#D30026',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Tốt
            </Text>
          )}
          {defaultRating === 5 && (
            <Text
              style={{
                color: '#1EA162',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Rất tốt
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ratting;

const styles = StyleSheet.create({
  container: {
    width: sizes._180sdp,
    position: 'absolute',
    flex: 1,

    top: sizes._10sdp,
  },
  customRatingBarStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: sizes._30sdp,
  },
  starImageStyle: {
    width: sizes._19sdp,
    height: sizes._20sdp,
  },
});
