import { MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type Suggestion = {
    display_name: string;
    lat: string;
    lon: string;
};

export default function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isSelected, setIsSelected] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    // Fetch suggestions
    useEffect(() => {
        if (query.length < 3 || isSelected) {
            setSuggestions([]);
            setSelectedIndex(-1);
            return;
        }

        const timer = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1&limit=10`
                );
                const data = await res.json();
                // ensure it's always an array
                setSuggestions(Array.isArray(data) ? data : []);
                setSelectedIndex(data.length > 0 ? 0 : -1);
            } catch (err) {
                console.error(err);
                setSuggestions([]);
                setSelectedIndex(-1);
            } finally {
                setLoading(false);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [query, isSelected]);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!suggestions.length) return;

        if (e.key === "ArrowDown") {
            setSelectedIndex((prev) => (prev + 1) % suggestions.length);
            scrollIntoView(selectedIndex + 1);
            e.preventDefault();
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
            scrollIntoView(selectedIndex - 1);
            e.preventDefault();
        } else if (e.key === "Enter") {
            if (selectedIndex >= 0) {
                const selected = suggestions[selectedIndex];
                setQuery(selected.display_name);
                setSuggestions([]);
                setIsSelected(true); // prevent further fetch
                onSearch(selected.display_name);
            } else {
                onSearch(query);
            }
        }
    };

    // Scroll highlighted suggestion into view
    const scrollIntoView = (index: number) => {
        if (!listRef.current || suggestions.length === 0) return;
        const listItems = listRef.current.children;
        const clampedIndex = (index + suggestions.length) % suggestions.length;
        const item = listItems[clampedIndex] as HTMLElement;
        if (item) {
            item.scrollIntoView({ block: "nearest" });
        }
    };

    return (
        <div className="relative w-full">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setIsSelected(false); // allow new fetch
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter delivery address"
                className="w-full h-14 pl-12 pr-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/30"
            />

            {/* Loader */}
            {loading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                </div>
            )}

            {/* Suggestions */}
            {query.length >= 3 && (
                <ul
                    ref={listRef}
                    className="absolute mt-2 w-full bg-white text-gray-900 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto"
                >
                    {!loading && suggestions.length === 0 && query.length <= 3 ? (
                        <li className="px-4 py-3 text-gray-500">No results found</li>
                    ) : (
                        suggestions.map((s, idx) => (
                            <li
                                key={idx}
                                onClick={() => {
                                    setQuery(s.display_name);
                                    setSuggestions([]);
                                    setIsSelected(true);
                                    onSearch(s.display_name);
                                }}
                                className={`px-4 py-3 cursor-pointer ${
                                    idx === selectedIndex ? "bg-primary/20" : "hover:bg-gray-100"
                                }`}
                            >
                                {s.display_name}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}
