
export const deleteBook = async (host: string, id: string): Promise<void> => {

  await fetch(`https://${host}/api/book/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });

};
