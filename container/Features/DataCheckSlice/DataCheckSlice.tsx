import {createSlice} from '@reduxjs/toolkit';

// basic example slice copied from the docs
const dataCheckSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {
      modalMins: false, //giảm số lượng món
      modalAdd: false, //thêm số lượng món
      check: false,
      checkModalMenu: false,
      checkMeal: false,
      checkNameMeal: 1, //chon hiện bữa sáng, trưa , tối
      value: 1,
      idCheck: 0, //check lấy id của bữa sáng hay trưa hay tối để hiện thực đơn
      checkNotificationMeal: '', //check để thông báo đã thêm món hay bỏ món
    },
  },
  reducers: {
    checkNameMeal: (state: any, action: any) => {
      state.value.checkNameMeal = action.payload;
    },
    check: (state: any, action: any) => {
      state.value.check = action.payload;
    },
    checkModalMenu: (state: any, action: any) => {
      state.value.checkModalMenu = action.payload;
    },
    idCheck: (state: any, action: any) => {
      state.value.idCheck = action.payload;
    },
    checkAddMeal: (state: any, action: any) => {
      state.value.checkAddMeal = action.payload;
    },
    modalAdd: (state: any, action: any) => {
      state.value.modalAdd = action.payload;
    },
    modalMins: (state: any, action: any) => {
      state.value.modalMins = action.payload;
    },
    checkNotificationMeal: (state: any, action: any) => {
      state.value.checkNotificationMeal = action.payload;
    },
  },
});

// destructure actions and reducer from the slice (or you can access as dataCheckSlice.actions)

// export individual action creator functions
export const {
  checkNameMeal,
  checkModalMenu,
  checkAddMeal,
  modalAdd,
  idCheck,
  check,
  checkNotificationMeal,
  modalMins
} = dataCheckSlice.actions;

// often the reducer is a default export, but that doesn't matter
export default dataCheckSlice.reducer;
