import { BookType } from '@/types';
import { booksData } from '../books';
import { redirect } from 'next/navigation';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (req.method === 'DELETE') {
    const index = booksData.findIndex(
      (book: BookType) => book.id.toString() === id
    );
    booksData.splice(index, 1);
  }
}
