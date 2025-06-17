import React from "react";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72">
      <img src={image} alt={title} className="h-50 w-full object-fit shadow-amber-900" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-green-600 font-bold mt-2">₹{price}</p>
        <p className="text-yellow-500 text-sm mt-1">⭐ {rating} / 5</p>
        <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
