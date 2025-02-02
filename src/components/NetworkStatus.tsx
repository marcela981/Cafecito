"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-coffee-900 text-coffee-100 p-4 rounded-lg shadow-xl flex items-center gap-3 max-w-md"
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <p className="font-medium">Modo offline activado</p>
            <p className="text-sm opacity-90">Algunas funciones pueden no estar disponibles</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}