import React, {Component} from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import recentlyData from '../../data/recentlyData';
import sizes from '../../res/sizes';
interface Props {
  item: any;

  index: any;
}
interface Propds {
  navigation: () => void;
}
interface State {}
class RecentlyListItem extends Component<Props> {
  render() {
    return (
      <View style={styles.items}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={styles.imageItem}></Image>
          <Text
            style={{
              fontSize: 18,
              marginTop: 23,
              marginLeft: 6,
              fontStyle: 'normal',
              fontWeight: '600',
              color: '#000',
            }}>
            {this.props.item.name}
          </Text>
        </View>

        <View>
          <Text style={styles.textinfo}>
            {this.props.item.id}
          </Text>
          <Text style={styles.textinfo}>
            {this.props.item.company}
          </Text>
          <Text style={styles.textinfo}>
            Email: {this.props.item.email}
          </Text>
          <Text style={styles.textinfo}>
            Dien thoai:{this.props.item.phone}
          </Text>
        </View>
        <View style={styles.iconItem}>
          <View style={[styles.iconBackroundItem, {marginLeft: -50}]}>
            <MaterialCommunityIcons
              name="phone-in-talk"
              size={sizes._24sdp}
              color="#676565"
            />
          </View>
          <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
            <MaterialCommunityIcons
              name="cellphone-message"
              size={sizes._24sdp}
              color="#676565"
            />
          </View>
          <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
            <MaterialCommunityIcons
              name="email"
              size={sizes._24sdp}
              color="#676565"
            />
          </View>
          <View style={[styles.iconBackroundItem, {marginLeft: 40}]}>
            <Ionicons name="heart" size={sizes._24sdp} color="#D20B2E" />
          </View>
        </View>
      </View>
    );
  }
}
class flatListrecently extends Component<Propds, State> {
  render() {
    console.log('oi doi ');
    return (
      <View>
        <FlatList
          data={recentlyData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={this.props.navigation}>
                <RecentlyListItem item={item} index={index}></RecentlyListItem>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinfo: {
    fontSize: 16,
    marginLeft: 24,
  },
  iconBackroundItem: {
    top: 175,
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconItem: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  items: {
    flexDirection: 'column',
    backgroundColor: '#ffff',
    width: 382,
    height: 228,
    marginLeft: 5,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 5,
  },
  imageItem: {
    width: 48,
    height: 48,
    borderRadius: sizes._50sdp / 2,
    margin: 14,
  },
});
export default flatListrecently;
