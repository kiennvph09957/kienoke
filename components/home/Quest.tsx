import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Text as TextSVG} from 'react-native-svg';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import svgs from '../../res/svgs';
import {Card} from 'react-native-paper';
import TextLabel from './TextLabel';
import SubColorChart from './SubColorChart';
import Task from './Task';

//Dữ liệu biểu đồ
const data = [
  {
    key: 0,
    amount: 20,
    svg: {fill: colors._color_blue_light_darker},
    label: '20%',
  },
  {
    key: 1,
    amount: 40,
    svg: {fill: colors._color_blue_swarthy},
    label: '30%',
  },
  {
    key: 2,
    amount: 20,
    svg: {fill: colors._color_gray_sombre},
    label: '20%',
  },
  {
    key: 3,
    amount: 40,
    svg: {fill: colors._color_orange_medium_more},
    label: '30%',
  },
];

// dữ liệu menu item đơn vị
const dataUNIT = [
  {
    id: 1,
    quantity: 2,
    label: 'Sắp đến hạn',
    icon: svgs.alert,
    icon_active: svgs.alert_active,
  },
  {
    id: 2,
    quantity: 3,
    label: 'Ban Giám đốc giao',
    icon: svgs.check,
    icon_active: svgs.check_active,
  },
  {
    id: 3,
    quantity: 2,
    label: 'Đơn vị đăng ký',
    icon: svgs.registered,
    icon_active: svgs.registered_active,
  },
  {
    id: 4,
    quantity: 25,
    label: 'Hoàn thành',
    icon: svgs.group,
    icon_active: svgs.group_active,
  },
  {
    id: 5,
    quantity: 3,
    label: 'Phối hợp',
    icon: svgs.combine,
    icon_active: svgs.combine_active,
  },
  {
    id: 6,
    quantity: 6,
    label: 'Giao đi',
    icon: svgs.users,
    icon_active: svgs.users_active,
  },
];

// dữ liệu menu item đơn vị
const dataPERSONAL = [
  {
    id: 1,
    quantity: 0,
    label: 'Chậm tiến độ ',
    icon: svgs.slow,
    icon_active: svgs.slow_active,
  },
  {
    id: 2,
    quantity: 3,
    label: 'Đang thực hiện',
    icon: svgs.sync,
    icon_active: svgs.sync_active,
  },
  {
    id: 3,
    quantity: 0,
    label: 'Đơn vị đăng ký',
    icon: svgs.check,
    icon_active: svgs.check_active,
  },
  {
    id: 4,
    quantity: 0,
    label: 'Chưa thực hiện',
    icon: svgs.setup,
    icon_active: svgs.setup_active,
  },
];

interface Props {
  postion: string;
}

interface State {
  subject: string;
}

