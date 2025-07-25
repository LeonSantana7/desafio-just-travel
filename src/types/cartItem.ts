import type { Ticket } from "./ticket";

export interface CartItem {
  id: string;
  ticket: Ticket;
  quantity: number;
}
