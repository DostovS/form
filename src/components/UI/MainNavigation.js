import { Link } from "react-router-dom";
import classes from "./MainNavigation.modules.css";


function MainNavigation() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li className="nav-item">
            <Link to="/">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/log-in">LogIn</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up">SignIn</Link>
          </li>
          <li className="nav-item">
            <Link to='/log-in' className="btn btn-danger">Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
