"use client";
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { useCartStore } from '@/lib/stores/cartStore';
import Link from 'next/link';
import Image from 'next/image';


export default function PaymentModal() {
  const { items } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
      <Dialog
        open={true}
        onClose={() => {}}
        static
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center min-h-screen"
        >
          <h2 className="text-2xl font-bold text-coffee-900 mb-6">
            Confirmar Pedido
          </h2>
  
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-white rounded-xl p-8 max-w-md w-full mx-4"
          >
          <Dialog.Title className="text-2xl font-bold text-coffee-900 mb-6">
            Confirmar Pedido
          </Dialog.Title>

          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center p-4 bg-coffee-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-coffee-900">{item.title}</p>
                    <p className="text-sm text-coffee-600">x{item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium text-coffee-900">
                  ${(item.price * item.quantity).toLocaleString('es-CO')}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-coffee-100 pt-4 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toLocaleString('es-CO')}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full bg-coffee-500 text-white py-3 rounded-lg hover:bg-coffee-600 transition flex items-center justify-center gap-2"
          >
            Proceder al Pago
          </Link>
        </motion.div>
      </motion.div>
    </Dialog>
  );
}