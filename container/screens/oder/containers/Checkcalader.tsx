import moment from 'moment';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';
import sizes from '../../../../res/sizes';
import {ScreenName} from '../../../AppContainer';
interface Props {
  navigation: any;
}
interface State {
  days?: string | any;
  backgroundColorDateClick: any;
}
let customday = new Date().toISOString().slice(0, 10);

export default class Checkcalader extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      days: customday,
      backgroundColorDateClick: '#0377AD',
    };
  }
  selectDay = (date: any) => {
    let day_name = '';
    const date1 = moment(`${date.year}-${date.month}-${date.day}`).isoWeekday();
    switch (date1) {
      case 1:
        day_name = 'Thứ 2';
        break;
      case 2:
        day_name = 'Thứ 3';
        break;
      case 3:
        day_name = 'Thứ 4';
        break;
      case 4:
        day_name = 'Thứ 5';
        break;
      case 5:
        day_name = 'Thứ 6';
        break;
      case 6:
        day_name = 'Thứ 7';
        break;
      case 7:
        day_name = 'Chủ nhật';
        break;

      default:
        break;
    }
    this.props?.navigation?.navigate(ScreenName.MealsRegisteredForTheMonth, {
      time: {date, day_name},
    });
    this.setState({backgroundColorDateClick: '#D20B2E'});
  };
  render() {
    return (
      <Calendar
        renderArrow={direction => (
          <View>
            {direction === 'left' && (
              <Icon name="left" size={18} color={'#676565'} />
            )}
            {direction === 'right' && (
              <Icon name="right" size={18} color={'#676565'} />
            )}
          </View>
        )}
        style={styles.view_calender}
        current={this.state.days}
        markingType="custom"
        markedDates={{
          [this.state.days]: {
            selected: true,
            customStyles: {
              container: {
                width: sizes._20sdp,
                height: sizes._44sdp,
                backgroundColor: '#F2F4F8',
                borderRadius: sizes._10sdp,
                justifyContent: 'center',
                alignContent: 'center',
              },

              text: {
                fontSize: sizes._14sdp,
                fontWeight: '400',
                marginLeft: sizes._5sdp,
                color: '#F2F4F8',
              },
            },
            theme: {
              container: {
                width: sizes._20sdp,
                height: sizes._20sdp,
                borderRadius: sizes._10sdp,
                backgroundColor: this.state.backgroundColorDateClick,
                justifyContent: 'center',
                alignContent: 'center',
              },
            },
          },
        }}
        dayComponent={({date, state, marking}) => {
          return (
            <TouchableOpacity onPress={() => this.selectDay(date)}>
              <View
                style={[
                  marking?.customStyles?.container,
                  {
                    width: sizes._20sdp,
                    height: sizes._44sdp,
                    backgroundColor: '#F2F4F8',
                    borderRadius: sizes._10sdp,
                    justifyContent: 'center',
                    alignContent: 'center',
                  },
                ]}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: state === 'disabled' ? 
                      'rgba(192,192,192,0.7)' : '#000000',
                    }}>
                    {date?.day}
                  </Text>
                </View>
                <View
                  style={[
                    {
                      width: sizes._20sdp,
                      height: sizes._20sdp,
                      borderRadius: sizes._10sdp,
                      backgroundColor: state=== 'disabled' ? 'rgba(192,192,192,0.7)':'#73777A',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: sizes._5sdp,
                    },
                    marking?.theme?.container,
                  ]}>
                  <Text
                    style={[
                      {
                        fontSize: sizes._14sdp,
                        fontWeight: '400',
                        marginLeft: sizes._5sdp,
                        color: '#F2F4F8',
                      },
                      marking?.customStyles?.text,
                    ]}>
                    {30}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  view_calender: {
    flex: 1,
  },
});
