import React, { useState, Fragment } from "react";

import { Button, TextField, Toolbar, Typography } from "@mui/material";
import ImageUploading from "react-images-uploading";

// import home_icon from "../../assets/images/icon/home.png";
// import bulding_icon from "../../assets/images/icon/buildings.png";

export default function PropertyType(props) {
  const [floorplanImages, setFloorplanImages] = React.useState([]);
  const [propertyImages, setPropertImages] = React.useState([]);

  const maxNumber = 8;
  const handleFloorPlanImages = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setFloorplanImages(imageList);
  };
  const handlePropertyImages = (imageList, addUpdateIndex) => {
    setPropertImages(imageList);
  };
  const [bedrooms, setBedrooms] = useState(0);
  const incrBedrooms = () => {
    setBedrooms(bedrooms + 1);
  };
  const decrBedrooms = () => {
    setBedrooms(bedrooms - 1);
  };

  const [bathrooms, setBathrooms] = useState(0);
  const incrBathrooms = () => {
    setBathrooms(bathrooms + 1);
  };
  const decrBathrooms = () => {
    setBathrooms(bathrooms - 1);
  };
  const [parkingSpaces, setparkingSpaces] = useState(0);
  const incrparkingSpaces = () => {
    setparkingSpaces(parkingSpaces + 1);
  };
  const decrparkingSpaces = () => {
    setparkingSpaces(parkingSpaces - 1);
  };

  const Continue = () => {
    // e.preventDefault();
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
      <div>
        <form>
          <div className="w-50 mx-auto pb-5">
            <div className="owner-signup-form ">
              <div className="text-center my-3 p-3">
                <p className="custom-heading"> List your property</p>
              </div>

              <div>
                <p>
                  <strong>Do you own or lease this property?</strong>{" "}
                </p>{" "}
                <div class="form-check pb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="ownProperty"
                    id="iOwnThisProperty"
                    value="option1"
                  />
                  <label class="fw-normal ms-2" for="iOwnThisProperty">
                    I own this property
                  </label>
                </div>
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="ownProperty"
                    id="iLeaseThisProperty"
                    value="option2"
                  />
                  <label class="fw-normal ms-2" for="iLeaseThisProperty">
                    I lease this property
                  </label>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label " for="unitNumber">
                    Unit Number (optional)
                  </label>
                  <input
                    type="text"
                    id="unitNumber"
                    class="form-control form-control-lg"
                  />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="floorLevel">
                    Floor Level (optional)
                  </label>
                  <input
                    type="text"
                    id="floorLevel"
                    class="form-control form-control-lg"
                  />
                </div>
              </div>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example1q">
                Street Address
              </label>
              <input type="text" id="form3Example1q" class="form-control" />
            </div>
            <div class="row mt-4">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="city">
                    City/town
                  </label>
                  <input
                    type="text"
                    id="city"
                    class="form-control form-control-lg"
                  />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="postalCode">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    class="form-control form-control-lg"
                  />
                </div>
              </div>
            </div>
            <div className="form-inputs ">
              <div className="option-select-box">
                <p>Type of property</p>
                <select
                  className="form-select custm-select my-2"
                  aria-label=".form-select-lg example"
                >
                  <option className="options" selected>
                    Please select
                  </option>
                  <option className="options" value="1">
                    One
                  </option>
                  <option className="options" value="2">
                    Two
                  </option>
                  <option className="options" value="3">
                    Three
                  </option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-1 mt-3">
              <div>
                <h5>Bedrooms</h5>
                <div className="d-flex justify-content-around incr-decr-box  align-item-center  pt-3 px-4">
                  <div>
                    <p className="circle-minus" onClick={decrBedrooms}>
                      -
                    </p>
                  </div>
                  <div>
                    <input
                      className="form-control incr-decr-input ms-3"
                      type="number"
                      value={bedrooms}
                    />
                  </div>
                  <div>
                    <p className="circle-plus" onClick={incrBedrooms}>
                      +
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h5>Bathrooms</h5>
                <div className="d-flex justify-content-around incr-decr-box align-item-center  pt-3 px-4">
                  <div>
                    <p className="circle-minus" onClick={decrBathrooms}>
                      -
                    </p>
                  </div>
                  <div>
                    <input
                      className="form-control incr-decr-input ms-3"
                      type="number"
                      value={bathrooms}
                    />
                  </div>
                  <div>
                    <p className="circle-plus" onClick={incrBathrooms}>
                      +
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h5>Parking spaces</h5>
                <div className="d-flex justify-content-around incr-decr-box align-item-center pt-3 px-4">
                  <div>
                    <p className="circle-minus" onClick={decrparkingSpaces}>
                      -
                    </p>
                  </div>
                  <div>
                    <input
                      className="form-control incr-decr-input ms-3"
                      type="number"
                      value={parkingSpaces}
                    />
                  </div>
                  <div>
                    <p className="circle-plus" onClick={incrparkingSpaces}>
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-outline mt-4">
              <label class="form-label" for="number">
                Sq. m.
              </label>
              <input type="number" id="number" class="form-control" />
            </div>
            <div className="mt-3">
              <label for="breiflyDescribeYourProperty" class="form-label">
                Breifly describe your property
              </label>
              <textarea
                class="form-control"
                id="breiflyDescribeYourProperty"
                rows="3"
              ></textarea>
            </div>
            <div className="mt-3">
              <p>
                <strong>What type of parking is available?</strong>
              </p>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="parkingType"
                  id="streetParking"
                  value="option1"
                />
                <label class="fw-normal ms-2" for="streetParking">
                  Street Parking
                </label>
              </div>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="parkingType"
                  id="undercoverSecuredParking"
                  value="option2"
                />
                <label class="fw-normal ms-2" for="undercoverSecuredParking">
                  Undercover Secured Parking
                </label>
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="parkingType"
                  id="reservedSpots"
                  value="option1"
                />
                <label class="fw-normal ms-2" for="reservedSpots">
                  Reserved Spots
                </label>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <strong>Do you accept dogs?</strong>
              </p>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="acceptDogs"
                  id="yes"
                  value="option1"
                />
                <label class="fw-normal ms-2" for="yes">
                  Yes
                </label>
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="acceptDogs"
                  id="no"
                  value="option2"
                />
                <label class="fw-normal ms-2" for="no">
                  No
                </label>
              </div>
            </div>
            <div className="my-3">
              <p>
                <strong>Do you accept cats?</strong>
              </p>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="acceptCats"
                  id="yes"
                  value="option1"
                />
                <label class="fw-normal ms-2" for="yes">
                  Yes
                </label>
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="acceptCats"
                  id="no"
                  value="option2"
                />
                <label class="fw-normal ms-2" for="no">
                  No
                </label>
              </div>
              <div className="mt-3">
                <p>
                  <strong>Is there on-site property management?</strong>
                </p>
                <div class="form-check pb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="manageProperty"
                    id="yes"
                    value="option1"
                  />
                  <label class="fw-normal ms-2" for="yes">
                    Yes
                  </label>
                </div>
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="manageProperty"
                    id="no"
                    value="option2"
                  />
                  <label class="fw-normal ms-2" for="no">
                    No
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <div className="App">
                  <ImageUploading
                    multiple
                    value={floorplanImages}
                    onChange={handleFloorPlanImages}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <p>
                          <strong>Upload floor plan</strong>{" "}
                          <span className="text-muted">(optional)</span>
                        </p>
                        <button
                          className="img-upload-box"
                          style={isDragging ? { color: "red" } : null}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <p className="btn-text">
                            Drop files here or <span> browse</span>
                          </p>
                        </button>
                        &nbsp;
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                X
                              </button>
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                  <ImageUploading
                    multiple
                    value={propertyImages}
                    onChange={handlePropertyImages}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <div className="d-flex justify-content-between">
                          <p>
                            <strong>Upload some photos of your property</strong>{" "}
                          </p>
                          <p className="text-muted">
                            {propertyImages.length}/8
                          </p>
                        </div>
                        <button
                          className="img-upload-box"
                          style={isDragging ? { color: "red" } : null}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <p className="btn-text">
                            Drop files here or <span> browse</span>
                          </p>
                        </button>
                        &nbsp;
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                X
                              </button>
                              <button onClick={() => onImageRemove(index)}>
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-50 mx-auto pt-5">
            <div className="container d-flex justify-content-around prop-type my-5">
              <div className="prop-type-btn">
                <Button
                  style={{
                    background: "#fff",
                    color: "#132B35",
                    fontSize: "14px",
                    border: "1px solid #DDDDDD ",
                    borderRadius: "15px",
                    padding: "1.2rem 5rem 1.2rem 5rem",
                  }}
                  // label="Continue"
                  // onClick={this.continue}
                >
                  Exit
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    background: "#0D6571",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    borderRadius: "15px",

                    padding: "1.2rem 3.2rem 1.2rem 3.2rem",
                  }}
                  label="Continue"
                  onClick={Continue}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <hr className="my-4"></hr>
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
      </div> */}
    </Fragment>
  );
  //   const { values, handleChange } = props;
  // return (
  //   <div>
  //     <div className="d-flex container justify-content-center">
  //       <div className="owner-signup-form py-5">
  //         <div className="text-center">
  //           <h2>What type of property </h2>
  //           <h2 className="h3-2">do you have?</h2>
  //           <p className="text-muted mt-4">
  //             Don’t worry, you can make changes to these <br />
  //             later on the owner’s dashboard.
  //           </p>
  //         </div>
  //         <div className="d-flex justify-content-center mt-5">
  //           <div className="select-box">
  //             <div className="d-flex justify-content-between">
  //               <img src={bulding_icon} className="" />
  //               <input
  //                 class="form-check-input round-check"
  //                 type="checkbox"
  //                 id="inlineCheckbox1"
  //                 value="option1"
  //               ></input>
  //             </div>
  //             <h4>Building Complex</h4>
  //             <p>
  //               You own a building complex or property with multiple flats,
  //               units or dwellings.
  //             </p>
  //           </div>
  //           <div className="select-box">
  //             <div className="d-flex justify-content-between">
  //               <img src={home_icon} className="" />
  //               <input
  //                 className="form-check-input round-check"
  //                 type="checkbox"
  //                 id="inlineCheckbox1"
  //                 value="option1"
  //               ></input>
  //             </div>
  //             <h4>Apartment</h4>
  //             <p>
  //               You have an individual apartment, unit or dwelling that you
  //               would like to list on Daybed.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-lg-4 mt-5 ">
  //           <p className="text-center text-muted">
  //             These details are for the complex or community <br />
  //             that your home(s) exists within
  //           </p>
  //         </div>

  //         {
  //           //   <Toolbar title="Enter User Details">
  //           //     <Typography color="inherit" variant="title">
  //           //       Enter User Details
  //           //     </Typography>
  //           //   </Toolbar>
  //           // <TextField
  //           //   label="First Name"
  //           //   onChange={handleChange("firstName")}
  //           //   defaultValue={values.firstName}
  //           // />
  //           // <br />
  //           // <TextField
  //           //   label="Last Name"
  //           //   onChange={handleChange("lastName")}
  //           //   defaultValue={values.lastName}
  //           // />
  //           // <br />
  //           // <TextField
  //           //   label="Email"
  //           //   onChange={handleChange("email")}
  //           //   defaultValue={values.Email}
  //           // />
  //         }
  //       </div>
  //     </div>
  //     <hr className="my-4"></hr>
  //     <div className="container d-flex justify-content-center prop-type my-5">
  //       <div className="prop-type-btn">
  //         <Button
  //           style={{
  //             background: "#fff",
  //             color: "#132B35",
  //             border: "1px solid #DDDDDD ",
  //             padding: ".5rem 1.5rem 0.5rem 1.5rem",
  //           }}
  //           // label="Continue"
  //           // onClick={this.continue}
  //         >
  //           Exit
  //         </Button>
  //       </div>
  //       <div>
  //         <Button
  //           style={{
  //             background: "#0D6571",
  //             color: "#FFFFFF",
  //             padding: ".5rem 1.5rem 0.5rem 1.5rem",
  //           }}
  //           label="Continue"
  //           onClick={Continue}
  //         >
  //           Continue
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
