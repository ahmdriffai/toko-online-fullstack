import React from "react";
import {FaRegHeart} from 'react-icons/fa';

export default function ProductItem({product}) {
    return (
        <div className="w-42 p-4 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-gray-300 rounded-2xl overflow-hidden">
                <button className="absolute font-bold bg-black text-sm text-white p-2 rounded-full m-3"><FaRegHeart /></button>
                <img src="https://i.ibb.co/82Mj3mF/daniel-korpai-hb-TKIbu-Mm-BI-unsplash.jpg" />
            </div>
            <a href="#" className="p-3">
                <h2 className="font-bold text-md mt-2 capitalize">{product.name}</h2>
            </a>
            <div className="flex items-center my-2">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-xs font-medium text-gray-900 underline hover:no-underline dark:text-white">73 sold</a>
            </div>
            <h2 className="font-bold text-lg mt-2">Rp. {product.price}</h2>
        </div>
    );
}
