import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function CategoryItem({category, isAll = false}) {
    {
        if (isAll) {
            return (
                <Link href="/" data={{ category : '' }} className="px-8 border-2 py-1 border-black rounded-2xl font-semibold text-sm hover:bg-black hover:text-white transition-all duration-400">
                    All
                </Link>
            );
        }
    }
    return (
        <Link href="/" data={{ category : category.name }} className="px-8 border-2 py-1 border-black rounded-2xl font-semibold text-sm hover:bg-black hover:text-white transition-all duration-400">
            {category.name}
        </Link>
    );
}
