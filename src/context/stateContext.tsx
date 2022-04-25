import { createContext } from 'react'

export interface StateContextType {
    query: any;
    setQuery: any;
    querySubmitted: any;
    setQuerySubmitted: any;
    searchResults: any;
    setSearchResults: any;
    packageInfo: any;
    setPackageInfo: any;
}

export const StateContext = createContext<StateContextType | null>(null);