import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import sizes from './../../../res/sizes';
import images from '../../../res/images';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import AppHeader from '../../../components/AppHeader';
interface Props {
  navigation: any;
}
interface State {
  checkImage: any;
}
export default class DetailReview extends Component<Props, State> {
  state: State = {
    checkImage: false,
  };
  render() {
    const data = [
      {
        id: 1,
        image:
          'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-12.jpg',
      },
      {
        id: 2,
        image:
          'https://beptueu.vn/hinhanh/tintuc/cac-loai-xoi-hinh-anh-cac-mon-an-ngon.jpg',
      },
      {
        id: 3,
        image:
          'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-3.jpg',
      },
    ];
    return (
      <View style={styles.mContainer}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Đánh giá"
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.listComment}>
                <View style={styles.name}>
                  <View style={styles.flex}>
                    <Image
                      source={{
                        uri: 'https://cf.shopee.vn/file/d7db31e5547ccb4755e369a89a6f89b2',
                      }}
                      style={styles.avatarUser}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: '#676565',
                        }}>
                        Lê Văn Việt
                      </Text>
                      <Text>20/05/2022</Text>
                    </View>
                  </View>
                  <Image source={images.Vector} />
                </View>
                <Text style={{marginTop: 10, color: '#676565'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </Text>
                <TouchableOpacity
                  style={{marginTop: 10}}
                  onPress={() =>
                    this.setState({checkImage: !this.state.checkImage})
                  }>
                  <Text>
                    Xem chi tiết <Image source={images.ArrowRight2} />
                  </Text>
                </TouchableOpacity>
                {this.state.checkImage == true && (
                  <FlatList
                    data={data}
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({item, index}) => {
                      return (
                        <Image
                          source={{uri: item.image}}
                          style={{
                            width: 90,
                            height: 90,
                            marginHorizontal: 10,
                            marginTop: 10,
                            borderRadius: 10,
                          }}
                        />
                      );
                    }}
                  />
                )}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },

  listComment: {
    backgroundColor: '#F6F9FF',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  avatarUser: {
    width: 36,
    height: 30,
    borderRadius: 4,
    marginRight: 10,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
