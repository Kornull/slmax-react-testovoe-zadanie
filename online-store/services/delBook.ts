import { API_CALLS } from '@/types';

export const deleteBook = async (id: string): Promise<void> => {

  await fetch(`${API_CALLS.SERVER}/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });

};
