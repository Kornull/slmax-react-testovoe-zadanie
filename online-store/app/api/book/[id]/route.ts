import { NextResponse } from 'next/server';

import { booksData } from '../books';

import { BookType } from '@/types';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<
  NextResponse<{
    booksData: BookType[];
  }>
> {
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
): Promise<
  NextResponse<{
    booksData: BookType[];
  }>
> {
  const id = params.id;

  const { cost }: { cost: string } = await req.json();
  if (req.method === 'PATCH') {
    booksData.forEach((book: BookType) => {
      if (book.id.toString() === id) {
        book.cost = `${cost}`;
      }
    });
  }

  return NextResponse.json({ booksData });
}
