import { create } from "zustand";

export type SearchQuery = {
  country: string| undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: Number;
  bathrooms: Number;
  bedrooms: Number;
  category: string;
};
interface SearchModelStore {
  isOpen: boolean;
  step: string;
  open: (step: string) => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}

const UseSearchModel = create<SearchModelStore>((set) => ({
  isOpen: false,
  step: "",
  open: (step) => set({ isOpen: true, step: step }),
  close: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  query: {
    country: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
    bedrooms: 0,
    category: "",
    bathrooms: 0,
  },
}));

export default UseSearchModel;
