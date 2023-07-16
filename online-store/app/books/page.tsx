import { Metadata } from 'next';
import { headers } from 'next/headers';

import NotBooks from '@/components/NotBooks';
import { Book } from '@/components/Book';

import { getBooks } from '@/services/getBooks';
import { BookType } from '@/types';

export const metadata: Metadata = {
  title: 'Books | Store',
};

export default async function Books() {
  const books: BookType[] = await getBooks();
  return (
    <>
      <h1 className="title">Книги</h1>
      <ul className="list">
        {books.length ? (
          books.map((book: BookType) => (
            <Book
              key={book.title}
              book={book}
            />
          ))
        ) : (
          <NotBooks text={'Книг нет'}/>
        )}
      </ul>
    </>
  );
}
