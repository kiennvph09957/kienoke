import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import images from "../../../res/images";
import sizes from "../../../res/sizes";
import colors from "../../../res/colors";
import Icons from 'react-native-vector-icons/AntDesign';

interface Props {
    navigation: any
}

interface State { }

const option = {
    AAA: '0',
    quanlytructiep: '1',
    nhanvientoiquanly: '2',
    thongtintuythan: '3',
    trinhdohocvan: '4',
    thongtinchinhtri: '5',
    thongtintaichinh: '6',
    masothue: '7'
}


export default class GeneralInformation extends React.Component<Props, State>{
    state = {
        activeTurnover: 'service',
        saleActive: option.AAA,
        shouldShow: false,
    }
    changeSaleActive = (val: string) => {
        this.setState({ saleActive: val });
    };
    render() {
        const ENDX = 41 / 100;
        const ENDY = 107.54 / 100;
        const STARTX = 55 / 100;
        const STARTY = 20 / 100;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#FF030A', '#A30408']}
                    end={{ x: ENDX, y: ENDY }}
                    start={{ x: STARTX, y: STARTY }}
                    style={styles.linearGradient}>
                    <View style={styles.mBackIcon}>
                        <Icons
                            color={colors._color_white}
                            name="left"
                            size={24}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                    </View>
                    <View style={styles.mImage}>
                        <Image source={images.Ellipse2} />
                    </View>
                    <View style={styles.mTextContainer}>
                        <View style={styles.mTextStyle}>
                            <Text style={styles.mText}>Nguy???n Th??? Hoa</Text>
                        </View>
                        <Text style={styles.mText_}>K?? s?? gi???i ph??p nghi???p v???</Text>
                    </View>
                    <View style={styles.mIconContainer}>
                        <TouchableOpacity>
                            <Image source={images.search1} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icons
                                style={{ marginHorizontal: sizes._10sdp }}
                                color={colors._color_white}
                                name="qrcode"
                                size={24}

                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.boder}>
                        <Text style={styles.mtext_tt}></Text>
                    </View>
                </LinearGradient>
                <ScrollView>

                    <View
                        style={{
                            padding: sizes._10sdp,
                            top: sizes._8sdp
                        }}>

