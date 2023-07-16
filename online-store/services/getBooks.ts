import { API_CALLS, BookType } from '@/types';

type DataType = { revalidated: true; currentBooks: BookType[] };

export const getBooks = async (host: string): Promise<BookType[]> => {
  const response = await fetch(API_CALLS.SERVER, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType[] = await response.json();
  return data;
};

export const getBook = async (host: string, id: string) => {
  const response = await fetch(`${API_CALLS.SERVER}/${id}`, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: BookType = await response.json();
  return [data];
};
