import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {List} from 'react-native-paper';
import sizes from '../../../../res/sizes';
import images from '../../../../res/images';
interface State {
  expanded: any;
}
interface Props {}
export default class ListItem extends Component<Props, State> {
  state: State = {
    expanded: true,
  };
  handlePress = () => {
    this.setState({expanded: !this.state.expanded});
  };
  render() {
    const data = [
      {id: 1, name: 'Khám thể lực chung '},
      {id: 2, name: 'Khám nội'},
      {id: 3, name: 'Khám ngoại '},
      {id: 4, name: 'Khám mắt '},
      {id: 5, name: 'Khám răng hàm mặt '},
      {id: 6, name: 'Khám tai mũi họng '},
      {id: 7, name: 'Khám phụ khoa - vú Khám da liễu  '},
    ];
    return (
      <View style={{marginTop: 20}}>
        {data.map((item: any, index: any) => (
          <List.Section style={{padding: 0, margin: 0}}>
            <List.Accordion
              style={{backgroundColor: '#fff', padding: 0, margin: -10}}
              title={item.name}
              left={() => <Image source={images.Ellipse111} />}>
              <List.Item
                style={{marginLeft: -sizes._60sdp, marginTop: sizes._10sdp}}
                title="First item"
              />
            </List.Accordion>
            <View style={styles.hr}></View>
          </List.Section>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hr: {
    borderWidth: 0.5,
    borderColor: 'rgb(243, 243, 243)',
    marginVertical: sizes._20sdp,
  },
});
