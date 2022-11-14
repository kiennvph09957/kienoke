import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ItemSaveAPP from '../../../../components/internal/ItemSaveAPP';
import {ScreenName} from '../../../AppContainer';

interface Props {
  navigation?: any;
}

interface State {
  storedValue: any;
}

export default class SaveIntern extends Component<Props, State> {
  didFocusSubscription: any;
  constructor(props: any) {
    super(props);

    this.state = {
      storedValue: '',
    };
  }

  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      (payload: any) => {
        console.warn('didFocus ', payload);
        this.getData();
      },
    );
  }
  getData = async () => {
    try {
      const jsonValue: any = await AsyncStorage.getItem('@storage_Key');
      const params = JSON.parse(jsonValue);
      this.setState({storedValue: params.value});
    } catch (e) {
      // error reading value
    }
  };
  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }
  render() {
    this.getData();
    return (
      <View style={styles.container}>
        <ItemSaveAPP
          title={this.state.storedValue.title}
          slary={this.state.storedValue.slary}
          date={this.state.storedValue.date}
          direction={this.state.storedValue.direction}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
