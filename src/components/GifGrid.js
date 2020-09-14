import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/usefetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </Fragment>
  );
};
