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
    coursesUser: [],
    progress: [],
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
    updateCoursesUser(state, action) {
      state.coursesUser = action.payload;
    },
    updateProgress(state, action) {
      state.progress = action.payload;
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
  updateCoursesUser,
  updateProgress,
} = courseSlice.actions;

export {
  updateCourses,
  updateMyCourses,
  updateCategories,
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
  updateCoursesUser,
  updateProgress,
};

export default courseReducer;
