export interface IProduct {
  id: number;
  img: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews:[];
  status?: boolean;
  rating?: number;
}
