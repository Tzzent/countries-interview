import { create } from "zustand";

export const useSearch = create((set) => ({
  query: "",
  continentsSelected: [],
  setQuery: (q) => set({ query: q, continentsSelected: [] }),
  setContinentsSelected: (continents) => set({
    continentsSelected: continents
  }),
}))