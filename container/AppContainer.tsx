import React, {useEffect} from 'react';
import {Image, View, ImageURISource} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import colors from '../res/colors';
import sizes from '../res/sizes';
import SplashScreen from './screens/splash/SplashScreen';
import LayoutOrderRice from './screens/LayoutOrderRice/LayoutOrderRice';
import SalaryInfomationScreen from './screens/salary/SalaryInfomationScreen';
import NotificationsScreen from './screens/notifications/NotificationsScreen';
import DetailNotificationScreen from './screens/notifications/DetailNotificationScreen';
import Login from './screens/login/loginuser/Login';
import Calender from './screens/oder/Oder';
import MealsCanBeReceived from './screens/MealsCanBeReceived/MealsCanBeReceived';
import DetailMealsCanBeReceived from './screens/MealsCanBeReceived/DetailMealsCanBeReceived';
import Oder from './screens/oder/Oder';
import Fromimage from './screens/paycard/componentpay/Fromimage';
import Homeautomaticpayment from './screens/paycard/screenpay/Homeautomaticpayment';
import Oderrice from './screens/paycard/screenpay/Oderrice';
import Content from './screens/LayoutOrderRice/Content';
import Linkcard from './screens/paycard/screenpay/Linkcard';
import Itemlist from './screens/paycard/componentpay/Itemlist';
import Modallink from './screens/paycard/componentpay/Modallink';
import ChooseKitchen from './screens/MealsCanBeReceived/ChooseKitchen';
import MealYouTransfer from './screens/MealYouTransfer/MealYouTransfer';
import Detail from './screens/MealYouTransfer/DetailMeailTransfer/Detail';
import InfoTimekeeping from './screens/timekeeping/InfoTimekeeping';
import ManualTimekeeping from './screens/timekeeping/ManualTimekeeping';
import HomeScreen from './screens/home/HomeScreen';
import images from '../res/images';
import {BottomFabBar} from '../common/rn-wave-bottom-bar-custom/src';
import PhoneBook from './screens/phonebook/PhoneBook';
import checkboxcomponent from '../components/phonebooks/checkboxcomponent';
import Information from '../components/phonebooks/Infomation';
import LayoutRice from './screens/LayoutOrderRice/LayoutOrderRice';
import Profile from '../component/Profile';
import Kitchen_list from './screens/Mealschedulerecurring/Kitchen_list';
import Kitchen from './screens/Mealschedulerecurring/Kitchen';

import Setting from './screens/setting/Setting';
import ChangePassword from './screens/setting/ChangePassword';
import SecurityQuestion from './screens/setting/SecurityQuestion';
import DetailReview from './screens/MealsRegisteredForTheMonth/DetailReview';
import PropertyInfor from './screens/PropertyInformation/PropertyInformation';
import PersonalProperty from './screens/PropertyInformation/PersonalProperty';
import DeliveryRecords from './screens/PropertyInformation/DeliveryRecords';
import MinuteInfor from './screens/PropertyInformation/MinuteInfor';
import Insurance from './screens/SinupInsurance/Insurance';

