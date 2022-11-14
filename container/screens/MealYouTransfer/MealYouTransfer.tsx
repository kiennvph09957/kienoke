import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenName} from '../../AppContainer';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import {Dropdown} from 'react-native-element-dropdown';
import ListMealHasDoPerson from './ListMealHasDoPerson';
import ListMealNoTecipientYet from './ListMealNoTecipientYet';
import AppHeader from '../../../components/AppHeader';
interface Props {
  navigation?: any;
}
interface State {
  value: Number;
  data_id: Number;
}
export default class MealYouTransfer extends Component<Props, State> {
  state: State = {
    value: 1,
    data_id: 1,
  };
  render() {
    const {data_id} = this.state;
    const local_data = [
      {
        value: '1',
        lable: 'Bếp ăn Tập đoàn1',
      },
      {
        value: '2',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '3',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '4',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '5',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '6',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '7',
        lable: 'Bếp ăn Tập đoàn',
      },
      {
        value: '8',
        lable: 'Bếp ăn Tập đoàn',
      },
    ];
    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Suất ăn bạn chuyển"
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.margin}>
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={{marginTop: -20}}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholderStyle={styles.placeholderStyle}
                  iconStyle={styles.iconStyle}
                  showsVerticalScrollIndicator={false}
                  maxHeight={200}
                  value={data_id}
                  data={local_data}
                  valueField="value"
                  labelField="lable"
                  placeholder={'Chọn bếp ăn'}
                  onChange={(ex: any) => this.setState({data_id: ex.value})}
                />
                <View style={{position: 'relative', marginTop: 20}}>
                  <Image source={images.search} style={styles.search} />
                  <TextInput style={styles.input} placeholder="Tìm kiếm ..." />
                  <Image source={images.Calendar} style={styles.calendar} />
                </View>
              </View>

              <View style={styles.hr}></View>

              <ListMealHasDoPerson
                navigation={this.props?.navigation}
                data_id={data_id}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },

  margin: {
    marginHorizontal: sizes._20sdp,
  },
  dropdown: {
    marginTop: 30,
    height: sizes._48sdp,
    width: '100%',
    backgroundColor: '#F2F4F8',
    cornerRadius: sizes._8sdp,
    paddingHorizontal: sizes._15sdp,
    borderRadius: 10,
  },

  placeholderStyle: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    left: sizes._12sdp,
  },
  selectedTextStyle: {
    height: sizes._17sdp,
    fontSize: sizes._16sdp,
    fontWeight: '400',
    lineHeight: sizes._17sdp,
    color: '#4D4B4B',
    left: sizes._12sdp,
    textAlign: 'left',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: sizes._40sdp,
  },
  search: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  calendar: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
});
