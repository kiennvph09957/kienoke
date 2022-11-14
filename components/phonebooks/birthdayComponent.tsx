import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import birthDaydata from '../../data/birthdayData';
import sizes from '../../res/sizes';
interface Props {
  item: any;
  index: any;
}
interface State {}
class FlatListItem extends Component<Props> {
  render() {
    return (
      <View style={styles.items}>
          <View style={{flexDirection:'row'}}>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={styles.imageItem}></Image>
          <Text style={{fontSize: 18,marginTop:10,marginLeft:6,fontStyle:'normal',fontWeight:'600',color:'#000'}}>{this.props.item.name}</Text>
        </View>

        <View>
          <Text style={{fontSize: 16, marginTop:10,marginLeft:10}}>{this.props.item.id}</Text>
          <Text style={{fontSize: 16,marginTop:10,marginLeft:10}}>{this.props.item.company}</Text>
          <Text style={{fontSize: 16,marginTop:10,marginLeft:10}}>Email: {this.props.item.email}</Text>
          <Text style={{fontSize: 16,marginTop:10,marginLeft:10}}>Dien thoai:{this.props.item.phone}</Text>
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
class flatList extends Component<Props, State> {

  render() {
    console.log('oi doi oi')
    return (
   
      <View>
        <FlatList
          data={birthDaydata}
          renderItem={({item, index}) => {
            return <FlatListItem item={item} index={index}></FlatListItem>;
          }}></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    marginLeft: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: sizes._50sdp / 2,
  },
});
export default flatList;
