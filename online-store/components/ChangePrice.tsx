'use client';

import { updateBook } from '@/services/updateBook';
import { BookType } from '@/types';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
type Props = {
  data: BookType;
  host: string;
  idBook: string;
};

const ChangePrice = ({ data, host, idBook }: Props) => {
  const [change, setChange] = useState(false);
  const [changeCost, setChangeCost] = useState(Number(data.cost));

  const handelClick = () => {
    setChange(true);
  };

  const handleChange = (ev: React.ChangeEvent) => {
    const e = ev.target as HTMLInputElement;
    setChangeCost(Number(e.value));
    // setChange(true);
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    updateBook(host, idBook, changeCost);
    setChange(false);
  };

  console.log();

  return (
    <>
      <button onClick={handelClick}>изменить данные</button>
      {change && (
        <div className="">
          <form onSubmit={onSubmit}>
            <input
              type="number"
              min="0"
              onChange={handleChange}
              step="any"
              placeholder={`${changeCost}`}
              value={changeCost}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default ChangePrice;
