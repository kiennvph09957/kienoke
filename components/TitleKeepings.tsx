import {Text, View} from 'react-native';
import React from 'react';

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
            fontSize: 18,
            color: '#4D4B4B',
            lineHeight: 27,
            fontStyle: 'normal',
            fontWeight: '700',
          }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default TitleKeeping;
