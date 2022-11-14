import {View, StyleSheet} from 'react-native';
import React from 'react';
import TitleKeepings from './TitleKeepings';
import Clalendars from './Clalendars';
import sizes from '../res/sizes';
import ListKeeping from './ListKeeping';
interface State {}
interface Props {
  onPress: () => void;
  navigation: any;
}

export class BodyInfoKeeping extends React.Component<Props, State> {
  constructor(props: Props | any, state: State) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mContainer}>
        <View style={{flex: 5.5}}>
          <View style={styles.mTitle}>
            <TitleKeepings title="Công tháng 8"></TitleKeepings>
          </View>
          <Clalendars
            navigation={this.props.navigation}
            onPress={this.props.onPress}
          />
        </View>
        <View style={styles.mBody}>
          <ListKeeping
            titleName="Tổng ngày công thực tế:"
            title="22"
            style={{backgroundColor: '#0F5DD2', borderColor: '#0F5DD2'}}
          />
          <ListKeeping
            titleName="Công đã duyệt"
            title="21"
            style={{backgroundColor: '#108330', borderColor: '#108330'}}
          />
          <ListKeeping
            titleName="Công chưa duyệt"
            title="1"
            style={{backgroundColor: '#FE8515', borderColor: '#FE8515'}}
          />
          <ListKeeping
            titleName="Công bị từ chối"
            title="0"
            style={{backgroundColor: '#ED1C24', borderColor: '#ED1C24'}}
          />
          <ListKeeping
            titleName="Công duyệt muộn"
            title="0"
            style={{backgroundColor: '#676565', borderColor: '#676565'}}
          />
        </View>
      </View>
    );
  }
}

export default BodyInfoKeeping;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  mTitle: {
    marginHorizontal: sizes._16sdp,
    marginTop: sizes._12sdp,
  },
  mBody: {
    flex: 2,
    marginTop: sizes._12sdp,
  },
});
