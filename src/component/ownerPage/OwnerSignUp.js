import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../../constant";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useAuth0 } from "@auth0/auth0-react";
import google from "../../assets/images/icon/Google.png";
import facebook from "../../assets/images/icon/facebook-light.png";
import apple from "../../assets/images/icon/apple.png";

function OwnerSignUp() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_no: "",
    password: "",
    manage_home: "",
  });
  // console.log(user);
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    const { fname, lname, email, phone_no, password, manage_home } = user;
    console.log(user);
    const res = await fetch(`${base_url}owner/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone_no,
        password,
        manage_home,
      }),
    });
    console.log(res);
    const data = await res.json();
    let message = data.error;
    console.log(res.status);
    if (res.status === 422) {
      swal("Error", "Registration Failed !", "error", {
        button: "Back",
      });
      console.log(message);
    } else if (res.status === 200) {
      swal("Good job!", "Registration Successfully", "success", {
        button: "Aww yiss!",
      });
      navigate("/property_listing");
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="d-flex justify-content-center align-items-center col-lg-6">
        <div className="owner-signup-form py-5">
          <h2>Set up your property</h2>
          <h2 className="h3-2">owners dashboard</h2>
          <div className="mt-5">
            <form action="" className="input-tag">
              <div className="row mb-3">
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    {...register("fname", { required: true, maxLength: 10 })}
                    className="form-control"
                    aria-label="First name"
                    name="fname"
                    id="fname"
                    value={user.fname}
                    onChange={handleInput}
                  />
                  {errors.fname && <i>Please Enter Your First Name</i>}
                </div>

                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("lname", { required: true, maxLength: 10 })}
                    className="form-control"
                    aria-label="Last name"
                    name="lname"
                    id="lname"
                    value={user.lname}
                    onChange={handleInput}
                  />
                  {errors.lname && <i>Please Enter Your Last Name</i>}
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInput}
                  />
                  {errors.email && <i>Please Enter Your Valid Email</i>}
                </div>
                <div className="col">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone number
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("phone_no", { required: true, maxLength: 12 })}
                    name="phone_no"
                    id="phone_no"
                    value={user.phone_no}
                    onChange={handleInput}
                  />
                  {errors.phone_no && <i>Please Enter Your Phone Number</i>}
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="">
                  <label for="exampleFormControlInput1" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    })}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                  />
                  {errors.password && (
                    <i>Please Enter a Password 6-15 Digits</i>
                  )}
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="">
                  <label for="exampleFormControlInput1" className="form-label">
                    How many homes do you manage?
                    <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="manage_text"
                    id="manage_home"
                    value={user.manage_text}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  <p className="text-muted mb-0">
                    Already have an account?
                    <a className="link-green" herf="/sign-up">
                      Sign in
                    </a>
                  </p>
                  <p className="text-muted">
                    By continuing, you agree to our
                    <a className="link-green" href="">
                      T&C’s
                    </a>{" "}
                    and{" "}
                    <a className="link-green" href="">
                      Privacy Policy
                    </a>
                  </p>
                </label>
              </div>
            </form>
            <div className="d-grid gap-2 my-5">
              <Button
                type="button"
                onClick={handleSubmit(PostData)}
                className="owner-signup-btn py-3"
              >
                Sign up{" "}
              </Button>
            </div>
            {/* login with google  */}
            <div className="d-grid gap-2 my-5">
              <Button
                type="button"
                className="owner-signup-btn py-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Login with google
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div className="w-100">
                  <div className="text-end">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="text-center py-2">
                    <p className="custom-heading"> Log in or Sign up </p>
                  </div>
                </div>
              </div>
              <div className="model-body">
                <div className="d-grid px-5">
                  <Button className="google-btn">
                    <img className="social-media-icon" src={google} alt="" />{" "}
                    Continue with Google
                  </Button>
                  <Button className="facebook-btn my-4 py-3">
                    <img className="" src={facebook} alt="" /> Continue with
                    Facebook
                  </Button>
                  <Button className="apple-btn py-3 ">
                    <img className="social-media-icon" src={apple} alt="" />{" "}
                    Continue with Apple
                  </Button>
                </div>
                <div className="d-flex justify-content-around text-center py-5">
                  <hr className="line" />
                  <p style={{ width: "10%" }}>OR</p>
                  <hr className="line" />
                </div>
                <div className="px-5">
                  <div>
                    <label class="form-label" for="form3Example1q">
                      Email
                    </label>
                    <input
                      type="email"
                      id="form3Example1q"
                      class="form-control"
                    />
                  </div>
                  <div className="text-center d-grid my-3">
                    <Button
                      type="button"
                      className="owner-signup-btn py-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Continue with email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex col-lg-6 justify-content-center  owner-signup-right-part ">
        <div className="p-space">
          <h2>Here’s what to expect when listing </h2>
          <h2 className="h3-2"> your properties with Daybed</h2>
          <p>
            We’ll ask you to provide some basic information about your
            properties, set your price and upload some photos.
          </p>
          <p>
            Use the Daybed app to raise tickets for maintence work and get
            things sorted quickly and efficiently.
          </p>
          <p>
            Use the Daybed app to raise tickets for maintence work and get
            things sorted quickly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnerSignUp;
