import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Logo = () => (
    <a key="firsttitle" href="/">
      <img
        alt="logo"
        className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
      />
    </a>
  );


const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const {user} = useContext(UserContext)


    return (
      <div className="header">
        <Logo />
        <div className="nav-items">
          <ul>
            <li>
              <Link>Home</Link></li>
            <li>
             <Link to="/about">About</Link>  </li>
             <li><Link to="/contact">Contact</Link>  </li>
            <li> <Link to="/cart">Cart</Link>  </li>
            <li> {isOnline ? 'Online' : 'Offline'} </li>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        </div>
        {
          isLoggedIn ? <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Log Out</button> : <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Log In</button>
        }
      </div>
    );
  };
  export default Header;