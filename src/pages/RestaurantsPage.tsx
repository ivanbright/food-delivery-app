import React, { useState } from 'react';
import { RestaurantCard } from '../components/RestaurantCard';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const RestaurantsPage: React.FC = () => {
    const [priceRange, setPriceRange] = useState<string>('$$');

    // Temporary mock data
    const restaurants = [
        { id: 1, name: "Burger King", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&fit=crop", rating: 4.8, time: "25-35 min", deliveryFee: 0, tags: ["American", "Burgers"] },
        { id: 2, name: "Sushi Master", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&fit=crop", rating: 4.9, time: "40-55 min", deliveryFee: 2.99, tags: ["Japanese", "Sushi"] },
        { id: 3, name: "Pizza Hut", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&fit=crop", rating: 4.5, time: "30-45 min", deliveryFee: 1.49, tags: ["Italian", "Pizza"] },
        { id: 4, name: "Taco Bell", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&fit=crop", rating: 4.2, time: "20-30 min", deliveryFee: 0, tags: ["Mexican", "Tacos"] },
        { id: 5, name: "Sweet Tooth", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&fit=crop", rating: 4.7, time: "15-25 min", deliveryFee: 3.99, tags: ["Dessert", "Donuts"] },
        { id: 6, name: "Healthy Bowl", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&fit=crop", rating: 4.6, time: "25-40 min", deliveryFee: 0, tags: ["Healthy", "Salads"] },
    ];

    const categories = ["All", "Burgers", "Pizza", "Sushi", "Asian", "Mexican", "Dessert", "Healthy", "Vegan"];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Sticky Sub-header */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-lg max-w-md w-full">
                        <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            value="123 Main St, New York, NY"
                            className="bg-transparent border-none focus:outline-none text-sm w-full font-medium"
                            readOnly
                        />
                        <Button variant="ghost" size="sm" className="text-primary text-xs whitespace-nowrap">Change</Button>
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
                            {categories.slice(0, 6).map(cat => (
                                <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked={cat === "All"} />
                                    <span className="text-gray-600 group-hover:text-gray-900">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-8">
                        <h4 className="font-bold text-sm text-gray-900 mb-4">Price Range</h4>
                        <div className="flex bg-gray-100 rounded-lg p-1">
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
                        </div>
                    </div>

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
                        <p className="text-gray-500">{restaurants.length} results found</p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {restaurants.map(restaurant => (
                            <RestaurantCard key={restaurant.id} {...restaurant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
