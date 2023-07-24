import React from "react";
import { IProduct } from "../types/GlobalTypes";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import  "./cardItem.css";
const CardItem = ({ item }: { item: IProduct }) => {
  console.log(item);
  const { id, img, title, Genre, author, pubDate } = item;

  return (
    <div className="">
      <div className="card card-compact w-80 h-90 bg-white shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img className="  image" src={img} alt="Shoes" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-sm text-black"><span className="text-bold text-lg">Title: </span>{title}</h2>
          <p className="text-black text-sm "><span className="text-bold text-lg">Author: </span> {author}</p>
          <p className="text-black text-sm"><span className="text-bold text-lg">Genre: </span>{Genre}</p>
          <p className="text-black text-sm"><span className="text-bold text-lg">Publication Date: </span>{pubDate}</p>
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
