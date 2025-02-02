'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfitCalculator from '@/components/ProfitCalculator';
import SectionHeader from '@/components/SectionHeader';
import { toast } from 'react-hot-toast';

export default function DashboardPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Acceso autorizado');
    } else {
      toast.error('Contraseña incorrecta');
      router.push('/');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-coffee-100 p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-coffee-900 mb-6">Acceso Restringido</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese la clave de acceso"
            className="w-full p-3 mb-4 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-coffee-500 text-white py-3 rounded-lg hover:bg-coffee-600 transition"
          >
            Acceder al Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      <section className="py-16 bg-coffee-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            title="Herramientas de Gestión"
            subtitle="Simulador financiero para tu negocio cafetero"
          />
          <ProfitCalculator />
        </div>
      </section>
    </main>
  );
}