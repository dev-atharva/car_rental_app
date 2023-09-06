import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Menuoptions = () => {
  const loacation = useLocation();
  const [currentpage, setcurrentpage] = useState<string | null>("home");

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setcurrentpage("home");
    } else if (pathname === "/fleets") {
      setcurrentpage("fleets");
    } else if (pathname === "/contact") {
      setcurrentpage("contact");
    }
  }, [loacation]);

  return (
    <div className="flex flex-row gap-5 items-center justify-center p-2 text-white font-light text-lg transition">
      <div className="menu-link-container">
        <Link
          to="/"
          className={`menu-link ${currentpage === "home" ? "active" : ""}`}
        >
          Home
        </Link>
      </div>

      <div className="menu-link-container">
        <Link
          to="/fleets"
          className={`menu-link ${currentpage === "fleets" ? "active" : ""}`}
        >
          Our Fleets
        </Link>
      </div>
      <div className="menu-link-container">
        <Link
          to="/contact"
          className={`menu-link ${currentpage === "contact" ? "active" : ""}`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Menuoptions;
