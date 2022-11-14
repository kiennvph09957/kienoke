import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import svgs from '../../res/svgs';
import CategoryItem from './CategoryItem';

interface Props {
  navigation?: any;
}

interface State {}

const data = [
  {
    id: 1,
    icon: svgs.rice,
    icon_active: svgs.rice_active,
    value: 'Đặt cơm',
    screen: 'CategoryHome',
  },
  {
    id: 2,
    icon: svgs.calendar_2,
    icon_active: svgs.calendar_2_active,
    value: 'Thông tin\nchấm công',
    screen: 'CategoryHome',
  },
  {
    id: 3,
    icon: svgs.overtime,
    icon_active: svgs.overtime_active,
    value: 'Đăng ký\nlàm ngoài giờ',
    screen: 'CategoryHome',
  },
  {
    id: 4,
    icon: svgs.user_2,
    icon_active: svgs.user_2_active,
    value: 'Đăng ký\nvào ra',
    screen: 'CategoryHome',
  },
  {
    id: 5,
    icon: svgs.workflow,
    icon_active: svgs.workflow_active,
    value: 'Quản lý\ncông việc',
    screen: 'CategoryHome',
  },
  {
    id: 6,
    icon: svgs.add_file,
    icon_active: svgs.add_file_active,
    value: 'Văn bản đến',
    screen: 'CategoryHome',
  },
  {
    id: 7,
    icon: svgs.add,
    icon_active: svgs.add_active,
    value: 'Thêm\ndanh mục',
    screen: 'CategoryHome',
  },
  {
    id: 8,
    icon: svgs.fast_forward,
    icon_active: svgs.fast_forward_active,
    value: 'Xem tất cả',
    screen: 'CategoryHome',
  },
];

export default class Category extends Component<Props, State> {
  onNext = (screen: any) => this.props.navigation?.navigate(screen);
  renderItem = ({item, index}: any) => {
    const isEnd = index === data.length - 1;
    return (
      <CategoryItem
        item={item}
        index={index}
        isEnd={isEnd}
        onSelectedItem={this.onNext}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Danh mục</Text>
        </View>
        <FlatList
          data={data}
          listKey={'category-event'}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem}
          numColumns={2}
          removeClippedSubviews
          columnWrapperStyle={styles.itemList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes._16sdp,
    paddingTop: sizes._16sdp,
    marginBottom: sizes._32sdp,
  },
  header: {},
  textHeader: {
    fontWeight: '700',
    color: colors._color_text_title,
    fontSize: sizes._font_size_big_big,
  },
  itemList: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
