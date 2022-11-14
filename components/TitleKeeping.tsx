import {Text, View} from 'react-native';
import React from 'react';
import sizes from '../res/sizes';
interface Props {
  title?: string | any;
}

export class TitleKeeping extends React.Component<Props> {
  constructor(props: Props | any) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: sizes._20sdp,
            color: '#fff',
            lineHeight: sizes._27sdp,
            fontStyle: 'normal',
            fontWeight: '400',
          }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default TitleKeeping;
