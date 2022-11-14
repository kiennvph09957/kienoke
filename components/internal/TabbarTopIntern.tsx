import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import NewsIntern from '../../container/screens/internal/screensIntern/NewsIntern';
import SaveIntern from '../../container/screens/internal/screensIntern/SaveIntern';
import ApplyIntern from '../../container/screens/internal/screensIntern/ApplyIntern';

import {Dimensions, StyleSheet, View} from 'react-native';
import sizes from '../../res/sizes';
import colors from '../../res/colors';
const Tab = createMaterialTopTabNavigator();

interface Props {
  minus?: any;
  navigationtab?: any;
}

interface State {
  clicked1: any;
  clicked2: any;
  clicked3: any;
}

export default class TabbarTopIntern extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked1: true,
      clicked2: false,
      clicked3: false,
    };
  }
  render() {
    return (
      <View style={styles.view_container}>
        <Tab.Navigator
          backBehavior="none"
          initialRouteName="NewsIntern"
          initialLayout={{width: Dimensions.get('window').width}}
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarStyle: {
              elevation: 0,
            },

            swipeEnabled: false,
          }}>
          <Tab.Screen
            name="Tin tuyển dụng"
            children={() => (
              <NewsIntern
                // parmas={this.props.minus}
                navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: true});
                this.setState({clicked2: false});
                this.setState({clicked3: false});
              },
            }}
            options={{
              tabBarLabelStyle: this.state.clicked1
                ? styles.text_active
                : styles.text,

              tabBarItemStyle: styles.container,
            }}
          />
          <Tab.Screen
            name="Đã lưu"
            children={(prams: any) => (
              <SaveIntern navigation={this.props.navigationtab} />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: false});
                this.setState({clicked2: true});
                this.setState({clicked3: false});
              },
            }}
            options={{
              tabBarLabelStyle: this.state.clicked2
                ? styles.text_active
                : styles.text,

              tabBarItemStyle: styles.container,
            }}
          />
          <Tab.Screen
            name="Đã ứng tuyển"
            children={(prams: any) => (
              <ApplyIntern
              // navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: false});
                this.setState({clicked2: false});
                this.setState({clicked3: true});
              },
            }}
            options={{
              tabBarLabelStyle: this.state.clicked3
                ? styles.text_active
                : styles.text,

              tabBarItemStyle: styles.container,
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view_container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors._color_white,
  },
  text_active: {
    fontWeight: '600',
    fontSize: sizes._19sdp,
    width: sizes._140sdp,
    height: sizes._35sdp,
    justifyContent: 'space-around',
    color: '#000000',
    textAlignVertical: 'center',
    textAlign: 'center',
    textTransform: 'none',
    borderRadius: sizes._20sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#ED1C24',
    marginBottom: sizes._10sdp,
  },
  text: {
    color: '#4D4B4B',
    fontWeight: '400',
    fontSize: sizes._19sdp,
    width: sizes._140sdp,
    height: sizes._35sdp,
    justifyContent: 'space-around',
    textAlignVertical: 'center',
    textTransform: 'none',
    textAlign: 'center',
    borderRadius: sizes._20sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#4D4B4B',
    marginBottom: sizes._10sdp,
  },
  container: {
    backgroundColor: colors._color_white,
    width: sizes._160sdp,
    height: sizes._42sdp,
    marginBottom: sizes._12sdp,
  },
});
