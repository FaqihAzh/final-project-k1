import { createSlice } from "@reduxjs/toolkit";

const promoSlice = createSlice({
  name: "Promo Slice",
  initialState: {
    promos: [],
  },
  reducers: {
    updatePromo(state, action) {
      state.promos = action.payload;
    },
  },
});

const promoReducer = promoSlice.reducer;
const { updatePromo } = promoSlice.actions;

export { updatePromo };
export default promoReducer;
