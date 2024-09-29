import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

import React from "react";
import { products } from "./constant/printers.contact";

const Products = () => {
  return (
    <div
      className={cn(
        `grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:container mx-auto my-12`
      )}
    >
      {products.map((product, idx) => (
        <ProductCard key={idx} data={product} />
      ))}
    </div>
  );
};

export default Products;
