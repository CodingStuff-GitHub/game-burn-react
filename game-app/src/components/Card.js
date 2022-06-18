import React from "react";

const Card = ({ name, rating, background_image }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition	p-2">
        <img className="w-100 h-100"
          src={
            background_image
              ? background_image
              : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
          }
          alt="gamePhoto"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <p>{name}</p>
          </div>
          <p>{rating > 0 ? rating : "No Ratings"}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
