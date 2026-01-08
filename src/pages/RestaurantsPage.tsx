import React, { useState, useEffect } from 'react';
import { RestaurantCard } from '../components/RestaurantCard';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "../contexts/LocationContext.tsx";
import { motion, AnimatePresence } from "framer-motion";

type Restaurant = {
    id: number;
    name: string;
    image: string;
    rating: number;
    deliveryFee: number;
    tags: string[];
    time: string;
}

export const RestaurantsPage: React.FC = () => {
    const [priceRange, setPriceRange] = useState<string>('$$');

    // Temporary mock data
    const navigate = useNavigate();
    const handleCancel = () => {
        console.log('Cancel');
        navigate("/")

    }
    const restaurants = [
        { id: 1, name: "Burger King", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&fit=crop", rating: 4.8, time: "25-35 min", deliveryFee: 0, tags: ["American", "Burgers"] },
        { id: 2, name: "Sushi Master", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&fit=crop", rating: 4.9, time: "40-55 min", deliveryFee: 2.99, tags: ["Japanese", "Sushi"] },
        { id: 3, name: "Pizza Hut", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&fit=crop", rating: 4.5, time: "30-45 min", deliveryFee: 1.49, tags: ["Italian", "Pizza"] },
        { id: 4, name: "Taco Bell", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&fit=crop", rating: 4.2, time: "20-30 min", deliveryFee: 0, tags: ["Mexican", "Tacos"] },
        { id: 5, name: "Sweet Tooth", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&fit=crop", rating: 4.7, time: "15-25 min", deliveryFee: 3.99, tags: ["Dessert", "Burgers"] },
        { id: 6, name: "Healthy Bowl", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&fit=crop", rating: 4.6, time: "25-40 min", deliveryFee: 0, tags: ["Healthy", "Salads"] },

        {
            id: 7,
            name: "Luigi’s Pizzeria",
            image: "https://images.unsplash.com/photo-1601924638867-3ec9a4130a6c?w=800&fit=crop",
            rating: 4.7,
            time: "20-30 min",
            deliveryFee: 2,
            tags: ["Italian", "Pizza"]
        },
        {
            id: 8,
            name: "Tokyo Sushi Bar",
            image: "https://images.unsplash.com/photo-1562158070-3de44a8fc94f?w=800&fit=crop",
            rating: 4.9,
            time: "30-45 min",
            deliveryFee: 3,
            tags: ["Japanese", "Sushi"]
        },
        {
            id: 9,
            name: "El Toro Tacos",
            image: "https://images.unsplash.com/photo-1617191510711-83d1f9a79d32?w=800&fit=crop",
            rating: 4.6,
            time: "25-35 min",
            deliveryFee: 1,
            tags: ["Mexican", "Tacos"]
        },
        {
            id: 10,
            name: "Pasta Palace",
            image: "https://images.unsplash.com/photo-1589308078050-96984f0c60ba?w=800&fit=crop",
            rating: 4.5,
            time: "25-40 min",
            deliveryFee: 0,
            tags: ["Italian", "Pasta"]
        },
        {
            id: 11,
            name: "Smokey BBQ House",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&fit=crop",
            rating: 4.4,
            time: "35-50 min",
            deliveryFee: 3,
            tags: ["American", "BBQ"]
        },
        {
            id: 12,
            name: "Green Bowl",
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&fit=crop",
            rating: 4.3,
            time: "15-25 min",
            deliveryFee: 1,
            tags: ["Healthy", "Salads"]
        },
        {
            id: 13,
            name: "Ramen Street",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&fit=crop",
            rating: 4.8,
            time: "30-40 min",
            deliveryFee: 2,
            tags: ["Japanese", "Ramen"]
        },
        {
            id: 14,
            name: "Crunchy Chicken",
            image: "https://images.unsplash.com/photo-1604917865708-04a38e56fa36?w=800&fit=crop",
            rating: 4.7,
            time: "25-35 min",
            deliveryFee: 0,
            tags: ["American", "Fried Chicken"]
        },
        {
            id: 15,
            name: "Barcelona Paella",
            image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&fit=crop",
            rating: 4.6,
            time: "40-60 min",
            deliveryFee: 4,
            tags: ["Spanish", "Seafood"]
        },
        {
            id: 16,
            name: "Sweet Scoops",
            image: "https://images.unsplash.com/photo-1505253219352-955e6a7f4d4f?w=800&fit=crop",
            rating: 4.9,
            time: "10-15 min",
            deliveryFee: 1,
            tags: ["Dessert", "Ice Cream"]
        }

    ];

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const categories = ["All", "Burgers", "Pizza", "Sushi", "Asian", "Mexican", "Dessert", "Healthy", "Vegan"];
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[] | null>(null);
    // const [filterByPrice, setFilterByPrice] = useState<Restaurant[]|null>(null);
    const { location } = useLocation();

    useEffect(() => {
        if (categories.length && restaurants.length) {
            const filtered = selectedIndex == 0 ? restaurants : restaurants.filter(restaurant =>
                restaurant.tags.includes(categories[selectedIndex])
            );

            setFilteredRestaurants(filtered);

            console.log("Selected category:", categories[selectedIndex]);
            console.log("Filtered restaurants:", filtered);
        }
    }, [selectedIndex]);



    const merge = (left: Restaurant[], right: Restaurant[]) => {

        let i = 0, j = 0;
        const results: Restaurant[] = [];
        while (i < left.length && j < right.length) {
            if (
                priceRange === "$" ?
                    (left[i].deliveryFee <= right[j].deliveryFee)
                    :
                    (left[i].deliveryFee >= right[j].deliveryFee)
            ) {
                results.push(left[i++]);
            }
            else {
                results.push(right[j++]);
            }
        }

        return results.concat(left.slice(i)).concat(right.slice(j));
    }
    const mergeSort = (indexed: Restaurant[]): Restaurant[] => {

        if (indexed.length <= 1) return indexed;

        let mid = Math.floor(indexed.length / 2);

        const left: Restaurant[] = mergeSort(indexed.slice(0, mid))
        const right: Restaurant[] = mergeSort(indexed.slice(mid));

        return merge(left, right);
    }
    useEffect(() => {
        if (filteredRestaurants && filteredRestaurants.length > 1) {
            const sortedByPriceRange = mergeSort(filteredRestaurants);
            console.log(sortedByPriceRange);
            setFilteredRestaurants(sortedByPriceRange);
        }
        // setFilteredRestaurants(filtered);
        // console.log("Selected category:", categories[selectedIndex]);
        // console.log("Filtered restaurants:", filtered);
    }, [priceRange]);



    function handleSort(idx: number) {
        setSelectedIndex(idx);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-50 min-h-screen pb-20"
        >
            {/* Sticky Sub-header */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-lg max-w-md w-full">
                        <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            value={location.display_name || "Not Specified"}

                            className="bg-transparent border-none focus:outline-none text-sm w-full font-medium truncate"
                            readOnly
                        />
                        <Button variant="ghost" size="sm" className="text-primary text-xs whitespace-nowrap"
                            onClick={handleCancel}>Change</Button>
                    </div>

                    <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {/* Mobile Filter toggle could go here */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 flex items-start gap-8">
                {/* Sidebar Filters */}
                <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-40 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg">Filters</h3>
                        <SlidersHorizontal className="w-5 h-5 text-gray-400" />
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                        <h4 className="font-bold text-sm text-gray-900 mb-4">Categories</h4>
                        <div className="space-y-2">
                            {categories.slice(0, 6).map((cat, idx: number) => (
                                <label key={cat} className="flex items-center space-x-3 cursor-pointer group"
                                    onClick={() => handleSort(idx)}>
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" checked={selectedIndex === idx} />
                                    <span className="text-gray-600 group-hover:text-gray-900"
                                    >{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    {filteredRestaurants && filteredRestaurants.length > 0 && (

                        <div className="mb-8">
                            <div>
                                <AnimatePresence>
                                    <h4 className="font-bold text-sm text-gray-900 mb-4">Price Range</h4>
                                    <motion.div className="flex bg-gray-100 rounded-lg p-1"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}>
                                        {['$', '$$', '$$$', '$$$$'].map((price) => (
                                            <button
                                                key={price}

                                                onClick={() => setPriceRange(price)}
                                                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${priceRange === price
                                                    ? 'bg-white text-primary shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-900'
                                                    }`}
                                            >
                                                {price}
                                            </button>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}


                    {/* Sorting */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-900 mb-4">Sort By</h4>
                        <div className="space-y-3">
                            {['Most Popular', 'Rating', 'Delivery Time'].map(sort => (
                                <label key={sort} className="flex items-center space-x-3 cursor-pointer">
                                    <input type="radio" name="sort" className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                                    <span className="text-gray-600 text-sm">{sort}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Restaurants near you</h2>
                        <p className="text-gray-500">{filteredRestaurants && filteredRestaurants.length} results found</p>
                    </div>


                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredRestaurants?.map(restaurant => (
                                <motion.div
                                    key={restaurant.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <RestaurantCard {...restaurant} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};
