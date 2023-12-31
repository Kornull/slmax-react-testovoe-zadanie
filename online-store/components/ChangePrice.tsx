'use client';

import { FormEvent, useState } from 'react';

import { updateBook } from '@/services/updateBook';

import { BookType } from '@/types';

type Props = {
  data: BookType;
  idBook: string;
};

const ChangePrice = ({ data, idBook }: Props) => {
  const [change, setChange] = useState(false);
  const [changeCost, setChangeCost] = useState(Number(data.cost));

  const handelClick = () => {
    setChange(true);
  };

  const handleChange = (ev: React.ChangeEvent) => {
    const e = ev.target as HTMLInputElement;
    setChangeCost(Number(e.value));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    updateBook(idBook, Math.floor(changeCost * 100) / 100);
    setChange(false);
  };

  return (
    <div className="cost_btn-block">
      {!change && (
        <button
          className="btn"
          onClick={handelClick}
        >
          изменить цену
        </button>
      )}
      {change && (
        <div className="cost__form">
          <form onSubmit={onSubmit}>
            <input
              className="cost__input"
              type="number"
              min="0"
              max="10000"
              onChange={handleChange}
              step="any"
              placeholder={`${changeCost}`}
              value={changeCost}
            />
            <input
              className="btn"
              type="submit"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ChangePrice;
