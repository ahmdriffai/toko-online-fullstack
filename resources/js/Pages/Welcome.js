import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Carousel from '@/Components/Carousel';
import Title from '@/Components/Title';
import ProductList from '@/Components/ProdctList';
import MenuList from '@/Components/MenuList';
import Footer from '@/Components/Footer';
import CategoryList from '@/Components/CategoryList';
import App from '@/Layouts/App';

export default function Welcome({ products, categories, banners }) {
    return (
        <App>
            <Carousel banners={banners}/>
            <MenuList />
            <div className="mx-5 lg:mx-14 mt-7">
                <Title name={"Most Popular"} link={"See All"} />
                <CategoryList categories={categories} />
                <ProductList products={products}/>
            </div>
        </App>
    );
}
