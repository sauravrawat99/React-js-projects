import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProductCard
        image="Artboard.webp"
        title="boAt Rockerz 450 Wireless Headphone"
        price={1499}
        rating={4.2}
      />
    </div>
  );
}

export default App;
