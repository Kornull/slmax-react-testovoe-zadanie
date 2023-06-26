import Link from 'next/link';
import { Navigate } from './Navigate';

export type NavProps = {
  name: string;
  href: string;
};

const navItems: NavProps[] = [
  { name: 'На главную', href: '/' },
  { name: 'Книги', href: '/books' }
];


export const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Navigate navLinks={navItems} />
      </nav>
    </header>
  );
};
