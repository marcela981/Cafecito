"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCartStore } from '@/lib/stores/cartStore';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCartStore();
  const router = useRouter();

  const handlePayment = async (method: string) => {
    setIsProcessing(true);
    setSelectedMethod(method);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    clearCart();
    toast.success('¡Pago exitoso! Redirigiendo...');
    
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-coffee-50 py-12"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <h2 className="text-3xl font-bold text-coffee-900 mb-8">Método de Pago</h2>
          
          <div className="space-y-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePayment('mercadopago')}
              disabled={isProcessing}
              className="w-full p-6 rounded-xl border-2 border-coffee-100 hover:border-coffee-300 transition-colors flex items-center gap-4"
            >
              <Image 
                src="/images/mercadopago-logo.png" 
                alt="MercadoPago" 
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="text-lg font-medium text-coffee-900">Pagar con MercadoPago</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePayment('pse')}
              disabled={isProcessing}
              className="w-full p-6 rounded-xl border-2 border-coffee-100 hover:border-coffee-300 transition-colors flex items-center gap-4"
            >
              <Image 
                src="/images/pse-logo.png" 
                alt="PSE" 
                width={80}
                height={32}
                className="h-8 object-contain"
              />
              <span className="text-lg font-medium text-coffee-900">Pagar con PSE</span>
            </motion.button>
          </div>

          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 p-4 bg-coffee-50 rounded-lg text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-coffee-900"></div>
                <p className="text-coffee-100">
                  Procesando pago con {selectedMethod === 'mercadopago' ? 'MercadoPago' : 'PSE'}...
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}