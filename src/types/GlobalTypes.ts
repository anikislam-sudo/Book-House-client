export interface IProduct {
  id: number;
  img: string;
  title: string;
  author: string;
  Genre: string;
  pubDate: string;
  reviews:[];
  status?: boolean;
  rating?: number;
}
