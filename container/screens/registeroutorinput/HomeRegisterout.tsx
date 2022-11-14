import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../../../components/AppHeader';
import Tabregisteroutput from '../../../components/registeroutorinput/Tabregisteroutput';
import colors from '../../../res/colors';
import sizes from '../../../res/sizes';
import {ScreenName} from '../../AppContainer';
import ScreenHomeCD from './ScreenHomeCD';
import ScreenHomeDD from './ScreenHomeDD';
import ScreenHomeTCD from './ScreenHomeTCD';

interface Props {
  navigation?: any;
}

interface State {
  activeCD: any;
  activeDD: any;
  activeTCD: any;
}

export default class HomeRegisterout extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeCD: false,
      activeDD: true,
      activeTCD: false,
    };
  }

  InactiveCD = () => {
    this.setState({activeCD: !this.state.activeCD});
    this.setState({activeDD: false});
    this.setState({activeTCD: false});
  };
  InactiveDD = () => {
    this.setState({activeDD: !this.state.activeDD});
    this.setState({activeCD: false});
    this.setState({activeTCD: false});
  };
  InactiveTCD = () => {
    this.setState({activeTCD: !this.state.activeTCD});
    this.setState({activeCD: false});
    this.setState({activeDD: false});
  };
  render() {
    if (this.state.activeCD == true) {
      return (
        <View style={syles.container}>
          <AppHeader
            back
            onBackPress={() => this.props?.navigation?.goBack()}
            title
            textTittle={'Danh sách đăng ký vào ra'}
          />
          <View style={syles.from_container}>
            {/* tabbar */}
            <Tabregisteroutput
              //state
              style_stateCD={this.state.activeCD}
              style_stateDD={this.state.activeDD}
              style_stateTCD={this.state.activeTCD}
              //onpress
              onPressCD={this.InactiveCD}
              onPressDD={this.InactiveDD}
              onPressTCD={this.InactiveTCD}
            />
            <View style={syles.screen_contianer}>
              <ScreenHomeCD />
            </View>
          </View>
          <TouchableOpacity
            style={syles.plus_container}
            onPress={() =>
              this.props.navigation.navigate(ScreenName.ScreenRegisterOt)
            }>
            <View style={syles.Plus}>
              <Icon name="plus-thick" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.activeDD == true) {
      return (
        <View style={syles.container}>
          <AppHeader
            back
            onBackPress={() => this.props?.navigation?.goBack()}
            title
            textTittle={'Danh sách đăng ký vào ra'}
          />
          <View style={syles.from_container}>
            {/* tabbar */}
            <Tabregisteroutput
              //state
              style_stateCD={this.state.activeCD}
              style_stateDD={this.state.activeDD}
              style_stateTCD={this.state.activeTCD}
              //onpress
              onPressCD={this.InactiveCD}
              onPressDD={this.InactiveDD}
              onPressTCD={this.InactiveTCD}
            />
            <View style={syles.screen_contianer}>
              <ScreenHomeDD navigation={this.props.navigation} />
            </View>
          </View>
          <TouchableOpacity
            style={syles.plus_container}
            onPress={() =>
              this.props.navigation.navigate(ScreenName.ScreenRegisterOt)
            }>
            <View style={syles.Plus}>
              <Icon name="plus-thick" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={syles.container}>
          <AppHeader
            back
            onBackPress={() => this.props?.navigation?.goBack()}
            title
            textTittle={'Danh sách đăng ký vào ra'}
          />
          <View style={syles.from_container}>
            {/* tabbar */}
            <Tabregisteroutput
              //state
              style_stateCD={this.state.activeCD}
              style_stateDD={this.state.activeDD}
              style_stateTCD={this.state.activeTCD}
              //onpress
              onPressCD={this.InactiveCD}
              onPressDD={this.InactiveDD}
              onPressTCD={this.InactiveTCD}
            />
            <View style={syles.screen_contianer}>
              <ScreenHomeTCD />
            </View>
          </View>
          <TouchableOpacity
            style={syles.plus_container}
            onPress={() =>
              this.props.navigation.navigate(ScreenName.ScreenRegisterOt)
            }>
            <View style={syles.Plus}>
              <Icon name="plus-thick" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
const syles = StyleSheet.create({
  container: {
    flex: 1,
  },

  from_container: {
    flex: 1,
    backgroundColor: colors._color_white,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  screen_contianer: {
    flex: 1,
  },
  plus_container: {
    position: 'absolute',
    left: sizes._screen_width - 100,
    top: sizes._screen_height - 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes._82sdp,
    height: sizes._82sdp,
    backgroundColor: colors._color_white,
    borderRadius: sizes._41sdp,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  Plus: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes._73sdp,
    height: sizes._73sdp,
    borderColor: '#4D4B4B',
    borderWidth: sizes._10sdp,
    borderRadius: sizes._38sdp,
  },
});
