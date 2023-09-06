import { create } from "zustand";

interface Cartypeprops {
  type: string;
  change_type: (value: string) => void;
}

const useCarTypeState = create<Cartypeprops>((set) => ({
  type: "",
  change_type: (value: string) => set({ type: value }),
}));

export default useCarTypeState;
