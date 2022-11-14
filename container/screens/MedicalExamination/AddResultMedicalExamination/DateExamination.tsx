import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../../res/sizes';
import images from '../../../../res/images';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
interface State {
  value: any;
  checkClickDate: any;
}
interface Props {}
export default class DateExamination extends Component<Props, State> {
  state: State = {
    value: null,
    checkClickDate: false,
  };
  render() {
    return (
      <View>
        <Text style={{fontSize: 18, marginTop: sizes._30sdp}}>
          Ngày khám <Text style={{color: 'red', fontWeight: '600'}}>*</Text>
        </Text>
        <View style={{position: 'relative'}}>
          <TextInput
            onChangeText={text => this.setState({value: text})}
            value={this.state.value}
            style={styles.inputDate}
          />
          <TouchableOpacity
            style={styles.date}
            onPress={() =>
              this.setState({checkClickDate: !this.state.checkClickDate})
            }>
            <Image source={images.event} />
          </TouchableOpacity>
          {this.state.checkClickDate == true && (
            <View style={styles.listDate}>
              <Calendar
                markedDates={{
                  [`${moment().year()}-${
                    `${moment().month() + 1}`.length == 1
                      ? `0${moment().month() + 1}`
                      : moment().month() + 1
                  }-${moment().date()}`]: {
                    selected: true,
                    selectedColor: '#D20B2E',
                    customStyles: {
                      container: {
                        width: sizes._20sdp,
                        height: sizes._44sdp,
                        backgroundColor: '#F2F4F8',
                        borderRadius: sizes._10sdp,
                        justifyContent: 'center',
                        alignContent: 'center',
                      },
                    },
                  },
                }}
                enableSwipeMonths={true}
                onDayPress={(value: any) =>
                  this.setState({value: value.dateString, checkClickDate: false})
                }
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputDate: {
    borderWidth: 1,
    borderColor: 'rgb(218, 218, 218)',
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  date: {
    position: 'absolute',
    right: 10,
    top: 18,
  },
  listDate: {
    borderWidth: 1,
    borderColor: 'rgb(218, 218, 218)',
    shadowColor: '#000',
    elevation: 7,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1,
    top: 55,
    right: 0,
    width: '100%',
  },
});
