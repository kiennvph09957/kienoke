import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch, Image, ScrollView, Modal, StyleSheet, SafeAreaView, FlatList } from "react-native";
import HeaderApp from '../../../components/HeaderApp';
import images from '../../../res/images';
import { styleApp } from '../../../common/styleApp';
import { Picker } from '@react-native-picker/picker';

interface Props {
    navigation: any;
}

interface State { }





const style = StyleSheet.create({
    TextTitle: {
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '700',
        fontStyle: 'normal',
        color: "#4D4B4B",
        fontSize: 18,
        lineHeight: 27,
        marginLeft: 25,
        marginTop: 20
    },
    Image: {
        width: 21,
        height: 22.5,
        position: "absolute",
        left: "-18%",
        top: 20
    },
    Option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    TitleOption: {
        fontWeight: "400",
        fontFamily: "FS PF BeauSans Pro",
        lineHeight: 66,
        color: "#4D4B4B",
        fontStyle: "normal",
        fontSize: 18
    },
    Switch: {
        width: 27,
        height: 27
    },
    Line: {
        borderWidth: 0.5,
        borderColor: "#B0B0B0"
    }
})

const data = [
    {
        id: 1,
        name: "Tiếng Việt"
    },
    {
        id: 2,
        name: "Català"
    },
    {
        id: 3,
        name: "Dansk"
    },
    {
        id: 4,
        name: "Deutsch"
    },
    {
        id: 5,
        name: "Eesti"
    },
    {
        id: 6,
        name: "Englissh (Australia)"
    },
    {
        id: 7,
        name: "English (New Zealand)"
    },
    {
        id: 8,
        name: "English (United Kingdom)"
    },
    {
        id: 9,
        name: "English (United States)"
    },
    {
        id: 10,
        name: "Euskasa"
    },
    {
        id: 11,
        name: "Filipino"
    },
    {
        id: 12,
        name: "Galego"
    },
    {
        id: 13,
        name: "Hvatski"
    },
    {
        id: 14,
        name: "Indonesia"
    },
    {
        id: 15,
        name: "Italiano"
    },
    {
        id: 16,
        name: "Kiswahili"
    },
    {
        id: 17,
        name: "Magyar"
    },
    {
        id: 18,
        name: "Melayu"
    },
    {
        id: 19,
        name: "Nederlands"
    },
    {
        id: 20,
        name: "Polski"
    }
]

export default class Setting extends React.Component<Props, State> {

    state = {
        toggled: false,
        toggled1: false,
        modalVisible: false,
        language: "Tiếng Việt",
        selected: "Tiếng Việt"
    }

    setModalVisible = (visible: any) => {
        this.setState({ modalVisible: visible });
    }

    setLanguage = (text: string) => {
        this.setState({ language: text })
    }

    setSelected = (text: string) => {
        this.setState({ selected: text })
    }

    // toggleSwitch = (value: boolean) => {
    //     this.setState({ toggle: value })
    // }

    // toggleSwitch1 = (value: boolean) => {
    //     this.setState({ toggle: value })
    // }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderApp
                    title="Cài đặt"
                    iconLeft={images.ic_back}
                    iconRight={images.setting}
                    onLeftPress={this.props.navigation.goBack}
                />

                <View style={styleApp.viewRoot}>
                    <ScrollView>
                        <View>

                            <Text style={style.TextTitle}>
                                Cài đặt đăng nhập
                            </Text>

                            <View style={{ marginLeft: 77, marginRight: 15 }}>
                                <View style={style.Option}>
                                    <View>
                                        <Image
                                            source={images.ic_vts_face}
                                            style={style.Image}
                                        />
                                        <Text
                                            style={style.TitleOption}>
                                            Nhận diện khuông mặt
                                        </Text>
                                    </View>
                                    <View >
                                        <Switch
                                            trackColor={{ false: "rgba(120, 120, 128, 0.3)", true: "green" }}
                                            thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
                                            onValueChange={() => this.setState({ toggled: !this.state.toggled })}
                                            value={this.state.toggled}
                                            style={style.Switch}
                                        />
                                    </View>

                                </View>

                            </View>
                            <View style={[style.Line, { marginLeft: 25, width: "90%", borderStyle: "dashed" }]} />


                            <View style={{ marginLeft: 77, marginRight: 15 }}>
                                <View style={style.Option}>
                                    <View>
                                        <Image
                                            source={images.ic_vts_fing}
                                            style={style.Image}
                                        />
                                        <Text
                                            style={style.TitleOption}>
                                            Đăng nhập bằng vân tay
                                        </Text>
                                    </View>
                                    <View >
                                        <Switch
                                            trackColor={{ false: "rgba(120, 120, 128, 0.3)", true: "green" }}
                                            thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
                                            onValueChange={() => this.setState({ toggled1: !this.state.toggled1 })}
                                            value={this.state.toggled1}
                                            style={style.Switch}
                                        />
                                    </View>

