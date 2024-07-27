import { LOGO } from "../utils/helpers";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [signin, setSignin] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  const menu = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about",
      name: "About Us",
    },
    {
      to: "/contact",
      name: "Contact Us",
    },
    {
      to: "/grocery",
      name: "Grocery",
    },
  ];

  return (
    <div>
      <div className="w-full h-[60px] shadow-lg px-6 py-2">
        <div className="flex justify-between items-center">
          <div className="">
            <img className="w-[96px]" alt="swiggy-logo" src={LOGO} />
          </div>
          <div className="">
            <ul className="flex justify-between">
              <li>Online : {onlineStatus ? "✅" : "🔴"}</li>

              {menu.map((e, index) => (
                <li key={index} className="px-3">
                  <Link to={e.to}>{e.name}</Link>
                </li>
              ))}

              <li className="font-bold mr-3">
                <Link to="/cart">Cart Items : {cartItems.length}</Link>
              </li>

              <button
                className="mr-3"
                onClick={() => {
                  signin === "Sign In"
                    ? setSignin("Sign Out")
                    : setSignin("Sign In");
                }}
              >
                {signin}
              </button>

              <li>User : {loggedInUser}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
