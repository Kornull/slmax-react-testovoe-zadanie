export const updateBook = async (
  host: string,
  id: string,
  changeCost: number
): Promise<void> => {
  await fetch(`http://${host}/api/book/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cost: `${changeCost}` }),
  });
};
