import {StatusBar, Text, View, Modal} from 'react-native';
import React from 'react';
import colors from '../../../res/colors';
import HeaderKeeping from '../../../components/HeaderKeeping';
import BodyInfoKeeping from '../../../components/BodyInfoKeeping';
import BottomSheetKeeping from '../../../components/BottomSheetKeeping';
import BottomSheetCancelKeeping from '../../../components/BottomSheetCancelKeeping';

import sizes from '../../../res/sizes';
import AppHeader from '../../../components/AppHeader';

interface Props {
  navigation: any;
}
interface State {
  // windowHeight?: any;
  hiddenItem: boolean | any | string;
}
export class InfoTimekeeping extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);

    this.state = {
      // windowHeight: 0.00000000000000000000000001,
      hiddenItem: false,
    };
  }

  // callbackFunction = (childData: any) => {
  //   this.setState({windowHeight: childData});
  // };

  handlerOnPressDay = () => {
    // this.setState({hiddenItem: !this.state.hiddenItem});
    this.setState({hiddenItem: false});
    // this.setState({windowHeight: 0.00000000000000000000000001});
    //this.setState({backgroundColor: colors._color_white_black});
    // console.log("hyyty");
  };

  handlerOnPressDay_ = () => {
    this.setState({hiddenItem: true});
    // this.setState({windowHeight: sizes._350sdp});
    //this.setState({backgroundColor: 'rgba(0, 0, 0, 0.68)'});
  };

  render() {
    // console.log(this.state.windowHeight);
    // console.log(this.state.hiddenItem);

    return (
      <View
        style={{
          flex: 1,
        }}>
        <AppHeader
          back
          title
          textTittle="Quản lý chấm công"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            flex: 1,
          }}>
          <BodyInfoKeeping
            navigation={this.props.navigation}
            onPress={this.handlerOnPressDay_}
          />
        </View>
        <View>
          <BottomSheetCancelKeeping
            onPress={this.handlerOnPressDay}
            // initialSnapIndex={0}
            // windowHeight_={this.state.windowHeight}
            isShow={this.state.hiddenItem}
            onPressOut={() => {
              this.setState({hiddenItem: false});
            }}
          />
        </View>
        {/* <View>
          {this.state.hiddenItem && (
            <BottomSheetKeeping
              onPress={this.handlerOnPressDay}
              // initialSnapIndex={0}
              isShow={this.state.hiddenItem}
            />
          )}
        </View> */}
      </View>
    );
  }
}

export default InfoTimekeeping;
