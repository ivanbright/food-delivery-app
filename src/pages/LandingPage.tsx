import React,{useState} from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBox from "../components/SearchBox.tsx";
import MapView from "../components/MapView.tsx";


type Location = {
    lat: number;
    lon: number;}
type RelatedPlaces = {
    lat: number;
    lon: number;
    name: string;
}

export const LandingPage: React.FC = () => {
    const [location, setLocation] = useState<Location|null>(null);
    const [relatedPlaces, setRelatedPlaces] = useState<RelatedPlaces[]>([]);

    const searchPlace = async (query:string) => {
        // 1️⃣ Find searched place
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
        );
        const data = await res.json();
        if (!data.length) return;

        const place = data[0];
        const lat = parseFloat(place.lat);
        const lon = parseFloat(place.lon);

        setLocation({ lat, lon });

        // 2️⃣ Find related places
        fetchRelatedPlaces(lat, lon);
    };

    const fetchRelatedPlaces = async (lat:number, lon:number) => {
        const query = `
      [out:json];
      (
        node["amenity"~"restaurant|pharmacy|hospital|bank"](around:1500,${lat},${lon});
      );
      out;
    `;

        const res = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query,
        });

        const data = await res.json();

        const places = data.elements.map(el => ({
            lat: el.lat,
            lon: el.lon,
            name: el.tags?.name || "Unnamed place",
        }));

        setRelatedPlaces(places);
        console.log("Related palces " + relatedPlaces);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=60"
                        alt="Food Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Order food. <span className="text-primary">Faster.</span> Smarter.
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Order from the best restaurants near you with real-time delivery tracking.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center max-w-2xl mx-auto gap-4">
                       <SearchBox onSearch={searchPlace} />
                        <Link to="/restaurants" className='w-full md:w-auto'>
                            <Button size="lg" className="w-full md:w-auto h-14 rounded-xl">
                                Find Food
                            </Button>
                        </Link>

                    </div>
                    {/*<div>*/}
                    {/*    <div className="flex-1">*/}
                    {/*        <MapView location={location} relatedPlaces={relatedPlaces} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: MapPin, title: "Select Location", desc: "Choose your address to see nearby restaurants." },
                            { icon: UtensilsIcon, title: "Choose Order", desc: "Browse menus and build your perfect meal." },
                            { icon: Clock, title: "Fast Delivery", desc: "Get food delivered to your doorstep in minutes." }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Restaurants Preview */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Featured Restaurants</h2>
                            <p className="text-gray-600">The best food in your area</p>
                        </div>
                        <Link to="/restaurants" className="hidden md:flex items-center text-primary font-medium hover:underline">
                            View all <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Link to={`/restaurant/${i}`} key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${i === 1 ? '1568901346375-23c9450c58cd' : i === 2 ? '1546069901-ba9599a7e63c' : '1565299624946-b28f40a0ae38'}?w=800&fit=crop&q=60`}
                                        alt="Restaurant"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                                        25-35 min
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Tasty Burger Hub</h3>
                                        <div className="flex items-center bg-green-100 px-2 py-1 rounded-lg">
                                            <Star className="w-3 h-3 text-green-700 mr-1 fill-current" />
                                            <span className="text-xs font-bold text-green-700">4.8</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">American • Burgers • Fast Food</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="text-green-600 font-medium">$0.00 delivery fee</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/restaurants">
                            <Button variant="outline" className="w-full">View all restaurants</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Partner CTA */}
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become a Partner</h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Grow your business with QuickBite. Reach more customers and increase your sales.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="secondary" size="lg" className="rounded-xl">Register Your Restaurant</Button>
                        <Button className="bg-white text-primary hover:bg-gray-100 rounded-xl" size="lg">Become a Courier</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper icon component since I missed importing UtensilsIcon
const UtensilsIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
);
