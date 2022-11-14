import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import sizes from '../../../res/sizes';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OrderDate from './OrderDate';
import {ScreenName} from '../../AppContainer';
interface Props {
  navigation: any;
  weeArr: any;
}
export default class Content extends Component<Props> {
  render(): JSX.Element {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.box}>
            <Image
              style={styles.iconMap}
              source={{
                uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-pin-map-graphic-icon-design-template-vector-illustration-png-image_1538447.jpg',
              }}
            />
            <TouchableOpacity
              style={styles.input}
              onPress={() =>
                this.props.navigation?.navigate(ScreenName.ChooseKitchen)
              }>
              <Text style={{fontSize: 15, fontWeight: '600', marginTop: 14}}>
                Bếp ăn Tập Đoàn
              </Text>
            </TouchableOpacity>
            <IconMaterialIcons
              name="east"
              size={27}
              style={styles.transition}
            />
          </View>

          <OrderDate
            navigation={this.props?.navigation}
            weeArr={this.props.weeArr}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 48,
    marginLeft: sizes._20sdp,
    marginRight: sizes._20sdp,
    marginTop: 15,
    marginBottom: 30,
    position: 'relative',
  },
  input: {
    fontWeight: '600',
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 128,
    paddingHorizontal: 50,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 10,
  },
  iconMap: {
    position: 'absolute',
    left: 10,
    top: 5,
    width: 34,
    height: 37,
    zIndex: 10,
  },
  transition: {
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.4,
  },
});
