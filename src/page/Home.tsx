import React from "react";
import { useGetBookQuery } from "../redux/product/productApi";
import CardItem from "../components/CardItem";
import { IProduct } from "../types/GlobalTypes";

const Home = () => {
  const { data, isLoading, error, isError, isSuccess } =
    useGetBookQuery(undefined);

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <div className="loading-spinner">
          <div className="hidden">Loading...</div>
        </div>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10 pb-20 mt-10">
        {data?.data?.map((item: IProduct) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
    );
  } else if (isError) {
    content = <div className="alert alert-error">error....</div>;
  }

  return <>{content}</>;
};

export default Home;
