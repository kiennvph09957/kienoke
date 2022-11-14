import React, {Component} from 'react';
import {PieChart} from 'react-native-svg-charts';
import {Text as TextSVG} from 'react-native-svg';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
import SubColorChart from './SubColorChart';
import TextLabel from './TextLabel';

interface Props {}
interface State {
  activeTurnover: string;
  saleActive: string;
}

//Dữ liệu đổ biểu đồ
const data = [
  {
    key: 0,
    amount: 20,
    svg: {fill: colors._color_blue_light_dark},
    label: '30%',
  },
  {
    key: 1,
    amount: 20,
    svg: {fill: colors._color_blue_primary},
    label: '15%',
  },
  {
    key: 2,
    amount: 20,
    svg: {fill: colors._color_blue_primary_drak},
    label: '25%',
  },
  {
    key: 3,
    amount: 20,
    svg: {fill: colors._color_orange},
    label: '28%',
  },
  {
    key: 4,
    amount: 20,
    svg: {fill: colors._color_orange_medium},
    label: '4%',
  },
  {
    key: 5,
    amount: 20,
    svg: {fill: colors._color_blue_light},
    label: '30%',
  },
];

const ACTIVE = {
  SERVICE: 'service',
  TURNOVER: 'turnover',
};

const SALE = {
  MONTH: 'month',
  PRECIOUS: 'precious',
  YEAR: 'year',
};

