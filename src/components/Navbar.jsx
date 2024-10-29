import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Squid</span>
            </div>

            <ul className="hidden md:flex lg:flex ml-14 space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="{item.href}"
                    className={`text-white px-4 py-2 rounded-md ${
                      item.label === "Download Template"
                        ? "download-gradient"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
