// import React, { Component } from "react";
// import FormUserDetails from "./components/FormUserDetails";
// import FormPersonalDetails from "./components/FormPersonalDetails";
import PropertyType from "./PropertyType";
import PropertyForm from "./PropertyForm";
// import Confirm from "./components/Confirm";
// import Success from "./components/Success";

import React, { useState } from "react";

export default function PropertyListing() {
  const state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  const { firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to prev step

  const prevStep = () => {
    setStep(step - 1);
  };
  const firstStep = () => {
    setStep({
      step: 1,
    });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setStep({ [input]: e.target.value });
  };
  return (
    <div>
      {(() => {
        switch (step) {
          default:
            return <h1>User Forms not working. Enable Javascript!</h1>;

          case 1:
            return (
              <PropertyType
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <PropertyForm
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values}
              />
            );
          //   case 3:
          //     return (
          //       <Confirm
          //         nextStep={this.nextStep}
          //         prevStep={this.prevStep}
          //         values={values}
          //       />
          //     );
          //   //
          //   case 4:
          //     return <Success firstStep={this.firstStep} />;
        }
      })()}
    </div>
  );
}
