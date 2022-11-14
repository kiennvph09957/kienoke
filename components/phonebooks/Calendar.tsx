import {ScrollView} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
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
  dateTime: string;
  backgroundColorDateDay: string;
  backgroundColorDateClick: any;
  textColorDateDay: string;
  textColorDateClick: string;
  clickDate: string | any | string;
}

let d = new Date().toISOString().slice(0, 10);
let today = new Date();
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

var date = mm + '//' + yyyy;

export class Clalendar extends React.Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);

    this.state = {
      dateTime: date,
      backgroundColorDateDay: '#EE0033',
      backgroundColorDateClick: '#fff',
      textColorDateDay: '#fff',
      textColorDateClick: '#fff',
      clickDate: date,
    };
  }

  handlerOnPressDay = (day: any) => {
    this.setState({backgroundColorDateDay: '#fff'});
    this.setState({backgroundColorDateClick: '#EE0033'});
    this.setState({textColorDateDay: '#000'});
    this.setState({textColorDateClick: '#fff'});
    this.setState({clickDate: day.dateString});
  };
  render() {
    return (
      <ScrollView
        style={{
          width: 382,
          height: 150,
          marginHorizontal: 16,
          borderWidth: 1,
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
          marginTop: 3,
        }}>
        <Calendar
          style={{
            marginLeft: 14,
            width: 350,
            borderWidth: 0.5,
            borderColor: '#ffff',
          }}
          monthFormat={'MM/yyyy'}
          markingType={'custom'}
          current={d}
          multiDotLimit={{limit: 3, type: 'number'}}
          markedDates={{
            [d]: {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: this.state.backgroundColorDateDay,
                  width: 38,
                  height: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                text: {
                  color: this.state.textColorDateDay,
                  fontSize: 18,
                  fontWeight: '400',
                },
              },
            },
            [this.state.clickDate]: {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: this.state.backgroundColorDateClick,
                  width: 38,
                  height: 38,
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                text: {
                  color: this.state.textColorDateClick,
                  fontSize: 18,
                  fontWeight: '400',
                },
                dots: {
                  type: 'text',
                },
              },
            },
          }}
          minDate={'1990-01-01'}
          maxDate={'2050-12-31'}
          onDayPress={day => {
            this.handlerOnPressDay(day);
          }}
          onDayLongPress={this.props.onPress}
          firstDay={1}
          onPressArrowRight={addMonth => addMonth()}
          enableSwipeMonths={false}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </ScrollView>
    );
  }
}

export default Clalendar;
