'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Chart } from 'chart.js/auto';
import { coffeeColorPalettes } from '@/lib/theme/colorPalettes';
import { toast } from 'react-hot-toast';
import { utils, writeFile } from 'xlsx';
import { FiFileText } from 'react-icons/fi';


export default function ProfitCalculator() {
  const [dailySales, setDailySales] = useState<number>(0);
  const [dailyCosts, setDailyCosts] = useState<number>(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const calculateProjection = useCallback(() => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    return days.map(day => ({
      day,
      profit: (dailySales * day) - (dailyCosts * day)
    }));
  }, [dailySales, dailyCosts]);

  useEffect(() => {
    if (dailyCosts > dailySales && dailyCosts > 0) {
      toast.error('¡Atención! Los costos superan las ventas', {
        icon: '⚠️',
        style: {
          border: '2px solid #ef4444',
          padding: '16px',
          color: '#7f1d1d',
          background: '#fee2e2'
        }
      });
    }
  }, [dailyCosts, dailySales]);

  const exportToExcel = () => {
    try {
      const data = calculateProjection().map(d => ({
        'Día': d.day,
        'Ventas Diarias (COP)': dailySales,
        'Costos Diarios (COP)': dailyCosts,
        'Ganancia Diaria (COP)': d.profit,
        'Ganancia Acumulada (COP)': (dailySales * d.day) - (dailyCosts * d.day)
      }));

      const worksheet = utils.json_to_sheet(data);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, "Reporte Mensual");
      
      const date = new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      writeFile(workbook, `Reporte_Cafecito_${date.replace(/\//g, '-')}.xlsx`);
      toast.success('Reporte generado exitosamente');
    } catch (error) {
      toast.error('Error al generar el reporte');
      console.error('Error en exportToExcel:', error);
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = calculateProjection();
      const palette = coffeeColorPalettes[0].colors;

      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: data.map(d => `Día ${d.day}`),
          datasets: [{
            label: 'Ganancia acumulada',
            data: data.map(d => d.profit),
            backgroundColor: palette.accent,
            borderColor: palette.primary,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: { color: palette.primary }
            },
            tooltip: {
              callbacks: {
                label: (context) => ` $${new Intl.NumberFormat('es-CO').format(context.parsed.y)}`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: palette.primary,
                callback: (value) => `$${new Intl.NumberFormat('es-CO').format(Number(value))}`
              },
              grid: { color: `${palette.primary}20` }
            },
            x: {
              ticks: {
                color: palette.primary,
                maxRotation: 0,
                autoSkipPadding: 10
              },
              grid: { color: `${palette.primary}20` }
            }
          }
        }
      });
    }

    return () => chartInstance.current?.destroy();
  }, [dailySales, dailyCosts, calculateProjection]);

  return (
    <div className="bg-coffee-50 rounded-xl shadow-lg p-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-coffee-900">Simulador Financiero</h2>
        <p className="text-coffee-600 mt-2">Proyección mensual basada en tus ingresos y costos diarios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: 'Ventas Diarias', value: dailySales },
          { title: 'Costos Diarios', value: dailyCosts },
          { title: 'Ganancia Mensual', value: (dailySales * 30) - (dailyCosts * 30) }
        ].map((metric, index) => (
          <div key={index} className={`p-4 rounded-xl ${
            index === 2 ? 'bg-coffee-500 text-white' : 'bg-coffee-300'
          }`}>
            <h3 className="text-sm font-medium">{metric.title}</h3>
            <p className="text-2xl font-bold mt-2">
              ${new Intl.NumberFormat('es-CO').format(metric.value)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <label className="block text-coffee-900">
            Ventas Diarias (COP)
            <input
              type="number"
              value={dailySales}
              onChange={(e) => setDailySales(Math.max(0, Number(e.target.value)))}
              className="w-full mt-2 p-3 rounded-lg border border-coffee-200 focus:ring-2 focus:ring-coffee-500"
              min="0"
            />
          </label>
          
          <label className="block text-coffee-900">
            Costos Operativos Diarios (COP)
            <input
              type="number"
              value={dailyCosts}
              onChange={(e) => setDailyCosts(Math.max(0, Number(e.target.value)))}
              className={`w-full mt-2 p-3 rounded-lg border ${
                dailyCosts > dailySales && dailyCosts > 0 
                  ? 'border-red-500 ring-2 ring-red-500' 
                  : 'border-coffee-200'
              } focus:ring-2 focus:ring-coffee-500`}
              min="0"
            />
          </label>
        </div>
        
        <div className="bg-coffee-100 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-coffee-900 mb-4">Fórmula</h3>
          <div className="space-y-2 text-coffee-900">
            <p>Ganancia Mensual = (Ventas Diarias × 30) - (Costos Diarios × 30)</p>
            <p className="text-sm opacity-75">Esta proyección asume operación constante durante 30 días</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <canvas ref={chartRef} />
      </div>

      <div className="mt-8 flex gap-4 justify-end">
        <button
          onClick={exportToExcel}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
        >
          <FiFileText className="text-lg" />
          Exportar a Excel
        </button>
      </div>
    </div>
  );
}