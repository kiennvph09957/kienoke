import React, {Component} from 'react';
import {Button, Platform, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../../res/sizes';
interface Props {}

interface State {
  date: any;
  mode: any;
  show: any;
  text: any;
}

export default class DateTimePickerLate extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      mode: 'date',
      show: false,
      text: 'dd/mm/yyyy',
    };
  }

  render() {
    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({show: false});
      this.setState({date: currentDate});
      let templeDate = new Date(currentDate);
      let fDate =
        templeDate.getDate() +
        '/' +
        (templeDate.getMonth() + 1) +
        '/' +
        templeDate.getFullYear();
      this.setState({text: fDate});
      console.log(fDate);
    };

    const showMode = (currentMode: any) => {
      this.setState({show: true});
      this.setState({mode: currentMode});
    };

    const showDatepicker = () => {
      showMode('date');
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          borderColor: '#929292',
          borderWidth: sizes._1sdp,
          width: sizes._160sdp,
          borderRadius: sizes._7sdp,
          height: sizes._55sdp,
        }}>
        <View>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{margin: sizes._18sdp}}>
            <Text> {this.state.text}</Text>
          </TouchableOpacity>

          <Icon
            onPress={showDatepicker}
            name="ios-calendar-sharp"
            size={24}
            color="#676565"
            style={{
              position: 'absolute',
              left: sizes._116sdp,
              top: sizes._15sdp,
            }}
          />
        </View>

        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode={this.state.mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  }
}
