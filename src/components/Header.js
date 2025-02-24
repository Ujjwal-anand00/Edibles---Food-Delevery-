import Assets from "./Assets/logo1.jpg";
import Assets2 from "./Assets/logoB.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="ml-auto mr-auto w-full h-[12vh] flex justify-between items-center shadow-[0px_10px_10px_-10px_rgba(33,35,38,0.1)]">
      <div className="ml-[50px] flex">
        <img className="w-[7vw]" src={Assets2}></img>
        <img className="w-[7vw]" src={Assets}></img>
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-[25px] px-[5vw] font-[600] list-none text-[17px] text-black">
          <li>
            <Link
              to="/"
              className="link text-black no-underline hover:text-[rgb(255,99,71)] hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link text-black no-underline hover:text-[rgb(255,99,71)] hover:cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="link text-black no-underline hover:text-[rgb(255,99,71)] hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/groccery"
              className="link text-black no-underline hover:text-[rgb(255,99,71)] hover:cursor-pointer"
            >
              Groccery
            </Link>
          </li>

          <li className=" text-[35px]">
            <Link
              to="/cart"
              className=" no-underline text-[rgb(255,99,71)] hover:cursor-pointer"
            >
              🛒
              <span className="text-[20px]">[{cartItems.length}]</span>
            </Link>
          </li>

          
          <li>
            <div className="flex flex-col">
              <div>{loggedInUser}</div>
              <div>Online Status : {onlineStatus ? "✅" : "🔴"}</div>
            </div>
          </li>
          <button
            className="bg-[#ffffff] border-2 border-[tomato] cursor-pointer text-[20px] font-[arial] text-[tomato] py-[5px] px-[20px] font-[550] rounded-full"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
