import React, { useRef, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  clearErrors,
  loginuseraction,
  registeruseraction,
} from "../../Actions/useraction";
import Loading from "../Loading/Loading";
import Metadata from "../Layout/Metadata";
import "./Login_Register.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import PreviewAvatar from "../../Images/Profile.png";

function Login_Register() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const history = useHistory();



  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const [logindata, setlogindata] = useState({
    Email: "",
    Password: "",
  });

  const logindatachange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name)
    setlogindata((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const loginbtn = (e) => {
    e.preventDefault();
    dispatch(loginuseraction(logindata));
    if (isAuthenticated) {
      alert.success("Logged In");
    }
  };



  const [registerdata, setregisterdata] = useState({
    Name: "",
    Email: "",
    Password: "",
    CPassword: "",
    Avatar: PreviewAvatar,
  });

  const registerdatachange = (e) => {
    const { name, value } = e.target;
    if (name === "Avatar") {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setregisterdata((state) => {
            return {
              ...state,
              [name]: reader.result,
            };
          });
        }
      };
    } else {
      setregisterdata((state) => {
        return {
          ...state,
          [name]: value,
        };
      });
    }
  };

  const registerbtn = (e) => {
    e.preventDefault();
    dispatch(registeruseraction(registerdata));
    if (isAuthenticated) {
      alert.success("Logged In");
    }
  };

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, isAuthenticated, history, redirect]);

  return (
    <>
      <Metadata title={"ECOMMERCE | Login"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>

              {/* Login Form  */}
              <form className="loginForm" ref={loginTab} onSubmit={loginbtn}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    required
                    onChange={logindatachange}
                    value={logindata.Email}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    required
                    onChange={logindatachange}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>

              {/* Register Form  */}
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerbtn}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                    value={registerdata.Name}
                    onChange={registerdatachange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email"
                    onChange={registerdatachange}
                    value={registerdata.Email}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="Password"
                    onChange={registerdatachange}
                    value={registerdata.Password}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="CPassword"
                    onChange={registerdatachange}
                    value={registerdata.CPassword}
                  />
                </div>

                <div id="registerImage">
                  <img src={registerdata.Avatar} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="Avatar"
                    accept="image/*"
                    onChange={registerdatachange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login_Register;
