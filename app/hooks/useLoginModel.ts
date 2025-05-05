import { create } from "zustand";
interface LoginModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const UseLoginModel = create<LoginModelStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default UseLoginModel;
