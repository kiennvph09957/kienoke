import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../res/sizes';

interface Props {
  navigation?: any;
  dataUser: any;
}
export default class ListMealRecipient extends Component<Props> {
  render() {
    return (
      <View style={{marginTop: 10}}>
        {this.props.dataUser.length > 0 ? (
          this.props.dataUser.map((item: any) => {
            return (
              <View>
                <View style={styles.displayFlex}>
                  <View style={styles.displayFlex}>
                    <View style={styles.today}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${item.avatar}`,
                        }}
                      />
                    </View>

                    <View>
                      <Text style={styles.textLunch}>{item.name}</Text>
                      <Text style={{marginHorizontal: sizes._10sdp}}>
                        Số suất: 1
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.gotMore}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '400',
                      }}>
                      Nhắn tin
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.2,
                    opacity: 0.2,
                    marginVertical: 10,
                  }}></View>
              </View>
            );
          })
        ) : (
          <Text>Chưa có người nhận</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    backgroundColor: '#F8455B',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
  },

  textLunch: {
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: sizes._10sdp,
    marginVertical: sizes._10sdp,
    fontFamily: 'vincHand',
    textTransform: 'capitalize',
  },
  gotMore: {
    borderRadius: 20,
    backgroundColor: '#D20B2E',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: -10,
  },
  today: {
    borderRadius: 20,
    padding: 5,
  },
});
