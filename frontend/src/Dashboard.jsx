import { Outlet, useNavigate } from "react-router";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import DashifyLogo from "./assets/Dashify-logo.png";
import NavMenu from "./components/NavMenu";
import SearchInput from "./components/SearchInput";
import axiosInstance from "./interceptor/interceptor";
import { logoutAndClearSession } from "./features/slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faMoon, faSun, faDesktop, faTableCellsLarge, faBuilding, faUser, faUsers, faBox, faFileInvoice} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const navMenu = [
  {
    name: "Dashboard",
    icon: <FontAwesomeIcon icon={faTableCellsLarge}/>,
    link: "/dashboard",
  },
  {
    name: "Properties",
    icon: <FontAwesomeIcon icon={faBuilding}/>,
    link: "/dashboard/properties",
  },
  {
    name: "Agents",
    icon: <FontAwesomeIcon icon={faUser}/>,
    link: "/dashboard/agents",
  },
  {
    name: "Customers",
    icon: <FontAwesomeIcon icon={faUsers}/>,
    link: "/dashboard/customers",
  },
  {
    name: "Orders",
    icon: <FontAwesomeIcon icon={faBox}/>,
    link: "/dashboard/orders",
  }
];

export function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state?.auth?.user?.email) || "No user"
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "light") {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "system");
    }
  }, [theme]);
  
  const handleLogout = async () => {
    try {
      //   await axiosInstance.post("/auth/logout"); // Hit the logout API
      dispatch(logoutAndClearSession()); // Clear Redux state and session storage
      navigate("/"); // Clear user data // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="sidebars">
      <title>Dashboard : Home</title>
      <div className="sidebar">
        <div className="company-logo">
          <img src={DashifyLogo} />
        </div>

        <div className="dashboard-links">
          <NavMenu navMenu={navMenu} />
        </div>
      </div>

      <div className="right-side">
        <div className="top-nav">
          <div className="left-menu">
            <SearchInput />
          </div>
          <div className="right-menu">
            <div>{currentUser}</div>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                {theme === "light" && <FontAwesomeIcon icon={faSun} />}
                {theme === "dark" && <FontAwesomeIcon icon={faMoon} />}
                {theme === "system" && <FontAwesomeIcon icon={faDesktop} />}
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <button href="#light" onClick={() => handleThemeChange("light")}>Light</button>
                  <button href="#dark" onClick={() => handleThemeChange("dark")}>Dark</button>
                  <button href="#system" onClick={() => handleThemeChange("system")}>System</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="outlet-page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
