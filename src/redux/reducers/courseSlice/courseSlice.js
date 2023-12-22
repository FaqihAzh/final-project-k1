import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    courses: [],
    categories: [],
    coursesUser: [],
    progress:[],
  },
  reducers: {
    updateCourses(state, action) {
      state.courses = action.payload;
    },
    updateCategories(state, action) {
      state.categories = action.payload;
    },
    updateCoursesUser(state, action) {
      state.coursesUser = action.payload;
    },
    updateProgress(state, action) {
      state.progress = action.payload
    },
  },
});

const courseReducer = courseSlice.reducer;
const { updateCourses, updateCategories, updateCoursesUser, updateProgress } = courseSlice.actions;

export { updateCourses, updateCategories, updateCoursesUser, updateProgress };
export default courseReducer;
