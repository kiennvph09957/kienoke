import React from "react";
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, TextInput, StyleSheet, Button, Pressable } from "react-native";
import images from "../../../res/images";
import sizes from "../../../res/sizes";
import Icons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import HeaderApp from "../../../components/HeaderApp";
import { styleApp } from "../../../common/styleApp";
interface Props {
    navigation: any
}

interface State { }

const style = StyleSheet.create({
    LineEven: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    Line: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#B0B0B0",
        borderStyle: "dashed"
    },

    Border: {
        height: 35,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 16,
        borderColor: "#929292"
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.68)",
    },
    content: {
        bottom: 0,
        position: 'absolute',
        width: sizes._csreen_width,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: sizes._30sdp,
        borderTopRightRadius: sizes._30sdp,
    },
    indicator: {
        height: sizes._5sdp,
        width: sizes._50sdp,
        backgroundColor: "#000000",
        opacity: 0.15,
        borderRadius: sizes._3sdp,
        margin: sizes._16sdp,
        alignSelf: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: sizes._16sdp,
    },
    headerRight: {
        alignItems: "center",
        marginLeft: 12,
        flexDirection: 'row',
        flex: 1,
    },
    textHeader: {
        fontFamily: "S PF BeauSans Pro",
        fontStyle: "normal",
        right: 20,
        lineHeight: 30,
        fontSize: 20,
        color: "#4D4B4B",
        fontWeight: '600',
    },
    date: {
        width: sizes._screen_width,
        marginTop: sizes._8sdp,
        height: sizes._150sdp,
    },
    textTitle: {
        marginLeft: 20,
        color: "#000000",
        width: 217,
        height: 43,
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 27
    },
    TextBold: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 27,
        marginLeft: 25,
        color: "#000000",
        position: "absolute",
        fontSize: 18
    },
    Text: {
        fontFamily: "FS PF BeauSans Pro",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 27
    },
    TextButtonModal: {
        marginTop: 5,
        fontFamily: "FS Magistral",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 26,
        textAlign: "center",
        fontStyle: "normal"
    }
})

export default class PersonalPropertyDetail extends React.Component<Props, State>{
    state = {
        modalVisible: false,
        modalTime: false
    }

    setModalVisible = (visible: any) => {
        this.setState({ modalVisible: visible });
    }

