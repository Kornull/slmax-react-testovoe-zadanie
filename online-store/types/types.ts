export type BookType = {
  id: number;
  author: string;
  title: string;
  cost: string;
  description: string;
  img: string;
};


export enum API_CALLS {
    SERVER = 'https://books-api-lmfv.onrender.com/books',
    GET_IMG = 'https://books-api-lmfv.onrender.com',
  }
