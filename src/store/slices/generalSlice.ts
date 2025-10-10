import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GeneralState {
  appLanguage: string;
}

const initialState: GeneralState = {
  appLanguage: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setAppLanguage } = generalSlice.actions;
export default generalSlice.reducer;
