import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};
const BookInfo = ({ params: { id } }: Props) => {
  return (
    <>
      <h1>BookInfo</h1>
      <Link href="/">Домой</Link>
    </>
  );
};

export default BookInfo;
