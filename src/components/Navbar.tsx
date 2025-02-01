import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-black border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Título / Logo */}
        <Link href="/" className="text-2xl font-semibold text-coffee-900 dark:text-white">
          Cafecito
        </Link>

        {/* Menú de navegación */}
        <ul className="flex gap-8">
          <li>
            <Link
              href="/cafe"
              className="text-coffee-700 dark:text-coffee-100 hover:underline decoration-2 underline-offset-4 transition"
            >
              Café
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              className="text-coffee-700 dark:text-coffee-100 hover:underline decoration-2 underline-offset-4 transition"
            >
              Sobre Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
