import Link from 'next/link';

type Props = {
  text: string;
};

const NotBooks = ({ text }: Props) => {
  return (
    <div className="not__found">
      <h1>Упс...</h1>
      <h3>{text} &#58;&#40;</h3>
      <Link
        className="not__found-link"
        href="/"
      >
        На главную
      </Link>
    </div>
  );
};

export default NotBooks;
