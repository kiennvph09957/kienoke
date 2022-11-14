import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';
import AppHeader from '../../../components/AppHeader';
import sizes from '../../../res/sizes';
import images from './../../../res/images';
interface Props {
  navigation: any;
}
interface State {
  id: any;
}
export default class HappeningsTitleSalary extends Component<Props, State> {
  state: State = {
    id: null,
  };
  render() {
    const data = [
      {
        applicable_date: '1/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '01/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 1/05/2018',
        effective: '01/03/2021 - 01/1/2021',
        id: 1,
        salary_grade: '1',
        title: 'Hệ số BH 1.76 Bảng lương 871',
      },
      {
        applicable_date: '2/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '02/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 2/05/2018',
        effective: '01/03/2021 - 01/2/2021',
        id: 2,
        salary_grade: '2',
        title: 'Hệ số BH 1.76 Bảng lương 872',
      },
      {
        applicable_date: '3/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '03/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 3/05/2018',
        effective: '01/03/2021 - 01/3/2021',
        id: 3,
        salary_grade: '3',
        title: 'Hệ số BH 1.76 Bảng lương 873',
      },
      {
        applicable_date: '4/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '04/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 4/05/2018',
        effective: '01/03/2021 - 01/4/2021',
        id: 4,
        salary_grade: '4',
        title: 'Hệ số BH 1.76 Bảng lương 874',
      },
      {
        applicable_date: '5/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '05/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 5/05/2018',
        effective: '01/03/2021 - 01/5/2021',
        id: 5,
        salary_grade: '5',
        title: 'Hệ số BH 1.76 Bảng lương 875',
      },
      {
        applicable_date: '6/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '06/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 6/05/2018',
        effective: '01/03/2021 - 01/6/2021',
        id: 6,
        salary_grade: '6',
        title: 'Hệ số BH 1.76 Bảng lương 876',
      },
      {
        applicable_date: '7/03/2021',
        basic_salary: 'Chưa có thông tin',
        date: '07/2022',
        detail: ' Bảng lương cơ bản tiêu chuẩn thực hiện từ 7/05/2018',
        effective: '01/03/2021 - 01/7/2021',
        id: 7,
        salary_grade: '7',
        title: 'Hệ số BH 1.76 Bảng lương 877',
      },
    ];

    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Diễn biến lương chức danh"
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={{marginHorizontal: 20, marginTop: 20}}>
                {data.map((item, index) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        marginRight: 10,
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.date}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        flexShrink: 1,
                      }}>
                      <View
                        style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image source={images.Group1649} />
                        <View style={styles.hr}></View>
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.list_data,
                          this.state.id == item.id && styles.active,
                        ]}
                        onPress={() =>
                          this.setState({
                            id: this.state.id == item.id ? null : item.id,
                          })
                        }>
                        <Text style={{fontSize: 20, fontWeight: '600'}}>
                          {item.title}
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: '400'}}>
                          {item.detail}
                        </Text>
                        {item.id == this.state.id && (
                          <>
                            <View style={styles.hr1}></View>
                            <View style={{flexDirection: 'row'}}>
                              <Image
                                source={images.Ellipse111}
                                style={styles.dots}
                              />
                              <Text style={styles.list}>
                                Ngày áp dụng : {item.applicable_date}
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Image
                                source={images.Ellipse111}
                                style={styles.dots}
                              />
                              <Text style={styles.list}>
                                Hiệu lực : Từ {item.effective}
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Image
                                source={images.Ellipse111}
                                style={styles.dots}
                              />
                              <Text style={styles.list}>
                                Bước/Bậc lương : {item.salary_grade}
                              </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                              <Image
                                source={images.Ellipse111}
                                style={styles.dots}
                              />
                              <Text style={styles.list}>
                                Lương cơ bản : {item.basic_salary}
                              </Text>
                            </View>
                          </>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },

  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  hr: {
    borderColor: '#DADADA',
    borderWidth: 1,
    width: 6,
    backgroundColor: '#DADADA',
    height: '100%',
  },
  hr1: {
    borderWidth: 0.5,
    borderColor: 'rgb(200, 200, 200)',
    marginVertical: sizes._10sdp,
  },
  list: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
  },
  dots: {
    width: 5,
    height: 5,
    marginTop: 7,
    marginRight: 5,
  },
  list_data: {
    flexDirection: 'column',
    flexShrink: 1,
    paddingLeft: 10,
    marginBottom: 30,
  },
  active: {
    borderColor: '#D20B2E',
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F4F4F4',
  },
});
