import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

interface RestaurantCardProps {
    id: number;
    name: string;
    image: string;
    rating: number;
    time: string;
    deliveryFee: number;
    tags: string[];
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    name,
    image,
    rating,
    time,
    deliveryFee,
    tags
}) => {
    return (
        <Link to={`/restaurant/${id}`} className="block group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {time}
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
                        <Star className="w-3 h-3 text-green-700 mr-1 fill-current" />
                        <span className="text-xs font-bold text-green-700">{rating}</span>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mb-3">
                    {tags.join(' • ')}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className={`text-sm font-medium ${deliveryFee === 0 ? 'text-green-600' : 'text-gray-600'}`}>
                        {deliveryFee === 0 ? 'Free delivery' : `$${deliveryFee.toFixed(2)} delivery`}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-orange-50 p-0 h-auto">
                        View Menu
                    </Button>
                </div>
            </div>
        </Link>
    );
};
