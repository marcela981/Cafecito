"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useCartStore } from '@/lib/stores/cartStore';
import { FiCheckCircle } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };

export default function PaymentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, clearCart } = useCartStore();

  const total = items.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simular pago
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    clearCart();
    setIsOpen(false);
    toast.success('¡Pago exitoso! Recibirás un correo de confirmación');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-coffee-500 text-white px-6 py-3 rounded-lg hover:bg-coffee-600 transition"
      >
        Finalizar Compra
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black/30" />

          <div className="relative bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <Dialog.Title className="text-2xl font-bold text-coffee-900 mb-6">
              Confirmar Pago
            </Dialog.Title>

            <div className="space-y-4 mb-6">
              {items.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-coffee-600">{item.quantity}x</span>
                    <span>{item.title}</span>
                  </div>
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-coffee-100 pt-4 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-coffee-500 text-white py-3 rounded-lg hover:bg-coffee-600 transition flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                'Procesando...'
              ) : (
                <>
                  <FiCheckCircle className="text-xl" />
                  Confirmar Pago con MercadoPago
                </>
              )}
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}