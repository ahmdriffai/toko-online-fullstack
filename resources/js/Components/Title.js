import React from "react";

export default function Title({ name, isLink = false, link }) {
    return (
        <div className="w-ful my-4 flex justify-between mt-2 items-center">
            <h2 className="font-bold text-md">{name}</h2>
            <a href="#" className="font-bold text-sm hover:underline">{link}</a>
        </div>
    );
}
