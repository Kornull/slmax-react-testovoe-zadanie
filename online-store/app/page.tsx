'use client';

import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import Img from '@/public/pngwing.png';
import { useEffect } from 'react';

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <>
      <h1 className="main__title">Book Store</h1>
      <main>
        <h3>Книги</h3>
        <Link href="/books">
          <Image
            src={Img}
            width={100}
            height={100}
            alt=""
            priority
          />
        </Link>
      </main>
    </>
  );
}
