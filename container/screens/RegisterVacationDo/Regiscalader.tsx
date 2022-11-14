import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Icons from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import sizes from '../../../res/sizes';

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
let format = 'YYYY-MM-DD';

// let today = moment().format(format);
// let maxDate = moment().add(100, 'days').format(format);

interface Props {
  //onPress: () => void;
  onDay: any;

  // navigation: any;
}
interface State {
  dates: any;
  markedDates: any;
  selectDates: any;
  dateCheck: any;
}

export class Regisscalder extends React.Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);

    this.state = {
      dates: null,
      markedDates: [],
      selectDates: [],
      dateCheck: null,
    };
  }

  componentDidMount() {
    this.setState({
      dates: this.props.onDay,
    });
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.onDay !== prevProps.onDay) {
      this.setState({
        dates: this.props.onDay,
      });
    }
  }

  onDaySecectDay = (day: any) => {
    let temp = [...this.state.selectDates];
    const selectedDay = moment(day.dateString).format(format);
    let selected = true;
    if (this.state.markedDates[selectedDay]) {
      delete temp[selectedDay];
      selected = !this.state.markedDates[selectedDay].selected;
    } else {
      temp.push(selectedDay);
      this.setState({
        selectDates: temp,
      });
    }
    const updatedMarkedDates = {
      ...this.state.markedDates,
      ...{
        [selectedDay]: {selected},
      },
    };
    this.setState({markedDates: updatedMarkedDates});
  };

  render() {
    console.log(this.state.markedDates);
    return (
      <Calendar
        style={{
          borderWidth: 0.5,
          borderColor: '#ffff',
        }}
        initialDate={this.state.dates}
        monthFormat={'MMMM/yyyy'}
        renderArrow={direction => (
          <View>
            {direction === 'left' && (
              <Icons name="left" size={18} color={'#676565'} />
            )}
            {direction === 'right' && (
              <Icons name="right" size={18} color={'#676565'} />
            )}
          </View>
        )}
        onPressArrowRight={addMonth => addMonth()}
        enableSwipeMonths={true}
        onDayPress={this.onDaySecectDay}
        markedDates={this.state.markedDates}
        // dayComponent={({date, state, marking}: any) => {

        //   if (
        //     moment(`${date.year}-${date.month}-${date.day}`).isoWeekday() ==
        //       7 ||
        //     moment(`${date.year}-${date.month}-${date.day}`).isoWeekday() == 6
        //   ) {
        //     return (
        //       <TouchableOpacity onPress={this.onDaySecectDay}>
        //         <View
        //           style={{
        //             height: sizes._40sdp,
        //             width: sizes._40sdp,
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //           }}>
        //           <Text
        //             style={{
        //               color:
        //                 state === 'disabled' ? 'rgba(255,0,0,0.4)' : '#EB5757',
        //               fontSize: 18,
        //             }}>
        //             {date.day}
        //           </Text>
        //         </View>
        //       </TouchableOpacity>
        //     );
        //   } else {
        //     return (
        //       <TouchableOpacity onPress={this.onDaySecectDay}>
        //         <View
        //           style={{
        //             height: sizes._40sdp,
        //             width: sizes._40sdp,
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //           }}>
        //           <Text
        //             style={{
        //               fontSize: 18,
        //               color:
        //                 state === 'disabled'
        //                   ? 'rgba(192,192,192,0.7)'
        //                   : '#1A1E1F',
        //             }}>
        //             {date.day}
        //           </Text>
        //         </View>
        //       </TouchableOpacity>
        //     );
        //   }
        // }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          selectedDayTextColor: '#1A1E1F',

          textDisabledColor: '#d9e1e8',
          textDayFontFamily: 'FS PF BeauSans Pro',
          textMonthFontFamily: 'FS PF BeauSans Pro',
          textDayHeaderFontFamily: 'FS PF BeauSans Pro',
          textMonthFontWeight: 'bold',
          selectedDayBackgroundColor: '#FDDB35',
          textDayFontSize: 18,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 18,
        }}
      />
    );
  }
}

export default Regisscalder;
