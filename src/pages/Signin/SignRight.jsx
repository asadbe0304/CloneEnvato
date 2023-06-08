import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const SignRight = () => {
  const REGISTER_URL = "http://localhost:3000";
  // console.log(axios);

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // console.log(user)
  // console.log(pwd);
  // console.log(matchPwd)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    // setSuccess(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      // console.log(response?.acc);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  const navigate = useNavigate();
  function handle() {
    navigate("/login");
  }
  return (
    <>
      {success ? (
        handle()
      ) : (
        <div className="right-login mt-4">
          <div
            className="btn-group-vertical w-100 flex-column gap-3"
            role="group"
            aria-label="Vertical button group"
          >
            <button
              type="button"
              className="btn btn-outline-danger d-flex align-items-center  justify-content-center gap-2 rounded-2"
            >
              <FcGoogle />
              Google
            </button>
            <button
              type="button"
              className="btn btn-outline-dark  d-flex align-items-center  justify-content-center gap-2 rounded-2"
            >
              <BsApple />
              Apple
            </button>
            <button
              type="button"
              className="btn btn-outline-primary rounded-2  d-flex align-items-center  justify-content-center gap-2"
            >
              <SiFacebook />
              Facebook
            </button>
          </div>
          <div
            className="position-relative mt-4 d-flex line align-items-center justify-content-center my-2"
            style={{ zIndex: "-3" }}
          >
            <span className="position-absolute z-2 bg-white or">or</span>
          </div>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="w-100 d-flex gap-1 align-items-center mb-3 mt-4">
            <label htmlFor="floatingInut">
              Last Name
              <input
                type="text"
                required
                className="form-control mt-2"
                placeholder="Last name"
              />
            </label>
            <label htmlFor="floatingInut">
              First Name
              <input
                type="text"
                required
                className="form-control mt-2"
                placeholder="First name"
              />
            </label>
          </div>
          <div className=" mb-3 mt-4"></div>
          <div className=" mb-3 mt-4">
            <label htmlFor="floatingInut">Username
            <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </label>
            <input
              type="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className=" mb-3 mt-4">
            <label htmlFor="floatingInut">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 mt-4">
            <label htmlFor="floatingPasswor">
              Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid " : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="form-control my-2"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
          </div>
          <button className="btn w-100 my-4 btn-danger" onClick={handle}>
            Create Account{" "}
          </button>

          <div className="new-account">
            New here?
            <NavLink to={"/signin"} className="mx-2">
              Create an Envato account
            </NavLink>
          </div>
          <div className="mt-3 login-footer d-flex justify-content-between align-items-center">
            <p className="login-bottom-text">
              Envato collects and uses personal data in accordance with our
              Privacy Policy. By creating an account, you agree to our Terms &
              Conditions.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignRight;
