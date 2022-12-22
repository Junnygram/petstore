import React from "react";
import "./Form.css";
// import { useState } from "react";
import {
  // createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

import { useFormik } from "formik";

const initialValues = {
  FullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  confirmpassword: "",
};
const onSubmit = (values) => {
  console.log("formik data", values);
};

const validate = (values) => {
  // valus.fullName values.email values.phonenumber values.address values.password
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format ";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (
    !/^[+]*[(]{0-1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(values.phoneNumber)
  ) {
    errors.phoneNumber = "Invalid phone number ";
  }
  if (!values.address) {
    errors.address = "Required";
  } else if (!/^[a-zA-Z0-9]{8,} $/i.test(values.address)) {
    errors.address = "Incorrect address ";
  }
  if (!values.password) {
    errors.name = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.email)) {
    errors.password = "Invalid password format ";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Confirm Password doesn't match with password";
  }

  return errors;
};

const signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};
const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log("formik values", formik.values);
  console.log("formik errors", formik.errors);

  return (
    <div className="containering-container">
      <form className="create" onSubmit={formik.handleSubmit}>
        <h1 className="acct">Create An Account</h1>
        <p className="please">Please Enter Your Information</p>
        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Full Name"
          name="FullName"
          className="logindetails"
          required
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {/* {formik.errors.name ? <div>{formik.errors.name}</div> : null} */}

        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Email Address"
          name="email"
          className="logindetails"
          required
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          className="logindetails"
          required
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
        />
        {/* {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null} */}

        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Address"
          name="address"
          className="logindetails"
          required
          value={formik.values.address}
          onBlur={formik.handleBlur}
        />
        {/* {formik.errors.address ? <div>{formik.errors.address}</div> : null} */}

        <input
          onChange={formik.handleChange}
          className="logindetails"
          type="password"
          placeholder="Password (at least 8 character)"
          name="password"
          required
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <input
          onChange={formik.handleChange}
          className="logindetails"
          type="password"
          placeholder="confrim password"
          name="confirmpassword"
          required
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
        />

        <div className="tips">
          <p>Tips for a strong password:</p>
          <ul className="list">
            <li>
              Create a unique password that you’re not using anywhere else.{" "}
            </li>
            <li>
              use a combination of uppercase and lowercaseletter and numbers.
            </li>
            <li>use special character in your password</li>
          </ul>

          <input type="checkbox" className="checkbox" required />
          <label className="label" for="checkbox">
            by signing up you agree to our terms{" "}
            <a href="#" className="terms">
              {" "}
              terms & CONDITIONS of use and privacy policy.{" "}
            </a>
          </label>
        </div>

        <button type="submit" class="signupbtn">
          Create Account
        </button>
        <h4 className="Orsignup">Or sign up with</h4>
        <div className="hyperlink">
          <a className="btn1" onClick={signInWithGoogle}>
            {" "}
            <img
              className="img1"
              src="https://github.com/Junnygram/petzzi-contents/blob/main/googleicon.png?raw=true"
              alt=""
            />{" "}
            Google
          </a>
          <a className="btn2">
            {" "}
            <img
              className="img2"
              src="https://github.com/Junnygram/petzzi-contents/blob/main/facebook.png?raw=true"
              alt=""
            />
            Facebook
          </a>
        </div>
      </form>
      <form>
        <div className="tracker">
          <h3 className="create-account">
            Creating an account is fast, easy, and free.you’ll be able to manage
            your autoship, track your orders, write reviews, and more!
          </h3>
          <ul className="list">
            <li className="list-track">TRACK YOUR ORDERS </li>
            <li className="list-track">MANAGE AUTOSHIP </li>
            <li className="list-track">VIEW YOUR ORDER HISTORY </li>
            <li className="list-track">RATE AND REVIEW PRODUCTS </li>
            <li className="list-track">
              GET EXCLUSIVE OFFER, DISCOUNT,AND MORE!{" "}
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};
export default Form;
