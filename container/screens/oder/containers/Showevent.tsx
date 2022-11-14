import React, {Component} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import sizes from '../../../../res/sizes';

interface Props {
  title: any;
  numberShow: any;
  textstyle?: any;
}

interface State {}

export default class Showevent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity>
        <Pressable
          style={({pressed}) => (pressed ? styles.active : styles.container)}>
          <View style={styles.text_container}>
            <Text style={[this.props.textstyle]}>{this.props.title}</Text>
          </View>
          <View style={styles.number_container}>
            <Text style={[this.props.textstyle]}>{this.props.numberShow}</Text>
          </View>
        </Pressable>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: sizes._40sdp,
    borderRadius: sizes._21sdp,
    marginHorizontal: sizes._13sdp,
  },
  active: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E7E7E7',
    height: sizes._40sdp,
    borderRadius: sizes._21sdp,
    marginHorizontal: sizes._13sdp,
  },
  text_container: {
    justifyContent: 'center',
    marginLeft: sizes._31sdp,
  },
  number_container: {
    justifyContent: 'center',
    marginRight: sizes._20sdp,
  },
});
