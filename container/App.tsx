import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';
import store from './Reducers/Store';
import PopupAlertBase from '../components/PopupAlertBase';

export var PopupEvent: PopupAlertBase;

class App extends Component {
  ////
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'light-content'}
        />
        {/* <Provider store={store}> */}
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
        <PopupAlertBase
          ref={(ref: PopupAlertBase) => {
            if (ref) {
              PopupEvent = ref;
            }
          }}
        />
        {/* </Provider> */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
