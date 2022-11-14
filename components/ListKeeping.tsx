import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextPublicityKeeping from './TextPublicityKeeping';
import Dots from './Dots';
import sizes from '../res/sizes';

type Props = {
  style: any;
  title?: string | any;
  titleName?: string | any;
};

type State = {};

export class ListKeeping extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          marginVertical: sizes._6sdp,
        }}>
        <Dots
          style={[
            this.props.style,
            {
              //   backgroundColor: '#0F5DD2',
              width: 11,
              height: 11,
              //   borderColor: '#0F5DD2',
              borderRadius: sizes._11sdp,
              marginLeft: sizes._29sdp,
              marginTop: 6,
            },
          ]}></Dots>
        <Text
          style={{
            fontSize: sizes._18sdp,
            color: '#4D4B4B',
            // lineHeight: 27,
            fontStyle: 'normal',
            fontWeight: '400',
            marginLeft: sizes._16sdp,
          }}>
          {this.props.titleName}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: sizes._94sdp,
          }}>
          <TextPublicityKeeping title={this.props.title} />
        </View>
      </View>
    );
  }
}

export default ListKeeping;
