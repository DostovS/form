import { Link } from "react-router-dom";

function EmptyUserList() {
  return (
    <form>
      <h2>Hey! You don't have access to user's list ☹️</h2>
      <p>To access list, please log in or sign up</p>
        <Link to="/log-in" className="btn btn-secondary">Log in</Link>
        <Link to="/sign-up" className="btn btn-success">Sign up</Link>
    </form>
  );
}
export default EmptyUserList;
