import { createContext } from 'react'

export interface StateContextType {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    querySubmitted: string;
    setQuerySubmitted: React.Dispatch<React.SetStateAction<string>>;
    packageInfo: { date?: string; name?: string; version?: string };
    setPackageInfo: React.Dispatch<React.SetStateAction<{ name?: string; version?: string; date?: string }>>;
}

export const StateContext = createContext<StateContextType | null>(null);