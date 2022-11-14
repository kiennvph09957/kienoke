import React, {Component} from 'react';
import {Checkbox} from 'react-native-paper';

interface Props {}
interface State {
  checkeds: any | boolean;
}

export default class checkboxcomponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkeds: true,
    };
  }

  render() {
    console.log(this.state.checkeds);
    return (
  
        <Checkbox
          color="#000"
          status={this.state.checkeds ? 'unchecked' : 'checked'}
          onPress={() => {
            this.state.checkeds
              ? this.setState({checkeds: false})
              : this.setState({checkeds: true});
          }}
        />
    
    );
  }
}