                        <View>
                            <View >
                                <View style={this.state.saleActive === option.quanlytructiep
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.quanlytructiep
                                                ? option.AAA
                                                : option.quanlytructiep
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.quanlytructiep
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.users}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.quanlytructiep
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Qu???n l?? tr???c ti???p
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.quanlytructiep) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }}  />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.quanlytructiep) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 15, flexDirection: "row", justifyContent: "space-between",marginBottom:10 }}>
                                    <View style={[{ marginTop: 20, marginBottom: 20,alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse_11}  />
                                        <Text style={styles.qlttText}>Nguy???n Vi???t Anh</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse_12} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text style={styles.qlttText}>B??i Nam Giang</Text>
                                    </View>
                                </View>
                            ) : null
                        }



                        <View>
                            <View >
                                <View style={this.state.saleActive === option.nhanvientoiquanly
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.nhanvientoiquanly
                                                ? option.AAA
                                                : option.nhanvientoiquanly
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.nhanvientoiquanly
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.staff}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.nhanvientoiquanly
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Nh??n vi??n t??i qu???n l??
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.nhanvientoiquanly) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }} />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.nhanvientoiquanly) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={[{ marginTop: 20, marginBottom: 20,alignItems: "center", width: "25%" }]}>
                                        <Image source={images.Ellipse_15}  />
                                        <Text style={styles.qlttText}>Nguy???n Th??? Th??y</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "25%" }]}>
                                        <Image source={images.Ellipse_14} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text style={styles.qlttText}>Nguy???n Th??? Hoa</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "25%" }]}>
                                        <Image source={images.Ellipse_15} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text style={styles.qlttText}>L????ng Th??? Qu??? Minh</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "25%" }]}>
                                        <Image source={images.Ellipse_14} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text style={styles.qlttText}>Tr???n Thu Trang</Text>
                                    </View>
                                </View>
                            ) : null
                        }

                        <View>
                            <View >
                                <View style={this.state.saleActive === option.thongtintuythan
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.thongtintuythan
                                                ? option.AAA
                                                : option.thongtintuythan
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.thongtintuythan
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.personal}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.thongtintuythan
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Th??ng tin t??y th??n
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.thongtintuythan) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }} />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.thongtintuythan) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 15, left: sizes._17sdp,paddingBottom:15 }}>
                                   <View>
                                        <Text style={styles.optionText}>Ng??y sinh</Text>
                                        <Text style={styles.option_Text}>15/02/1984</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>S??? CMT/CCCD/H??? chi???u</Text>
                                        <Text style={styles.option_Text}>15/02/1984</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>Ng??y c???p</Text>
                                        <Text style={styles.option_Text}>09/12/2014</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>N??i c???p</Text>
                                        <Text style={styles.option_Text}>C???c C???nh s??t ??KQL c??? tr?? v?? DLQG v??? d??n c?? </Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>N??i sinh</Text>
                                        <Text style={styles.option_Text}>Ninh S??n - Tp. Ninh B??nh - T???nh Ninh B??nh</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>H??? kh???u th?????ng tr??</Text>
                                        <Text style={styles.option_Text}>Sn 01, ng?? 153/73/16 C???u C???c, T??y M???, Nam T??? Li??m - H?? N???i</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>Ch??? ??? hi???n t???i</Text>
                                        <Text style={styles.option_Text}>Sn 01, ng?? 153/73/16 C???u C???c, T??y M???, Nam T??? Li??m - H?? N???i</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>T??nh tr???ng h??n nh??n</Text>
                                        <Text style={styles.option_Text}>???? k???t h??n</Text>
                                   </View>
                                </View>
                            ) : null
                        }



                        <View>
                            <View >
                                <View style={this.state.saleActive === option.trinhdohocvan
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.trinhdohocvan
                                                ? option.AAA
                                                : option.trinhdohocvan
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.trinhdohocvan
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.education}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.trinhdohocvan
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Tr??nh ????? h???c v???n
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.trinhdohocvan) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }} />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.trinhdohocvan) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 15, left: sizes._17sdp,paddingBottom:15 }}>
                                   <View>
                                        <Text style={styles.optionText}>Chuy??n ng??nh</Text>
                                        <Text style={styles.option_Text}>C??ng ngh??? th??ng tin</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>Tr?????ng ????o t???o</Text>
                                        <Text style={styles.option_Text}>?????i h???c b??ch khoa H?? N???i</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>Tr??nh ????? ngo???i ng???</Text>
                                        <Text style={styles.option_Text}>TOEIC 866</Text>
                                   </View>  
                                   
                                </View>
                            ) : null
                        }



                        <View>
                            <View >
                                <View style={this.state.saleActive === option.thongtinchinhtri
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.thongtinchinhtri
                                                ? option.AAA
                                                : option.thongtinchinhtri
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.thongtinchinhtri
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.political}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.thongtinchinhtri
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Th??ng tin ch??nh tr???
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.thongtinchinhtri) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }} />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.thongtinchinhtri) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 15, left: sizes._17sdp,paddingBottom:15 }}>
                                   <View>
                                        <Text style={styles.optionText}>Ng??y v??o ?????ng</Text>
                                        <Text style={styles.option_Text}>26/03/2001</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>N??i k???t n???p</Text>
                                        <Text style={styles.option_Text}>Ban CNTT - T???p ??o??n</Text>
                                   </View>
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>Ng??y nh???p ng??</Text>
                                        <Text style={styles.option_Text}>26/03/2002</Text>
                                   </View>  
                                   <View style={{borderWidth:1,width:"90%",marginLeft:10,borderColor:"#DADADA",marginTop:10, marginBottom:5}} />
                                   <View>
                                        <Text style={styles.optionText}>C???p b???c</Text>
                                        <Text style={styles.option_Text}>Thi???u t?? Chuy??n nghi???p</Text>
                                   </View>  
                                   
                                </View>
                            ) : null
                        }


                        <View>
                            <View >
                                <View style={this.state.saleActive === option.thongtintaichinh
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.thongtintaichinh
                                                ? option.AAA
                                                : option.thongtintaichinh
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.thongtintaichinh
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.economic}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.thongtintaichinh
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                Th??ng tin t??i ch??nh
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.thongtintaichinh) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }} />
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.thongtintaichinh) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse2} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text>Nguy???n Vi???t Anh</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse2} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text>Nguy???n Vi???t Anh</Text>
                                    </View>
                                </View>
                            ) : null
                        }


                        <View>
                            <View >
                                <View style={this.state.saleActive === option.masothue
                                    ? styles.optionActive
                                    : styles.optionDisabled
                                }>
                                    <TouchableOpacity onPress={
                                        () => this.changeSaleActive(
                                            this.state.saleActive === option.masothue
                                                ? option.AAA
                                                : option.masothue
                                        )
                                    }>
                                        <View style={{ position: 'absolute', flexDirection: 'row' }}>
                                            <Image
                                                style={this.state.saleActive === option.masothue
                                                    ? styles.imgActive
                                                    : styles.imgDisabled
                                                }
                                                source={images.tax}></Image>
                                        </View>

                                        <View>
                                            <Text
                                                style={this.state.saleActive === option.masothue
                                                    ? styles.textActive
                                                    : styles.textDisabled
                                                }>
                                                M?? s??? thu???
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                top: sizes._30sdp,
                                                position: 'absolute',
                                                right: sizes._25sdp,
                                            }}>
                                            {
                                                (this.state.saleActive === option.masothue) ? (
                                                    <Image source={images.arrow_top} style={{ right: 35 }}/>
                                                ) : (
                                                    <Image source={images.Arrow_Right_2} style={{ right: 39 }} />
                                                )
                                            }
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {
                            (this.state.saleActive === option.masothue) ? (
                                <View style={{ backgroundColor: "#ECEFF1", marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse2} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text>Nguy???n Vi???t Anh</Text>
                                    </View>
                                    <View style={[{ marginTop: 20, marginBottom: 20, justifyContent: "center", alignItems: "center", width: "50%" }]}>
                                        <Image source={images.Ellipse2} style={{ borderWidth: 1, borderColor: "red", borderRadius: sizes._65sdp }} />
                                        <Text>Nguy???n Vi???t Anh</Text>
                                    </View>
                                </View>
                            ) : null
                        }

                    </View>

                </ScrollView>
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: colors._color_white,
    },

    linearGradient: {
        width: sizes._screen_width,
        height: sizes._130sdp,
        flexDirection: 'row',
    },
    mVuong: {
        left: sizes._300sdp,
        right: '-21.75%',
        top: '6.55%',
        bottom: '77.36%',
        transform: [{ rotate: '-130deg' }],
        //
    },
    mVuong_: {
        left: sizes._280sdp,
        right: '-47.86%',
        top: '-10.85%',
        bottom: '95.26%',
        transform: [{ rotate: '-130deg' }],
    },
    mVuong1: {
        left: -160,
        top: -5,
        bottom: 5.77,
        transform: [{ rotate: '-130deg' }],
    },
    mBackIcon: {
        position: 'absolute',
        left: sizes._8sdp,
        right: '0%',
        top: sizes._52sdp,
        bottom: ' 0%',
    },
    mImage: {
        width: sizes._48sdp,
        height: sizes._48sdp,
        left: sizes._38sdp,
        // top: 43,
        position: 'absolute',
        // left: 8,
        right: '0%',
        top: sizes._42sdp,
        bottom: ' 0%',
        flexDirection: 'row',
        borderRadius: sizes._65sdp,
        backgroundColor: '#ffff',
    },
    mTextContainer: {
        position: 'absolute',
        left: sizes._95sdp,
        top: sizes._40sdp,
    },
    mTextStyle: {
        bottom: ' 0%',
        width: sizes._250sdp,
        height: sizes._29sdp,
    },
    mText: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: sizes._25sdp,
        color: colors._color_white,
    },
    mText_: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: sizes._25sdp,
        color: colors._color_white,
    },
    mIconContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        top: sizes._52sdp,
        // justifyContent :"space-between"
    },
    boder: {
        borderTopLeftRadius: sizes._20sdp,
        borderTopRightRadius: sizes._20sdp,
        backgroundColor: colors._color_white,
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },

    mtext_tt: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: sizes._27sdp,
        left: sizes._35sdp,
        top: sizes._21sdp,
    },
    boderadius: {
        position: 'absolute',
        width: '80%',
        height: 0,
        left: sizes._45sdp,
        top: sizes._320sdp,
        borderColor: '#929292',
        borderWidth: sizes._1sdp,
    },
    optionActive: {
        backgroundColor: "#ECEFF1",
        left: sizes._17sdp,
        borderBottomLeftRadius: sizes._10sdp,
        borderTopLeftRadius: sizes._10sdp,
        height: sizes._58sdp,
    },
    optionDisabled: {
        backgroundColor: "#FFFFFF",
        left: sizes._17sdp,
        borderBottomLeftRadius: sizes._10sdp,
        borderTopLeftRadius: sizes._10sdp,
        height: sizes._58sdp,

    },
    textActive: {
        top: sizes._8sdp,
        left: sizes._77sdp,
        lineHeight: sizes._52sdp,
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: -0.24,
    },
    textDisabled: {
        top: sizes._8sdp,
        left: sizes._77sdp,
        lineHeight: sizes._52sdp,
        fontSize: 18,
        fontWeight: "400",
        letterSpacing: -0.24,
    },
    imgActive: {
        width: 24,
        height: 24,
        left: sizes._39sdp,
        top: sizes._20sdp,
        tintColor: "#D20B2E",
    },
    imgDisabled: {
        width: 24,
        height: 24,
        left: sizes._39sdp,
        top: sizes._20sdp,
        tintColor: "#676565",
    },
    optionText:{
        marginLeft:10,
        fontWeight:"400",
        fontSize:18,
        marginTop:10,
        fontFamily:"FS PF BeauSans Pro",
        lineHeight:34,
        fontStyle:"normal",
        color:"#727070"
    },
    option_Text:{
        marginLeft:10,
        fontWeight:"400",
        fontSize:18,
        marginTop:10,
        fontFamily:"FS PF BeauSans Pro",
        lineHeight:27,
        fontStyle:"normal",
        color:"#4D4B4B",
        marginRight:"15%"
    },
    qlttText:{
        fontFamily:"FS PF BeauSans Pro",
        fontStyle:"normal",
        fontWeight:"400",
        fontSize:18,
        lineHeight:27,
        textAlign:"center",
        color:"#000000"
    }

})