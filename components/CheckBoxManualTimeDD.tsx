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

export class CheckBoxManualTimeDD extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: 'first',
    };
  }

  render() {
    return (
      <View>
        <View>
          <RadioButton.Group
            onValueChange={newValue => this.setState({checked: newValue})}
            value={this.state.checked}>
            <View style={styles.mContainer}>
              <RadioButton color="#EE0033" value="first" />
              <Text style={styles.mText}>Tại đơn vị</Text>
            </View>
            <View style={styles.mContainer}>
              <RadioButton color="#EE0033" value="second" />
              <Text style={styles.mText}>Onsite trong Viettel</Text>
            </View>

            <View style={styles.mContainer}>
              <RadioButton color="#EE0033" value="second_" />
              <Text style={styles.mText}>Onsite ngoài Viettel</Text>
            </View>

            <View style={styles.mContainer}>
              <RadioButton color="#EE0033" value="second__" />
              <Text style={styles.mText}>Làm online tại nhà</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    );
  }
}

export default CheckBoxManualTimeDD;

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
