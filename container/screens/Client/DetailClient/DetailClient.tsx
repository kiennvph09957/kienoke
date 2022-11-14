import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import AppHeader from '../../../../components/AppHeader';
import images from '../../../../res/images';
import sizes from '../../../../res/sizes';
import InfoGeneral from './InfoGeneral';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ContactActivity from './ContactActivity';
import SalesOpportunities from './SalesOpportunities';
import ContractInformation from './ContractInformation';
import ProjectInfo from './ProjectInfo';
import ServiceUseInfo from './ServiceUseInfo';
import OtherNCCServiceUsageInfor from './OtherNCCServiceUsageInfor';
import CustomercareInfo from './CustomercareInfo';
import ClueContact from './ClueContact';
interface Props {
  navigation: any;
}
interface State {
  check: any;
  id: any;
  param_id: any;
}
export class DetailClient extends Component<Props, State> {
  state: State = {
    check: false,
    id: null,
    param_id: null,
  };
  // data hoạt động tiếp xúc
  dataContactActivity = [
    {
      code: 'sndasdasid1',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 1',
      data_id: 1,
      time: '21/05/2022',
      id: 1,
      operation: 'Demo - giới thiệu - tư vấn giải pháp1',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI1',
      status: 1,
    },
    {
      code: 'sndasdasid2',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 2',
      data_id: 1,
      time: '22/05/2022',
      id: 2,
      operation: 'Demo - giới thiệu - tư vấn giải pháp2',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI2',
      status: 0,
    },
    {
      code: 'sndasdasid3',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 3',
      data_id: 2,
      time: '23/05/2022',
      id: 3,
      operation: 'Demo - giới thiệu - tư vấn giải pháp3',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI3',
      status: 1,
    },
    {
      code: 'sndasdasid4',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 4',
      data_id: 0,
      time: '24/05/2022',
      id: 4,
      operation: 'Demo - giới thiệu - tư vấn giải pháp4',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI4',
      status: 1,
    },
    {
      code: 'sndasdasid5',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 5',
      data_id: 2,
      time: '25/05/2022',
      id: 5,
      operation: 'Demo - giới thiệu - tư vấn giải pháp5',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI5',
      status: 1,
    },
    {
      code: 'sndasdasid6',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 6',
      data_id: 3,
      time: '26/05/2022',
      id: 6,
      operation: 'Demo - giới thiệu - tư vấn giải pháp6',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI6',
      status: 0,
    },
    {
      code: 'sndasdasid7',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 7',
      data_id: 4,
      time: '27/05/2022',
      id: 7,
      operation: 'Demo - giới thiệu - tư vấn giải pháp7',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI7',
      status: 1,
    },
    {
      code: 'sndasdasid8',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 8',
      data_id: 5,
      time: '28/05/2022',
      id: 8,
      operation: 'Demo - giới thiệu - tư vấn giải pháp8',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI8',
      status: 0,
    },
    {
      code: 'sndasdasid9',
      content:
        'Tư vấn giải pháp - demo giới thiệu sản phẩm cho TT CNTT và phó tổng chuyên trách lĩnh vực chuyển đổi số ngành dầu khí 9',
      data_id: 6,
      time: '29/05/2022',
      id: 9,
      operation: 'Demo - giới thiệu - tư vấn giải pháp9',
      operation_name: 'Tiếp xúc giai đoạn 1 CĐS PVI9',
      status: 1,
    },
  ];
  // data cơ hội bán hàng
  dataSalesOpportunity = [
    {
      clue: 'Nguyễn Văn Tiến 1',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 1',
      business_stage: 'Tư vấn sản phẩm 1',
      data_id: 1,
      describe: 'hihi 1',
      expected_end_date: '31/12/2021 1',
      expected_revenue: '95000000 1',
      expected_service: 'GP và CNTT 1',
      id: 1,
    },
    {
      clue: 'Nguyễn Văn Tiến 2',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 2',
      business_stage: 'Tư vấn sản phẩm 2',
      data_id: 2,
      describe: 'hihi 2',
      expected_end_date: '31/12/2021 2',
      expected_revenue: '95000000 2',
      expected_service: 'GP và CNTT 2',
      id: 2,
    },
    {
      clue: 'Nguyễn Văn Tiến 3',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 3',
      business_stage: 'Tư vấn sản phẩm 3',
      data_id: 3,
      describe: 'hihi 3',
      expected_end_date: '31/12/2021 3',
      expected_revenue: '95000000 3',
      expected_service: 'GP và CNTT 3',
      id: 3,
    },
    {
      clue: 'Nguyễn Văn Tiến 4',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 4',
      business_stage: 'Tư vấn sản phẩm 4',
      data_id: 2,
      describe: 'hihi 4',
      expected_end_date: '31/12/2021 4',
      expected_revenue: '95000000 4',
      expected_service: 'GP và CNTT 4',
      id: 4,
    },
    {
      clue: 'Nguyễn Văn Tiến 5',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 5',
      business_stage: 'Tư vấn sản phẩm 5',
      data_id: 1,
      describe: 'hihi 5',
      expected_end_date: '31/12/2021 5',
      expected_revenue: '95000000 5',
      expected_service: 'GP và CNTT 5',
      id: 5,
    },
    {
      clue: 'Nguyễn Văn Tiến 6',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 6',
      business_stage: 'Tư vấn sản phẩm 6',
      data_id: 2,
      describe: 'hihi 6',
      expected_end_date: '31/12/2021 6',
      expected_revenue: '95000000 6',
      expected_service: 'GP và CNTT 6',
      id: 6,
    },
    {
      clue: 'Nguyễn Văn Tiến 7',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 7',
      business_stage: 'Tư vấn sản phẩm 7',
      data_id: 2,
      describe: 'hihi 7',
      expected_end_date: '31/12/2021 7',
      expected_revenue: '95000000 7',
      expected_service: 'GP và CNTT 7',
      id: 7,
    },
    {
      clue: 'Nguyễn Văn Tiến 8',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 8',
      business_stage: 'Tư vấn sản phẩm 8',
      data_id: 3,
      describe: 'hihi 8',
      expected_end_date: '31/12/2021 8',
      expected_revenue: '95000000 8',
      expected_service: 'GP và CNTT 8',
      id: 8,
    },
    {
      clue: 'Nguyễn Văn Tiến 9',
      opportunity: 'Tư vấn giải pháp hạ tầng máy chủ ảo 9',
      business_stage: 'Tư vấn sản phẩm 9',
      data_id: 4,
      describe: 'hihi 9',
      expected_end_date: '31/12/2021 9',
      expected_revenue: '95000000 9',
      expected_service: 'GP và CNTT 9',
      id: 9,
    },
  ];
  // data thông tin hợp đồng
  dataContractInformation = [
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 1',
      contract_value: 'Thoả thuận hợp tác 1',
      data_id: 1,
      id: 1,
      some_contract: 'HĐ - TTHT CĐS PVI 1',
      status: 1,
      time: '11/11/2021 ',
      time_end: '11/12/2021',
      time_start: '1/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 2',
      contract_value: 'Thoả thuận hợp tác 2',
      data_id: 3,
      id: 2,
      some_contract: 'HĐ - TTHT CĐS PVI 2',
      status: 0,
      time: '12/11/2021 ',
      time_end: '12/12/2021',
      time_start: '2/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 3',
      contract_value: 'Thoả thuận hợp tác 3',
      data_id: 1,
      id: 3,
      some_contract: 'HĐ - TTHT CĐS PVI 3',
      status: 0,
      time: '13/11/2021 ',
      time_end: '13/12/2021',
      time_start: '3/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 4',
      contract_value: 'Thoả thuận hợp tác 4',
      data_id: 2,
      id: 4,
      some_contract: 'HĐ - TTHT CĐS PVI 4',
      status: 0,
      time: '14/11/2021 ',
      time_end: '14/12/2021',
      time_start: '4/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 5',
      contract_value: 'Thoả thuận hợp tác 5',
      data_id: 5,
      id: 5,
      some_contract: 'HĐ - TTHT CĐS PVI 5',
      status: 1,
      time: '15/11/2021 ',
      time_end: '15/12/2021',
      time_start: '5/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 6',
      contract_value: 'Thoả thuận hợp tác 6',
      data_id: 2,
      id: 6,
      some_contract: 'HĐ - TTHT CĐS PVI 6',
      status: 1,
      time: '16/11/2021 ',
      time_end: '16/12/2021',
      time_start: '6/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 7',
      contract_value: 'Thoả thuận hợp tác 7',
      data_id: 1,
      id: 7,
      some_contract: 'HĐ - TTHT CĐS PVI 7',
      status: 0,
      time: '17/11/2021 ',
      time_end: '17/12/2021',
      time_start: '7/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 8',
      contract_value: 'Thoả thuận hợp tác 8',
      data_id: 3,
      id: 8,
      some_contract: 'HĐ - TTHT CĐS PVI 8',
      status: 0,
      time: '18/11/2021 ',
      time_end: '18/12/2021',
      time_start: '8/12/2021',
    },
    {
      contract_name:
        'Hơp đồng ký kết thoả thuận hợp tác chuyển đổi số lĩnh vực dầu khí năm 2022 9',
      contract_value: 'Thoả thuận hợp tác 9',
      data_id: 4,
      id: 9,
      some_contract: 'HĐ - TTHT CĐS PVI 9',
      status: 1,
      time: '19/11/2021 ',
      time_end: '19/12/2021',
      time_start: '9/12/2021',
    },
  ];
  // data thông tin dự án
  dataProjectInfo = [
    {
      am: '1',
      construction_progress: 'Xây dựng hệ thông Voffice 1',
      data_id: 1,
      id: 1,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 1',
      pm: '1',
      status: 1,
      unit: 'Khách hàng lớn 1',
    },
    {
      am: '2',
      construction_progress: 'Xây dựng hệ thông Voffice 2',
      data_id: 3,
      id: 2,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 2',
      pm: '2',
      status: 1,
      unit: 'Khách hàng lớn 2',
    },
    {
      am: '3',
      construction_progress: 'Xây dựng hệ thông Voffice 3',
      data_id: 1,
      id: 3,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 3',
      pm: '3',
      status: 1,
      unit: 'Khách hàng lớn 3',
    },
    {
      am: '4',
      construction_progress: 'Xây dựng hệ thông Voffice 4',
      data_id: 2,
      id: 4,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 4',
      pm: '4',
      status: 0,
      unit: 'Khách hàng lớn 4',
    },
    {
      am: '5',
      construction_progress: 'Xây dựng hệ thông Voffice 5',
      data_id: 3,
      id: 5,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 5',
      pm: '5',
      status: 0,
      unit: 'Khách hàng lớn 5',
    },
    {
      am: '6',
      construction_progress: 'Xây dựng hệ thông Voffice 6',
      data_id: 4,
      id: 6,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 6',
      pm: '6',
      status: 1,
      unit: 'Khách hàng lớn 6',
    },
    {
      am: '7',
      construction_progress: 'Xây dựng hệ thông Voffice 7',
      data_id: 4,
      id: 7,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 7',
      pm: '7',
      status: 0,
      unit: 'Khách hàng lớn 7',
    },
    {
      am: '8',
      construction_progress: 'Xây dựng hệ thông Voffice 8',
      data_id: 5,
      id: 8,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 8',
      pm: '8',
      status: 1,
      unit: 'Khách hàng lớn 8',
    },
    {
      am: '9',
      construction_progress: 'Xây dựng hệ thông Voffice 9',
      data_id: 3,
      id: 9,
      name_project: 'Chuyển đổi lĩnh vực dầu khí PVI 9',
      pm: '9',
      status: 0,
      unit: 'Khách hàng lớn 9',
    },
  ];

  // data thông tin sử dụng dịch vụ
  dataServiceUserInfo = [
    {
      data_id: 1,
      id: 1,
      name: 'ATTT (security) 1',
      node: 'SOC  Sử dụng dịch vụ Office Wan 1',
      status: 1,
      unit: 1,
    },
    {
      data_id: 2,
      id: 2,
      name: 'ATTT (security) 2',
      node: 'SOC  Sử dụng dịch vụ Office Wan 2',
      status: 1,
      unit: 2,
    },
    {
      data_id: 3,
      id: 3,
      name: 'ATTT (security) 3',
      node: 'SOC  Sử dụng dịch vụ Office Wan 3',
      status: 1,
      unit: 3,
    },
    {
      data_id: 4,
      id: 4,
      name: 'ATTT (security) 4',
      node: 'SOC  Sử dụng dịch vụ Office Wan 4',
      status: 1,
      unit: 4,
    },
    {
      data_id: 5,
      id: 5,
      name: 'ATTT (security) 5',
      node: 'SOC  Sử dụng dịch vụ Office Wan 5',
      status: 1,
      unit: 5,
    },
    {
      data_id: 6,
      id: 6,
      name: 'ATTT (security) 6',
      node: 'SOC  Sử dụng dịch vụ Office Wan 6',
      status: 1,
      unit: 6,
    },
    {
      data_id: 7,
      id: 7,
      name: 'ATTT (security) 7',
      node: 'SOC  Sử dụng dịch vụ Office Wan 7',
      status: 1,
      unit: 7,
    },
    {
      data_id: 8,
      id: 8,
      name: 'ATTT (security) 8',
      node: 'SOC  Sử dụng dịch vụ Office Wan 8',
      status: 1,
      unit: 8,
    },
    {
      data_id: 9,
      id: 9,
      name: 'ATTT (security) 9',
      node: 'SOC  Sử dụng dịch vụ Office Wan 9',
      status: 1,
      unit: 9,
    },
  ];

  // data Thông tin sử dụng dịch vụ NCC khác
  dataOtherNCCServiceUsageInfor = [
    {
      data_id: 1,
      id: 1,
      quantity: 1,
      service: 'Kênh truyền 1',
      status: 1,
      supplier: 'CMC 1',
      time_and: '11/06/2022',
      time_start: '11/05/2022',
    },
    {
      data_id: 2,
      id: 2,
      quantity: 2,
      service: 'Kênh truyền 2',
      status: 2,
      supplier: 'CMC 2',
      time_and: '12/06/2022',
      time_start: '12/05/2022',
    },
    {
      data_id: 1,
      id: 3,
      quantity: 3,
      service: 'Kênh truyền 3',
      status: 3,
      supplier: 'CMC 3',
      time_and: '13/06/2022',
      time_start: '13/05/2022',
    },
    {
      data_id: 2,
      id: 4,
      quantity: 4,
      service: 'Kênh truyền 4',
      status: 4,
      supplier: 'CMC 4',
      time_and: '14/06/2022',
      time_start: '14/05/2022',
    },
    {
      data_id: 3,
      id: 5,
      quantity: 5,
      service: 'Kênh truyền 5',
      status: 5,
      supplier: 'CMC 5',
      time_and: '15/06/2022',
      time_start: '15/05/2022',
    },
    {
      data_id: 5,
      id: 6,
      quantity: 6,
      service: 'Kênh truyền 6',
      status: 6,
      supplier: 'CMC 6',
      time_and: '16/06/2022',
      time_start: '16/05/2022',
    },
    {
      data_id: 4,
      id: 7,
      quantity: 7,
      service: 'Kênh truyền 7',
      status: 7,
      supplier: 'CMC 7',
      time_and: '17/06/2022',
      time_start: '17/05/2022',
    },
    {
      data_id: 6,
      id: 8,
      quantity: 8,
      service: 'Kênh truyền 8',
      status: 8,
      supplier: 'CMC 8',
      time_and: '18/06/2022',
      time_start: '18/05/2022',
    },
    {
      data_id: 7,
      id: 9,
      quantity: 9,
      service: 'Kênh truyền 9',
      status: 9,
      supplier: 'CMC 9',
      time_and: '19/06/2022',
      time_start: '19/05/2022',
    },
  ];

  //data Thông chăm sóc khách hàng
  dataCustomercareInfo = [
    {
      campaign: 'CSKH dịp trung thu 1',
      data_id: 1,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp1',
      id: 1,
      name: 'Lê Hồng Hà 1',
      phone: '2305461654 1',
      position: 'PGĐ1',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 1',
      second_level_unit: '1',
      type_care: 'Cá nhân 1',
      unit_rating: 'Kim cương 1',
      value_collective_care: '1',
    },
    {
      campaign: 'CSKH dịp trung thu 2',
      data_id: 1,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp2',
      id: 2,
      name: 'Lê Hồng Hà 2',
      phone: '2305461654 2',
      position: 'PGĐ2',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 2',
      second_level_unit: '2',
      type_care: 'Cá nhân 2',
      unit_rating: 'Kim cương 2',
      value_collective_care: '2',
    },
    {
      campaign: 'CSKH dịp trung thu 3',
      data_id: 2,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp3',
      id: 3,
      name: 'Lê Hồng Hà 3',
      phone: '2305461654 3',
      position: 'PGĐ3',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 3',
      second_level_unit: '3',
      type_care: 'Cá nhân 3',
      unit_rating: 'Kim cương 3',
      value_collective_care: '3',
    },
    {
      campaign: 'CSKH dịp trung thu 4',
      data_id: 3,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp4',
      id: 4,
      name: 'Lê Hồng Hà 4',
      phone: '2305461654 4',
      position: 'PGĐ4',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 4',
      second_level_unit: '4',
      type_care: 'Cá nhân 4',
      unit_rating: 'Kim cương 4',
      value_collective_care: '4',
    },
    {
      campaign: 'CSKH dịp trung thu 5',
      data_id: 3,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp5',
      id: 5,
      name: 'Lê Hồng Hà 5',
      phone: '2305461654 5',
      position: 'PGĐ5',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 5',
      second_level_unit: '5',
      type_care: 'Cá nhân 5',
      unit_rating: 'Kim cương 5',
      value_collective_care: '5',
    },
    {
      campaign: 'CSKH dịp trung thu 6',
      data_id: 4,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp6',
      id: 6,
      name: 'Lê Hồng Hà 6',
      phone: '2305461654 6',
      position: 'PGĐ6',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 6',
      second_level_unit: '6',
      type_care: 'Cá nhân 6',
      unit_rating: 'Kim cương 6',
      value_collective_care: '6',
    },
    {
      campaign: 'CSKH dịp trung thu 7',
      data_id: 5,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp7',
      id: 7,
      name: 'Lê Hồng Hà 7',
      phone: '2305461654 7',
      position: 'PGĐ7',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 7',
      second_level_unit: '7',
      type_care: 'Cá nhân 7',
      unit_rating: 'Kim cương 7',
      value_collective_care: '7',
    },
    {
      campaign: 'CSKH dịp trung thu 8',
      data_id: 6,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp8',
      id: 8,
      name: 'Lê Hồng Hà 8',
      phone: '2305461654 8',
      position: 'PGĐ8',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 8',
      second_level_unit: '8',
      type_care: 'Cá nhân 8',
      unit_rating: 'Kim cương 8',
      value_collective_care: '8',
    },
    {
      campaign: 'CSKH dịp trung thu 9',
      data_id: 3,
      generating_unit: 'Trung tâm Bán hàng KH Doanh nghiệp9',
      id: 9,
      name: 'Lê Hồng Hà 9',
      phone: '2305461654 9',
      position: 'PGĐ9',
      role: 'Cá nhân quyết định: Giá trị chăm sóc khách hàng: quà VIP 9',
      second_level_unit: '9',
      type_care: 'Cá nhân 9',
      unit_rating: 'Kim cương 9',
      value_collective_care: '9',
    },
  ];

  //data Đầu mối liên hệ
  dataClueContact = [
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 1',
      birthday: '11/02/1980',
      data_id: 1,
      email: 'quachnv@viettec.comm.vn 1',
      id: 1,
      name: 'Nguyễn Văn Quách 1',
      phone: '09332323232 1',
      position: 'Giám đốc 1',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 2',
      birthday: '12/02/1980',
      data_id: 2,
      email: 'quachnv@viettec.comm.vn 2',
      id: 2,
      name: 'Nguyễn Văn Quách 2',
      phone: '09332323232 2',
      position: 'Giám đốc 2',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 3',
      birthday: '13/02/1980',
      data_id: 3,
      email: 'quachnv@viettec.comm.vn 3',
      id: 3,
      name: 'Nguyễn Văn Quách 3',
      phone: '09332323232 3',
      position: 'Giám đốc 3',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 4',
      birthday: '14/02/1980',
      data_id: 4,
      email: 'quachnv@viettec.comm.vn 4',
      id: 4,
      name: 'Nguyễn Văn Quách 4',
      phone: '09332323232 4',
      position: 'Giám đốc 4',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 5',
      birthday: '15/02/1980',
      data_id: 5,
      email: 'quachnv@viettec.comm.vn 5',
      id: 5,
      name: 'Nguyễn Văn Quách 5',
      phone: '09332323232 5',
      position: 'Giám đốc 5',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 6',
      birthday: '16/02/1980',
      data_id: 6,
      email: 'quachnv@viettec.comm.vn 6',
      id: 6,
      name: 'Nguyễn Văn Quách 6',
      phone: '09332323232 6',
      position: 'Giám đốc 6',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 7',
      birthday: '17/02/1980',
      data_id: 7,
      email: 'quachnv@viettec.comm.vn 7',
      id: 7,
      name: 'Nguyễn Văn Quách 7',
      phone: '09332323232 7',
      position: 'Giám đốc 7',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 8',
      birthday: '18/02/1980',
      data_id: 8,
      email: 'quachnv@viettec.comm.vn 8',
      id: 8,
      name: 'Nguyễn Văn Quách 8',
      phone: '09332323232 8',
      position: 'Giám đốc 8',
    },
    {
      address: 'P502 - 24T2 Hoàng Đạo Thuý - Trung Hoà - Cầu Giấy 9',
      birthday: '19/02/1980',
      data_id: 9,
      email: 'quachnv@viettec.comm.vn 9',
      id: 9,
      name: 'Nguyễn Văn Quách 9',
      phone: '09332323232 9',
      position: 'Giám đốc 9',
    },
  ];
  renderHeader = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>Chi tiết khách hàng</Text>
      <TouchableOpacity style={{marginRight: 20}}>
        <Image source={images.Groupa1} />
      </TouchableOpacity>
    </View>
  );

  componentDidMount() {
    const {state} = this.props.navigation;
    this.setState({param_id: state.params.id});
  }

  //   chọn danh mục
  clickCate = (id: any) => {
    if (id == this.state.id && this.state.id == '1') {
      return <InfoGeneral type={this.state.param_id} />;
    }
    if (id == this.state.id && this.state.id == '2') {
      return (
        <ContactActivity
          type={this.state.param_id}
          data={this.dataContactActivity}
        />
      );
    }
    if (id == this.state.id && this.state.id == '3') {
      return (
        <SalesOpportunities
          type={this.state.param_id}
          data={this.dataSalesOpportunity}
        />
      );
    }
    if (id == this.state.id && this.state.id == '4') {
      return (
        <ContractInformation
          type={this.state.param_id}
          data={this.dataContractInformation}
        />
      );
    }
    if (id == this.state.id && this.state.id == '5') {
      return (
        <ProjectInfo type={this.state.param_id} data={this.dataProjectInfo} />
      );
    }
    if (id == this.state.id && this.state.id == '6') {
      return (
        <ServiceUseInfo
          type={this.state.param_id}
          data={this.dataServiceUserInfo}
        />
      );
    }
    if (id == this.state.id && this.state.id == '7') {
      return (
        <OtherNCCServiceUsageInfor
          type={this.state.param_id}
          data={this.dataOtherNCCServiceUsageInfor}
        />
      );
    }
    if (id == this.state.id && this.state.id == '8') {
      return (
        <CustomercareInfo
          type={this.state.param_id}
          data={this.dataCustomercareInfo}
        />
      );
    }
    if (id == this.state.id && this.state.id == '9') {
      return (
        <ClueContact type={this.state.param_id} data={this.dataClueContact} />
      );
    } else {
      return <></>;
    }
  };
  //   chọn danh mục
  clickIcon = (id: any) => {
    if (id == this.state.id && this.state.id == '1') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '2') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '3') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '4') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '5') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '6') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '7') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '8') {
      return <Image source={images.Polygon5} />;
    }
    if (id == this.state.id && this.state.id == '9') {
    } else {
      return <Image source={images.Polygon3} />;
    }
  };
  render() {
    const {state} = this.props.navigation;
    const id = state.params.id;

    const dataDetail = [
      {id: 1, name: 'Thông tin chung'},
      {
        id: 2,
        name: `Hoạt động tiếp xúc (0${
          this.dataContactActivity.filter((item: any) => item.data_id == id)
            .length
        })`,
      },
      {
        id: 3,
        name: `Cơ hội bán hàng (0${
          this.dataSalesOpportunity.filter((item: any) => item.data_id == id)
            .length
        })`,
      },
      {
        id: 4,
        name: `Thông tin hợp đồng (0${
          this.dataContractInformation.filter((item: any) => item.data_id == id)
            .length
        })`,
      },
      {
        id: 5,
        name: `Thông tin dự án (0${
          this.dataProjectInfo.filter((item: any) => item.data_id == id).length
        })`,
      },
      {
        id: 6,
        name: `Thông tin sử dụng dịch vụ (0${
          this.dataServiceUserInfo.filter((item: any) => item.data_id == id)
            .length
        })`,
      },
      {
        id: 7,
        name: `Thông tin sử dụng dịch vụ NCC khác (0${
          this.dataOtherNCCServiceUsageInfor.filter(
            (item: any) => item.data_id == id,
          ).length
        })`,
      },
      {
        id: 8,
        name: `Thông chăm sóc khách hàng (0${
          this.dataCustomercareInfo.filter((item: any) => item.data_id == id)
            .length
        })`,
      },
      {id: 9, name: `Đầu mối liên hệ`},
    ];

    return (
      <View style={{flex: 1}}>
        <AppHeader
          back
          onBackPress={() => this.props.navigation.goBack()}
          contentCustom
          contentCustomJSX={this.renderHeader()}
        />
        <View style={styles.main}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.box}>
                <Text style={styles.titleList}>Chi tiết khách hàng</Text>
                <Text style={styles.name}>{state.params.name}</Text>
              </View>
              {dataDetail.map((item: any) => (
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => (
                      item.id !== null && this.setState({id: item.id}),
                      item.id == this.state.id && this.setState({id: null})
                    )}>
                    <Text style={styles.name}>{item.name}</Text>
                    {this.clickIcon(item.id)}
                  </TouchableOpacity>
                  {this.clickCate(item.id)}
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

export default DetailClient;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: sizes._30sdp,
    borderTopRightRadius: sizes._30sdp,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },
  box: {
    marginLeft: sizes._20sdp,
    marginRight: sizes._20sdp,
  },
  titleList: {
    color: '#4D4B4B',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: sizes._20sdp,
  },
  button: {
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  name: {
    color: '#4D4B4B',
    fontSize: 16,
    fontWeight: '400',
  },
});
