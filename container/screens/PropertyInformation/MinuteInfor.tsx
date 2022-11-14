import React from "react";
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { styleApp } from "../../../common/styleApp";
import HeaderApp from "../../../components/HeaderApp";
import images from "../../../res/images";
interface Props {
    navigation: any
}
interface State { }

const style = StyleSheet.create({
    Line: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#B0B0B0"
    },
    Text: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 27
    },
    TextButton: {
        color: "#FFFFFF",
        fontFamily: "FS Magistral",
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "500"
    },
    Border: {
        alignItems: "center",
        marginTop: 20,
        borderWidth: 0,
        width: "40%",
        borderRadius: 30,
        height: 48,
        justifyContent: "center",
        backgroundColor: "#676565",
        padding:10,
        marginLeft:"30%",
        marginBottom:30
    }
})
export default class MinuteInfor extends React.Component<Props, State>{
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Thông tin biên bản"
                    iconLeft={images.ic_back}
                    iconRight={images.eyes}
                    onLeftPress={this.props.navigation.goBack}
                />
                <View style={styleApp.viewRoot}>
                    <ScrollView>
                        <View style={{ marginLeft: "5%", marginRight: "5%" }}>
                            <Text style={[style.Text, { color: "#000000" }]}>BBBGG_TSCN_VTGG_TTGPP_HCC/14/000408</Text>
                            <View style={{ marginTop: 10, flexDirection: "row" }}>
                                <Image source={images.book} style={{ width: 24, height: 24 }} />
                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>Bàn giao tài sản</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: "row" }}>
                                <Image source={images.admin} style={{ width: 24, height: 24 }} />
                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>Đơn vị bàn giao</Text>
                            </View>
                            <View style={{ width: "100%", marginTop: 19 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={style.Line}></View>
                                </View>
                            </View>
                            <Text style={[style.Text, { marginTop: 20, color: "#000000" }]}>Danh sách chi tiết biên bản</Text>
                            <View style={{ marginTop: 17 }}>
                                <Image source={images.banner} />
                                <Text style={[style.Text, { width: 350, color: "#000000" }]}>Biên chưa có  tài sản. Bạn vui lòng quay lại trang chủ.</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PropertyInfor')}>
                                <View style={style.Border}>
                                    <Text style={style.TextButton}>Trang chủ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>

        )
    }
}