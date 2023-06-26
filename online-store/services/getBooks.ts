export const getBooks = async (host: string) => {
  const response = await fetch(`http://${host}/api/book`,{ next: { revalidate: 50 } });

  return response.json();
};

export const getBook = async (host: string,id: string) => {
  const response = await fetch(`http://${host}/api/book?id=${id}`);

  return await response.json();
};
