import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class ListOfMeals extends Component {
  render() {
    const data: any = [
      {
        id: 1,
        order_id: 3,
        name: 'Bún trộn nam bộ',
        image:
          'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
      },
      {
        id: 2,
        name: 'Rau củ luộc',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 3,
        name: 'Bún sườn chua',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 4,
        name: 'Chuối tiêu',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 5,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 6,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 7,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 8,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 9,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 10,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 11,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 12,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 13,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 14,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 15,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 16,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 17,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 18,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 19,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 20,
        name: 'doan4',
        order_id: 1,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
    ];
    return (
      <SafeAreaView style={{marginTop: 10}}>
        <FlatList
          data={data}
          horizontal
          renderItem={({item, index}) => (
            <View style={styles.container}>
              <ImageBackground
                source={{uri: `${item.image}`}}
                style={styles.heightImage}>
                <LinearGradient
                  start={{x: 0, y: 0.3}}
                  end={{x: 0, y: 0.9}}
                  colors={['rgba(255, 255, 255, 0)', '#F45757']}
                  style={styles.linearGradient}>
                  <Text style={styles.namee}>{item.name}</Text>
                </LinearGradient>
              </ImageBackground>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 160,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'flex-end',
    width: '100%',
    height: '50%',
  },
  namee: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    paddingHorizontal: 5,
    fontWeight: '600',
  },
  heightImage: {
    width: '100%',
    height: '100%',
  },
});
