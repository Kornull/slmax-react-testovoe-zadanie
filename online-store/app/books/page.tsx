
import { headers } from "next/headers";
import { Book } from '@/components/Book';
import { getBooks } from '@/services/getBooks';
import { BookType } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Books | Store",
};
export default async function Books() {
  const host = headers().get("host");
  const books = await getBooks(host!);
  return (
    <>
    <h1 className='books__page'>Книги</h1>
    <ul className='list'>
      {books.map((book: BookType) => (
        <Book key={book.title} book={book} />
      ))}
    </ul>
    </>
  );

}