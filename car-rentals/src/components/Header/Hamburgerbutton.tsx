import { useCallback, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Hamburgerbutton = () => {
  const [sidebaropen, setsidebaropen] = useState(false);
  const togglesidebar = useCallback(() => {
    setsidebaropen((state) => !state);
  }, [setsidebaropen]);

  return (
    <div onClick={() => togglesidebar()} className="rounded-full relative ">
      {sidebaropen ? (
        <Sidebar sidebaropen={sidebaropen} togglesidebar={togglesidebar} />
      ) : (
        <RxHamburgerMenu size={27} color="white" />
      )}
    </div>
  );
};

export default Hamburgerbutton;
