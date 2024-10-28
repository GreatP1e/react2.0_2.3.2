import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { fetchVegetables } from "./thunk";
import { VegetableData } from "../types";
interface ListState {
  vegetables: VegetableData[];
  loading: boolean;
}

const initialState: ListState = {
  vegetables: [],
  loading: true,
};

export const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    quantityIncrement: (state, { payload }: { payload: number }) => {
      return {
        ...state,
        vegetables: state.vegetables.map((el) => {
          if (el.id === payload) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        }),
      };
    },
    quantityDecrement: (state, { payload }: { payload: number }) => {
      return {
        ...state,
        vegetables: state.vegetables.map((el) => {
          if (el.id === payload) {
            return {
              ...el,
              quantity: el.quantity - 1 > 0 ? el.quantity - 1 : 1,
            };
          }
          return el;
        }),
      };
    },
    toggleCart: (state, { payload }: { payload: number }) => {
      return {
        ...state,
        vegetables: state.vegetables.map((el) => {
          if (el.id === payload) {
            return { ...el, inCart: !el.inCart };
          }
          return el;
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVegetables.fulfilled, (_, { payload }) => {
      const vegetablesData = payload.map((el) => ({
        ...el,
        quantity: 1,
        inCart: false,
      }));
      return { vegetables: vegetablesData, loading: false };
    });
  },
});
export const { quantityIncrement, quantityDecrement, toggleCart } =
  listSlice.actions;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
