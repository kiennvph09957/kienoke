import LocalizedStrings from 'react-native-localization';
import en from './languages/en';

export default new LocalizedStrings({
    vi: Object.assign("",{
        tab_contact: 'SplashScreen',
        salary_infomation: 'Thông tin lương',
        notify: 'Thông báo',
        session_invalid: 'Phiên đăng nhập đã hết hạn, bạn vui lòng đăng nhập lại.',
        ok: 'Ok',
        vtb_mes_send_contribute_success: 'Gửi đóng góp thành công!',
        vtb_mes_send_contribute_fail: 'Gứi đóng góp không thành công!',
    }),
    en: en
});