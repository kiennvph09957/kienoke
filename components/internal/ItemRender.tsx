import React, {Component} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../res/images';
import sizes from '../../res/sizes';

interface Props {
  title: any;
  slary: any;
  date: any;
  direction: any;
  navigation?: any;
}

interface State {
  bookmark: any;
}

export default class ItemRender extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookmark: false,
    };
  }
  handerClick = () => {
    this.setState({bookmark: !this.state.bookmark});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_title}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity onPress={this.handerClick}>
            <Icon
              name={this.state.bookmark ? 'bookmark' : 'bookmark-outline'}
              size={24}
              color={'#727070'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container_slay}>
          <View style={styles.text_slary}>
            <Text style={styles.slary_t}>{this.props.slary}</Text>
          </View>

          <View style={styles.text_date}>
            <Text style={styles.slary_d}>{this.props.date}</Text>
          </View>
        </View>
        <View style={styles.container_direc}>
          <View style={styles.img_hm}>
            <Image source={images.localhome} style={styles.img_hm} />
          </View>
          <View style={styles.text_direc}>
            <Text style={styles.text_dr}>{this.props.direction}</Text>
          </View>
          <TouchableOpacity onPress={this.props.navigation}>
            <Icon name="chevron-forward" size={24} color={'#4D4B4B'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes._23sdp,
    borderStyle: 'dotted',
    borderBottomWidth: sizes._1sdp,
    borderBottomColor: '#AFAFAF',
    paddingVertical: sizes._15sdp,
  },
  container_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: sizes._18sdp,
    fontWeight: '500',
    lineHeight: sizes._27sdp,
    color: '#000000',
  },
  container_slay: {
    flexDirection: 'row',
    paddingVertical: sizes._12sdp,
  },
  text_slary: {
    width: sizes._190sdp,
    height: sizes._39sdp,
    backgroundColor: '#F2F2F2',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: sizes._11sdp,
  },
  slary_t: {
    textAlign: 'center',
    fontSize: sizes._16sdp,
    fontWeight: '600',
    color: '#4D4B4B',
  },
  text_date: {
    width: sizes._120sdp,
    height: sizes._39sdp,
    backgroundColor: '#F2F2F2',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: sizes._11sdp,
    marginLeft: sizes._10sdp,
  },
  slary_d: {
    textAlign: 'center',
    fontSize: sizes._16sdp,
    fontWeight: '600',
    color: '#4D4B4B',
  },
  container_direc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img_hm: {
    width: sizes._24sdp,
    height: sizes._24sdp,
    justifyContent: 'center',
    marginTop: sizes._5sdp,
  },
  text_direc: {
    marginLeft: -sizes._30sdp,
  },
  text_dr: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    lineHeight: sizes._27sdp,
    color: '#4D4B4B',
  },
});
