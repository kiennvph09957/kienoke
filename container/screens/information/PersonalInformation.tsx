import React from "react";
import { View, Text, Image, ScrollView, Pressable, FlatList, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import sizes from "../../../res/sizes";
import colors from "../../../res/colors";
import Icons from 'react-native-vector-icons/AntDesign';
import images from "../../../res/images";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  navigation: any
}

interface State { }

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
});


const data = [
  {
    id: 1,
    title: 'Thông tin chung',
    img: require('../../../assets/images/businessman-information.png'),
    screen : "GeneralInformation"
  },
  {
    id: 2,
    title: 'Diễn biến lương chức danh',
    img: require('../../../assets/images/salary.png'),
    screen : ""
  },
  {
    id: 3,
    title: 'Diễn biến lương bảo hiểm',
    img: require('../../../assets/images/moneybag.png'),
    screen : ""
  },
  {
    id: 4,
    title: 'Quá trình phụ cấp lương',
    img: require('../../../assets/images/donation.png'),
    screen : ""
  },
  {
    id: 5,
    title: 'Quá trình tham gia BHXH',
    img: require('../../../assets/images/user1.png'),
    screen : ""
  },
  {
    id: 6,
    title: 'Quá trình công tác',
    img: require('../../../assets/images/cap.png'),
    screen : ""
  },
  {
    id: 7,
    title: 'Quá trình đào tạo nghiên cứu',
    img: require('../../../assets/images/presentation.png'),
    screen : ""
  },
  {
    id: 8,
    title: 'Quá trình chuyển diện đối tượng',
    img: require('../../../assets/images/step1.png'),
    screen : ""
  },
  {
    id: 9,
    title: 'Khen thưởng và kỉ luật',
    img: require('../../../assets/images/trophy.png'),
    screen : ""
  },
  {
    id: 10,
    title: 'Thuế và giảm trừ',
    img: require('../../../assets/images/tax.png'),
    screen : ""
  },
  {
    id: 11,
    title: 'Sáng kiên ý tưởng',
    img: require('../../../assets/images/idea.png'),
    screen : ""
  },
  {
    id: 12,
    title: 'Hồ sơ kèm theo',
    img: require('../../../assets/images/folder.png'),
    screen : ""
  },
  {
    id: 13,
    title: 'Quan hệ gia đình',
    img: require('../../../assets/images/family.png'),
    screen : ""
  },
];


