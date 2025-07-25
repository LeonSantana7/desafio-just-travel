import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../types/ticket";
import type { CartItem } from "../types/cartItem";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Ticket>) => {
      const ticketToAdd = action.payload;

      if (!ticketToAdd?.id) {
        console.error("Tentativa de adicionar um ticket inválido ao carrinho.");
        return;
      }

      const existingItem = state.items.find(
        (item) => item.ticket.id === ticketToAdd.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: ticketToAdd.id,
          ticket: ticketToAdd,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.ticket.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
