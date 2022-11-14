import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../res/images';
interface Props {
  id: any;
}
export default class SeeMenu extends Component<Props> {
  render() {
    const dataMeal: any = [
      {
        id: 1,
        id_data: 3,
        name: 'Bún trộn nam bộ',
        image:
          'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
      },
      {
        id: 2,
        name: 'Rau củ luộc',
        id_data: 3,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 3,
        name: 'Bún sườn chua',
        id_data: 3,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 4,
        name: 'Chuối tiêu',
        id_data: 10,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 5,
        name: 'doan4',
        id_data: 10,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 6,
        name: 'doan5',
        id_data: 10,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 7,
        name: 'doan6',
        id_data: 10,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 8,
        name: 'doan7',
        id_data: 11,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 9,
        name: 'doan8',
        id_data: 11,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 10,
        name: 'doan9',
        id_data: 11,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 11,
        name: 'doan10',
        id_data: 12,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 12,
        name: 'doan11',
        id_data: 12,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 13,
        name: 'doan12',
        id_data: 12,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
      {
        id: 14,
        name: 'doan13',
        id_data: 12,
        image:
          'https://cdn.tgdd.vn/Files/2019/03/07/1153472/chinese-new-year_600x800.jpg',
      },
    ];
    const dataNew = dataMeal.filter(
      (item: any) => item.id_data == this.props.id,
    );
    return (
      <SafeAreaView style={{marginTop: 10}}>
        {dataNew.length > 0 ? (
          <FlatList
            data={dataNew}
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
        ) : (
          <View>
            <Image source={images.Frame149} style={styles.image} />
          </View>
        )}
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
  image: {
    width: '100%',
    marginVertical: 10,
    borderColor: 'rgb(229, 229, 229)',
    borderWidth: 1,
  },
});
