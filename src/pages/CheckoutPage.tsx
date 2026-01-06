import React from 'react';
import { MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CheckoutPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Steps */}
                    <div className="flex-1 space-y-6">

                        {/* Step 1: Delivery Details */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center">
                                    <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                    Delivery Details
                                </h2>
                                <Button variant="ghost" className="text-primary text-sm">Edit</Button>
                            </div>

                            <div className="mb-6">
                                {/* Map Placeholder */}
                                <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button variant="secondary" size="sm" className="shadow-lg pointer-events-none">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            123 Main St, New York
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Address</label>
                                        <p className="font-medium text-gray-900">Home</p>
                                        <p className="text-sm text-gray-600">123 Main St, Apt 4B</p>
                                        <p className="text-sm text-gray-600">New York, NY 10001</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <label className="text-xs font-bold text-gray-500 uppercase block mb-1">Delivery Time</label>
                                        <p className="font-medium text-gray-900">Priority</p>
                                        <p className="text-sm text-gray-600">20-30 min</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Instructions</label>
                                <textarea
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                                    rows={2}
                                    placeholder="e.g. Leave at door, ring bell..."
                                ></textarea>
                            </div>
                        </div>

                        {/* Step 2: Payment Method */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold flex items-center mb-6">
                                <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                                Payment Method
                            </h2>

                            <div className="space-y-3">
                                <label className="flex items-center justify-between p-4 border border-orange-200 bg-orange-50 rounded-xl cursor-pointer ring-1 ring-primary/30 transition-all">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full border-2 border-primary mr-4 flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="flex items-center">
                                            <CreditCard className="w-5 h-5 mr-3 text-gray-700" />
                                            <span className="font-medium">Visa ending in 4242</span>
                                        </div>
                                    </div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                                </label>

                                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-4"></div>
                                        <div className="flex items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 mr-3" />
                                            <span className="font-medium">PayPal</span>
                                        </div>
                                    </div>
                                </label>

                                <Button variant="ghost" className="text-primary hover:bg-orange-50 w-full justify-start mt-2">
                                    <span className="text-xl mr-2">+</span> Add New Card
                                </Button>
                            </div>
                        </div>

                        {/* Step 3: Your Items */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold flex items-center mb-6">
                                <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                                Your Items
                            </h2>

                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                                    From <span className="text-primary ml-1">Burger King</span>
                                </h3>

                                <div className="space-y-4">
                                    {[1, 2].map((item) => (
                                        <div key={item} className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-1">
                                                    <h4 className="font-medium text-gray-900">Whopper Meal</h4>
                                                    <span className="font-semibold">$12.99</span>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-2">Medium, Coke No Sugar</p>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="font-medium border border-gray-200 rounded px-2 py-0.5 mr-3">Qty: 1</span>
                                                    <button className="text-primary hover:underline">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="w-full lg:w-96 flex-shrink-0 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>$25.98</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Service Fee</span>
                                    <span>$2.00</span>
                                </div>
                                <div className="flex justify-between text-green-600 font-medium">
                                    <span>Delivery Fee</span>
                                    <span>Free</span>
                                </div>
                                <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-xl text-gray-900">Total</span>
                                    <span className="font-bold text-xl text-primary">$27.98</span>
                                </div>
                            </div>

                            <Button size="lg" className="w-full mb-4 text-lg h-12 shadow-orange-500/20 shadow-lg">
                                Place Order
                            </Button>

                            <p className="text-xs text-gray-400 text-center px-4">
                                By placing your order, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                            <ShieldCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-sm text-blue-800 mb-1">Safe & Secure Delivery</h4>
                                <p className="text-xs text-blue-600 leading-relaxed">
                                    Your order is prioritized for safety. Drivers are screened and contactless delivery is available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
