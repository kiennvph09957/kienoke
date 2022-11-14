import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";

import images from "../../../res/images";
import sizes from "../../../res/sizes";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderApp from "../../../components/HeaderApp";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryStack } from "victory-native";

interface Props {
    navigation: any
}


interface State { }

const style = StyleSheet.create({
    TextTitle: {
        color: "#4D4B4B",
        lineHeight: 25,
        fontSize: 18,
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "700",
        marginLeft: 16
    },
    Text: {
        fontFamily: "FS PF BeauSans Pro",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 26
    },
    viewRoot: {
        flex: 1,
        marginTop: -sizes._80sdp,
        paddingTop: sizes._24sdp,
        borderTopStartRadius: sizes._20sdp,
        borderTopEndRadius: sizes._20sdp,
        backgroundColor: "#FFFFFF",
    },
    BackGroundRadius: {
        marginLeft: 16,
        marginRight: 22,
        borderRadius: 10
    },
    InputTouch: {
        flexDirection: "row",
        alignItems: "center",
        top: -32
    },
    TextInput: {
        fontSize: 50,
        fontWeight: "400",
        position: "absolute",
        color: "#44494D",
        marginLeft: 15
    },
    Icon: {
        position: "absolute",
        right: "5%",
        top: -13
    },
    ImageAbsolute: {
        position: "absolute",
        width: "80%",
        marginLeft: 10,
        top: -10
    },
    Row: {
        marginTop: 15,
        marginLeft: 19,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default class SalaryInfomation extends React.Component<Props, State>{
    state = {
        hiden: false
    }
    render() {
        const data = {
            planned: [
                { x: '06/2021', y: 10 },
                { x: '07/2021', y: 12.5 },
                { x: '08/2021', y: 12.5 },
                { x: '09/2021', y: 16.5 }
            ],
            actual: [
                { x: '06/2021', y: 3 },
                { x: '07/2021', y: 5.5 },
                { x: '08/2021', y: 4.5 },
                { x: '09/2021', y: 5 }
            ],
            ac: [
                { x: '06/2021', y: 10 },
                { x: '07/2021', y: 0 },
                { x: '08/2021', y: 6.5 },
                { x: '09/2021', y: 2.5 }
            ]
        }
        return (

            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Thông tin Lương"
                    iconLeft={images.ic_back}
                    onLeftPress={this.props.navigation.goBack}
                />
                <View style={style.viewRoot}>
                    <SafeAreaView>
                        <ScrollView style={{ marginTop: 15 }}>
                            <Text style={style.TextTitle}>Thông tin lương tháng 7/2021</Text>
                            <View style={style.BackGroundRadius}>
                                <View style={{ marginLeft: 18, marginTop: 15 }}>
                                    <Text style={style.Text}>Thu nhập thực nhận (VNĐ)</Text>
                                    <View style={{ marginBottom: 14, marginTop: 5 }}>
                                        <Image source={images.input} style={{ width: "100%", resizeMode: "stretch" }} />

                                        {
                                            this.state.hiden ? (
                                                <View>
                                                    <TouchableOpacity style={style.InputTouch} onPress={() => this.setState({ hiden: false })} >
                                                        <Text style={style.TextInput}>18.986.000</Text>
                                                        <Icon name="eye-off" size={24} color={"#44494D"} style={style.Icon} />
                                                    </TouchableOpacity>
                                                </View>
                                            ) : <View>
                                                <TouchableOpacity style={style.InputTouch} onPress={() => this.setState({ hiden: true })} >
                                                    <Image source={images.pass} style={style.ImageAbsolute} />

                                                    <Image source={images.eye_black} style={{ position: "absolute", top: -13, right: "5%" }} />
                                                </TouchableOpacity>

                                            </View>
                                        }
                                    </View>
                                    <Text style={style.Text}>Thông số:</Text>
                                    {
                                        this.state.hiden ? (
                                            <View>
                                                <View>
                                                    <View style={style.Row}>
                                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                            <Image source={images.ellipse1} />
                                                            <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Lương kỳ 1</Text>
                                                        </View>
                                                        <Text style={[style.Text, { fontSize: 18 }]}>12.800.000</Text>
                                                    </View>
                                                    <View style={style.Row}>
                                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                            <Image source={images.ellipse2} />
                                                            <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Lương SXKD</Text>
                                                        </View>
                                                        <Text style={[style.Text, { fontSize: 18 }]}>6.186.000</Text>
                                                    </View>
                                                    <View style={[style.Row, { marginBottom: 12 }]}>
                                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                            <Image source={images.ellipse3} />
                                                            <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Thu nhập khác</Text>
                                                        </View>
                                                        <Text style={[style.Text, { fontSize: 18 }]}>0</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        ) : <View>
                                            <View>
                                                <View style={style.Row}>
                                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <Image source={images.ellipse1} />
                                                        <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Lương kỳ 1</Text>
                                                    </View>
                                                    <Text style={[style.Text, { fontSize: 18 }]}>********</Text>
                                                </View>
                                                <View style={style.Row}>
                                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <Image source={images.ellipse2} />
                                                        <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Lương SXKD</Text>
                                                    </View>
                                                    <Text style={[style.Text, { fontSize: 18 }]}>********</Text>
                                                </View>
                                                <View style={[style.Row, { marginBottom: 12 }]}>
                                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <Image source={images.ellipse3} />
                                                        <Text style={[style.Text, { fontSize: 18, left: 10 }]}>Thu nhập khác</Text>
                                                    </View>
                                                    <Text style={[style.Text, { fontSize: 18 }]}>********</Text>
                                                </View>

                                            </View>
                                        </View>
                                    }
                                </View>
                            </View>
                            <Text style={[style.TextTitle, { marginTop: 20 }]}>Thống kê</Text>
                            <Image source={images.text} style={{ top: 394, position: "absolute", left: "10%", width: "80%" }} />
                            <View style={{ position: "absolute", top: 355, left: "3%" }}>
                                <Text style={{ marginTop: 20 }}>Triệu (VNĐ)</Text>
                                <Text style={{ marginTop: 8 }}>20</Text>
                                <Text style={{ marginTop: 28 }}>15</Text>
                                <Text style={{ marginTop: 32 }}>10</Text>
                                <Text style={{ marginTop: 30 }}>5</Text>
                                <Text style={{ marginTop: 28 }}>0</Text>
                                <View style={{ top: 50 }}>
                            </View>
                            </View>
                            <View style={{ marginLeft:5,marginRight:20 }}>
                                <VictoryChart domainPadding={10}>
                                    <VictoryAxis
                                        tickValues={["06/2021", "07/2021", "08/2021", "09/2021"]}
                                    />
                                    <VictoryGroup offset={20}>
                                        <VictoryGroup>
                                            <VictoryStack>
                                                <VictoryBar data={data.planned}
                                                    style={{
                                                        data: {
                                                            fill: "#939598",
                                                            width: 11
                                                        }
                                                    }}
                                                />
                                                <VictoryBar data={data.actual} style={{
                                                    data: {
                                                        fill: "#4D4B4B",
                                                        width: 11
                                                    }
                                                }} />
                                            </VictoryStack>
                                        </VictoryGroup>

                                        <VictoryBar data={data.ac} style={{
                                            data: {
                                                fill: "#0BA7AF",
                                                width: 11
                                            }
                                        }} />


                                    </VictoryGroup>
                                </VictoryChart>
                            </View>
                            <View style={{position:"absolute",bottom:22,left:"2%"}}>
                                <TouchableOpacity>
                                    <Image source={images.arrow_back} />
                                </TouchableOpacity>
                            </View>
                            <View style={{position:"absolute",bottom:24,right:"2%"}}>
                                <TouchableOpacity>
                                    <Image source={images.arrow_right} />
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}









