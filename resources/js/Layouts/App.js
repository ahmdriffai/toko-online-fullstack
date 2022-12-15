import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function App({ children }) {
    return(
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}
