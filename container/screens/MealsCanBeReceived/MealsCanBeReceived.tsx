import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';
import ListMealsCanBeReceived from './ListMealsCanBeReceived';
import AppHeader from '../../../components/AppHeader';

interface Props {
  navigation?: any;
}
export default class MealsCanBeReceived extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader
          back
          onBackPress={() => this.props?.navigation?.goBack()}
          title
          textTittle="Suất ăn có thể nhận"
        />
        <View style={styles.checkcalader}>
          <ListMealsCanBeReceived navigation={this.props?.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    width: '100%',
    position: 'absolute',
    top: 0,
  },

  iconBack: {
    marginLeft: sizes._15sdp,
    marginTop: 25,
  },
  main: {
    backgroundColor: '#fff',
    height: '90%',
    marginTop: sizes._72sdp,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
  },
  iconheader: {
    marginTop: -70,
    marginLeft: sizes._7sdp,
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: sizes._27sdp,
    fontWeight: '600',
    marginLeft: sizes._7sdp,
    color: '#FFFFFF',
  },
  checkcalader: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
});
