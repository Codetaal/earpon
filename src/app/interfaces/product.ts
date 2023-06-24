export interface ProductInterface {
  id?: number;
  title?: string;
  price?: number;
  cover?: string;
  summary?: string;
  // date_created?: string;
  // date_updated?: string;
}

export interface ProductResponseInterface {
  data: ProductInterface;
}

export interface ProductsResponseInterface {
  data: ProductInterface[];
}
