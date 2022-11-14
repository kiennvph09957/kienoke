import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import colors from '../../res/colors';
import sizes from '../../res/sizes';
import Icons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  isShow?: boolean;
  toggleDate?: any;
  date?: any;
  onDateChange?: any;
};

type State = {
  datePick: any;
};

export default class DatePick extends Component<Props, State> {
  state: State = {
    datePick: null,
  };
  renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => this.props.toggleDate()}>
          <Icons
            name="chevron-back"
            size={sizes._24sdp}
            color={colors._color_gray_text_light}
          />
        </TouchableOpacity>
        <Text style={[styles.textHeader, {marginLeft: sizes._8sdp}]}>
          Thời gian
        </Text>
      </View>

      <TouchableOpacity onPress={() => this.props.toggleDate()}>
        <Text style={styles.textHeader}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );

  renderContent = (date: any) => (
    <>
      <DatePicker
        date={date}
        locale="vi"
        mode="date"
        style={styles.date}
        onDateChange={date => this.setState({datePick: date})}
      />
    </>
  );

  renderFooter = (dateSelected: any) => (
    <View style={styles.footerContainer}>
      <Pressable
        onPress={() => this.props.toggleDate()}
        style={({pressed}: any) => [
          {
            borderColor: pressed
              ? colors._color_red_dark
              : colors._color_gray_text_light,
          },
          styles.btnSize,
          styles.btnCancel,
        ]}>
        {({pressed}: any) => (
          <Text
            style={[
              {
                color: pressed ? colors._color_black : colors._color_text_title,
                fontWeight: pressed ? '700' : '500',
              },
              styles.textBtn,
            ]}>
            Hủy
          </Text>
        )}
      </Pressable>

      <View style={styles.spaceFooter} />

      <Pressable onPress={() => this.props.onDateChange(dateSelected)}>
        {({pressed}: any) => (
          <LinearGradient
            start={pressed ? {x: 0.67, y: -1} : {x: 0, y: 0}}
            end={pressed ? {x: 0.2, y: 0} : {x: 0, y: 0}}
            locations={[0, 1]}
            colors={
              pressed
                ? [colors._color_red_pare, colors._color_red_pare_light]
                : [colors._color_gray_text_light, colors._color_gray_text_light]
            }
            style={styles.btnSize}>
            <Text
              style={[
                {
                  color: colors._color_white,
                  fontWeight: pressed ? '700' : '500',
                },
                styles.textBtn,
              ]}>
              Xác nhận
            </Text>
          </LinearGradient>
        )}
      </Pressable>
    </View>
  );

  render() {
    return (
      <Modal
        visible={this.props.isShow}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.props.toggleDate}>
            <View style={{width: '100%', flex: 1, zIndex: 0}} />
          </TouchableWithoutFeedback>
          <View style={styles.content}>
            <View style={styles.indicator} />

            {this.renderHeader()}

            {this.renderContent(this.props.date)}

            {this.renderFooter(this.state.datePick)}
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._color_gray_translucen,
  },
  content: {
    zIndex: 1,
    bottom: 0,
    position: 'absolute',
    width: sizes._csreen_width,
    backgroundColor: colors._color_white,
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  indicator: {
    height: sizes._5sdp,
    width: sizes._50sdp,
    backgroundColor: colors._color_black,
    opacity: 0.15,
    borderRadius: sizes._3sdp,
    margin: sizes._16sdp,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: sizes._16sdp,
  },
  headerRight: {
    flexDirection: 'row',
    flex: 1,
  },
  textHeader: {
    fontSize: sizes._font_size_big,
    color: colors._color_text_title,
    fontWeight: '600',
  },
  date: {
    width: sizes._screen_width,
    marginTop: sizes._8sdp,
    height: sizes._150sdp,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes._22sdp,
  },
  spaceFooter: {
    width: sizes._16sdp,
  },
  btnSize: {
    width: sizes._160sdp,
    height: sizes._50sdp,
    borderRadius: sizes._30sdp,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    backgroundColor: colors._color_white,
    borderWidth: sizes._1sdp,
  },
  textBtn: {
    fontSize: sizes._font_size_big_big,
  },
});