    setModalTime = (visible: any) => {
        this.setState({ modalTime: visible })
    }
    render() {
        const { modalVisible, modalTime } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Chi tiết tài sản cá nhân"
                    iconLeft={images.ic_back}
                    onLeftPress={this.props.navigation.goBack}
                />
                <View style={styleApp.viewRoot}>
                    <SafeAreaView>
                        <ScrollView>
                            <View>
                                <Text
                                    style={style.textTitle}>
                                    Tổng tài sản (04)
                                </Text>

                                <View>
                                    <Text style={style.TextBold}>
                                        x1
                                    </Text>
                                    <Text style={[style.Text, { marginLeft: "15%", color: "#676565", fontSize: 18 }]}>
                                        Trang thiết bị văn phòng
                                    </Text>
                                    <Text style={[style.Text, { marginLeft: "15%", color: "#676565", fontSize: 18 }]}>
                                        Máy in, photo copy, fax, scan:
                                    </Text>
                                    <Text style={[style.Text, { marginLeft: "15%", color: "#000000", fontSize: 18 }]}>
                                        Máy in HP LaserJet  Pro  CP1525nw
                                    </Text>
                                    <View style={{ marginLeft: "20%" }}>
                                        <Text style={[style.Text, { fontSize: 32, color: "#000000" }]}>. <Text style={{ fontSize: 18, color: "#676565" }}>Code:</Text> <Text style={{ fontSize: 18, color: "#000000" }}>029118</Text></Text>
                                        <Text style={[style.Text, { fontSize: 32, color: "#000000" }]}>. <Text style={{ fontSize: 18, color: "#676565" }}>Serial:</Text> <Text style={{ fontSize: 18, color: "#000000" }}>CNCHH025276</Text></Text>
                                    </View>
                                </View>

                                <View style={{ width: "90%", marginLeft: "5%", marginTop: 22 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={style.Line}></View>
                                    </View>
                                </View>

                                <SafeAreaView>
                                    <View>
                                        <View>
                                            <View style={[style.LineEven, { marginTop: 11 }]}>
                                                <View style={{ flexDirection: "row", marginLeft: 25 }}>
                                                    <Image source={images.time} />
                                                    <Text style={[style.Text, { marginLeft: 11, color: "#000000", fontSize: 18 }]}>48  tháng</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", marginRight: 25 }}>
                                                    <Image source={images.event} />
                                                    <Text style={[style.Text, { marginLeft: 11, color: "#000000", fontSize: 18 }]}>13/12/2012</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: "90%", marginLeft: "5%", marginTop: 19 }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <View style={style.Line}></View>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between", marginLeft: 27, marginRight: 23 }}>
                                                <View>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, color: "#676565" }]}>Hãng sản suất</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, color: "#676565" }]}>Tình trạng</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, color: "#676565" }]}>Loại tài sản</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, color: "#676565" }]}>Nguyên giá bàn giao</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, color: "#676565" }]}>Mã trạm</Text>

                                                </View>
                                                <View>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, textAlign: "right", right: 0, color: "#000000" }]}>HP</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, textAlign: "right", color: "#3399FF" }]}>Đang sử dụng</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, textAlign: "right", color: "#000000" }]}>TSVP</Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, textAlign: "right", color: "#000000" }]}>7.818.182 <Text style={{ color: "#676565" }}>VNĐ</Text></Text>
                                                    <Text style={[style.Text, { fontSize: 18, lineHeight: 46, textAlign: "right", color: "#000000" }]}>Mã trạm</Text>

                                                </View>
                                            </View>
                                            <View>
                                                <View style={[style.LineEven, { paddingHorizontal: 26 }]}>
                                                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <View style={style.Border}>
                                                            <Text style={[style.Text, { marginTop: 5, fontSize: 16, lineHeight: 24, textAlign: "center" }]}>Báo hỏng</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <View style={style.Border}>
                                                            <Text style={[style.Text, { marginTop: 5, fontSize: 16, lineHeight: 24, textAlign: "center" }]}>Báo mất</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <View style={style.Border}>
                                                            <Text style={[style.Text, { marginTop: 5, fontSize: 16, lineHeight: 24, textAlign: "center" }]}>Bàn giao</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flexDirection: "row", marginTop: 27, marginLeft: 26, marginBottom: 20 }}>
                                                    <TouchableOpacity>
                                                        <View style={style.Border}>
                                                            <Text style={[style.Text, { marginTop: 5, fontSize: 16, lineHeight: 24, textAlign: "center" }]}>Báo không sử dụng</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </SafeAreaView>

                                <View>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <TouchableOpacity style={style.container}
                                            onPress={() => this.setModalVisible({ modalVisible: false })}
                                        >
                                            <View style={style.content}>
                                                <View style={style.indicator} />

                                                <View style={style.headerContainer}>
                                                    <View style={style.headerRight}>
                                                        <TouchableOpacity onPress={() => this.setModalVisible({ modalVisible: false })}>
                                                            <Icons
                                                                name="chevron-back"
                                                                size={24}
                                                                color={"#676565"}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={[style.textHeader, { marginLeft: 20 }]}>
                                                            Báo hỏng
                                                        </Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => this.setModalVisible({ modalVisible: false })}>
                                                        <Text style={style.textHeader}>Hủy</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <SafeAreaView>
                                                    <ScrollView>
                                                        <Text style={[style.Text, { marginLeft: 32, marginTop: 14, fontSize: 18, lineHeight: 34, color: "#6F7474" }]}>Ngày hỏng <Text style={{ color: "red" }}>*</Text></Text>
                                                        <TouchableOpacity onPress={() => this.setModalTime(true)}>
                                                            <View style={[style.LineEven, { borderWidth: 1, height: 52, marginLeft: 32, marginRight: 32 }]}>
                                                                <Text style={{ fontSize: 18, marginLeft: 10 }}>--dd/mm/yyyy--</Text>
                                                                <Image source={images.event} style={{ right: 5, width: 24, height: 24 }} />
                                                            </View>
                                                        </TouchableOpacity>
                                                        <Text style={[style.Text, { marginLeft: 32, marginTop: 14, fontSize: 18, lineHeight: 34, color: "#6F7474" }]}>Số lượng hỏng <Text style={{ color: "red" }}>*</Text></Text>
                                                        <View>
                                                            <TextInput placeholder="--chọn--" style={{ backgroundColor: "#FFFFFF", padding: 10, borderWidth: 1, marginLeft: 32, marginRight: 32, fontSize: 18, paddingHorizontal: 10 }} />
                                                        </View>
                                                        <Text style={[style.Text, { marginLeft: 32, marginTop: 14, fontSize: 18, lineHeight: 34, color: "#6F7474" }]}>Nguyên nhân <Text style={{ color: "red" }}>*</Text></Text>
                                                        <View style={{ marginRight: 32, marginLeft: 32 }}>
                                                            <TextInput style={{ backgroundColor: "#FFFFFF", borderWidth: 1, height: 100, fontSize: 18 }} />
                                                        </View>
                                                        <View style={[style.LineEven, { paddingHorizontal: 26, marginTop: 27, marginBottom: 29 }]}>

                                                            <Pressable onPress={() => this.setModalVisible({ modalVisible: false })}>
                                                                {({ pressed }) => (
                                                                    pressed ?
                                                                        <View style={{ height: 35, backgroundColor: 'red', borderColor: "red", borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                            <Text style={style.TextButtonModal}>Hủy bỏ</Text>
                                                                        </View> : <View style={{ height: 35, borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                            <Text style={style.TextButtonModal}>Hủy bỏ</Text>
                                                                        </View>
                                                                )}

                                                            </Pressable>

                                                            <Pressable onPress={() => this.setModalVisible({ modalVisible: false })}>
                                                                {({ pressed }) => (
                                                                    pressed ? <View style={{ height: 35, borderWidth: 0, borderRadius: 30, backgroundColor: 'red', borderColor: "red", alignItems: "center", paddingHorizontal: 32 }}>
                                                                        <Text style={[style.TextButtonModal, { color: "#FFFFFF" }]}>Báo hỏng</Text>
                                                                    </View> : <View style={{ height: 35, borderWidth: 0, borderRadius: 30, alignItems: "center", paddingHorizontal: 32, backgroundColor: "#676565" }}>
                                                                        <Text style={[style.TextButtonModal, { color: "#FFFFFF" }]}>Báo hỏng</Text>
                                                                    </View>
                                                                )}

                                                            </Pressable>

                                                        </View>
                                                    </ScrollView>
                                                </SafeAreaView>
                                            </View>


                                        </TouchableOpacity>
                                    </Modal>
                                </View>

                                <View>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalTime}
                                        onRequestClose={() => {
                                            this.setModalTime(!modalTime);
                                        }}
                                    >
                                        <TouchableOpacity style={style.container}
                                            onPress={() => this.setModalTime({ modalTime: false })}>
                                            <View style={style.content}>
                                                <View style={style.indicator} />
                                                <View style={style.headerContainer}>
                                                    <View style={style.headerRight}>
                                                        <TouchableOpacity onPress={() => this.setModalTime({ modalVisible: false })}>
                                                            <Icons
                                                                name="chevron-back"
                                                                size={24}
                                                                color={"#676565"}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={[style.textHeader, { marginLeft: 20 }]}>
                                                            Thời gian
                                                        </Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => this.setModalTime({ modalTime: false })}>
                                                        <Text style={style.textHeader}>Hủy</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <DatePicker
                                                    date={new Date()}
                                                    locale="vi"
                                                    mode="date"
                                                    style={style.date}
                                                />
                                                <View style={[style.LineEven, { paddingHorizontal: 26, marginTop: 27, marginBottom: 29 }]}>
                                                    <Pressable onPress={() => this.setModalTime({ modalTime: false })}>
                                                        {({ pressed }) => (
                                                            pressed ?
                                                                <View style={{ height: 35, backgroundColor: 'red', borderColor: "red", borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                    <Text style={style.TextButtonModal}>Hủy bỏ</Text>
                                                                </View> : <View style={{ height: 35, borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                    <Text style={style.TextButtonModal}>Hủy bỏ</Text>
                                                                </View>
                                                        )}
                                                    </Pressable>
                                                    <Pressable onPress={() => this.setModalTime({ modalTime: false })}>
                                                        {({ pressed }) => (
                                                            pressed ?
                                                                <View style={{ height: 35, backgroundColor: 'red', borderColor: "red", borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                    <Text style={style.TextButtonModal}>Xác nhận</Text>
                                                                </View> : <View style={{ height: 35, borderWidth: 1, borderRadius: 30, alignItems: "center", paddingHorizontal: 32 }}>
                                                                    <Text style={style.TextButtonModal}>Xác nhận</Text>
                                                                </View>
                                                        )}
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </View>

                            </View>

                        </ScrollView>
                    </SafeAreaView>


                </View>
            </View >
        )
    }
}   