export const ACTIVETYPE = {
  UNIT: 'unit',
  PERSONAL: 'personal',
};
export default class Quest extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      subject:
        this.props.postion === 'giam_doc'
          ? ACTIVETYPE.UNIT
          : ACTIVETYPE.PERSONAL,
    };
  }

  changeSubject = (val: string) => {
    this.setState({subject: val});
  };

  render() {
    //Số liệu biểu đồ
    const Labels = ({slices}: any) => {
      return slices.map((slice: any, index: number) => {
        const {labelCentroid, pieCentroid, data} = slice;
        return (
          <TextSVG
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={sizes._font_size_medium}
            fontWeight={600}
            stroke={'black'}
            strokeWidth={0.2}>
            {data.label}
          </TextSVG>
        );
      });
    };

    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Nhiệm vụ</Text>
        <Text style={styles.subHeader}>
          Nhiệm vụ sắp đến hạn: <Text style={styles.subHeaderBlod}>02</Text>
        </Text>

        <View style={styles.content}>
          {this.props.postion === 'giam_doc' && (
            <View style={styles.labelItem}>
              <TextLabel
                style={
                  this.state.subject === ACTIVETYPE.UNIT
                    ? styles.labelTurnoverActive
                    : styles.labelTurnoverDisable
                }
                textStyle={
                  this.state.subject === ACTIVETYPE.UNIT
                    ? styles.textLableTurnoverActive
                    : styles.textLableTurnoverDisable
                }
                text="Đơn vị"
                onPress={() => this.changeSubject(ACTIVETYPE.UNIT)}
              />
              <TextLabel
                style={
                  this.state.subject === ACTIVETYPE.PERSONAL
                    ? styles.labelTurnoverActive
                    : styles.labelTurnoverDisable
                }
                textStyle={
                  this.state.subject === ACTIVETYPE.PERSONAL
                    ? styles.textLableTurnoverActive
                    : styles.textLableTurnoverDisable
                }
                text="Cá nhân"
                onPress={() => this.changeSubject(ACTIVETYPE.PERSONAL)}
              />
            </View>
          )}

          <Card elevation={5} style={styles.containerPieChart}>
            <View style={styles.contentPie}>
              <PieChart
                style={styles.pieChart}
                valueAccessor={({item}) => item.amount}
                data={data}
                innerRadius={'40%'}
                outerRadius={'100%'}>
                <Labels />
              </PieChart>
              <View style={styles.centerPie} />
            </View>

            <View style={styles.subColorChart}>
              <View style={styles.subColorLeft}>
                <SubColorChart
                  rectStyle={[styles.subColorZero, styles.subColorShadow]}
                  textStyle={styles.textSubColor}
                  textValue="Đang thực hiện"
                />
                <SubColorChart
                  rectStyle={[styles.subColorOne, styles.subColorShadow]}
                  textStyle={styles.textSubColor}
                  textValue="Đã hoàn thành"
                />
              </View>
              <View style={styles.subColorRight}>
                <SubColorChart
                  rectStyle={[styles.subColorTwo, styles.subColorShadow]}
                  textStyle={styles.textSubColor}
                  textValue="Chưa thực hiện"
                />
                <SubColorChart
                  rectStyle={[styles.subColorThree, styles.subColorShadow]}
                  textStyle={styles.textSubColor}
                  textValue="Chậm tiến độ"
                />
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.task}>
          <Task
            type={this.state.subject}
            data={
              this.state.subject === ACTIVETYPE.UNIT ? dataUNIT : dataPERSONAL
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: sizes._screen_width,
    paddingHorizontal: sizes._16sdp,
    backgroundColor: 'transparent',
  },
  textHeader: {
    fontSize: sizes._font_size_big,
    color: colors._color_text_title,
    fontWeight: '700',
  },
  subHeader: {
    fontSize: sizes._font_size_big_big,
    color: colors._color_gray_text_light,
    fontWeight: '400',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors._color_gray_text_light,
  },
  subHeaderBlod: {
    fontWeight: '700',
  },
  content: {
    marginTop: sizes._16sdp,
  },
  labelItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  labelTurnoverActive: {
    paddingHorizontal: sizes._16sdp,
    borderTopLeftRadius: sizes._5sdp,
    borderTopRightRadius: sizes._5sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_red_flaming,
    marginLeft: sizes._12sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLableTurnoverActive: {
    fontSize: sizes._font_size_large,
    color: colors._color_red_drank_drank,
    fontWeight: '700',
    lineHeight: sizes._34sdp,
    marginHorizontal: sizes._8sdp,
  },
  labelTurnoverDisable: {
    backgroundColor: colors._color_gray_light_glossy,
    paddingHorizontal: sizes._16sdp,
    borderTopLeftRadius: sizes._5sdp,
    borderTopRightRadius: sizes._5sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_gray,
    marginLeft: sizes._12sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLableTurnoverDisable: {
    fontSize: sizes._font_size_large,
    color: colors._color_text_title,
    fontWeight: '400',
    lineHeight: sizes._34sdp,
    marginHorizontal: sizes._8sdp,
  },
  containerPieChart: {
    width: sizes._screen_width - sizes._32sdp,
    backgroundColor: colors._color_white,
    borderRadius: sizes._10sdp,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes._16sdp,
  },
  contentPie: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  centerPie: {
    position: 'absolute',
    left: sizes._200sdp / 2 - sizes._68sdp / 2,
    width: sizes._68sdp,
    height: sizes._68sdp,
    backgroundColor: colors._color_gray_light_char,
    borderRadius: sizes._68sdp / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChart: {
    height: sizes._200sdp,
    width: sizes._200sdp,
  },
  subColorChart: {
    width: sizes._screen_width - sizes._32sdp,
    flexDirection: 'row',
    marginTop: sizes._16sdp,
    paddingHorizontal: sizes._22sdp,
  },
  subColorRight: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  subColorLeft: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  textSubColor: {
    marginLeft: sizes._16sdp,
    fontSize: sizes._font_size_large_large,
  },
  subColorShadow: {
    shadowColor: colors._color_white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subColorZero: {
    backgroundColor: colors._color_blue_light_darker,
  },
  subColorOne: {
    backgroundColor: colors._color_blue_swarthy,
  },
  subColorTwo: {
    backgroundColor: colors._color_gray_sombre,
    marginLeft: sizes._32sdp,
  },
  subColorThree: {
    backgroundColor: colors._color_orange_medium_more,
    marginLeft: sizes._32sdp,
  },
  task: {
    marginTop: sizes._22sdp,
  },
});
