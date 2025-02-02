// src/app/cart/page.tsx
"use client";
import { useCartStore } from "@/lib/stores/cartStore";

export default function CartPage() {
  const { items, removeItem } = useCartStore(); // Quitar variables no usadas
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow">
          {/* Contenido del item */}
          <button 
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      ))}
      
      <div className="text-xl font-bold mt-8">
        Total: ${total.toLocaleString('es-CO')}
      </div>
    </div>
  );
}