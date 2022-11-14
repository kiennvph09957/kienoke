import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Content from './Content';
import Menu from './Menu';
import images from '../../../res/images';
import ModalCuttom from '../Modal/ModalCuttom';
import moment from 'moment';
import AppHeader from '../../../components/AppHeader';
interface Props {
  navigation: any;
}
interface State {
  selectDay: any;
  year: any;
  month: any;
  dayTT: any;
  week: any;
  weekArr: any;
}
export default class LayoutOrderRice extends Component<Props, State> {
  state: State = {
    selectDay: false,
    year: null,
    month: null,
    dayTT: null,
    week: null,
    weekArr: null,
  };
  click = (e: any) => {
    this.setState({
      dayTT: e.indexx,
      month: e.month,
      year: e.yearr,
      selectDay: !this.state.selectDay,
    });
  };
  componentDidMount() {
    const newData: any = [];
    const dataDay: any = [];
    // lấy những ngày trong tháng
    newData.push({
      data: Array.from(
        Array(
          moment(`${moment().year()}-${moment().month() + 1}`).daysInMonth(),
        ),
        (_, i) => i + 1,
      ),
    });
    // chia thành các tuần cso 7 ngày
    while (newData[0].data.length) {
      dataDay.push(newData[0].data.splice(0, 7));
    }
    // biết được ngày hiện tại thuộc tuần nào
    const day = moment().format('DD');
    dataDay.filter((item: any, index: any) => {
      for (let i = 0; i < item.length; i++) {
        item[i] == day && this.setState({week: index + 1, weekArr: item});
      }
    });
  }
  renderHeader = () => (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Đặt cơm</Text>
        <TouchableOpacity
          onPress={() => this.setState({selectDay: !this.state.selectDay})}>
          <Text style={styles.time}>
            {this.state.dayTT == null ? (
              <>
                Tuần {this.state.week}, tháng {moment().month() + 1},
                {moment().year()} <Image source={images.arrow} />
              </>
            ) : (
              <>
                Tuần {this.state.dayTT}, tháng {this.state.month},{' '}
                {this.state.year}
                <Image source={images.arrow} />
              </>
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <Menu navigation={this.props.navigation} />
    </View>
  );
  render(): JSX.Element {
    const {selectDay} = this.state;

    return (
      <View style={styles.mContainer}>
        <AppHeader
          back
          contentCustom
          onBackPress={() => this.props.navigation.goBack()}
          contentCustomJSX={this.renderHeader()}
        />

        <View style={styles.main}>
          {this.state.weekArr !== null && (
            <Content
              navigation={this.props?.navigation}
              weeArr={this.state.weekArr}
            />
          )}
        </View>

        {/*chọn ngày */}
        <ModalCuttom
          selectDay={this.state.selectDay}
          toggleDate={() => this.setState({selectDay: !selectDay})}
          selectt={(e: any) => this.click(e)}
        />
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

  time: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});
