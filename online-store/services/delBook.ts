
export const deleteBook = async (host: string, id: string) => {

  await fetch(`http://${host}/api/book/${id}`, { method: 'DELETE' });

};
