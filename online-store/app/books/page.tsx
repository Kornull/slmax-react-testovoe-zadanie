import { headers } from 'next/headers';
import { Book } from '@/components/Book';
import { getBooks } from '@/services/getBooks';
import { BookType } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';
import NotBooks from '@/components/NotBooks';

export const metadata: Metadata = {
  title: 'Books | Store',
};

export default async function Books() {
  const host = headers().get('host');
  const books: BookType[] = await getBooks(host!);
  return (
    <>
      <h1 className="books__page">Книги</h1>
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
