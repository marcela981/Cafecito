// src/lib/stores/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  origin: string;
  quantity: number;
}

interface CartState {
  items: Array<CartItem & { quantity: number }>;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    const existing = state.items.find(i => i.id === item.id);
    if (existing) {
      return {
        items: state.items.map(i => i.id === item.id 
          ? {...i, quantity: i.quantity + 1} 
          : i)
      };
    }
    return { items: [...state.items, {...item, quantity: 1}] };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(i => i.id === id 
      ? {...i, quantity: Math.max(1, quantity)} 
      : i)
  })),
  clearCart: () => set({ items: [] })
}));