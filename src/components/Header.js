import { LOGO } from "../utils/helpers";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [signin, setSignin] = useState("Sign In");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="logo" alt="swiggy-logo" src={LOGO} />
          </div>
          <div className="col-6">
            <div className="menu">
              <ul>
                <li>Online : {onlineStatus ? "✅" : "🔴"}</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/grocery">Grocery</Link>
                </li>
                <li>Help</li>
                <button
                  className="signin-btn"
                  onClick={() => {
                    signin === "Sign In"
                      ? setSignin("Sign Out")
                      : setSignin("Sign In");
                  }}
                >
                  {signin}
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
