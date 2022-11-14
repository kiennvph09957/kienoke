import {Text, View} from 'react-native';
import React, {Component} from 'react';
import TitleKeeping from './TitleKeeping';
import IconBack from './IconBack';
import sizes from '../res/sizes';
import colors from '../res/colors';
import RadialgradientInfo from '../components/RadialgradientInfo';
interface Props {
  titleHeader: string | any;
  navigation: string | any;
}
export class HeaderKeeping extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          // flex: 1,
          height: '20%',
          backgroundColor: '#fff',
          // borderTopLeftRadius: sizes._20sdp,
          // borderTopRightRadius: sizes._20sdp,
        }}>
        <RadialgradientInfo />
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 11,
            marginTop: sizes._55sdp,
            position: 'absolute',
          }}>
          <IconBack
            onPress={() => this.props.navigation.goBack()}
            name="left"
            color="#fff"
            size={24}
          />
          <View style={{position: 'absolute', left: 34, top: 0, bottom: 0}}>
            <TitleKeeping title={this.props.titleHeader} />
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderKeeping;
