import { BookType } from '@/types';

type DataType = { revalidated: true; currentBooks: BookType[] };

export const getBooks = async (host: string):Promise<BookType[]> => {
  const response = await fetch(`https://${host}/api/book`, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: DataType = await response.json();
  return data.currentBooks;
};

export const getBook = async (host: string, id: string) => {
  const response = await fetch(`https://${host}/api/book?id=${id}`, {
    next: { tags: ['collection'] },
  });

  if (!response.ok) {
    return [];
  }
  const data: DataType = await response.json();
  return data.currentBooks;
};
