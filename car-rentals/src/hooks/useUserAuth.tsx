import { create } from "zustand";

interface UserAuthProps {
  loggedin: boolean;
  login: () => void;
  logout: () => void;
}

const useUserAuth = create<UserAuthProps>((set) => ({
  loggedin: false,
  login: () => set({ loggedin: true }),
  logout: () => set({ loggedin: false }),
}));
export default useUserAuth;
