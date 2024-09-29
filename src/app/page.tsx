import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { printerData } from "./constant/printers.contact";

import React from "react";

const Products = () => {
  return (
    <div
      className={cn(
        `grid max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:container mx-auto my-12`
      )}
    >
      {printerData.map((product, idx) => (
        <ProductCard key={idx} data={product} />
      ))}
    </div>
  );
};

export default Products;