import ListOvertime from './screens/overtime/ListOvertime';
import DetailOverTime from './screens/overtime/DetailOverTime';
import PersonalPropertyDetail from './screens/PropertyInformation/PersonalPropertyDetail';
import CardRegistration from './screens/cardregistration/CardRegistration';
import MealsRegisteredForTheMonth from './screens/MealsRegisteredForTheMonth/MealsRegisteredForTheMonth';
import HealthCheckupSchedule from './screens/MedicalExamination/HealthCheckupSchedule/HealthCheckupSchedule';
import ReputableMedicalAddress from './screens/MedicalExamination/ReputableMedicalAddress/ReputableMedicalAddress';
import AddResultMedicalExamination from './screens/MedicalExamination/AddResultMedicalExamination/AddResultMedicalExamination';
import CategoryHome from './screens/category/CategoryHome';
import HealthAdvice from './screens/MedicalExamination/HealthAdvice/HealthAdvice';
import SalaryInfomation from './screens/salary/SalaryInfomationScreen';
import CustomerLookup from './screens/Client/CustomerLookup';
import DetailClient from './screens/Client/DetailClient/DetailClient';
import ChangepasswordScreen from './screens/login/changepass/ChangepasswordScreen';
import ResertPassword from './screens/login/resertpass/ResertPasswordID';
import ResertPasswordCMTND from './screens/login/resertpass/ResetPasswordCMTNDcard';
import ResetPasswordOTP from './screens/login/resertpass/ResetPasswordOTP';
import ResetPasswordNewPas from './screens/login/resertpass/ResetPasswordNewPas';
import VTS_GoodUp from './screens/VTS_GoodUp/VTS_GoodUp';
import PersonalInformation from './screens/information/PersonalInformation';
import GeneralInformation from './screens/information/GeneralInformation';
import Project from './screens/Project_List/Project';
import MealReview from './screens/Assess/MealReview';
import Project_Details from './screens/Project_List/Project_Details';
import RegisterVacation from './screens/RegisterVacationDo/RegisterVacation';
import HomeIntern from './screens/internal/HomeIntern';
import InformationIntern from './screens/internal/InformationIntern';
import Intro from './screens/Intro/Intro';
import Intro2 from './screens/Intro/Intro2';
import Intro1 from './screens/Intro/Intro1';
import SaveIntern from './screens/internal/screensIntern/SaveIntern';
import NewsIntern from './screens/internal/screensIntern/NewsIntern';
import HappeningsTitleSalary from './screens/HappeningsTitleSalary/HappeningsTitleSalary';

// Đăng kí vào ra
import HomeRegisterout from './screens/registeroutorinput/HomeRegisterout';
import ScreenRegisterOt from './screens/registeroutorinput/ScreenRegisterOt';
import DateTimepickerRegiss from '../components/registeroutorinput/DateTimepickerRegiss';
import InforRegisOut from './screens/registeroutorinput/InforRegisOut';
//OTP
import ScreenOTP from './screens/OTP/ScreenOTP';
import RegistrationForm from './screens/RegisterVacationDo/RegistrationForm';
export enum ScreenName {
  SINUPINSURANCE = 'Insurance',
  INFORMATION = 'Information',
  PHONEBOOK = 'PhoneBook',
  HOME = 'HomeStack',
  SPLASH_SCREEN = 'SplashScreen',
  DETAILED = 'DetailNotificationScreen',
  Notification = 'NotificationsScreen',
  SALARY_INFOMATION_SCREEN = 'SalaryInfomationScreen',
  LOGIN_SCREEN = 'Login',
  CHANGEPASS_SCREEN = 'ChangePass',
  CALENDER_SCREEN = 'Calender',
  LAYOUT_RICE = 'LayoutOrderRice',
  MEALS_CAN_BE_RECEIVED = 'MealsCanBeReceived',
  DETAIL_MEALS_CAN_BE_RECEIVED = 'DetailMealsCanBeReceived',
  ODER_SCREEN = 'Oder',
  PAY_SCREEN = 'Homeautomaticpayment',
  ODERRICE_SCREEN = 'Oderrice',
  CONTENT_SCREEN = 'Content',
  RICE_SCREEN = 'Rice',
  LINK_SCREEN = 'Linkcard',
  Itemlist_Screen = 'Itemlist',
  Modallink_screen = 'Modallink',
  ChooseKitchen = 'ChooseKitchen',
  MealYouTransfer = 'MealYouTransfer',
  Detail = 'Detail',
  InfoTimekeeping = 'InfoTimekeeping',
  ManualTimekeeping = 'ManualTimekeeping',
  HOMESCREEN = 'HomeScreen',
  MealsRegisteredForTheMonth = 'MealsRegisteredForTheMonth',
  Kitchen_list_screen = 'Kitchen_list',
  Kitchen = 'Kitchen',
  DetailReview = 'DetailReview',
  Search = 'Search',
  LIST_OVERTIME = 'ListOvertime',
  DETAIL_OVERTIME = 'DetailOverTime',
  AddResultMedicalExamination = 'AddResultMedicalExamination',
  HealthCheckupSchedule = 'HealthCheckupSchedule',
  ReputableMedicalAddress = 'ReputableMedicalAddress',
  CategoryHome = 'CategoryHome',
  HealthAdvice = 'HealthAdvice',
  DetailClient = 'DetailClient',
  MealReview = 'MealReview',
  CardRegistration = 'CardRegistration',
  Intro = 'Intro',
  Intro1 = 'Intro1',
  Intro2 = 'Intro2',
  // resetpass
  ChangepasswordScreen = 'ChangepasswordScreen',
  ResertPassword = 'ResertPassword',
  ResertPasswordCMTND = 'ResertPasswordCMTND',
  ResetPasswordOTP = 'ResetPasswordOTP',
  ResetPasswordNewPas = 'ResetPasswordNewPas',
  VTS_GoodUp = 'VTS_GoodUp',
  Project_Details = 'Project_Details',
  RegisterVacation = 'RegisterVacation',
  Project = 'Project',
  // Tuyến dụng
  HomeIntern = 'HomeIntern',
  InformationIntern = 'InformationIntern',
  SaveIntern = 'SaveIntern',
  NewsIntern = 'NewsIntern',
  // Đăng ký ra vào
  HomeRegisterout = 'HomeRegisterout',
  ScreenRegisterOt = 'ScreenRegisterOt',
  DateTimepickerRegiss = 'DateTimepickerRegiss',
  InforRegisOut = 'InforRegisOut',
  //OTP
  ScreenOTP = 'ScreenOTP',
  RegistrationForm = 'RegistrationForm',
}

