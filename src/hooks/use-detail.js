import { create } from "zustand";

export const useDetail = create((set) => ({
  code: "",
  isOpen: false,
  onOpen: (code) => set({ code: code, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))