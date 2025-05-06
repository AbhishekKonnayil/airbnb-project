import { create } from "zustand";
interface SignupModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const UseSignupModel = create<SignupModelStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default UseSignupModel;
