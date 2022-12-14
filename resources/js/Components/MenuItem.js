import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function MenuItem({menu}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="p-3 bg-slate-200 text-3xl rounded-full">
                {menu.icon}
            </div>
            <h2 className="font-semibold">{menu.title}</h2>
        </div>
    )
}
