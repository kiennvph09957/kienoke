import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import sizes from '../../../../res/sizes';
interface Props {}
interface State {
  dataSelect: any;
}

export default class ExaminationContents extends Component<Props, State> {
  state: State = {
    dataSelect: [
      {id: 1, name: 'Lâm sàng', status: true},
      {id: 2, name: 'Xét nghiệm', status: false},
      {id: 3, name: 'Chuẩn đoán', status: false},
      {id: 4, name: 'X Quang', status: false},
    ],
  };
  select = (id: any) => {
    for (let i = 0; i < this.state.dataSelect.length; i++) {
      if (this.state.dataSelect[i].id == id) {
        this.state.dataSelect[i].status = true;
      } else {
        this.state.dataSelect[i].status = false;
      }
      this.setState({dataSelect: this.state.dataSelect});
    }
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          Nội dung khám
        </Text>
        <FlatList
          data={this.state.dataSelect}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => this.select(item.id)}
              style={[
                index == 0 && styles.select1,
                item.status == true ? styles.activeSelect : styles.select,
                index == this.state.dataSelect.length - 1 && {marginRight: 0},
              ]}>
              <Text
                style={[
                  item.status == true && styles.textActive,
                  {fontSize: 18, fontWeight: '400'},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  select: {
    color: '#4D4B4B',
    marginHorizontal: sizes._20sdp,
    marginVertical: sizes._20sdp,
    borderWidth: 1,
    borderColor: '#4D4B4B',
    borderRadius: 20,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
  },
  select1: {
    marginLeft: 0,
  },
  activeSelect: {
    borderColor: '#ED1C24',
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: sizes._20sdp,
    marginVertical: sizes._20sdp,
    paddingHorizontal: sizes._25sdp,
    paddingVertical: sizes._10sdp,
  },
  textActive: {
    fontWeight: '800',
    color: '#000000',
    fontStyle: 'italic',
  },
});
