import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Colors, styles } from "../../constants/styles";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./Auth.css";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
import FadeIn from "../../components/animations/FadeIn";
import { SyncLoader } from "react-spinners";
import { registerWithEmailAndPassword } from "../../firebase/firebase";

function SignUp() {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [check, setCheck] = useState(false);

  function checkHandler() {
    setCheck(!check);
  }

  const signUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = async () => {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          navigate("/home");
          console.log(res);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    };
    res();

    setLoading(false);
  };

  const googleLogin = async () => {
    setLoading(true);
    const response = await signInWithGoogle();
    console.log(response.user.multiFactor.user);
    setCurrentUser(response.user.multiFactor.user);
    navigate("/home", { state: { currentUser: currentUser } });
    setLoading(false);
  };

  const navigate = useNavigate();
  return (
    <div
      style={{
        ...styles.container,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FadeIn>
        <div className="login_container">
          <motion.a
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 20,
            }}
            onClick={() => {
              navigate("/home");
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeOut",
            }}
            exit={{
              opacity: 0,
              x: 0,
            }}
            //   className="login_text"
          >
            Sign Up
          </motion.a>
          <input
            className="email_input"
            placeholder="Email or phone number"
            onChange={(text) => {
              setEmail(text);
            }}
          />
          <input
            className="email_input"
            placeholder="Password"
            onChange={(text) => {
              setPassword(text);
            }}
          />
          <a style={{ color: "white", marginTop: 10 }}>Forgot password?</a>
          <button
            className="login_button"
            onClick={() => {
              // signUp()
              registerWithEmailAndPassword(email, password);
            }}
          >
            <a
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Sign Up
            </a>
            <SyncLoader
              color={"white"}
              loading={loading}
              //     css={override}
              size={10}
            />
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 10,
              flexDirection: "column",
              width: "100%",
            }}
          >
            <a style={{ textAlign: "center" }}>Or sign up with</a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <div className="login_opts_button" onClick={googleLogin}>
                <img
                  src={require("../../assets/google.png")}
                  className="logo"
                />
                {/* <a>Gmail</a> */}
              </div>
              <div className="login_opts_button">
                <img
                  src={require("../../assets/facebook.png")}
                  className="logof"
                />
                {/* <a>Facebook</a> */}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 15,
              backgroundColor: "transparent",
              marginBottom: 30,
            }}
          >
            <div
              onClick={checkHandler}
              className="checkbox"
              style={
                check
                  ? {
                      backgroundColor: Colors.primary,
                      borderColor: Colors.primary,
                    }
                  : {
                      borderColor: "grey",
                    }
              }
            >
              {check ? <AiOutlineCheck color={"white"} /> : null}
            </div>
            <a>Terms and conditions</a>
          </div>
        </div>
      </FadeIn>
      <a style={{ color: Colors.primary, marginTop: 10 }}>{error}</a>
    </div>
  );
}

export default SignUp;
