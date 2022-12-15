import React from "react";
import Title from "./Title";

export default function ProductDetail({product}) {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full overflow-hidden sm:basis-1/3 rounded-lg">
                <img src="https://i.ibb.co/82Mj3mF/daniel-korpai-hb-TKIbu-Mm-BI-unsplash.jpg" className="w-full border" />
            </div>
            <div className="p-5 sm:basis-2/3">
                <h2 className="font-bold text-xl mt-2 capitalize">{product.name}</h2>
                <div className="flex items-center my-2">
                    <a href="#" className="text-xs font-medium p-2 bg-gray-200 text-gray-900 rounded-md dark:text-white">73 sold</a>

                    <svg aria-hidden="true" className="w-5 h-5 ml-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95 (400 reviews)</p>

                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                </div>
                <hr className="my-3"/>
                <Title name="Description" />
                <p>
                    {product.description}
                </p>
                <Title name="Quantity" />
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        -
                    </button>
                    <input type="text" class="py-2 px-4 text-sm font-medium w-12 text-gray-900 bg-transparent border-t border-b border-gray-90 focus:z-10 focus:ring-2W border-gray-900" value={5} disabled />
                    <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700" >
                        +
                    </button>
                </div>

                <hr className="my-3"/>

                <div className="flex gap-5">
                    <div>
                        <p className="text-xs">Total Price</p>
                        <h2 className="font-bold text-xl mt-2 capitalize">Rp.         {product.price}</h2>
                    </div>
                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add To Chart</button>
                </div>
            </div>
        </div>
    );
}
