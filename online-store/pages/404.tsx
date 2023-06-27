'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFoudPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        width: '300px',
        flexDirection: 'column',
        padding: '20px',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <h1>404</h1>
      <h3>Что-то пошло не так...</h3>
    </div>
  );
};

export default NotFoudPage;
