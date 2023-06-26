
import { getBook } from '@/services/getBooks';
import { BookType } from '@/types';
import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';


type Props = {
  params: {
    id: string;
  };
};

export async function getPath(){
  const host = headers().get("host");

  return host;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const host = await getPath()
  const book: BookType[] = await getBook(host!, id);

  return {
    title: book[0].title,
  };
}


const BookInfoPage = async ({ params: { id } }: Props) => {
  const host = await getPath()
  const dataBook:BookType[] = await getBook(host!,id);

  const {title, img, author, description} = dataBook[0]
  return (
    <>
      <Image src={img} width={200} height={300} alt=''/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
    </>
  );
};

export default BookInfoPage;