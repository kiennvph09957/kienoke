import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import AppHeader from '../../../components/AppHeader';
import ItemOverTime from '../../../components/overtime/Item.ListOverTime';
import TabCatory from '../../../components/overtime/TabCatory.ListOverTime';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import svgs from '../../../res/svgs';
import {ScreenName} from '../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {
  dataLabel: object[];
  dataList: object[];
  dataAccess: string;
}

const LABEL = {
  not: 'NOT_YET',
  done: 'DONE',
  never: 'REFUSE',
};

const dataTitle = [
  {
    id: 1,
    label: 'Chưa duyệt',
    actived: false,
    action: LABEL.not, //Key check để thay đổi data
  },
  {
    id: 2,
    label: 'Đã duyệt',
    actived: true,
    action: LABEL.done,
  },
  {
    id: 3,
    label: 'Từ chối duyệt',
    actived: false,
    action: LABEL.never,
  },
];

const dataDone = [
  {
    id: 1001,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi họp',
  },
  {
    id: 1002,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi họp',
  },
  {
    id: 1003,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi họp',
  },
  {
    id: 1004,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi họp',
  },
];

const dataNotYet = [
  {
    id: 1001,
    local: 'Viettel Telecom',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Hỗ trợ dự án VTS Insight',
  },
  {
    id: 1002,
    local: 'Viettel IZS',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Hỗ trợ dự án VTS Insight',
  },
  {
    id: 1003,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Hỗ trợ dự án VTS Insight',
  },
  {
    id: 1004,
    local: 'TTNS - Nội bộ Tập Đoàn',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Hỗ trợ dự án VTS Insight',
  },
];

const dataNever = [
  {
    id: 1001,
    local: 'Đà Nẵng',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi chơi',
  },
  {
    id: 1002,
    local: 'Cần Thơ',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi chơi',
  },
  {
    id: 1003,
    local: 'Quảng Ninh',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi chơi',
  },
  {
    id: 1004,
    local: 'Ninh Bình',
    creatAt: '2022-05-26 15:08',
    startTime: '2022-05-26 16:15',
    endTime: '2022-05-26 18:30',
    content: 'Đi chơi',
  },
];

const emptyData: any = [];

const renderNullItem = () => null;

export default class ListOvertime extends Component<Props, State> {
  state = {
    dataList: dataDone,
    dataLabel: dataTitle,
    dataAccess: LABEL.done,
  };

  //Chọn nhãn
  onActiveLabel = (val: any) => {
    const newData = dataTitle.map(item =>
      item.id === val.id ? {...item, actived: true} : {...item, actived: false},
    );
    this.setState({
      dataLabel: newData,
      dataAccess: val.action,
      dataList:
        val.action === LABEL.done
          ? dataDone
          : val.action === LABEL.not
          ? dataNotYet
          : dataNever,
    });
  };

  LabelHeader = () => (
    <>
      <FlatList
        data={this.state.dataLabel}
        listKey="key-overtime-header"
        keyExtractor={item => `overtimeHeader${item.id}`}
        extraData={this.state.dataLabel}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({item}) => (
          <TabCatory item={item} onActiveLabel={this.onActiveLabel} />
        )}
        ItemSeparatorComponent={() => <View style={{width: sizes._16sdp}} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: sizes._16sdp,
        }}
      />
    </>
  );

  //next screen
  onBtnFabClick = () => {
    this.props.navigation?.navigate(ScreenName.DETAIL_OVERTIME);
  };

  //FABtn
  fabButton = () => (
    <Pressable style={styles.fabContainer} onPress={this.onBtnFabClick}>
      {({pressed}) => (
        <SvgXml
          xml={pressed ? svgs.fab_btn_active : svgs.fab_btn}
          width={sizes._82sdp}
          height={sizes._82sdp}
          style={styles.fab}
        />
      )}
    </Pressable>
  );
  LabelContent = () => (
    <>
      <FlatList
        data={this.state.dataList}
        listKey="key-overtime-list"
        keyExtractor={item => `overtime-list${item.id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        extraData={this.state.dataList}
        renderItem={({item}) => <ItemOverTime item={item} />}
      />
    </>
  );

  customHeader = () => (
    <View style={styles.contentHeader}>
      <Text style={styles.textHeader}>Danh sách đăng ký làm thêm giờ</Text>
      <SvgXml
        xml={svgs.ic_list_header}
        width={sizes._24sdp}
        height={sizes._24sdp}
      />
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          contentCustom={true}
          contentCustomJSX={this.customHeader()}
        />
        <View style={styles.content}>
          <FlatList
            listKey="overtime-key"
            data={emptyData}
            renderItem={renderNullItem}
            ListHeaderComponent={this.LabelHeader()}
            ListFooterComponent={this.LabelContent()}
          />
        </View>
        <>{this.fabButton()}</>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._color_white,
  },
  content: {
    flex: 1,
    backgroundColor: colors._color_white,
    borderTopRightRadius: sizes._20sdp,
    borderTopLeftRadius: sizes._20sdp,
    paddingTop: sizes._20sdp,
    paddingBottom: sizes._20sdp,
    zIndex: 0,
  },
  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: sizes._16sdp,
  },
  textHeader: {
    color: colors._color_white,
    fontWeight: '400',
    fontSize: sizes._font_size_big,
  },
  fabContainer: {
    zIndex: 1,
    position: 'absolute',
    margin: sizes._20sdp,
    right: 0,
    bottom: 0,
    borderRadius: sizes._82sdp / 2,
    width: sizes._82sdp,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  fab: {
    bottom: -sizes._8sdp,
  },
});
