export interface RequiredOptionToProductType {
  id: string;
  title: string;
  items: RequiredItem[];
}

export interface RequiredItem {
  id: string;
  name: string;
  price: number;
}
