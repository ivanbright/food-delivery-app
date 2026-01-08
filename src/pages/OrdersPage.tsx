import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, RefreshCcw, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const OrdersPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-50 min-h-screen pb-20"
        >
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">My Orders</h1>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8">
                    <button className="pb-4 px-4 font-bold text-primary border-b-2 border-primary">All Orders</button>
                    <button className="pb-4 px-4 font-medium text-gray-500 hover:text-gray-900">Active</button>
                    <button className="pb-4 px-4 font-medium text-gray-500 hover:text-gray-900">Completed</button>
                </div>

                {/* Active Order Section */}
                <div className="mb-10">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Active Order</h2>

                    <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-orange-50/30">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" alt="Burger King" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Burger King</h3>
                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                            <span>Today at 2:30 PM</span>
                                            <span className="mx-2">•</span>
                                            <span>Order #24589</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right mr-2 hidden md:block">
                                        <div className="text-sm text-gray-500">Estimated Delivery</div>
                                        <div className="font-bold text-lg">2:55 PM - 3:05 PM</div>
                                    </div>
                                    <Badge variant="orange" className="px-3 py-1 text-sm">In Queue (#3)</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            {/* Progress Tracker */}
                            <div className="relative mb-8 px-2 max-w-3xl mx-auto mt-4">
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
                                <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-green-500 -translate-y-1/2 rounded-full"></div>

                                <div className="relative flex justify-between">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-sm flex items-center justify-center text-white z-10">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold text-green-600">Confirmed</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-sm flex items-center justify-center text-white z-10">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold text-green-600">Preparing</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center text-gray-400 z-10">
                                            <Package className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-400">On the way</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center text-gray-400 z-10">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-400">Delivered</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-lg p-4">
                                <div className="mb-4 md:mb-0 text-center md:text-left">
                                    <div className="text-sm text-gray-500 mb-1">Total Amount</div>
                                    <div className="text-2xl font-bold">$27.98</div>
                                </div>
                                <Button className="w-full md:w-auto px-8">Track Order</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Past Orders */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Past Orders</h2>

                    <div className="space-y-4">
                        {[1, 2, 3].map((order) => (
                            <div key={order} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Package className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-gray-900">Sushi Master</h3>
                                            <Badge variant="gray" className="text-green-700 bg-green-100">Delivered</Badge>
                                        </div>
                                        <p className="text-sm text-gray-500">Dec 12, 2025 • 3 items • $42.50</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <Button variant="outline" size="sm" className="hidden md:flex">View Receipt</Button>
                                    <Button variant="ghost" size="sm" className="bg-gray-50 text-primary hover:bg-orange-50 w-full md:w-auto">
                                        <RefreshCcw className="w-4 h-4 mr-2" /> Reorder
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
