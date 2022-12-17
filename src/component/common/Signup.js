import React from 'react'
import "./common.css"
import google from '../../assets/images/icon/Google.png'
import facebook from '../../assets/images/icon/facebook-light.png'
import apple from '../../assets/images/icon/apple.png'
import { Button } from '@mui/material';

function Signup() {
    return (
        <div className="container">
            <div className="w-50 mx-auto login">
                <div className="text-center py-5">
                    <h1 className=''>Welcome to Daybed</h1>
                </div>
                <div className="d-grid">
                    <Button className="google-btn">
                        <img className="social-media-icon" src={google} alt="" />{" "}
                        Continue with Google
                    </Button>
                    <Button className="facebook-btn my-4 py-3">
                        <img className=""
                            src={facebook}
                            alt=""
                        />{" "}
                        Continue with Facebook
                    </Button>
                    <Button className="apple-btn py-3 ">
                        <img className="social-media-icon" src={apple} alt="" />{" "}
                        Continue with Apple
                    </Button>
                </div>
                <div className="d-flex justify-content-around text-center py-4">
                    <hr className="line" />
                    <p style={{ width: "10%" }}>OR</p>
                    <hr className="line" />
                </div>
                <div>
                    <form action="" className='input-tag'>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="John" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Deo" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row row-auto ">
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password (6+ characters)"
                                />
                            </div>
                        </div>
                        <div class="d-grid gap-2 my-5">
                            <Button className="login-page-btn py-3">Log in</Button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <p className='text-muted'>
                        Already have an account?
                            <a className="link-green" herf="/sign-up">
                             Sign in
                            </a>
                            <br />
                            By continuing, you agree to our
                            <a className="link-green" href="">
                            T&C’s 
                            </a> and  <a className="link-green" href="">
                            Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 
 

export default Signup
