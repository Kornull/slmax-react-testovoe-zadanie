"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavProps } from './Header';

type Props = {
  navLinks: NavProps[];
};

export const Navigate = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link: NavProps) => {
        const isActive = pathName === link.href;

        return (<Link href={link.href} key={link.name} className={`header__link ${isActive ? 'active' : ''}`}>{link.name}</Link>);
      })}

    </>

  );
};
