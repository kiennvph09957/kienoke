import {Text, View} from 'react-native';
import React from 'react';

interface Props {
  title?: string | any;
  style?: any | string;
}
export class TitleCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={this.props.style}>{this.props.title}</Text>
      </View>
    );
  }
}

export default TitleCard;
