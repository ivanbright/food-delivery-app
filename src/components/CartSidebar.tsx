import React from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartSidebarProps {
    items: CartItem[];
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ items }) => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Your Order
            </h3>

            {items.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    Your cart is empty
                </div>
            ) : (
                <>
                    <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-3">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                                        <span className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-primary transition-colors">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                        <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-primary transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-100">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-medium">
                            <span>Delivery Fee</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <Link to="/checkout">
                        <Button size="lg" className="w-full mt-6 rounded-xl">
                            Go to Checkout
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};
