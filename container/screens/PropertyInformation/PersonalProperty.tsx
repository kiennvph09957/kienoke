import React from "react";
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Image, Modal, TextInput, TouchableOpacity } from "react-native";
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
    textTitle: {
        marginLeft: 20,
        color: "#000000",
        height: 43,
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 27
    },
    Text: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 27
    },
    TextBold: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 27,
        marginLeft: 20,
        color: "#000000",
        position: "absolute",
        fontSize: 18
    },

})

export default class PersonalProperty extends React.Component<Props, State>{
    render() {

        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Tài sản cá nhân"
                    iconLeft={images.ic_back}
                    onLeftPress={this.props.navigation.goBack}
                />
                <View style={styleApp.viewRoot}>
                    <SafeAreaView>
                        <ScrollView>
                            <View >
                                <Text
                                    style={style.textTitle}>
                                    Tổng tài sản (04)
                                </Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalPropertyDetail')}>
                                    <View>
                                        <Text
                                            style={style.TextBold}>
                                            x1
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Trang thiết bị văn phòng
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Máy in, photo copy, fax, scan:
                                        </Text>

                                        <View style={{ flexDirection: "row", marginLeft: 55, alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                                            <Text style={[style.Text, { color: "#000000", fontSize: 18 }]}>
                                                Máy in HP LaserJet  Pro  CP1525nw
                                            </Text>
                                            <Image source={images.arrow_right} style={{ width: 18, height: 18, right: 0 }} />
                                        </View>

                                        <View style={{ marginLeft: 70 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>. </Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#676565" }]}>Code:</Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#000000" }]}> 029118</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>.</Text>
                                                <Text style={{ fontSize: 18, color: "#676565", marginLeft: 5 }}>Serial:</Text>
                                                <Text style={{ fontSize: 18, color: "#000000" }}> CNCHH025276</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19, marginBottom: 20 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={style.Line}></View>
                                    </View>
                                </View>



                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalPropertyDetail')}>
                                    <View>
                                        <Text
                                            style={style.TextBold}>
                                            x1
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Trang thiết bị văn phòng
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Máy in, photo copy, fax, scan:
                                        </Text>

                                        <View style={{ flexDirection: "row", marginLeft: 55, alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                                            <Text style={[style.Text, { color: "#000000", fontSize: 18 }]}>
                                                Máy in HP LaserJet  Pro  CP1525nw
                                            </Text>
                                            <Image source={images.arrow_right} style={{ width: 18, height: 18, right: 0 }} />
                                        </View>

                                        <View style={{ marginLeft: 70 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>. </Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#676565" }]}>Code:</Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#000000" }]}> 029118</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>.</Text>
                                                <Text style={{ fontSize: 18, color: "#676565", marginLeft: 5 }}>Serial:</Text>
                                                <Text style={{ fontSize: 18, color: "#000000" }}> CNCHH025276</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19, marginBottom: 20 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={style.Line}></View>
                                    </View>
                                </View>


                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalPropertyDetail')}>
                                    <View>
                                        <Text
                                            style={style.TextBold}>
                                            x1
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Trang thiết bị văn phòng
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Máy in, photo copy, fax, scan:
                                        </Text>

                                        <View style={{ flexDirection: "row", marginLeft: 55, alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                                            <Text style={[style.Text, { color: "#000000", fontSize: 18 }]}>
                                                Máy in HP LaserJet  Pro  CP1525nw
                                            </Text>
                                            <Image source={images.arrow_right} style={{ width: 18, height: 18, right: 0 }} />
                                        </View>

                                        <View style={{ marginLeft: 70 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>. </Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#676565" }]}>Code:</Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#000000" }]}> 029118</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>.</Text>
                                                <Text style={{ fontSize: 18, color: "#676565", marginLeft: 5 }}>Serial:</Text>
                                                <Text style={{ fontSize: 18, color: "#000000" }}> CNCHH025276</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19, marginBottom: 20 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={style.Line}></View>
                                    </View>
                                </View>


                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalPropertyDetail')}>
                                    <View>
                                        <Text
                                            style={style.TextBold}>
                                            x1
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Trang thiết bị văn phòng
                                        </Text>
                                        <Text style={[style.Text, { marginLeft: 55, color: "#676565", fontSize: 18 }]}>
                                            Máy in, photo copy, fax, scan:
                                        </Text>

                                        <View style={{ flexDirection: "row", marginLeft: 55, alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                                            <Text style={[style.Text, { color: "#000000", fontSize: 18 }]}>
                                                Máy in HP LaserJet  Pro  CP1525nw
                                            </Text>
                                            <Image source={images.arrow_right} style={{ width: 18, height: 18, right: 0 }} />
                                        </View>

                                        <View style={{ marginLeft: 70 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>. </Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#676565" }]}>Code:</Text>
                                                <Text style={[style.Text, { fontSize: 18, color: "#000000" }]}> 029118</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={[style.Text, { fontSize: 32, color: "#000000", marginTop: -4 }]}>.</Text>
                                                <Text style={{ fontSize: 18, color: "#676565", marginLeft: 5 }}>Serial:</Text>
                                                <Text style={{ fontSize: 18, color: "#000000" }}> CNCHH025276</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}