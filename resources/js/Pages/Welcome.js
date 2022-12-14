import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Carousel from '@/Components/Carousel';

export default function Welcome() {
    return (
        <>
            <Head title='Home Page' />
            <Navbar />
            <Carousel />
        </>
    );
}
