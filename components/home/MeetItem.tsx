import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import svg from '../../res/svgs';

interface Props {
  item: any;
}
interface State {}

export default class MeetItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {name, address, date, time} = this.props.item;
    return (
      <>
        <Card style={styles.card} elevation={5}>
          <View style={styles.info}>
            <View style={styles.title}>
              <Text style={styles.name}>{name}</Text>
              <Icon name="arrow-forward" size={sizes._24sdp} />
            </View>
            <Text style={styles.subTitle}>Địa điểm: {address}</Text>
            <View style={styles.timeContainer}>
              <View style={styles.icon}>
                <SvgXml
                  xml={svg.calender}
                  width={sizes._24sdp}
                  height={sizes._24sdp}
                />
              </View>
              <View style={styles.timeDate}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>
                  {time.start} - {time.end}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: sizes._csreen_width - sizes._32sdp,
    backgroundColor: colors._color_white,
    margin: sizes._16sdp,
    borderRadius: sizes._10sdp,
  },
  info: {
    paddingHorizontal: sizes._16sdp,
    paddingVertical: sizes._18sdp,
  },
  title: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: sizes._font_size_big_big,
    color: colors._color_black,
    lineHeight: sizes._27sdp,
    marginRight: sizes._8sdp,
  },
  subTitle: {
    flex: 1,
    fontSize: sizes._font_size_big_big,
    lineHeight: sizes._27sdp,
    flexWrap: 'wrap',
    color: colors._color_gray_text,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: sizes._52sdp,
    height: sizes._52sdp,
    backgroundColor: colors._color_gray_light_light,
    borderRadius: sizes._52sdp / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeDate: {
    flex: 1,
    paddingLeft: sizes._14sdp,
  },
  date: {
    color: colors._color_gray_text_light,
    fontSize: sizes._18sdp,
    lineHeight: sizes._27sdp,
  },
  time: {
    color: colors._color_text_title,
    fontSize: sizes._18sdp,
    lineHeight: sizes._27sdp,
    fontWeight: '700',
  },
});