export default class PersonalInformation extends React.Component<Props, State>{
  render() {
    const ENDX = 41 / 100;
    const ENDY = 107.54 / 100;
    const STARTX = 55 / 100;
    const STARTY = 20 / 100;
    const renderItem = ({ item, index }: { item: any; index: any }) => {
      return (
        <Pressable onPress={() => this.props.navigation.navigate(`${item.screen}`)}>
          {({ pressed }) => (
            pressed ? (
              <View style={{
                backgroundColor: "#ECEFF1",
                left: sizes._17sdp,
                borderBottomLeftRadius: sizes._10sdp,
                borderTopLeftRadius: sizes._10sdp,
                height: sizes._58sdp,
              }}>
                <View style={{ position: 'absolute', flexDirection: 'row' }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      left: sizes._39sdp,
                      top: sizes._20sdp,
                      tintColor: "#D20B2E",
                    }}
                    source={item?.img}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      top: sizes._8sdp,
                      left: sizes._77sdp,
                      lineHeight: sizes._52sdp,
                      fontSize: 20,
                      fontWeight: "700",
                      letterSpacing: -0.24,
                    }}>
                    {item?.title}
                    {''}
                  </Text>
                </View>
                <View
                  style={{
                    top: sizes._22sdp,
                    position: 'absolute',
                    right: sizes._55sdp,
                  }}>
                  <Icons name="right" color={"#D20B2E"} size={18}></Icons>
                </View>
              </View>
            ) : (
              <View style={{
                backgroundColor: "#FFFFFF",
                left: sizes._17sdp,
                borderBottomLeftRadius: sizes._10sdp,
                borderTopLeftRadius: sizes._10sdp,
                height: sizes._58sdp,
              }}>
                <View style={{ position: 'absolute', flexDirection: 'row' }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      left: sizes._39sdp,
                      top: sizes._20sdp,
                      tintColor: "#676565",
                    }}
                    source={item?.img}></Image>
                </View>
                <View>
                  <Text
                    style={{
                      top: sizes._8sdp,
                      left: sizes._77sdp,
                      lineHeight: sizes._52sdp,
                      fontSize: 18,
                      fontWeight: "400",
                      letterSpacing: -0.24,
                    }}>
                    {item?.title}
                    {''}
                  </Text>
                </View>
                <View
                  style={{
                    top: sizes._22sdp,
                    position: 'absolute',
                    right: sizes._55sdp,
                  }}>
                  <Icons name="right" color={"#676565"} size={18}></Icons>
                </View>
              </View>
            )
          )}
        </Pressable>
      );
    };
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
              <Text style={styles.mText}>Nguyễn Thị Hoa</Text>
            </View>
            <Text style={styles.mText_}>Kĩ sư giải pháp nghiệp vụ</Text>
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
              top: sizes._8sdp,
              height: sizes._300sdp,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  lineHeight: sizes._27sdp,
                  left: sizes._35sdp,
                }}>
                Thông tin cán bộ
              </Text>
            </View>
            <View>
              <View style={{ position: 'absolute', width: '100%' }}>
                <Image
                  source={images.email}
                  style={{
                    width: 24,
                    height: 24,
                    left: sizes._39sdp,
                    top: sizes._24sdp,
                    tintColor: '#AFAFAF',
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    top: sizes._11sdp,
                    left: sizes._74sdp,
                    lineHeight: sizes._52sdp,
                    fontSize: 18,
                    fontWeight: '400',
                    letterSpacing: -0.24,
                  }}>
                  Hoant71@viettel.com.vn
                </Text>
              </View>

            </View>
            <View>
              <View style={{ position: 'absolute', width: '100%' }}>
                <Image
                  source={images.phone}
                  style={{
                    width: 24,
                    height: 24,
                    left: sizes._39sdp,
                    top: sizes._24sdp,
                    tintColor: '#AFAFAF',
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    top: sizes._11sdp,
                    left: sizes._74sdp,
                    lineHeight: sizes._52sdp,
                    fontSize: 18,
                    fontWeight: '400',
                    letterSpacing: -0.24,
                  }}>
                  0978453545
                </Text>

              </View>

            </View>

            <View>
              <View style={{ position: 'absolute', width: '100%' }}>
                <Image
                  source={images.suitcase}
                  style={{
                    width: 24,
                    height: 24,
                    left: sizes._39sdp,
                    top: sizes._24sdp,
                    tintColor: '#AFAFAF',
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    top: sizes._11sdp,
                    left: sizes._74sdp,
                    lineHeight: sizes._52sdp,
                    fontSize: 18,
                    fontWeight: '400',
                    letterSpacing: -0.24,
                  }}>
                  Kỹ sư giải pháp nghiệp vụ
                </Text>

              </View>

            </View>


            <View>
              <View style={{ position: 'absolute', width: '100%' }}>
                <Image
                  source={images.team1}
                  style={{
                    width: 24,
                    height: 24,
                    left: sizes._39sdp,
                    top: sizes._24sdp,
                    tintColor: '#AFAFAF',
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    top: sizes._11sdp,
                    left: sizes._74sdp,
                    lineHeight: sizes._52sdp,
                    fontSize: 18,
                    fontWeight: '400',
                    letterSpacing: -0.24,
                  }}>
                  Phòng tiêu chuẩn định mức
                </Text>

              </View>

            </View>

            <View>
              <View style={{ position: 'absolute', width: '100%' }}>
                <Image
                  source={images.home}
                  style={{
                    width: 24,
                    height: 24,
                    left: sizes._39sdp,
                    top: sizes._24sdp,
                    tintColor: '#AFAFAF',
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    top: sizes._11sdp,
                    left: sizes._74sdp,
                    lineHeight: sizes._52sdp,
                    fontSize: 18,
                    fontWeight: '400',
                    letterSpacing: -0.24,
                  }}>
                  Trung tâm công nghệ thông tin
                </Text>

              </View>

            </View>




          </View>

          <View style={{ top: 50 }}>
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}