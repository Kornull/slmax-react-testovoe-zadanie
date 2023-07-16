'use client';

import { useRouter } from 'next/navigation'

import { deleteBook } from '@/services/delBook';

type Props = {
  id: string;
};

export const DeleteButton = ({ id }: Props) => {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    deleteBook(id);
    router.push('/')
  };

  return <button className='btn' onClick={handleClick}>удалить</button>;
};
