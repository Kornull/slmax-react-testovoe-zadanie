import Image from 'next/image';
import Link from 'next/link';

import { API_CALLS, BookType } from '@/types';

type Props = {
  book: BookType;
};

export const Book = ({ book }: Props) => {
  return (
    <li className="book">
      <Image
        className="book__img"
        src={`${API_CALLS.GET_IMG}${book.img}`}
        alt={book.title}
        width={100}
        height={150}
        title={book.title}
        priority
      />
      <div className="description">
        <h4 className="book__title">{book.title}</h4>
        <h5>{book.author}</h5>
        <p className="cost">
          Цена <span>{book.cost}</span> p.
        </p>
        <p className="descr">
          {book.description.length > 50
            ? `${book.description.slice(0, 54)}...`
            : book.description}
        </p>
      </div>
      <div className="book__links">
      <Link
        className="book__link"
        href={`/books/about/${book.id}`}
      >
        подробнее
      </Link>
      </div>
    </li>
  );
};
