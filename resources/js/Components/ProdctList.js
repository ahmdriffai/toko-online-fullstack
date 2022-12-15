import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
    if (products.length === 0) {
        return (
            <div className="grid grid-cols-2 my-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center">
            <p>Product Not Ready</p>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 my-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center">
            {
                products.map((product, i) => (
                    <ProductItem product={product} key={i} />
                ))
            }
        </div>
    )
}
