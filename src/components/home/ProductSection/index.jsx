import React from "react";
import ProductCard from "../../ui/ProductCard";
import { generateRandomId } from "../../../lib/utils";

const ProductSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      {Array(24)
        .fill(null)
        .map(() => {
          return <ProductCard key={generateRandomId()} />;
        })}
    </div>
  );
};

export default ProductSection;
