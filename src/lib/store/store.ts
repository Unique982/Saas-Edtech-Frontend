import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

import teacherSlice from "./teacher/teacherSlice";
// institute realted store
// institute
import instituteSlice from "./institute/institute";
// institute teacher
import instituteTeacherSlice from "./institute/teacher/institute-teacher-slice";
// institute category
import instituteCategorySlice from "./institute/category/institute-category-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    teacher: teacherSlice,
    instituteTeacher: instituteTeacherSlice,
    institute: instituteSlice,
    instituteCategory: instituteCategorySlice,
  },
});
export default store;
// useDispatch type dina chai xa
export type AppDispatch = typeof store.dispatch;
// useSelector type dina chai xa
export type RootState = ReturnType<typeof store.getState>;

// differnts hooks provide garxa : useSelector(), useDispatch()
