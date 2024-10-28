import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVegetable } from "../api/getVegetable";
import { Vegetable } from "../types";
import { AppDispatch, RootState } from "../store/store";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();

export const fetchVegetables = createAppAsyncThunk<Vegetable[]>(
  "list/fetchVegetables",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getVegetable();
      return res;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
