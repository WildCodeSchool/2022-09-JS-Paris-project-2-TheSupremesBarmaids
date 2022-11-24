import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import jwtDecode from "jwt-decode";

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);
  const handleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    const { sub: id, name, picture: photoURL } = decodedToken;
    localStorage.setItem("currentUser", JSON.stringify({ id, name, photoURL }));
  };

  const handleLogin = () => {
    setDisabled(true);
    try {
      window.google.accounts.id.initialize({
        client_id:
          "14714216989-qmj6gplgtkp4e7n0vsk17mfpie9abhs9.apps.googleusercontent.com",
        callback: handleResponse,
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error("Try to clear the cookies or try again later!");
        }
        if (
          notification.isSkippedMoment() ||
          notification.isDismissedMoment()
        ) {
          setDisabled(false);
        }
      });
    } catch (error) {
      console.error();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setDisabled(true);
  };
  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("currentUser"));
    if (check) {
      setDisabled(false);
      setCurrentUser(check);
    }
  }, []);

  return (
    <>
      {" "}
      {disabled ? (
        <button
          className="iconAction iconAction--login"
          type="button"
          onClick={handleLogin}
        >
          <FcGoogle />
          <span>Login</span>
        </button>
      ) : (
        <div className="iconAction iconAction--login_user">
          <img src={currentUser.photoURL} alt="logo" className="user-logo" />
          <a href="#top" className="logout" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}

export default Login;
