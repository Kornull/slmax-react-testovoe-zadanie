import { BookType } from '@/types';
import { booksData } from '../books';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

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

  return NextResponse.json({ booksData });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const { cost }: { cost: string } = await req.json();
  if (req.method === 'PATCH') {
    console.log(cost);
    booksData.forEach((book: BookType) => {
      if (book.id.toString() === id) {
        book.cost = `${cost}`;
      }
    });
  }

  return NextResponse.json({ booksData });
}
