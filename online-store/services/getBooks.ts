import { API_CALLS, BookType } from '@/types';

export const getBooks = async ():Promise<BookType[]> => {
  const response = await fetch(API_CALLS.SERVER, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType[] = await response.json();
  console.log('DATA', data)
  return data;
};

export const getBook = async (id: string): Promise<BookType[]> => {
  const response = await fetch(`${API_CALLS.SERVER}/${id}`, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType = await response.json();
  return [data];
};
