import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import sizes from '../../../../res/sizes';
import images from '../../../../res/images';
interface Props {}
interface State {
  value: any;
  isFocus: any;
}


export default class Dropdonwoder extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: null,
      isFocus: false,
    };
  }
   local_data = [
    {
      value: '1',
      lable: 'Bếp ăn Tập đoàn',
    },
    {
      value: '2',
      lable: 'Bếp ăn Tập A',
    },
    {
      value: '3',
      lable: 'Bếp ăn Tập B',
    },
    {
      value: '4',
      lable: 'Bếp ăn Tập C',
    },
    {
      value: '5',
      lable: 'Bếp ăn Tập D',
    },
    {
      value: '6',
      lable: 'Bếp ăn Tập E',
    },
    {
      value: '7',
      lable: 'Bếp ăn Tập F',
    },
    {
      value: '8',
      lable: 'Bếp ăn Tập G',
    },
  ];
  render() {
    return (
      <View style={styles.dropdon}>
        <View style={styles.text_containerus}>
          <Text style={styles.text}>Chọn bếp ăn</Text>
        </View>
        <View>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            containerStyle={styles.containerStyle}
            iconStyle={styles.iconStyle}
            renderRightIcon={() => <Image source={images.dropdown} />}
            maxHeight={200}
            value={this.state.value}
            data={this.local_data}
            valueField="value"
            labelField="lable"
            placeholder={!this.state.isFocus ? 'Bếp ăn tập đoàn': '...'}
            onChange={(ex: any) => {
              this.setState({value: ex.value});
              this.setState({isFocus: false});
            }}
            onFocus={() => this.setState({isFocus: true})}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    marginTop: -sizes._30sdp,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdon: {
    flexDirection: 'row',
  },
  text_containerus: {
    width: sizes._100sdp,
    height: sizes._17sdp,
    marginTop: sizes._45sdp,
    marginLeft: sizes._28sdp,
  },
  text: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
  },
  dropdown: {
    marginTop: sizes._30sdp,
    marginLeft: sizes._50sdp,
    height: sizes._48sdp,
    width: sizes._218sdp,
    backgroundColor: '#F2F4F8',
    cornerRadius: sizes._8sdp,
    paddingHorizontal: sizes._15sdp,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    marginLeft: sizes._12sdp,
    marginTop: sizes._5sdp,
  },
  selectedTextStyle: {
    width: sizes._160sdp,
    height: sizes._17sdp,
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    marginLeft: sizes._24sdp,
    top: sizes._5sdp,
    textAlign: 'left',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
