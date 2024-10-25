import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
        <Link href="/" className="hover:none">FC Blog</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
