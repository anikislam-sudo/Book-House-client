

import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "./cardItem.css";
import { IProduct } from "../types/GlobalTypes";


// interface IBook {
//   _id: string;
//   email: string;
//   title: string;
//   author: string;
//   genre: string;
//   publicationDate: string;
//   image: string;
//   summary: string;
// }

const CardItem = ({ book }: { book:IProduct }) => {
  console.log(book);
  const {  img, title, author, genre, publicationDate} = book;

  return (
    <div className="">
      <div className="card card-compact w-80 h-90 bg-slate-500 only:shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img className="  image" src={img} alt="Shoes" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-sm text-black">
            <span className="text-bold text-lg">Title: </span>
            {title}
          </h2>
          <p className="text-black text-md ">
            <span className="text-bold text-lg">Author: </span> {author}
          </p>
          <p className="text-black text-md">
            <span className="text-bold text-lg">Genre: </span>
            {genre}
          </p>
          <p className="text-black text-md">
            <span className="text-bold text-lg">Publication Date: </span>
            {publicationDate}
          </p>
          <div className="card-actions justify-center">
            <Link to="">
              <button className="btn btn-primary">view more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
