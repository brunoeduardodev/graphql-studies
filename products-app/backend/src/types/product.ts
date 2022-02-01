export type UpdateProductInput = {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: string;
};

export type CreateProductInput = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
};

export type FindProductInput = {
  id: string;
};

export type DeleteProductInput = {
  id: string;
};
