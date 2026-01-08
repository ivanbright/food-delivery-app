import { createContext, useContext, useState, type ReactNode } from 'react'
type Location = {
    display_name: string;
    lat: number | null;
    lon: number | null;
}

type LocationContextType = {
    location: Location;
    setLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
    undefined
)
export const LocationProvider = ({ children }: { children: ReactNode }) => {

    const [location, setLocation] = useState<Location>({
        display_name: "",
        lat: null,
        lon: null
    });

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    )

}

export const useLocation = () => {
    const context = useContext(LocationContext);

    if (!context) {
        throw new Error("useLocation must be used within useLocation");
    }
    return context;
}