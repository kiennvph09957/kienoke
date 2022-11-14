import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HeaderApp from "../../../components/HeaderApp";
import images from "../../../res/images";
import { styleApp } from '../../../common/styleApp';
import { TouchableOpacity } from "@gorhom/bottom-sheet";

interface Props {
    navigation: any
}

interface State { }

const style = StyleSheet.create({
    WithTitle: {
        height: 650
    },
    Option: {
        width: 168,
        height: 120,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: "#DADADA"
    },
    Image: {
        width: 24,
        height: 24,
        resizeMode: "cover",
        marginTop: 16,
        marginLeft: 127

    },
    TextMunber: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        position: "absolute",
        fontWeight: "700",
        lineHeight: 27,
        color: "#D20B2E",
        fontSize: 46,
        marginTop: 32,
        paddingTop: 20,
        marginLeft: 17
    },
    Text: {
        marginLeft: 17,
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 27,
        color: "#000000",
        position: "absolute",
        marginTop: 81
    }
})

export default class PropertyInfor extends React.Component<Props, State>{
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Thông tin tài sản"
                    iconLeft={images.ic_back}
                    onLeftPress={this.props.navigation.goBack}
                />
                <View style={styleApp.viewRoot}>
                    <View style={style.WithTitle}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: "2%", marginLeft: "2%" }}>
                            <TouchableOpacity style={style.Option}
                                onPress={() => this.props.navigation.navigate('PersonalProperty')}
                            >

                                <View>
                                    <Image
                                        source={images.computer_1}
                                        style={style.Image}
                                    />
                                    <Text
                                        style=
                                        {style.TextMunber}>
                                        04
                                    </Text>
                                    <Text
                                        style={style.Text}>
                                        Tài sản cá nhân
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.Option}
                                onPress={() => this.props.navigation.navigate('DeliveryRecords')}
                            >
                                <View>
                                    <Image
                                        source={images.file_1}
                                        style={style.Image}
                                    />
                                    <Text
                                        style={style.TextMunber}>
                                        11
                                    </Text>
                                    <Text
                                        style={style.Text}>
                                        Biên bản bàn giao
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </View>

        )
    }
}