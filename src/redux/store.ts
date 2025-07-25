import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticketsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