const Tabs = createBottomTabNavigator();

const tabBarIcon =
  (active: ImageURISource, inactive: ImageURISource) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string; // Defines fab icon color
    size: number;
  }) =>
    (
      <Image
        style={{
          width: sizes._24sdp,
          height: sizes._24sdp,
          resizeMode: 'contain',
          // tintColor :"#BBBBBB"
        }}
        source={focused ? active : inactive}
      />
    );
function HomeStack() {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors._color_white,
      }}>
      <Tabs.Navigator
        lazy={true}
        backBehavior="none"
        initialRouteName={'SplashScreen'}
        tabBarOptions={{
          activeTintColor: '#EA0029',
          inactiveTintColor: '#BBBBBB',
          //   labelStyle: {fontFamily: fonts.HelveticaNeueRegular},
        }}
        tabBar={props => <BottomFabBar color="#DADADA" {...props} />}>
        <Tabs.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            tabBarIcon: tabBarIcon(
              images.ic_tab_home,
              images.ic_vts_tab_home_inactive,
            ),
            tabBarLabel: 'Trang chủ',
            tabBarActiveBackgroundColor: '#BBBBBB',
            tabBarActiveTintColor: '#EA0029',
          }}
        />
        <Tabs.Screen
          name={'Danh ba'}
          component={PhoneBook}
          options={{
            tabBarIcon: tabBarIcon(
              images.ic_vts_tab_chat,
              images.ic_vts_tab_chat_inactive,
            ),
            tabBarLabel: 'Danh bạ',
            tabBarActiveBackgroundColor: '#BBBBBB',
            tabBarActiveTintColor: '#EA0029',
          }}
        />
        <Tabs.Screen
          name={'NotificationsScreen'}
          component={NotificationsScreen}
          options={{
            tabBarIcon: tabBarIcon(
              images.ic_tab_notification_inactive,
              images.ic_tab_notification_active,
            ),
            tabBarLabel: 'Thông báo',
            tabBarActiveBackgroundColor: '#BBBBBB',
            tabBarActiveTintColor: '#EA0029',
          }}
        />

        <Tabs.Screen
          name={'CategoryHome'}
          component={CategoryHome}
          options={{
            tabBarIcon: tabBarIcon(
              images.ic_danhmuc_active,
              images.ic_danhmuc_inactive,
            ),
            tabBarLabel: 'Danh mục',
            tabBarActiveBackgroundColor: '#BBBBBB',
            tabBarActiveTintColor: '#EA0029',
          }}
        />
      </Tabs.Navigator>
    </View>
  );
}

