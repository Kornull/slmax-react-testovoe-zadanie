
export const deleteBook = async (host: string, id: string): Promise<void> => {

  await fetch(`http://${host}/api/book/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });

};
