import { create } from "zustand";

export type SearchQuery = {
  country: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: Number;
  bathrooms: Number;
  bedrooms: Number;
  category: string;
};
interface SearchModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}

const UseSearchModel = create<SearchModelStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  query: {
    country: "",
    checkIn: null,
    checkOut: null,
    guests: 1,
    bedrooms: 0,
    category: "",
    bathrooms: 0,
  },
}));

export default UseSearchModel;
