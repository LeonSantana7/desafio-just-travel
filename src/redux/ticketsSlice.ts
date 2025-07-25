import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../types/ticket";

interface TicketsState {
  allTickets: Ticket[];
  loading: boolean;
}

const initialState: TicketsState = {
  allTickets: [],
  loading: true,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.allTickets = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setTickets, setLoading } = ticketsSlice.actions;

export default ticketsSlice.reducer;
