// Routes
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

// Images
import Temple from "../assets/temple.svg";

// All imports
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>fridayDotCom</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging Out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
