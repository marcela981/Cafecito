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
            className="relative text-coffee-700 hover:text-coffee-900 transition"
          >
            <FiShoppingCart className="text-2xl" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-coffee-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>

        {/* Menú de navegación */}
        <ul className="flex gap-8">
          <li>
            <Link
              href="/cafe"
              className="text-coffee-700 dark:text-coffee-900 hover:underline decoration-2 underline-offset-4 transition"
            >
              Café
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              className="text-coffee-700 dark:text-coffee-900 hover:underline decoration-2 underline-offset-4 transition"
            >
              Sobre Nosotros
            </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-coffee-700 dark:text-coffee-900 hover:underline decoration-2 underline-offset-4 transition"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
