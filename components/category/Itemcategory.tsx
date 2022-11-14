import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import sizes from '../../res/sizes';
import svgs from '../../res/svgs';

interface Props {
  item?: any;
  onNext?: any;
  Onclickclear?: any;
}

interface State {}

export default class Item_category extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    // console.log(this.props.Onclickclear);
    const {svg, title, svgactive, screen} = this.props.item;
    return (
      <View style={{position: 'relative'}}>
        <TouchableOpacity style={styles.ic_cle}>
          <SvgXml xml={this.props.Onclickclear ? svgs.tickso : svgs.ic_minus} />
        </TouchableOpacity>
        <Pressable
          delayLongPress={400}
          onPress={() => this.props.onNext(screen)}
          style={({pressed}) => [
            styles.container,
            {borderColor: pressed ? 'red' : '#817E7E'},
          ]}>
          {({pressed}) => (
            <>
              <View style={styles.svg_container}>
                <SvgXml xml={pressed ? svgactive : svg} />
              </View>
              <View style={styles.text_container}>
                <Text style={styles.text}>{title}</Text>
              </View>
            </>
          )}
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: sizes._175sdp,
    height: sizes._65sdp,
    borderColor: '#817E7E',
    borderRadius: sizes._10sdp,
    borderWidth: sizes._1sdp,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  ic_cle: {
    position: 'absolute',
    top: sizes._5sdp,
    zIndex: sizes._1sdp,
    left: sizes._5sdp,
  },
  svg_container: {
    marginLeft: sizes._18sdp,
    marginTop: sizes._20sdp,
  },
  text_container: {
    marginLeft: sizes._18sdp,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: sizes._16sdp,
    fontWeight: '700',
    textAlignVertical: 'center',
    textAlign: 'left',
  },
});
