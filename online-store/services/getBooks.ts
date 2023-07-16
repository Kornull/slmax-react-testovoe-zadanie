import { API_CALLS, BookType } from '@/types';
import { headers } from 'next/headers';


export const getBooks = async (): Promise<BookType[]> => {
  headers().get('host');
  
  const response = await fetch(API_CALLS.SERVER, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType[] = await response.json();
  return data;
};

export const getBook = async (id: string): Promise<BookType[]> => {
  headers().get('host');
  const response = await fetch(`${API_CALLS.SERVER}/${id}`, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType = await response.json();
  return [data];
};
