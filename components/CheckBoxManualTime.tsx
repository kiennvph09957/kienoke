import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import sizes from '../res/sizes';

type Props = {
  // title: string;
};

type State = {
  checked: string;
};

export class CheckBoxManualTime extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: 'first',
    };
  }

  render() {
    return (
      <View>
        <RadioButton.Group
          onValueChange={newValue => this.setState({checked: newValue})}
          value={this.state.checked}>
          <View style={styles.mContainer}>
            <RadioButton color="#EE0033" value="first" />
            <Text>Đi làm cả ngày</Text>
          </View>
          <View style={styles.mContainer}>
            <RadioButton color="#EE0033" value="second" />
            <Text>Đi làm nửa ngày</Text>
          </View>

          <View style={styles.mContainer}>
            <RadioButton color="#EE0033" value="second_" />
            <Text>Nghỉ</Text>
          </View>
        </RadioButton.Group>
      </View>
    );
  }
}

export default CheckBoxManualTime;

const styles = StyleSheet.create({
  mContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: sizes._43sdp,
  },
  mText: {
    fontWeight: '400',
    fontSize: sizes._18sdp,
    lineHeight: sizes._27sdp,
    color: '#4D4B4B',
    marginLeft: sizes._13sdp,
  },
});
