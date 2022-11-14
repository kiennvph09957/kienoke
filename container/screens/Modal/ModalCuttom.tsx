import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import moment from 'moment';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  selectDay?: boolean;
  toggleDate?: () => void;
  selectt?: (e: any) => void;
}
interface State {
  month: any;
  day: any;
  yearr: any;
}
export default class ModalCuttom extends Component<Props, State> {
  state: State = {
    month: null,
    yearr: null,
    day: null,
  };
  componentDidMount() {
    this.setState({yearr: moment().year(), month: moment().month() + 1});
  }
  // lùi tháng
  prevMonth = () => {
    if (this.state.month == 1) {
      this.setState({month: 12, yearr: this.state.yearr - 1});
    } else {
      this.setState({month: this.state.month - 1});
    }
  };
  // tiến tháng
  nextMonth = () => {
    if (this.state.month == 1) {
      this.setState({month: this.state.month + 1});
    } else if (this.state.month >= 12) {
      this.setState({month: 1, yearr: this.state.yearr + 1});
    } else {
      this.setState({month: this.state.month + 1});
    }
  };
  render() {
    const {yearr} = this.state;
    const {month} = this.state;
    // lấy các ngày trong tuần
    const newData: any = [];
    month !== null &&
      yearr !== null &&
      newData.push({
        data: Array.from(
          Array(moment(`${yearr}-${month}`).daysInMonth()),
          (_, i) => i + 1,
        ),
      });

    const dataDay = [];
    // chia các ngày thành 4 tuần
    if (newData.length > 0) {
      while (newData[0].data.length) {
        dataDay.push(newData[0].data.splice(0, 7));
      }
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.selectDay}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={this.props.toggleDate}>
            <View style={{flex: 1, width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.year}>
              <TouchableOpacity
                onPress={() => this.setState({yearr: yearr - 1, month: 1})}>
                <IconFontAwesome name="angle-left" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{marginHorizontal: 10}}>
                <Text>{yearr}</Text>
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({yearr: yearr + 1, month: 1})}>
                <IconFontAwesome name="angle-right" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={[styles.month, styles.flexx]}>
              <TouchableOpacity onPress={() => this.prevMonth()}>
                <IconFontAwesome name="angle-left" size={30} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {month == 1 ? (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({month: 12, yearr: yearr - 1})
                    }>
                    <Text style={styles.noSelect}>Tháng 12 </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.setState({month: month - 1})}>
                    <Text style={styles.noSelect}>Tháng {month - 1} </Text>
                  </TouchableOpacity>
                )}

                <Text style={styles.select}>Tháng {month}</Text>

                {month == 12 ? (
                  <TouchableOpacity
                    onPress={() => this.setState({month: 1, yearr: yearr + 1})}>
                    <Text style={styles.noSelect}>Tháng 1 </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.setState({month: month + 1})}>
                    <Text style={styles.noSelect}>Tháng {month + 1} </Text>
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity onPress={() => this.nextMonth()}>
                <IconFontAwesome name="angle-right" size={30} color="black" />
              </TouchableOpacity>
            </View>
            {/* hiện tuân */}
            {dataDay.length > 1 &&
              dataDay.map((item: any, index: any) => {
                const indexx = index + 1;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.selectt({indexx, month, yearr})}>
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5,
                      }}>
                      <Text style={styles.textDay}>Tuần {index + 1}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Text style={styles.textDay1}>
                          {item[0]}/{month}/{yearr} -{' '}
                        </Text>
                        <Text style={styles.textDay1}>
                          {item[item.length - 1]}/{month}/{yearr}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  flexx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
  },
  year: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  month: {
    marginVertical: 10,
  },

  select: {
    color: '#4D4B4B',
    fontWeight: '600',
    marginHorizontal: 20,
    fontSize: 17,
  },
  noSelect: {
    fontWeight: '400',
    fontSize: 15,
    opacity: 0.5,
  },
  textDay: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4D4B4B',
  },
  textDay1: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4D4B4B',
  },
});
