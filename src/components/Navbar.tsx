"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "@/lib/stores/cartStore";

export default function Navbar() {
  const { items } = useCartStore();

  const totalQuantity = items.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0
  );

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-coffee-900 dark:text-white">
          Cafecito
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/cart" 
            className="relative text-coffee-100 dark:text-white hover:text-coffee-900 transition"
          >
            <div className="relative">
            <FiShoppingCart className="text-2xl" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full 
                              flex items-center justify-center min-w-[24px] transform transition-all duration-300 
                              group-hover:bg-red-600 shadow-md">
                {totalQuantity}
              </span>
            )}
            </div>
          </Link>

        {/* Menú de navegación */}
        <ul className="flex gap-8">
          <li>
            <Link
              href="/cafe"
              className="text-coffee-100 dark:text-white hover:underline hover:text-coffee-900 decoration-2 underline-offset-4 transition"
            >
              Café
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              className="text-coffee-100 dark:text-white hover:underline hover:text-coffee-900 decoration-2 underline-offset-4 transition"
            >
              Sobre Nosotros
            </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-coffee-100 dark:text-white hover:text-coffee-900"
                title="Panel de control"
              >
                <svg 
                  className="w-6 h-6"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
