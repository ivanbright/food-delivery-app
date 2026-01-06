import React from 'react';
import { Button } from '../components/ui/Button';
import { UtensilsCrossed, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Form */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 relative z-10 w-full lg:w-1/2">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <Link to="/" className="flex items-center space-x-2 mb-10 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                            <UtensilsCrossed className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            Quick<span className="text-primary">Bite</span>
                        </span>
                    </Link>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Please enter your details to sign in.
                        </p>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-gray-600">Remember for 30 days</span>
                                </label>
                                <a href="#" className="font-medium text-primary hover:underline">Forgot password?</a>
                            </div>

                            <Button className="w-full h-12 text-base rounded-xl">
                                Log in <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>

                            <Button variant="outline" className="w-full h-12 text-base rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-3" />
                                Sign in with Google
                            </Button>
                        </div>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account? {' '}
                            <a href="#" className="font-bold text-primary hover:underline">Create account</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block relative w-1/2 bg-gray-900">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    src="https://images.unsplash.com/photo-1543353071-087092ec393a?w=1600&fit=crop"
                    alt="Food background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

                <div className="absolute bottom-20 left-12 right-12 text-white">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                        <div className="flex text-yellow-400 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled />)}
                        </div>
                        <blockquote className="text-2xl font-serif leading-relaxed mb-6">
                            "QuickBite has completely transformed how I order food. The delivery is surprisingly fast and the app is so beautiful to use!"
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" />
                            <div>
                                <div className="font-bold text-white">Sarah Jenkins</div>
                                <div className="text-sm text-gray-300">Food Blogger</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StarIcon = ({ filled }: { filled?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
