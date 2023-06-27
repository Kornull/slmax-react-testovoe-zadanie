'use client';

import { deleteBook } from '@/services/delBook';

type Props = {
  id: string;
  host: string;
};

export const DeleteButton = ({ id, host }: Props) => {

  const handleClick = async () => {
    await deleteBook(host, id);
  };

  return <button onClick={handleClick}>удалить</button>;
};
