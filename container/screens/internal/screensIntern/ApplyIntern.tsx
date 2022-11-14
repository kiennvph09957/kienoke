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

export default class ApplyIntern extends Component<Props, State> {
  didFocusSub: any;
  constructor(props: any) {
    super(props);

    this.state = {
      storedValue: '',
    };
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

  render() {
    this.getData();
    return (
      <View style={styles.container}>
        <ItemSaveAPP
          title={this.state.storedValue.title}
          slary={this.state.storedValue.slary}
          date={this.state.storedValue.date}
          direction={this.state.storedValue.direction}
          navigation={() =>
            this.props.navigation.navigate(ScreenName.InformationIntern, {
              params: this.state.storedValue,
            })
          }
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
