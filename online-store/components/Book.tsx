import Image from 'next/image';
import Link from 'next/link';
export type BookType = {
  id: number;
  author: string;
  title: string;
  cost: string;
  description: string;
  img: string;
};

export const Book = () => {
  const data: BookType = {
    id: 8,
    author: 'Джордж Оруэлл',
    title: '1984 (новый перевод)',
    cost: '9,49',
    description:
      'Своеобразный антипод второй великой антиутопии XX века О дивный новый мир Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда общество появления или доведенное до абсолюта общество идеи? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...',
    img: '/img/book-id-8.jpg',
  };

  return (
    <div className="book">
      <Image
        src={data.img}
        alt={data.title}
        width={100}
        height={150}
        title={data.title}
      />
      <div className="description">
        <h4>{data.title}</h4>
        <h5>{data.author}</h5>
        <p className="cost">
          Цена <span>{data.cost}</span> p.
        </p>
        <p className="descr">
          {data.description.length > 24
            ? `${data.description.slice(0, 50)}...`
            : data.description}
        </p>
      </div>
      <Link href={`/info/${data.id}`}>изменить</Link>
    </div>
  );
};
