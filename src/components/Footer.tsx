import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <UtensilsCrossed className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Quick<span className="text-primary">Bite</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Order food faster and smarter. We partner with the best restaurants to bring you delicious meals in minutes.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="#" className="hover:text-white transition-colors">About us</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Team</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Support</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Safety</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* App Buttons */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Get the app</h3>
                        <div className="space-y-4">
                            <button className="flex items-center w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-3 transition-colors group">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6 mr-3" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-gray-300">Download on the</div>
                                    <div className="text-sm font-bold">App Store</div>
                                </div>
                            </button>

                            <button className="flex items-center w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-3 transition-colors group">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-6 h-6 mr-3 filter invert opacity-80" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-gray-300">Get it on</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© 2026 QuickBite Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
