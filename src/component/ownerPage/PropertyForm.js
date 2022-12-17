import React, { Component, Fragment } from "react";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import MultipleImgUpload from "./MultipleImgUpload";
// import { PropertyForm } from "./PropertyForm";

export default function PropertyForm(props) {
  const Continue = (e) => {
    props.nextStep();
  };
  const back = (e) => {
    props.prevStep();
  };

  return (
    <Fragment>
      {
        // <AppBar style={{ background: "#333" }} position="sticky">
        //   <Toolbar title="Enter Personal Information">
        //     <Typography color="inherit" variant="title">
        //       Enter Personal Details
        //     </Typography>
        //   </Toolbar>
        // </AppBar>
        // <TextField
        //   label="Occupation"
        //   hintText="Enter Occupation"
        //   onChange={handleChange("occupation")}
        //   defaultValue={values.occupation}
        // />
        // <br />
        // <TextField
        //   label="City"
        //   hintText="Enter City"
        //   onChange={handleChange("city")}
        //   defaultValue={values.city}
        // />
        // <br />
        // <TextField
        //   label="Bio"
        //   hintText="Enter Your Bio"
        //   onChange={handleChange("bio")}
        //   defaultValue={values.bio}
        // />
        // <br />
        // <br />
      }

      <div className="owner-signup-form py-5">
        <div className="text-center">
          <h2>
            List your <span className="h3-2"> property</span>
          </h2>
        </div>
        <div className="container mt-5">
          {/* <div className="form-inputs">
            <div className="option-select-box">
              <p>Type of property</p>
              <select
                className="form-select custm-select form-select-lg mb-2"
                aria-label=".form-select-lg example"
              >
                <option selected>Please select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="option-select-box">
              <p>Add address</p>
              <input
                type="text"
                className="form-control custm-select mb-2"
                id="exampleFormControlInput1"
                placeholder="Search..."
              />
            </div>
            <div className="mb-3 outer-border">
              <label for="exampleFormControlTextarea1" className="form-label">
                Breifly describe your property
              </label>
              <textarea
                className="form-control area-border"
                id="exampleFormControlTextarea1"
                rows="4"
              ></textarea>
              <div className="d-flex justify-content-end">
                <p className="text-muted">0/400</p>
              </div>
            </div>
            <div className="mb-3 outer-border">
              <label for="exampleFormControlTextarea1" className="form-label">
                Property website
                <span className="text-muted"> (optional)</span>
              </label>
              <textarea
                className="form-control area-border"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div className="outer-border mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Do you accept dogs?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="accept_dogs"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label " for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="accept_dogs"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <div className="outer-border mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Do you accept cats?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="accept_cats"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="accept_cats"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <div className="outer-border mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Is there on-site property management?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="property_management"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="property_management"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
            <div className="outer-border mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Upload some photos of your property (including exterior) and
                amenities
              </label>
              <MultipleImgUpload />
            </div>
            <div className="outer-border mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Property features
              </label>
              <div className="d-flex">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Courtyard
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Bike Storage
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Swimming Pool
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Sauna
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Co-Working Space
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Fitness Centre
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      EV Chargers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Private Bar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Valet Parking
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Media Room
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Concierge
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Courtyard
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Park
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Laundry Facilities
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Outdoor Barbecue
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Solar Panels
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Hot Tub
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      High Speed Internet
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Conference Space
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Coffee Bar
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Package Lockers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Rooftop Lounge
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Dry Cleaning Service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Cafe
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Storage
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Air Conditioning
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Play Equipment
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input squre-check"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Secured Entry
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-border mb-3 mt-5">
              <label for="exampleFormControlTextarea1" className="form-label">
                What type of parking is available?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="type_of_parking"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Street Parking
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="type_of_parking"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Undercover Secured Parking
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input custm-checked"
                  type="radio"
                  name="type_of_parking"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Reserved Spots
                </label>
              </div>
            </div>
          </div> */}
          <div>
            <p>Do you own or lease this property?</p>
          </div>
        </div>
      </div>
      <hr className="my-4"></hr>
      <div className="container d-flex justify-content-center prop-type my-5">
        <div className="prop-type-btn">
          <Button
            style={{
              background: "#fff",
              color: "#132B35",
              border: "1px solid #DDDDDD ",
              padding: ".5rem 1.5rem 0.5rem 1.5rem",
            }}
            label="Back"
            onClick={back}
          >
            Exit
          </Button>
        </div>
        <div>
          <Button
            style={{
              background: "#0D6571",
              color: "#FFFFFF",
              padding: ".5rem 1.5rem 0.5rem 1.5rem",
            }}
            label="Continue"
            onClick={Continue}
          >
            Continue
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

// export default PropertyForm;
