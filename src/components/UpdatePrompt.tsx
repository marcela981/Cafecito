"use client";

import { useState, useEffect } from 'react';

export default function UpdatePrompt() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/static/sw.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              setUpdateAvailable(true);
            }
          });
        });
      });
    }
  }, []);

  const refreshApp = () => window.location.reload();

  return (
    <>
    {updateAvailable && (
      <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-coffee-200">
        <p>¡Nueva versión disponible!</p>
        <button 
          onClick={refreshApp}
          className="mt-2 bg-coffee-500 text-white px-4 py-2 rounded-lg"
        >
          Actualizar ahora
        </button>
      </div>
    )}
    </>
  );
}