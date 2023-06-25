import { Book } from '@/components/Book';

export default function Home() {
  return (
    <>
      <h1>Book Store</h1>
      <main className='container'>
        <Book />
      </main>
    </>
  );
}
