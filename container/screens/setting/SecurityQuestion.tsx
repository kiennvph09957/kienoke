import React from "react";
import { Text, View } from "react-native";
import { styleApp } from "../../../common/styleApp";
import HeaderApp from '../../../components/HeaderApp';
import images  from  '../../../res/images';

interface Props {
    navigation: any;
  }
  
interface State {}


export default class SecurityQuestion extends React.Component<Props, State>{
    render(){
        return(
            <View style={{flex:1}}>
               <HeaderApp
                    title="Câu hỏi bảo mật"
                    iconLeft={images.ic_back}
                    onLeftPress={this.props.navigation.goBack}
               />
               <View style={styleApp.viewRoot}>

               </View>
           </View>
        )
    }
}