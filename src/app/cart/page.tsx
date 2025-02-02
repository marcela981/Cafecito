"use client";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';
import PaymentModal from '@/components/PaymentModal';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-coffee-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center mb-8">
          <a href="/cafe" className="flex items-center text-coffee-100 hover:text-coffee-300">
            <FiArrowLeft className="mr-2" /> Seguir comprando
          </a>
          <h1 className="text-3xl font-bold text-coffee-300 ml-4">Tu Pedido</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-coffee-600 mb-4">Tu carrito está vacío</p>
            <a
              href="/cafe"
              className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition"
            >
              Explorar Cafés
            </a>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-sm divide-y divide-coffee-100">
              {items.map((item) => (
                <div key={item.id} className="p-6 flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-coffee-100">{item.title}</h3>
                    <p className="text-sm text-coffee-900 mb-2">Origen: {item.origin}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-coffee-100 text-coffee-900 hover:bg-coffee-200 transition"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-coffee-100 text-coffee-900 hover:bg-coffee-200 transition"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-semibold text-coffee-900">
                          ${(item.price * item.quantity).toLocaleString('es-CO')}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-coffee-100 hover:text-coffee-700 mt-1"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-coffee-100 rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-coffee-900">Total del pedido</h3>
                <p className="text-2xl font-bold text-coffee-900">
                  ${total.toLocaleString('es-CO')}
                </p>
              </div>
              
              <PaymentModal />
              
              <p className="text-sm text-coffee-900 mt-4 text-center">
                Envío calculado en el siguiente paso
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}