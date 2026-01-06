import { ShoppingBag, User, UtensilsCrossed, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary';
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
                {/* Logo and Nav Wrapper */}
                <div className="flex items-center gap-8 lg:gap-12">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                            <UtensilsCrossed className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900 hidden sm:block">
                            Quick<span className="text-primary">Bite</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
                        <Link to="/restaurants" className={`font-medium py-2 transition-colors ${isActive('/restaurants')}`}>
                            Restaurants
                        </Link>
                        <Link to="/orders" className={`font-medium py-2 transition-colors ${isActive('/orders')}`}>
                            My Orders
                        </Link>
                        <Link to="/help" className={`font-medium py-2 transition-colors ${isActive('/help')}`}>
                            Help
                        </Link>
                    </nav>
                </div>

                {/* Global Search Bar */}
                <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search for food, coffee, groceries..."
                            className="w-full h-10 pl-10 pr-4 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <Link to="/checkout" className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
                        <ShoppingBag className="w-6 h-6 text-gray-700" />
                        <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                            3
                        </span>
                    </Link>

                    <Link to="/login">
                        <Button variant="ghost" className="hidden md:flex">Log in</Button>
                    </Link>

                    <Link to="/profile" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-transparent hover:border-primary transition-all">
                        <User className="w-6 h-6 text-gray-600" />
                    </Link>
                </div>
            </div>
        </header>
    );
};
