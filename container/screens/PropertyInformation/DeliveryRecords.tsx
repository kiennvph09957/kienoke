import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { styleApp } from "../../../common/styleApp";
import HeaderApp from "../../../components/HeaderApp";
import TextLabel from "../../../components/home/TextLabel";
import images from "../../../res/images";
import sizes from "../../../res/sizes";
interface Props {
    navigation: any
}

interface State { }

const option = {
    HANDEDOVER: 'handedover',
    CONFIRMED: 'confirmed',
    REFUSED: 'refused'
}

const style = StyleSheet.create({
    saleActive: {
        paddingHorizontal: 22,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#ED1C24",
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSaleDisabled: {
        color: "#4D4B4B",
        fontWeight: '400',
        fontSize: sizes._font_size_large,
    },
    saleDisabled: {
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
        borderColor: "#929292",
        borderWidth: 1,
        borderRadius: 20,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSaleActive: {
        color: "#000000",
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24
    },
    Line: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#B0B0B0"
    },
    LineRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TextHandedover: {
        color: "#000000",
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 27
    },
    BoderButton: {
        alignItems: "center",
        marginTop: 20,
        borderWidth: 0,
        width: 160,
        borderRadius: 30,
        height: 48,
        justifyContent: "center",
        marginLeft: "30%",
        backgroundColor: "#676565"
    },
    TextBorder: {
        color: "#FFFFFF",
        fontFamily: "FS Magistral",
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "500"
    },
    TextTitle: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 27,
        color: "#000000"
    },
    TextBold: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 27,
        color: "#000000"
    },
    Text: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 27
    }
})

export default class DeliveryRecords extends React.Component<Props, State>{
    state = {
        activeTurnover: 'service',
        saleActive: option.HANDEDOVER,
        shouldShow1: false,
        shouldShow2: false,
        shouldShow3: false
    }
    changeSaleActive = (val: string) => {
        this.setState({ saleActive: val });
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Bi??n b???n b??n giao t??i s???n"
                    iconLeft={images.ic_back}
                    iconRight={images.search_1}
                    onLeftPress={this.props.navigation.goBack}
                />

                <View style={styleApp.viewRoot}>
                    <View style={[style.LineRow, {marginLeft:20, marginRight: 40 }]}>
                        <TextLabel
                            style={
                                this.state.saleActive === option.HANDEDOVER
                                    ? style.saleActive
                                    : style.saleDisabled
                            }
                            textStyle={
                                this.state.saleActive === option.HANDEDOVER
                                    ? style.textSaleActive
                                    : style.textSaleDisabled
                            }
                            text="??ang b??n giao"
                            onPress={() => this.changeSaleActive(option.HANDEDOVER)}
                        />
                        <TextLabel
                            style={
                                this.state.saleActive === option.CONFIRMED
                                    ? style.saleActive
                                    : style.saleDisabled
                            }
                            textStyle={
                                this.state.saleActive === option.CONFIRMED
                                    ? style.textSaleActive
                                    : style.textSaleDisabled
                            }
                            text="???? x??c nh???n"
                            onPress={() => this.changeSaleActive(option.CONFIRMED)}
                        />
                        <TextLabel
                            style={
                                this.state.saleActive === option.REFUSED
                                    ? style.saleActive
                                    : style.saleDisabled
                            }
                            textStyle={
                                this.state.saleActive === option.REFUSED
                                    ? style.textSaleActive
                                    : style.textSaleDisabled
                            }
                            text="???? t??? ch???i"
                            onPress={() => this.changeSaleActive(option.REFUSED)}
                        />
                    </View>
                    <SafeAreaView>
                        <ScrollView>
                            <View>
                                {
                                    (this.state.saleActive === option.HANDEDOVER) ? (
                                        <View>
                                            <View style={{ marginLeft: "5%", marginTop: 17, marginRight: "5%" }}>
                                                <Image source={images.banner} />
                                                <Text style={style.TextHandedover}>
                                                    B???n kh??ng c?? bi??n b???n n??o ??ang th???c hi???n b??n giao. Vui pl??ng quay  l???i trang ch???.
                                                </Text>
                                            </View>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PropertyInfor')}>
                                                <View style={style.BoderButton}>
                                                    <Text style={style.TextBorder}>Trang ch???</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (this.state.saleActive === option.CONFIRMED) ? (
                                        <View >
                                            <ScrollView>
                                                <View style={{ marginTop: 16, marginLeft: "5%" }}>
                                                    <Text style={style.TextTitle}>T???ng bi??n b???n ???? x??c nh???n (11)</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MinuteInfor')}>
                                                        <Text style={style.TextBold}>BBBGG_TSCN_VTGG_TTGPP_HCC/14/000408</Text>
                                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                                            <Image source={images.confirm_1} />
                                                            <Text style={[style.Text, { color: "#00733B",marginLeft:8 }]}>???? x??c nh???n</Text>
                                                        </View>

                                                        <View style={[style.LineRow, { alignItems: "center", marginRight: "5%" }]}>
                                                            <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={images.event} style={{ width: 24, height: 24 }} />
                                                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>12//12/2012</Text>
                                                            </View>
                                                            <Image source={images.arrow_right} style={{ width: 18, height: 18 }} />
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.book} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>B??n giao t??i s???n</Text>
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.admin} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>????n v??? b??n giao</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>


                                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <View style={style.Line}></View>
                                                    </View>
                                                </View>

                                                <View style={{ marginTop: 16, marginLeft: "5%" }}>
                                                    <Text style={style.TextTitle}>T???ng bi??n b???n ???? x??c nh???n (11)</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MinuteInfor')}>
                                                        <Text style={style.TextBold}>BBBGG_TSCN_VTGG_TTGPP_HCC/14/000408</Text>
                                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                                            <Image source={images.confirm_1} />
                                                            <Text style={[style.Text, { color: "#00733B",marginLeft:8 }]}>???? x??c nh???n</Text>
                                                        </View>

                                                        <View style={[style.LineRow, { alignItems: "center", marginRight: "5%" }]}>
                                                            <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={images.event} style={{ width: 24, height: 24 }} />
                                                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>12//12/2012</Text>
                                                            </View>
                                                            <Image source={images.arrow_right} style={{ width: 18, height: 18 }} />
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.book} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>B??n giao t??i s???n</Text>
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.admin} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>????n v??? b??n giao</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>


                                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <View style={style.Line}></View>
                                                    </View>
                                                </View>

