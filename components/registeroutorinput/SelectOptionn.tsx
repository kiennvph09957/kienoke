import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import sizes from '../../res/sizes';
interface Props {
  local_data?: any;
}
interface State {
  value: any;
  isFocus: any;
}

export default class SelectOptionn extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: null,
      isFocus: false,
    };
  }
  render() {
    return (
      <View style={styles.dropdon}>
        <Dropdown
          style={styles.dropdown}
          iconColor={'#FFFFFF'}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          containerStyle={styles.containerStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={this.state.value}
          data={this.props.local_data}
          valueField="value"
          labelField="lable"
          placeholder={!this.state.isFocus ? '-- Chọn --' : '...'}
          onChange={(ex: any) => {
            this.setState({value: ex.value});
            this.setState({isFocus: false});
          }}
          onFocus={() => this.setState({isFocus: true})}
        />
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
    marginLeft: sizes._32sdp,
    height: sizes._48sdp,
    width: sizes._350sdp,
    backgroundColor: '#FFFFFF',
    cornerRadius: sizes._8sdp,
    paddingHorizontal: sizes._15sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#929292',
    borderRadius: sizes._8sdp,
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
