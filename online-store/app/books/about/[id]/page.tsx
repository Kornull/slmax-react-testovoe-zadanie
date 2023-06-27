import { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import NotBooks from '@/components/NotBooks';
import { DeleteButton } from '@/components/DeleteButton';

import { getBook } from '@/services/getBooks';

import { BookType } from '@/types';
import ChangePrice from '@/components/ChangePrice';
import { spawn } from 'child_process';

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
        <div className="book__page">
          <Image
            src={dataBook[0].img}
            width={200}
            height={300}
            alt=""
          />
          <p className='book__page-text'> Название: <span>{dataBook[0].title}</span></p>
          <p className='book__page-text'>
          Автор: <span>{dataBook[0].author}</span>
          </p>
          <p className="book__page-text">
            Цена {Number(dataBook[0].cost) !== 0 ? <span>{dataBook[0].cost} p</span> : <span>Забирайте бесплвтно</span>}.
          </p>
          <div>
            <p>Oписание:</p>
            <p className='book__page-descr'>{dataBook[0].description}</p>
          </div>
          <div className="book__page-btns">
            <DeleteButton
              id={id}
              host={host!}
            />
            <ChangePrice
              data={dataBook[0]}
              host={host!}
              idBook={id}
            />
          </div>
        </div>
      ) : (
        <NotBooks text={'Такой книги нет'} />
      )}
    </>
  );
};

export default BookInfoPage;