const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    Insurance: {screen: Insurance},
    Information: {screen: Information},
    LayoutOrderRice: {screen: LayoutOrderRice},
    LayoutRice: {screen: LayoutRice},
    PhoneBook: {screen: PhoneBook},
    HomeStack: {screen: HomeStack},
    SplashScreen: {screen: SplashScreen},
    SalaryInfomationScreen: {screen: SalaryInfomationScreen},
    NotificationsScreen: {screen: NotificationsScreen},
    DetailNotificationScreen: {screen: DetailNotificationScreen},
    //login
    Login: {screen: Login},
    ChangepasswordScreen: {screen: ChangepasswordScreen},
    ResertPassword: {screen: ResertPassword},
    ResertPasswordCMTND: {screen: ResertPasswordCMTND},
    ResetPasswordOTP: {screen: ResetPasswordOTP},
    ResetPasswordNewPas: {screen: ResetPasswordNewPas},
    //
    Calender: {screen: Calender},
    MealsCanBeReceived: {screen: MealsCanBeReceived},
    DetailMealsCanBeReceived: {screen: DetailMealsCanBeReceived},
    Oder: {screen: Oder},
    Homeautomaticpayment: {screen: Homeautomaticpayment},
    Fromimage: {screen: Fromimage},
    Oderrice: {screen: Oderrice},
    Content: {screen: Content},
    Linkcard: {screen: Linkcard},
    Itemlist: {screen: Itemlist},
    Modallink: {screen: Modallink},
    ChooseKitchen: {screen: ChooseKitchen},
    MealYouTransfer: {screen: MealYouTransfer},
    Detail: {screen: Detail},
    InfoTimekeeping: {screen: InfoTimekeeping},
    Project_Details: {screen: Project_Details},
    ManualTimekeeping: {screen: ManualTimekeeping},
    HomeScreen: {screen: HomeScreen},
    checkboxcomponent: {screen: checkboxcomponent},
    Profile: {screen: Profile},
    Kitchen: {screen: Kitchen},
    Kitchen_list: {screen: Kitchen_list},
    // setting
    Setting: {screen: Setting},
    ChangePassword: {screen: ChangePassword},
    SecurityQuestion: {screen: SecurityQuestion},
    // propertyInformation
    PropertyInfor: {screen: PropertyInfor},
    PersonalProperty: {screen: PersonalProperty},
    DeliveryRecords: {screen: DeliveryRecords},
    VTS_GoodUp: {screen: VTS_GoodUp},
    MealReview: {screen: MealReview},
    MinuteInfor: {screen: MinuteInfor},
    // Đăng ký tăng ca
    ListOvertime: {screen: ListOvertime},
    DetailOverTime: {screen: DetailOverTime},
    PersonalPropertyDetail: {screen: PersonalPropertyDetail},
    SalaryInfomation: {screen: SalaryInfomation},
    AddResultMedicalExamination: {screen: AddResultMedicalExamination},
    HealthCheckupSchedule: {screen: HealthCheckupSchedule},
    ReputableMedicalAddress: {screen: ReputableMedicalAddress},
    CategoryHome: {screen: CategoryHome},
    HealthAdvice: {screen: HealthAdvice},
    MealsRegisteredForTheMonth: {screen: MealsRegisteredForTheMonth},
    DetailReview: {screen: DetailReview},
    CustomerLookup: {screen: CustomerLookup},
    DetailClient: {screen: DetailClient},
    PersonalInformation: {screen: PersonalInformation},
    GeneralInformation: {screen: GeneralInformation},
    Project: {screen: Project},
    RegisterVacation: {screen: RegisterVacation},
    Intro: {screen: Intro},
    Intro1: {screen: Intro1},
    Intro2: {screen: Intro2},
    // tuyển dụng
    HomeIntern: {screen: HomeIntern},
    InformationIntern: {screen: InformationIntern},
    SaveIntern: {screen: SaveIntern},
    NewsIntern: {screen: NewsIntern},
    HappeningsTitleSalary: {screen: HappeningsTitleSalary},
    // đăng ký vào ra
    HomeRegisterout: {screen: HomeRegisterout},
    ScreenRegisterOt: {screen: ScreenRegisterOt},
    DateTimepickerRegiss: {screen: DateTimepickerRegiss},
    InforRegisOut: {screen: InforRegisOut},
    //OTP
    ScreenOTP: {screen: ScreenOTP},
    RegistrationForm: {screen: RegistrationForm},

  },
  {
    headerMode: 'none',
    initialRouteName: 'HappeningsTitleSalary',
  },
);

const switchNavigator = createSwitchNavigator(
  {
    AppNavigator: AppNavigator,
  },
  {
    initialRouteName: 'AppNavigator',
  },
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
