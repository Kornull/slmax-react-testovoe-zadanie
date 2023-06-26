import { NextResponse } from 'next/server';
import { booksData } from './books';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('id');

  let currentBooks = booksData;

  if(query){
    currentBooks = booksData.filter(book => book.id.toString() === query)
  }
  return NextResponse.json(currentBooks);
}
