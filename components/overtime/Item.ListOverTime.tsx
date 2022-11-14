import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import svgs from '../../res/svgs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import 'moment/locale/vi';

interface Props {
  item?: any;
}

interface State {}

export default class ItemOverTime extends Component<Props, State> {
  state = {};

  formartTimeCreat = (time: any) => {
    return moment().diff(time, 'days') === 0
      ? moment(time).fromNow()
      : moment(time).format('DD/MM/YYYY');
  };

  showTime = (time: any) => {
    return moment(time).format('HH:mm DD/MM/YYYY');
  };

  render() {
    moment.locale('vi');

    const {id, local, content, startTime, endTime, creatAt} = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.contentLocal}>
          <Text style={styles.textLocal}>{local}</Text>
          <Text style={styles.textSubLocal}>
            {this.formartTimeCreat(creatAt)}
          </Text>
        </View>

        <View style={styles.contentTime}>
          <SvgXml
            xml={svgs.calender}
            width={sizes._18sdp}
            height={sizes._18sdp}
          />

          <Text style={styles.timmer}>
            {this.showTime(startTime)}
            {'  '}-{'  '}
            {this.showTime(endTime)}
          </Text>
          <Icon name="keyboard-arrow-right" size={sizes._24sdp} />
        </View>

        <View style={styles.content}>
          <SvgXml
            xml={svgs.ic_task_list}
            width={sizes._18sdp}
            height={sizes._18sdp}
          />

          <Text style={styles.timmer}>{content}</Text>
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: sizes._screen_width - sizes._40sdp,
    marginHorizontal: sizes._20sdp,
    marginTop: sizes._20sdp,
  },
  contentLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLocal: {
    color: colors._color_black_pare,
    fontSize: sizes._font_size_big_big,
    fontWeight: '700',
  },
  textSubLocal: {
    fontSize: sizes._font_size_medium,
    color: colors._color_gray_text,
    paddingRight: sizes._8sdp,
  },
  contentTime: {
    flexDirection: 'row',
    marginVertical: sizes._8sdp,
    alignItems: 'center',
  },
  timmer: {
    flex: 1,
    fontSize: sizes._font_size_large_large,
    color: colors._color_gray_text,
    paddingLeft: sizes._12sdp,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    marginTop: sizes._16sdp,
    height: sizes._1sdp,
    backgroundColor: colors._color_gray_light_puss,
    borderRadius: sizes._1sdp / 2,
  },
});
