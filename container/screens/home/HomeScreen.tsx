import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, FlatList} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';
import Quest from '../../../components/home/Quest';
import Meet from '../../../components/home/Meet';
import Sales from '../../../components/home/Sales';
import Category from '../../../components/home/Category';
import DatePick from '../../../components/home/DatePick';
import ModalIconSetting from '../../../components/home/ModalconSetting';
import images from '../../../res/images';
import moment from 'moment';

interface Props {}

interface State {
  isShowDatePicker: boolean;
  isOptions: boolean;
  date: any;
}

const emptyData: any = [];

const renderNullItem = () => null;

export default class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowDatePicker: false,
      isOptions: false,
      date: moment().toDate(),
    };
  }

  changeIsShow = () => {
    let isChecked = this.state.isShowDatePicker;
    this.setState({
      isShowDatePicker: !isChecked,
    });
  };

  onDateChange = (val: any) => {
    let isChecked = this.state.isShowDatePicker;
    let dateDefault = this.state.date;
    this.setState({
      date: val == null ? dateDefault : val,
      isShowDatePicker: !isChecked,
    });
  };

  onChangeIconSetting = () => {
    let isCheck = this.state.isOptions;
    this.setState({
      isOptions: !isCheck,
    });
  };

  listFooterComponent = (date: any) => (
    <>
      <View style={styles.content}>
        <Meet isShow={this.changeIsShow} datePick={date} />
        <Sales />
        <Quest postion="giam_doc" />
        <Category />
      </View>
    </>
  );
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppHeader
          back={true}
          user={true}
          infoUser={{
            name: 'Lê Thành Công',
            position: 'Giám đốc',
            uriImage: images.Ellipse_1,
          }}
          rightContent
          setting
          seach
          onSettingPress={this.onChangeIconSetting}
        />
        <View style={styles.contentContainer}>
          <FlatList
            data={emptyData}
            renderItem={renderNullItem}
            listKey={'home-event'}
            ListEmptyComponent={this.listFooterComponent(this.state.date)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={true}
            scrollEventThrottle={16}
            removeClippedSubviews
          />
        </View>
        <DatePick
          date={this.state.date}
          isShow={this.state.isShowDatePicker}
          toggleDate={this.changeIsShow}
          onDateChange={this.onDateChange}
        />
        <ModalIconSetting
          isOptions={this.state.isOptions}
          onChangeIconSetting={this.onChangeIconSetting}
        />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexShrink: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors._color_white,
    width: '100%',
    borderTopRightRadius: sizes._20sdp,
    borderTopLeftRadius: sizes._20sdp,
  },
});
