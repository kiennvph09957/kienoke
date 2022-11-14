import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Modal,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {Component, useState} from 'react';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import LunchScreen from './LunchScreen';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScreenName} from '../../AppContainer';
import AppHeader from '../../../components/AppHeader';

interface State {}

interface Props {
  navigation: any;
}

export default class Kitchen extends Component<Props, State> {
  state = {
    check: 1,
  };
  render() {
    const {check} = this.state;
    const {state} = this.props.navigation;
    console.log(state.params.item, 'name');
    return (
      <View style={{flex: 1}}>
        <AppHeader
          title
          textTittle={'Lịch ăn định kỳ'}
          back
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        <View style={styles.main}>
          <ScrollView>
            <View style={{height: sizes._860sdp}}>
              <TouchableOpacity
                style={{
                  top: sizes._39sdp,
                  left: sizes._35sdp,
                  position: 'absolute',
                  width: '100%',
                }}
                onPress={() => {
                  this.props?.navigation?.navigate(
                    ScreenName.Kitchen_list_screen,
                  );
                }}>
                <IconFontAwesome
                  name="angle-left"
                  color={'black'}
                  size={25}></IconFontAwesome>
                <View
                  style={{
                    left: sizes._25sdp,
                    top: -35,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 20,
                    }}>
                    {state.params.item.name}
                  </Text>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    {state.params.item.address}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  top: sizes._95sdp,
                  borderBottomColor: 'black',
                  position: 'absolute',
                  borderBottomWidth: 0.2,
                  opacity: 0.5,
                  marginVertical: sizes._10sdp,
                  width: '100%',
                }}></View>

              <View
                style={{
                  position: 'absolute',
                  left: sizes._32sdp,
                  top: sizes._124sdp,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => this.setState({check: 1})}>
                  <Text style={check == 1 ? styles.meallActive : styles.meall}>
                    BỮA TRƯA{' '}
                  </Text>
                  {check == 1 ? <View></View> : <View></View>}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{left: sizes._20sdp}}
                  onPress={() => this.setState({check: 2})}>
                  <Text style={check == 2 ? styles.meallActive : styles.meall}>
                    BỮA TỐi{' '}
                  </Text>
                  {check == 2 ? <View></View> : <View></View>}
                </TouchableOpacity>

                <View
                  style={{
                    top: sizes._50sdp,
                    left: 0,
                    position: 'absolute',
                  }}>
                  <LunchScreen />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
    flex: 1,
  },
  title: {
    color: '#FFFF',
    fontSize: 20,
    lineHeight: sizes._27sdp,
    fontWeight: '600',
    top: sizes._1sdp,
    left: sizes._39sdp,
  },
  meallActive: {
    fontSize: 14,
    fontWeight: '600',

    color: '#D30026',
    borderBottomWidth: 1,
    borderBottomColor: '#D30026',
  },
  meall: {
    fontSize: 14,
    fontWeight: '600',
  },
});