                                </View>

                            </View>
                            <View style={[style.Line, { marginLeft: 25, width: "90%" }]} />

                        </View>

                        <View>
                            <View>
                                <Text style={style.TextTitle}>
                                    Cài đặt khác
                                </Text>
                            </View>


                            <View>

                                <View style={{ marginLeft: 77, marginRight: 15 }}>
                                    <View>
                                        <Image
                                            source={images.password}
                                            style={{ width: 24, height: 24, position: "absolute", left: "-15%", top: 25, bottom: 0 }}
                                        />
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword', {
                                    })}>
                                        <View style={style.Option}>
                                            <Text
                                                style={style.TitleOption}>
                                                Đổi mật khẩu
                                            </Text>
                                            <View style={{ width: 18, height: 18 }}>
                                                <Image source={images.arrow_right} style={{ width: 8.06, height: 14.07 }} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={[style.Line, { marginLeft: 25, width: "90%", borderStyle: "dashed" }]} />

                                <View style={{ marginLeft: 77, marginRight: 15 }}>
                                    <View>
                                        <Image source={images.languages_1} style={{ width: 24, height: 24, position: "absolute", left: "-15%", top: 20 }} />
                                    </View>

                                    <View style={style.Option}>
                                        <Text
                                            style={style.TitleOption}>
                                            Ngôn ngữ
                                        </Text>

                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                            <View style={{ flexDirection: "row", marginLeft: 5, alignItems: "center" }}>
                                                <Text style={{
                                                    fontFamily: "S PF BeauSans Pro", fontStyle: "normal",
                                                    fontWeight: "400", fontSize: 18, lineHeight: 27, color: "#4D4B4B", marginRight: 10
                                                }}>{this.state.language}</Text>
                                                <Image source={images.Arrow_Right_2} />
                                            </View>
                                        </TouchableOpacity>

                                        <Modal
                                            animationType='slide'
                                            visible={this.state.modalVisible}
                                            onRequestClose={() => this.setModalVisible(false)}
                                        >
                                            <SafeAreaView>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingHorizontal: 12, borderBottomWidth: 1, paddingBottom: 15, marginLeft: 15, marginRight: 15 }}>
                                                    <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                                                        <Text style={{ fontSize: 18, color: "#00FF00", fontWeight: "400" }}>Hủy</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{ fontSize: 18, color: "#000000", fontWeight: "400" }}>Ngôn ngữ</Text>
                                                    <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                                                        <Text style={{ fontSize: 18, color: "#00FF00", fontWeight: "400" }}>Xong</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <FlatList
                                                    data={data}
                                                    renderItem={({ item }) => {
                                                        return (
                                                            <TouchableOpacity onPress={() => {
                                                                this.setLanguage(item.name)
                                                                this.setModalVisible(false)
                                                                this.setSelected(item.name)
                                                            }}>


                                                                {
                                                                    (item.name === this.state.selected) ? (
                                                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, marginBottom: 10, marginTop: 5 }}>
                                                                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 27, paddingTop: 10, color: "red" }}>{item.name}</Text>
                                                                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 27, paddingTop: 10, color: "red" }}>Đang chọn</Text>
                                                                        </View>
                                                                    ) : <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, marginBottom: 10, marginTop: 5 }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 27, paddingTop: 10 }}>{item.name}</Text>
                                                                    </View>
                                                                }

                                                            </TouchableOpacity>

                                                        )
                                                    }}
                                                    keyExtractor={(item) => String(item.id)}
                                                />
                                            </SafeAreaView>

                                        </Modal>

                                    </View>

                                </View>
                                <View style={[style.Line, { marginLeft: 25, width: "90%", borderStyle: "dashed" }]} />
                                <View style={{ marginLeft: 77, marginRight: 15 }}>
                                    <View>
                                        <Image
                                            source={images.question}
                                            style={{ width: 18.28, height: 24, position: "absolute", left: "-15%", top: 20, bottom: 0 }}
                                        />
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SecurityQuestion')}>
                                        <View style={style.Option}>
                                            <Text
                                                style={style.TitleOption}>
                                                Câu hỏi bảo mật
                                            </Text>
                                            <View style={{ width: 18, height: 18 }}>
                                                <Image source={images.arrow_right} style={{ width: 8.06, height: 14.07 }} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>

        )
    }
}



