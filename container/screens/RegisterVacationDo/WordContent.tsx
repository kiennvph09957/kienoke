import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
//import RadioGroup from 'react-native-radio-buttons-group';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';

type Props = {
  isShow?: boolean;
  toggleDate: any;
  changeText: any;
};
interface State {
  checked: any;
  data: any;
}

export default class WordContent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: '1',
      data: [
        {
          id: 1,
          content: 'Ở nhà ngủ',
        },
        {
          id: 2,
          content: 'Đi làm',
        },
        {
          id: 3,
          content: 'Đi học',
        },
      ],
    };
  }
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
        <Text style={[styles.textHeader, {marginLeft: sizes._28sdp}]}>
          Đợt nghỉ
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => this.props.toggleDate()}
        style={{marginRight: sizes._30sdp}}>
        <Text style={styles.textHeader}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );

  renderContent = () => <></>;

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

            {this.renderContent()}

            <View style={styles.footerContainer}>
              <Text
                style={{
                  color: ' #727070',
                  fontSize: 18,
                  marginTop: sizes._10sdp,
                }}>
                Danh sách đợt nghỉ<Text style={{color: '#EE0033'}}>*</Text>
              </Text>
              <View
                style={{
                  flex: 1,
                  marginTop: sizes._10sdp,
                  marginBottom: sizes._20sdp,
                  right: 10,
                }}>
                {this.state.data.map((data: any) => {
                  return (
                    <View
                      style={{flexDirection: 'row', marginTop: sizes._5sdp}}>
                      <RadioButton
                        value={data?.id}
                        color={'#EE0033'}
                        status={
                          this.state.checked === data?.id
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => {
                          this.setState({checked: data?.id});
                          this.props.changeText(data?.content);
                          this.props.toggleDate();
                        }}></RadioButton>
                      <Text style={styles.text}>{data?.content}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
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
  },
  headerRight: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: sizes._30sdp,
  },
  textHeader: {
    fontSize: 20,
    color: colors._color_text_title,
    fontWeight: '600',
  },

  footerContainer: {
    flexDirection: 'column',

    marginTop: sizes._20sdp,
    marginBottom: sizes._30sdp,
    marginLeft: sizes._44sdp,
    width: '70%',
  },
  spaceFooter: {
    width: sizes._30sdp,
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: sizes._10sdp,
    top: 5,
  },
  stylecontainer: {
    flexDirection: 'row',
    marginTop: sizes._10sdp,
  },
});