                                                <View style={{ marginTop: 16, marginLeft: "5%" }}>
                                                    <Text style={style.TextTitle}>T???ng bi??n b???n ???? x??c nh???n (11)</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MinuteInfor')}>
                                                        <Text style={style.TextBold}>BBBGG_TSCN_VTGG_TTGPP_HCC/14/000408</Text>
                                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                                            <Image source={images.confirm_1} />
                                                            <Text style={[style.Text, { color: "#00733B",marginLeft:8 }]}>???? x??c nh???n</Text>
                                                        </View>

                                                        <View style={[style.LineRow, { alignItems: "center", marginRight: "5%" }]}>
                                                            <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={images.event} style={{ width: 24, height: 24 }} />
                                                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>12//12/2012</Text>
                                                            </View>
                                                            <Image source={images.arrow_right} style={{ width: 18, height: 18 }} />
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.book} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>B??n giao t??i s???n</Text>
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.admin} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>????n v??? b??n giao</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>


                                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 19 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <View style={style.Line}></View>
                                                    </View>
                                                </View>

                                                <View style={{ marginTop: 16, marginLeft: "5%", marginBottom: 40 }}>
                                                    <Text style={style.TextTitle}>T???ng bi??n b???n ???? x??c nh???n (11)</Text>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MinuteInfor')}>
                                                        <Text style={style.TextBold}>BBBGG_TSCN_VTGG_TTGPP_HCC/14/000408</Text>
                                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                                            <Image source={images.confirm_1} />
                                                            
                                                            <Text style={[style.Text, { color: "#00733B",marginLeft:8 }]}>???? x??c nh???n</Text>
                                                        </View>

                                                        <View style={[style.LineRow, { alignItems: "center", marginRight: "5%" }]}>
                                                            <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={images.event} style={{ width: 24, height: 24 }} />
                                                                <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>12//12/2012</Text>
                                                            </View>
                                                            <Image source={images.arrow_right} style={{ width: 18, height: 18 }} />
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.book} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>B??n giao t??i s???n</Text>
                                                        </View>
                                                        <View style={{ marginTop: 10, flexDirection: "row" }}>
                                                            <Image source={images.admin} style={{ width: 24, height: 24 }} />
                                                            <Text style={[style.Text, { color: "#727070", marginLeft: 8 }]}>????n v??? b??n giao</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </ScrollView>


                                        </View>
                                    ) : (this.state.saleActive === option.REFUSED) ? (
                                        <View>
                                            <View style={{ marginLeft: "5%", marginTop: 17, marginRight: "5%" }}>
                                                <Image source={images.banner} />
                                                <Text style={style.TextHandedover}>
                                                    B???n kh??ng c?? bi??n b???n n??o ??ang th???c hi???n b??n giao. Vui pl??ng quay  l???i trang ch???.
                                                </Text>
                                            </View>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('PropertyInfor')}>
                                                <View style={style.BoderButton}>
                                                    <Text style={style.TextBorder}>Trang ch???</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ) : null
                                }
                            </View>

                        </ScrollView>
                    </SafeAreaView>

                    <View style={{ position: 'absolute', right: 10, bottom: 0 }}>
                        <Image source={images.plus} style={{ width: 82, height: 82 }} />
                    </View>
                </View>
            </View>
        )
    }
}

