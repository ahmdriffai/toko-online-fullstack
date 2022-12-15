import Breadcrumb from "@/Components/Breadcrumb";
import ProductDetail from "@/Components/ProductDetail";
import App from "@/Layouts/App";
import React from "react";

export default function Detail({product}) {
    return (
        <App>
            <div className="sm:mx-10">
                <Breadcrumb />
                <ProductDetail product={product}/>
            </div>
        </App>
    )
}
