import { Image } from './image';

export interface Product {
  id: number;
  name: string;
  desc: string;
  sellPrice: number;
  listPrice: number;
  stock?: number;
  images: Image[];
  storeName: string;
  createDate: Date;
  updateDate: Date;
}
