import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useContext, useState } from "react";
import AuthButton from "../../../components/UI/Button/AuthButton";
import axios from "axios";
import { TextField } from "../../../components/UI/FormInput/TextField";
import { LoginContext } from "../../../Helper/Context";

const Login = ({ showInfo }) => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
  });

  // redirecting
  const navigate = useNavigate();

  // login success
  const { loggedIn, setLoggedIn, loggingIn, setLoggingIn } =
    useContext(LoginContext);

  // Login error Message
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // login
  const login = async (values) => {
    try {
      setLoggingIn(true);
      const user = await axios.post(
        "https://morning-headland-70594.herokuapp.com/auth/login",
        { ...values }
      );
      console.log(user);
      if (user.status === 200) {
        setError(false);
        setErrorMessage(null);
        setLoggedIn(true);
        setTimeout(() => {
          setLoggingIn(false);
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      setLoggingIn(false);
      setLoggedIn(false);
      setErrorMessage(err.response.data.message);
      setError(true);
    }
  };

  console.log(loggedIn);
  return (
    <div className="flex flex-col justify-center  items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl p-10">
      {/* error block */}
      {error && !loggedIn && (
        <div className="w-full h-[50px] flex justify-center items-center ">
          <p className="text-red-700 text-xs">{errorMessage}</p>
        </div>
      )}

      {loggedIn && !error && (
        <div className="w-full h-[50px] flex justify-center items-center ">
          <p className="text-[#81d324] text-xs">Login Success!</p>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <h2 className="text-[#4f7f19] text-md ">Login</h2>
      </div>
      <AuthButton
        clas="text-slate-900 h-[40px]"
        icon="fa-brands fa-google mr-2"
        value="Sign in with Google"
      />

      <hr className="mt-4 w-full mb-8" />
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            login(values);
          }}
        >
          {(formik) => (
            <Form>
              <div>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <p className="text-xs text-right  ">
                  <Link
                    className="text-[#4f7f19] text-xs hover:text-gray-800 underline-offset-1"
                    to=""
                  >
                    {" "}
                    Forgot Password?
                  </Link>
                </p>
              </div>

              <AuthButton
                clas={`h-[40px] bg-[#4f7f19] ${
                  loggingIn && "bg-[#9fcf68] cursor-not-allowed"
                }`}
                type="submit"
                value="Submit"
                disable={loggingIn}
                loggingIn={loggingIn}
              />
            </Form>
          )}
        </Formik>

        <p className="text-xs mt-3">
          Dont have an account?
          <Link
            onClick={showInfo}
            className="text-[#4f7f19] text-xs hover:text-gray-800 "
            to=""
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
