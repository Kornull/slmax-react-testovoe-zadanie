import { Metadata } from 'next';
import Image from 'next/image';

import NotBooks from '@/components/NotBooks';
import { DeleteButton } from '@/components/DeleteButton';

import { getBook } from '@/services/getBooks';

import { API_CALLS, BookType } from '@/types';
import ChangePrice from '@/components/ChangePrice';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const book: BookType[] = await getBook(id);

  return {
    title: book.length ? book[0].title : 'Ooops!',
  };
}

const BookInfoPage = async ({ params: { id } }: Props) => {
  const dataBook: BookType[] = await getBook(id);

  return (
    <>
      {dataBook.length ? (
        <div className="book__page">
          <Image
            src={`${API_CALLS.GET_IMG}${dataBook[0].img}`}
            width={200}
            height={300}
            alt=""
          />
          <p className="book__page-text">
            {' '}
            Название: <span>{dataBook[0].title}</span>
          </p>
          <p className="book__page-text">
            Автор: <span>{dataBook[0].author}</span>
          </p>
          <p className="book__page-text">
            Цена{' '}
            {Number(dataBook[0].cost) !== 0 ? (
              <span>{dataBook[0].cost} p</span>
            ) : (
              <span>Забирайте бесплвтно</span>
            )}
            .
          </p>
          <div>
            <p>Oписание:</p>
            <p className="book__page-descr">{dataBook[0].description}</p>
          </div>
          <div className="book__page-btns">

            <DeleteButton id={id} />
            <ChangePrice
              data={dataBook[0]}
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
