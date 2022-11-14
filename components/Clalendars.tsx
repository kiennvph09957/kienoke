import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Calendar, CalendarProps} from 'react-native-calendars';
import sizes from '../res/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'fr';

interface Props {
  onPress: () => void;
  // onDay: string;
  navigation: any;
}
interface State {
  // hiddenItem: boolean | any | string;
  dateTime: string;
  // backgroundColorDateDay: string;
  // backgroundColorDateClick: any;
  textColorDateDay: string;
  textColorDateClick: string;
  clickDate: string | any | string;
  text_: any;
  backgroundCl: any;
}
let d = new Date().toISOString().slice(0, 10);
let today = new Date();
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let date = mm + '/' + yyyy;

export class Clalendars extends React.Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);

    this.state = {
      dateTime: date,
      // backgroundColorDateClick: '#fff',
      textColorDateDay: '#fff',
      textColorDateClick: '#fff',
      clickDate: d,
      text_: null,
      backgroundCl: ['#9D0721', '#FF0C1E'],
    };
  }

  handlerBtn = (date: any) => {
    // this.props.onPress;
    // console.log('---/--');
    // console.log(date?.dateString);
    // this.setState({backgroundColorDateClick: '#EE0033'});

    this.setState({clickDate: date?.dateString});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: sizes._screen_width - sizes._32sdp,
          marginHorizontal: sizes._16sdp,
          borderWidth: sizes._1sdp,
          //
          borderColor: '#fff',
          shadowColor: '#000',
          borderRadius: sizes._10sdp,
          shadowOffset: {
            width: 0,
            height: sizes._3sdp,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
          marginTop: sizes._12sdp,
        }}>
        <Calendar
          markingType={'multi-period'}
          current={this.state.clickDate}
          markedDates={{
            [this.state.clickDate]: {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: this.state.backgroundCl,
                  width: sizes._46sdp,
                  height: sizes._46sdp,
                  borderRadius: sizes._42sdp / sizes._2sdp,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                text: {
                  color: this.state.textColorDateDay,
                  fontSize: sizes._18sdp,
                  fontWeight: '400',
                },
              },
              theme: {
                container: {
                  color: this.state.textColorDateDay,
                  fontSize: sizes._13sdp,
                  fontWeight: '400',
                },
              },
              // customTextStyle: {
              //   backgroundColor: this.state.backgroundCl,
              // },
            },
          }}
          minDate={'1990-01-01'}
          maxDate={'2999-12-30'}
          hideArrows={false}
          disableMonthChange={true}
          firstDay={1}
          showWeekNumbers={true}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          renderHeader={date => {
            return (
              <View>
                <Text>Tháng {this.state.dateTime}</Text>
              </View>
            );
          }}
          dayComponent={({date, state, marking}: any) => {
            if (marking?.customStyles?.container.backgroundColor != null) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (date?.dateString <= d) {
                      this.props.onPress();
                    } else {
                      this.handlerBtn(date);
                    }
                    if (date?.dateString <= d) {
                      this.setState({clickDate: date?.dateString});
                    }
                  }}>
                  <LinearGradient
                    style={[marking?.customStyles?.container]}
                    // colors={['#fff', 'red']}
                    colors={marking?.customStyles?.container.backgroundColor}
                    end={{x: 0.5, y: 1}}
                    start={{x: 0.4, y: 0}}>
                    <View style={[]}>
                      <Text style={marking?.customStyles?.text}>
                        {date.day}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            marking?.theme?.container,
                            {fontSize: sizes._13sdp},
                          ]}>
                          X:
                        </Text>
                        <Text
                          style={[
                            marking?.theme?.container,
                            {fontSize: sizes._13sdp},
                          ]}>
                          8
                        </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (date?.dateString <= d) {
                      this.props.onPress();
                    } else {
                      this.handlerBtn(date);
                    }
                    if (date?.dateString <= d) {
                      this.setState({clickDate: date?.dateString});
                    }
                  }}>
                  <LinearGradient
                    style={[marking?.customStyles?.container]}
                    colors={['#fff', '#fff']}
                    end={{x: 0.5, y: 1}}
                    start={{x: 0.4, y: 0}}>
                    <View style={[]}>
                      <Text style={marking?.customStyles?.text}>
                        {date.day}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            marking?.theme?.container,
                            {fontSize: sizes._13sdp},
                          ]}>
                          X:
                        </Text>
                        <Text
                          style={[
                            marking?.theme?.container,
                            {fontSize: sizes._13sdp},
                          ]}>
                          8
                        </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }
          }}
          enableSwipeMonths={true}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#717F89',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#000',
            dayTextColor: '#1A1E1F',
            textDisabledColor: 'red',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#717F89',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#000',
            indicatorColor: '#000',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: sizes._18sdp,
            textMonthFontSize: sizes._18sdp,
            textDayHeaderFontSize: sizes._18sdp,
          }}
          style={{
            borderRadius: sizes._10sdp,
            height: '100%',
          }}
        />
      </View>
    );
  }
}

export default Clalendars;
