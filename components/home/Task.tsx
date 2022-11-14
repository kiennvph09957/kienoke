import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import {ACTIVETYPE} from './Quest';
import TaskItem from './TaskItem';

interface Props {
  type?: any;
  data?: any;
}

interface State {
  dataList?: any;
}

export default class Task extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }
  componentDidMount() {
    this.setState({
      dataList: this.props.data,
    });
  }

  renderItem = ({item}: any) => <TaskItem item={item} />;

  componentDidUpdate(prevProps: any) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        dataList: this.props.data,
      });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.content}>
          {this.props.type === ACTIVETYPE.PERSONAL ? (
            <Text style={styles.label}>
              <Text style={styles.textLabel}>Quản lý công việc</Text> (3)
            </Text>
          ) : (
            <Text style={styles.textLabel}>Quản lý công việc</Text>
          )}

          {this.props.type === ACTIVETYPE.UNIT && (
            <Text style={styles.title}>
              Đơn vị có <Text style={styles.titleBold}>16</Text> nhiệm vụ
            </Text>
          )}
        </View>
        <FlatList
          data={this.state.dataList}
          listKey={'task-event'}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem}
          numColumns={2}
          extraData={this.state.dataList}
          removeClippedSubviews
          columnWrapperStyle={styles.item}
          ItemSeparatorComponent={() => <View style={{height: sizes._16sdp}} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    color: colors._color_gray_light,
    fontSize: sizes._font_size_big_big,
  },
  content: {
    marginBottom: sizes._16sdp,
  },
  textLabel: {
    fontWeight: '700',
    color: colors._color_gray_light,
    fontSize: sizes._font_size_big_big,
  },
  title: {
    fontSize: sizes._font_size_big_big,
    color: colors._color_text_title,
    lineHeight: sizes._24sdp,
  },
  titleBold: {
    fontSize: sizes._font_size_big_big,
    fontWeight: '700',
    lineHeight: sizes._25sdp,
    flexWrap: 'wrap',
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: sizes._1sdp,
  },
});
