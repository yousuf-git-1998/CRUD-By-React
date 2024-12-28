export interface Product {
    productId: number;
    name: string;
    productNumber: string;
    color: string;
    standardCost: number;
    listPrice: number;
    size: number;
    weight: number;
    productCategoryID: number;
  }
  export interface ProductCategory {
    productCategoryID: number;
    name: string;
    products: Product[];
  }