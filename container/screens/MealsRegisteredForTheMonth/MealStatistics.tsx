import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
interface Props {
  data: any;
}
export default class MealStatistics extends Component<Props> {
  state = {
    check: 1,
  };
  render() {
    const {check} = this.state;
    console.log(this.props.data)
    return (
      <View>
        <View style={styles.listMeal}>
          <TouchableOpacity onPress={() => this.setState({check: 1})}>
            <Text style={check == 1 ? styles.meallActive : styles.meall}>
              BỮA SÁNG{' '}
            </Text>
            {check == 1 ? <View style={styles.crossbar}></View> : <View></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({check: 2})}>
            <Text style={check == 2 ? styles.meallActive : styles.meall}>
              BỮA TRƯA{' '}
            </Text>
            {check == 2 ? <View style={styles.crossbar}></View> : <View></View>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({check: 3})}>
            <Text style={check == 3 ? styles.meallActive : styles.meall}>
              BỮA TỐI{' '}
            </Text>
            {check == 3 ? <View style={styles.crossbar}></View> : <View></View>}
          </TouchableOpacity>
        </View>
        {check == 1 && (
          <View style={styles.statistics}>
            <View style={styles.tt}>
              <Text>Tổng số suất ăn </Text>
              <Text style={styles.textNumber}>44</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đăng ký</Text>
              <Text style={styles.textNumber}>4</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã nhận</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã chuyển</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
          </View>
        )}
        {check == 2 && (
          <View style={styles.statistics}>
            <View style={styles.tt}>
              <Text>Tổng số suất ăn </Text>
              <Text style={styles.textNumber}>44</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đăng ký</Text>
              <Text style={styles.textNumber}>4</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã nhận</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã chuyển</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
          </View>
        )}
        {check == 3 && (
          <View style={styles.statistics}>
            <View style={styles.tt}>
              <Text>Tổng số suất ăn </Text>
              <Text style={styles.textNumber}>44</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đăng ký</Text>
              <Text style={styles.textNumber}>4</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã nhận</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
            <View style={styles.tt}>
              <Text>Số suất ăn đã chuyển</Text>
              <Text style={styles.textNumber}>{this.props.data.length}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listMeal: {
    flexDirection: 'row',
    paddingHorizontal: sizes._20sdp,
  },
  meall: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  meallActive: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: '#D30026',
  },
  statistics: {
    paddingHorizontal: sizes._25sdp,
    marginTop: 10,
  },
  tt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  crossbar: {
    width: '100%',
    height: 3,
    backgroundColor: '#D30026',
    marginTop: 3,
  },
  textNumber: {
    fontSize: 16,
    fontWeight: '800',
  },
});
