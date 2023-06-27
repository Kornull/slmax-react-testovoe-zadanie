'use client';

import { deleteBook } from '@/services/delBook';
import { useRouter } from 'next/navigation'

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

  return <button onClick={handleClick}>удалить</button>;
};
