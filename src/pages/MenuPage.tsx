import React, { useState } from 'react';
import { Star, Clock, MapPin, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CartSidebar } from '../components/CartSidebar';


export const MenuPage: React.FC = () => {
    // Mock data
    const restaurant = {
        name: "Burger King",
        rating: 4.8,
        reviews: "2.5k",
        distance: "1.2 mi",
        time: "25-35 min",
        deliveryFee: 0,
        banner: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&fit=crop"
    };

    const categories = ["Popular", "Burgers", "Chicken", "Sides", "Drinks", "Desserts"];
    const [activeTab, setActiveTab] = useState("Popular");

    const menuItems = [
        { id: 1, name: "Whopper Meal", desc: "Flame-grilled beef patty, topped with tomatoes, cut pickles, mayo, ketchup.", price: 12.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&fit=crop" },
        { id: 2, name: "Chicken Royale", desc: "Crispy chicken breast with lettuce and creamy mayo on a sesame seed bun.", price: 10.49, image: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=600&fit=crop" },
        { id: 3, name: "Bacon Double Cheeseburger", desc: "Two beef patties, bacon, cheese, pickles, mustard and ketchup.", price: 14.99, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&fit=crop" },
        { id: 4, name: "Onion Rings (6pcs)", desc: "Golden brown and crispy onion rings.", price: 4.99, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&fit=crop" },
        { id: 5, name: "Strawberry Shake", desc: "Creamy strawberry milkshake topped with whipped cream.", price: 5.99, image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=600&fit=crop" },
        { id: 6, name: "Fries (Medium)", desc: "Classic salted french fries.", price: 3.99, image: "https://images.unsplash.com/photo-1573080496987-a2283cc72343?w=600&fit=crop" },
    ];

    // Mock cart items
    const cartItems = [
        { id: 1, name: "Whopper Meal", price: 12.99, quantity: 1, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&fit=crop" },
        { id: 5, name: "Strawberry Shake", price: 5.99, quantity: 2, image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=600&fit=crop" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Banner */}
            <div className="h-64 md:h-80 relative">
                <img src={restaurant.banner} alt={restaurant.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{restaurant.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base font-medium">
                            <span className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                                <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                                {restaurant.rating} ({restaurant.reviews})
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {restaurant.time}
                            </span>
                            <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {restaurant.distance}
                            </span>
                            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold uppercase tracking-wide">
                                Free Delivery
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Menu Area */}
                    <div className="flex-1">
                        {/* Category Navigation */}
                        <div className="bg-white p-2 rounded-xl shadow-sm mb-8 overflow-x-auto no-scrollbar">
                            <div className="flex space-x-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveTab(cat)}
                                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${activeTab === cat
                                            ? 'bg-gray-900 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Menu Sections */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Popular Items</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {menuItems.map(item => (
                                    <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all flex gap-4 group cursor-pointer h-full">
                                        <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                                                <span className="font-bold text-gray-900 ml-2">${item.price}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{item.desc}</p>
                                            <div className="mt-auto">
                                                <Button variant="outline" size="sm" className="w-full h-9 border-gray-200 hover:border-primary hover:bg-orange-50">
                                                    <Plus className="w-4 h-4 mr-1" /> Add
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cart Sidebar */}
                    <div className="w-full lg:w-96 flex-shrink-0">
                        <CartSidebar items={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};
