import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import Btn from '../components/Btn'
import Card from '../components/Card'
import Cartslider from '../components/Cartslider'

const Wishlist = () => {

    const [wishlistItems, setWishlistItems] = useState([]);

    const loadWishlist = () => {
        const stored = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        setWishlistItems(stored);
    };

    useEffect(() => {
        loadWishlist();
        window.addEventListener("wishlistUpdated", loadWishlist);

        return () => {
            window.removeEventListener("wishlistUpdated", loadWishlist);
        };
    }, []);

    return (
        <div>
            <Navbar />

            <div className="container">

                <div className="flex justify-between items-center gap-200">
                    <SectionHeader
                        sectionTitle=""
                        monthText={`Wishlist (${wishlistItems.length})`}  
                        btnLabel="See All"
                    />

                    <Btn
                        label="Move All To Bag"
                        width="180px"
                        height="45px"
                        textColor="black"
                        borderColor="#555555"
                        bgColor="white"
                        marginBottom='40px'
                    />
                </div>

                <div className="py-6">
                    {wishlistItems.length === 0 ? (
                        <p className="text-gray-600 text-lg mt-4 text-center">
                            Your wishlist is empty ❤️
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
                            {wishlistItems.map((product, index) => (
                                <Card key={index} product={product} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center gap-200">
                    <SectionHeader
                        sectionTitle=""
                        monthText="Just For You"
                        btnLabel="See All"
                    />

                    <Btn
                        label="See All"
                        width="180px"
                        height="45px"
                        textColor="black"
                        borderColor=""
                        bgColor="white"
                        marginBottom='40px'
                    />
                </div>

                <Cartslider />
            </div>

            <Footer />
        </div>
    );
};

export default Wishlist;
