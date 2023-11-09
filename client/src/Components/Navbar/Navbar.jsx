import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import Auth from "../../Pages/Auth/Auth";

function Navbar({ toggleDrawer, setEditCreateChanelBtn}) {

  const [AuthBtn, setAuthBtn] = useState(false);
  const CurrentUser=useSelector(state=>state.currentUserReducer)

  //const CurrentUser = null;
  // const CurrentUser = {
  //    result: {
  //       email: "Mukesh@gmail.com",
  //       joinedOn: "2222-07-15T09:57:23.489Z",
  //      },
  //    };


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "648741954690-q1q7hbu1ai594jbre6findrn8paketle.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);


  const dispatch = useDispatch();


  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };


  const onFailure = (response) => {
    console.log("Failed", response);
  };


  return (
    <>
    <div className="Container_Navbar">
    <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <Link to={"/"} className='logo_div_Navbar'>
            <img src={logo} alt='logo'/>
            <p className='logo_title_Navbar'>Youtube</p>
        </Link>
        
    </div>
    <SearchBar/>
    <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
    <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
    <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
    <div className="Auth_cont_Navbar">
      {CurrentUser ? (
      <>
      <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
      <p className="fstChar_logo_App">
      {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
      </p>
      </div>
      </>):(
      <>
      <GoogleLogin
         clientId={"648741954690-q1q7hbu1ai594jbre6findrn8paketle.apps.googleusercontent.com"}
         onSuccess={onSuccess}
         onFailure={onFailure}
         render={(renderProps) => (
         <p onClick={renderProps.onClick} className="Auth_Btn">
              {/* <p onClick={logTmp} className="Auth_Btn"> */}
           <BiUserCircle size={22} />
             <b>SignIn</b>
         </p>
          )}
      
      />
      
      </>)}
      
    </div>
    </div>

{
  AuthBtn &&
  <Auth
  setEditCreateChanelBtn={setEditCreateChanelBtn}
  setAuthBtn={setAuthBtn}
  User={CurrentUser}
  />
}

</>
  )
}

export default Navbar