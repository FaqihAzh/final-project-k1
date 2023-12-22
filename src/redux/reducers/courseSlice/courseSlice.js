import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    courses: [],
    myCourses: [],
    categories: [],
    isMyCourse: false,
    isNotif: false,
    isProfile: false,
  },
  reducers: {
    updateCourses(state, action) {
      state.courses = action.payload;
    },
    updateMyCourses(state, action) {
      state.myCourses = action.payload;
    },
    updateCategories(state, action) {
      state.categories = action.payload;
    },
    setIsMyCourse(state, action) {
      state.isMyCourse = action.payload;
    },
    setIsNotif(state, action) {
      state.isNotif = action.payload;
    },
    setIsProfile(state, action) {
      state.isProfile = action.payload;
    },
  },
});

const courseReducer = courseSlice.reducer;
const {
  updateCourses,
  updateMyCourses,
  updateCategories,
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} = courseSlice.actions;

export {
  updateCourses,
  updateMyCourses,
  updateCategories,
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
};
export default courseReducer;
