'use client';

import { useRouter } from 'next/navigation'

import { deleteBook } from '@/services/delBook';

type Props = {
  id: string;
  host: string;
};

export const DeleteButton = ({ id, host }: Props) => {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    deleteBook(host, id);
    router.push('/')
  };

  return <button className='btn' onClick={handleClick}>удалить</button>;
};
