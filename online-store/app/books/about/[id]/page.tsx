import { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import NotBooks from '@/components/NotBooks';
import { DeleteButton } from '@/components/DeleteButton';

import { getBook } from '@/services/getBooks';

import { BookType } from '@/types';
import ChangePrice from '@/components/ChangePrice';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const host = headers().get('host');
  const book: BookType[] = await getBook(host!, id);

  return {
    title: book.length ? book[0].title : 'Ooops!',
  };
}

const BookInfoPage = async ({ params: { id } }: Props) => {
  const host = headers().get('host');
  const dataBook: BookType[] = await getBook(host!, id);

  return (
    <>
      {dataBook.length ? (
        <div className='book__page'>
          <Image
            src={dataBook[0].img}
            width={200}
            height={300}
            alt=""
          />
          <h3>{dataBook[0].title}</h3>
          <h4>{dataBook[0].author}</h4>
          <p className="cost">
            Цена <span>{dataBook[0].cost}</span> p.
          </p>
          <p>{dataBook[0].description}</p>
          <DeleteButton
            id={id}
            host={host!}
          />
          <ChangePrice data={dataBook[0]} host={host!} idBook={id}/>
        </div>
      ) : (
        <NotBooks text={'Такой книги нет'} />
      )}
    </>
  );
};

export default BookInfoPage;