export default class Sales extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTurnover: 'service',
      saleActive: SALE.MONTH,
    };
  }
  // Thay đổi thời gian thống kê doanh thu
  changeSaleActive = (val: string) => {
    this.setState({saleActive: val});
  };
  // Thay đổi Dữ liệu biểu đồ
  changeTurnover = (val: string) => {
    this.setState({activeTurnover: val});
  };

  render() {
    // Số phần trăm biểu đồ
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
            fontWeight={700}
            stroke={'black'}
            strokeWidth={0.2}>
            {data.label}
          </TextSVG>
        );
      });
    };

    return (
      <View style={styles.container}>
        <View style={styles.salesContainer}>
          {/* Tiêu đề */}
          <View style={styles.titleSale}>
            <TextLabel
              style={null}
              textStyle={styles.textSale}
              text="Doanh thu"
            />
            <View style={styles.saleSelected}>
              {/* Chọn thời gian Doanh thu */}
              <TextLabel
                style={
                  this.state.saleActive === SALE.MONTH
                    ? styles.saleActive
                    : styles.saleDisabled
                }
                textStyle={
                  this.state.saleActive === SALE.MONTH
                    ? styles.textSaleActive
                    : styles.textSaleDisabled
                }
                text="Tháng"
                onPress={() => this.changeSaleActive(SALE.MONTH)}
              />
              <View style={styles.space} />
              <TextLabel
                style={
                  this.state.saleActive === SALE.PRECIOUS
                    ? styles.saleActive
                    : styles.saleDisabled
                }
                textStyle={
                  this.state.saleActive === SALE.PRECIOUS
                    ? styles.textSaleActive
                    : styles.textSaleDisabled
                }
                text="Quý"
                onPress={() => this.changeSaleActive(SALE.PRECIOUS)}
              />
              <View style={styles.space} />
              <TextLabel
                style={
                  this.state.saleActive === SALE.YEAR
                    ? styles.saleActive
                    : styles.saleDisabled
                }
                textStyle={
                  this.state.saleActive === SALE.YEAR
                    ? styles.textSaleActive
                    : styles.textSaleDisabled
                }
                text="Năm"
                onPress={() => this.changeSaleActive(SALE.YEAR)}
              />
            </View>
          </View>
        </View>

        <View style={styles.labelItem}>
          {/* Chọn dữ liệu biểu đồ */}
          <TextLabel
            style={
              this.state.activeTurnover === ACTIVE.SERVICE
                ? styles.labelTurnoverActive
                : styles.labelTurnoverDisable
            }
            textStyle={
              this.state.activeTurnover === ACTIVE.SERVICE
                ? styles.textLableTurnoverActive
                : styles.textLableTurnoverDisable
            }
            text="Dịch vụ"
            onPress={() => this.changeTurnover(ACTIVE.SERVICE)}
          />
          <TextLabel
            style={
              this.state.activeTurnover === ACTIVE.TURNOVER
                ? styles.labelTurnoverActive
                : styles.labelTurnoverDisable
            }
            textStyle={
              this.state.activeTurnover === ACTIVE.TURNOVER
                ? styles.textLableTurnoverActive
                : styles.textLableTurnoverDisable
            }
            text="Tổng doanh thu"
            onPress={() => this.changeTurnover(ACTIVE.TURNOVER)}
          />
        </View>

        <Card elevation={5} style={styles.containerCard}>
          <Text style={styles.title}>Lũy kế tháng</Text>

          <View style={styles.content}>
            <View style={styles.contentPie}>
              <PieChart
                style={styles.pieChart}
                valueAccessor={({item}) => item.amount}
                data={data}
                innerRadius={'40%'}
                outerRadius={'100%'}>
                <Labels />
              </PieChart>
              {/* Tổng số liệu biểu đồ */}
              <View style={styles.contentText}>
                <Text style={styles.sumSale}>88,408</Text>
                <Text style={styles.subSumSale}>triệu</Text>
              </View>
            </View>
            {/* Chú thích màu biểu đồ */}
            <View style={styles.subColorChar}>
              <SubColorChart
                rectStyle={[styles.subColorZero, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="GPCNTT"
              />
              <SubColorChart
                rectStyle={[styles.subColorOne, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="GPCNTT S"
              />
              <SubColorChart
                rectStyle={[styles.subColorTwo, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="Kênh truyền"
              />
              <SubColorChart
                rectStyle={[styles.subColorThree, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="Buil SMS"
              />
              <SubColorChart
                rectStyle={[styles.subColorFour, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="Quốc tế"
              />
              <SubColorChart
                rectStyle={[styles.subColorFive, styles.subColorShadow]}
                textStyle={styles.textSubColor}
                textValue="Viễn thông"
              />
            </View>
          </View>
          {/* Dữ liệu thống kê */}
          <View style={styles.summary}>
            <Text style={styles.subTurnover}>
              Hoàn thành:{' '}
              <Text
                style={[styles.turnover, {fontSize: sizes._font_size_big_big}]}>
                24%
              </Text>
            </Text>

            <Text style={styles.subTurnover}>
              Thực hiện: <Text style={styles.turnover}>88,408</Text>/368,247
              (Tr)
            </Text>

            <Text style={styles.subTurnover}>
              Thiếu: <Text style={styles.losses}>-279,839</Text> (Tr)
            </Text>
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelItem: {
    flexDirection: 'row',
    marginTop: sizes._16sdp,
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
    height: sizes._38sdp,
  },
  textLableTurnoverActive: {
    fontSize: sizes._font_size_large,
    color: colors._color_red_drank_drank,
    fontWeight: '700',
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
    height: sizes._38sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLableTurnoverDisable: {
    fontSize: sizes._font_size_large,
    color: colors._color_text_title,
    fontWeight: '400',
    marginHorizontal: sizes._8sdp,
  },
  container: {
    width: '100%',
    paddingHorizontal: sizes._16sdp,
  },
  containerCard: {
    padding: sizes._16sdp,
    borderRadius: sizes._10sdp,
    backgroundColor: colors._color_white,
    marginBottom: sizes._16sdp,
  },
  title: {
    fontWeight: '400',
    marginBottom: sizes._16sdp,
    fontSize: sizes._font_size_large,
  },
  content: {
    flexDirection: 'row',
  },
  contentPie: {
    justifyContent: 'center',
    marginBottom: sizes._26sdp,
  },
  pieChart: {
    height: sizes._200sdp,
    width: sizes._200sdp,
  },
  contentText: {
    position: 'absolute',
    left: sizes._200sdp / 2 - sizes._68sdp / 2,
    width: sizes._68sdp,
    height: sizes._68sdp,
    backgroundColor: colors._color_gray_light_char,
    borderRadius: sizes._68sdp / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subColorChar: {
    flex: 1,
    height: sizes._200sdp,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: sizes._29sdp,
    paddingVertical: sizes._8sdp,
  },
  textSub: {
    textAlignVertical: 'center',
  },
  sumSale: {
    fontSize: sizes._font_size_large_large,
    fontWeight: '700',
    color: colors._color_text_title,
    textAlignVertical: 'center',
  },
  subSumSale: {
    fontSize: sizes._font_size_small_small,
    color: colors._color_text_title,
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  summary: {},
  subTurnover: {
    fontSize: sizes._font_size_large,
    color: colors._color_gray_text,
    fontWeight: '400',
  },
  turnover: {
    color: colors._color_text_title,
    fontWeight: '700',
  },
  losses: {
    color: colors._color_blue_light_light,
    fontWeight: '700',
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
    backgroundColor: colors._color_blue_light,
  },
  subColorOne: {
    backgroundColor: colors._color_blue_light_dark,
  },
  subColorTwo: {
    backgroundColor: colors._color_blue_primary,
  },
  subColorThree: {
    backgroundColor: colors._color_blue_primary_drak,
  },
  subColorFour: {
    backgroundColor: colors._color_orange,
  },
  subColorFive: {
    backgroundColor: colors._color_orange_medium,
  },
  salesContainer: {},
  titleSale: {},
  textSale: {
    color: colors._color_gray_light,
    fontSize: sizes._font_size_big_big,
    fontWeight: '700',
  },
  space: {
    width: sizes._17sdp,
  },
  saleSelected: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: sizes._8sdp,
  },
  saleActive: {
    paddingHorizontal: sizes._22sdp,
    backgroundColor: colors._color_red_dark,
    borderRadius: sizes._20sdp,
    borderWidth: sizes._1sdp,
    borderColor: colors._color_red_flaming,
    height: sizes._34sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSaleActive: {
    color: colors._color_white,
    fontWeight: '700',
    fontSize: sizes._font_size_big_big,
  },
  saleDisabled: {
    paddingHorizontal: sizes._22sdp,
    backgroundColor: colors._color_gray_us,
    borderRadius: sizes._20sdp,
    height: sizes._34sdp,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSaleDisabled: {
    color: colors._color_gray_light,
    fontWeight: '400',
    fontSize: sizes._font_size_large,
  },
});
