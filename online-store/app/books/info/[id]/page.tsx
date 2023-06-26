
import { getBook } from '@/services/getBooks';
import { BookType } from '@/types';
import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';


type Props = {
  params: {
    id: string;
  };
};

const BookInfoPage = async ({ params: { id } }: Props) => {
  const host = headers().get("host");
  console.log(host);
  let dataBook:BookType[] = await getBook(host!,id);

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
