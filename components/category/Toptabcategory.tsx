import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExchangeItemsc from './ExchangeItemsc';
import InfomationItemsc from './InfomationItemsc';
import WorksItemsc from './WorksItemsc';
import UtilitiesItemsc from './UtilitiesItemsc';
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
  clicked4: any;
}

export default class Toptabcategory extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked1: true,
      clicked2: false,
      clicked3: false,
      clicked4: false,
    };
  }
  render() {
    return (
      <View style={styles.view_container}>
        <Tab.Navigator
          backBehavior="none"
          initialRouteName="ExchangeItemsc"
          initialLayout={{width: Dimensions.get('window').width}}
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarStyle: {
              elevation: 0,
            },

            swipeEnabled: false,
          }}>
          <Tab.Screen
            name="Trao đổi - Truyền thông"
            // component={ExchangeItemsc}
            children={() => (
              <ExchangeItemsc
                parmas={this.props.minus}
                navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: true});
                this.setState({clicked2: false});
                this.setState({clicked3: false});
                this.setState({clicked4: false});
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
            name="Công việc"
            children={(prams: any) => (
              <WorksItemsc
                parmas={this.props.minus}
                navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: false});
                this.setState({clicked2: true});
                this.setState({clicked3: false});
                this.setState({clicked4: false});
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
            name="Thông tin cá nhân"
            children={(prams: any) => (
              <InfomationItemsc
                parmas={this.props.minus}
                navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: false});
                this.setState({clicked2: false});
                this.setState({clicked3: true});
                this.setState({clicked4: false});
              },
            }}
            options={{
              tabBarLabelStyle: this.state.clicked3
                ? styles.text_active
                : styles.text,

              tabBarItemStyle: styles.container,
            }}
          />
          <Tab.Screen
            name="Tiện ích"
            children={(prams: any) => (
              <UtilitiesItemsc
                parmas={this.props.minus}
                navigation={this.props.navigationtab}
              />
            )}
            listeners={{
              tabPress: () => {
                this.setState({clicked1: false});
                this.setState({clicked2: false});
                this.setState({clicked3: false});
                this.setState({clicked4: true});
              },
            }}
            options={{
              tabBarLabelStyle: this.state.clicked4
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
    fontWeight: '700',
    fontSize: sizes._16sdp,
    width: sizes._165sdp,
    height: sizes._35sdp,
    justifyContent: 'space-around',
    color: '#AA011F',
    textAlignVertical: 'center',
    textAlign: 'center',
    textTransform: 'none',
    borderRadius: sizes._20sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#AA011F',
    marginBottom: sizes._10sdp,
  },
  text: {
    color: '#4D4B4B',
    fontWeight: '400',
    fontSize: sizes._16sdp,
    width: sizes._165sdp,
    height: sizes._35sdp,
    justifyContent: 'space-around',
    textAlignVertical: 'center',
    textTransform: 'none',
    textAlign: 'center',
    marginBottom: sizes._10sdp,
  },
  container: {
    backgroundColor: colors._color_white,
    width: sizes._185sdp,
    height: sizes._42sdp,
    marginBottom: sizes._12sdp,
  },
});
