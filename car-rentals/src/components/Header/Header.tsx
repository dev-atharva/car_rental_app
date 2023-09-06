import Auth from "./Auth";
import Hamburgerbutton from "./Hamburgerbutton";
import Logo from "./Logo";
import Menuoptions from "./Menuoptions";

const Header = () => {
  return (
    <div
      className="flex sticky top-0 w-full min-h-[10vh]
     bg-[rgba(255,255,255,0.25)] shadow-[0 8px 32px 0 rgba(31,38,135,0.37)]
      backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-md p-4 flex-row items-center justify-between z-30 "
    >
      <div className="block sm:hidden">
        <Hamburgerbutton />
      </div>
      <Logo />
      <div className="hidden sm:block">
        <Menuoptions />
      </div>
      <Auth />
    </div>
  );
};

export default Header;
