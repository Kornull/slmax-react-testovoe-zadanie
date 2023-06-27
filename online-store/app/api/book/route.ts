import { NextRequest, NextResponse } from 'next/server';
import { booksData } from './books';
import { revalidateTag } from 'next/cache';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('id');

  let currentBooks = booksData;

  if(query){
    currentBooks = booksData.filter(book => book.id.toString() === query)
  }
  const tag = req.nextUrl.searchParams.get('tag') as string
  revalidateTag(tag)

  return NextResponse.json({ revalidated: true, currentBooks})
}
