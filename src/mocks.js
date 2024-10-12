export const items = [
  { id: "1", name: "Zapatilla 1", category: "sneakers" },
  { id: "2", name: "Zapatilla 2", category: "sports" },
  // Agrega más items según sea necesario
];

export const getItemById = (id) => {
  return items.find((item) => item.id === id);
};

export const getItemsByCategory = (category) => {
  return items.filter((item) => item.category === category);
};
