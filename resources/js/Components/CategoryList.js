import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories }) {

    return (
        <div className="flex gap-3 overflow-x-hidden">
            <CategoryItem isAll={true} />
            {
                categories.map((category, i) => (
                    <CategoryItem category={category} key={i} />
                ))
            }
        </div>
    )
}
