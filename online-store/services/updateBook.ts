import { API_CALLS } from '@/types';


export const updateBook = async (
  id: string,
  changeCost: number
): Promise<void> => {
  await fetch(`${API_CALLS.SERVER}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cost: `${changeCost}` }),
  });
};
