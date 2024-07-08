import {LOGO} from '../utils/helpers'
import {useState} from "react";

const Header = () => {
    const [signin, setSignin] = useState("Sign In")

    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className="logo"
                alt="swiggy-logo"
                src={LOGO}
              />
            </div>
            <div className="col-6">
              <div className="menu">
                <ul>
                  <li>Swiggy Corporate</li>
                  <li>Search</li>
                  <li>Offers</li>
                  <li>Help</li>
                  <button className='signin-btn' onClick={()=>{signin === "Sign In" ? setSignin("Sign Out") : setSignin("Sign In") }}>{signin}</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Header;