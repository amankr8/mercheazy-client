import { Image } from './image';

export interface Product {
  id: number;
  name: string;
  desc: string;
  sellPrice: number;
  listPrice: number;
  stock?: number;
  images: Image[];
  storeId: number;
  createDate: Date;
  updateDate: Date;
}
