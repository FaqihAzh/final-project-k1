import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    courses: [],
    categories: [],
  },
  reducers: {
    updateCourses(state, action) {
      state.courses = action.payload;
    },
    updateCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

const courseReducer = courseSlice.reducer;
const { updateCourses, updateCategories } = courseSlice.actions;

export { updateCourses, updateCategories };
export default courseReducer;
