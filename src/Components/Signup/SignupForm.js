import React, { useState } from "react";
import SignupField from "./SignupField";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameErrMsg, setFirstNameErrMsg] = useState("");
  const [lastNameErrMsg, setLastNameErrMsg] = useState("");
  const [emailAddressErrMsg, setEmailAddressErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const inputData = {
    firstName: {
      defaultValue: "First Name",
      value: firstName,
      setValue: setFirstName,
      errMsgValue: firstNameErrMsg,
      setErrMsgValue: setFirstNameErrMsg,
    },
    lastName: {
      defaultValue: "Last Name",
      value: lastName,
      setValue: setLastName,
      errMsgValue: lastNameErrMsg,
      setErrMsgValue: setLastNameErrMsg,
    },
    emailAddress: {
      defaultValue: "Email Address",
      value: emailAddress,
      setValue: setEmailAddress,
      errMsgValue: emailAddressErrMsg,
      setErrMsgValue: setEmailAddressErrMsg,
    },
    password: {
      defaultValue: "Password",
      value: password,
      setValue: setPassword,
      errMsgValue: passwordErrMsg,
      setErrMsgValue: setPasswordErrMsg,
    },
  };

  const handleInputChange = (fieldName, fieldValue) => {
    const input = inputData[fieldName];
    input.setValue(fieldValue);
    input.setErrMsgValue("");
  };

  const handleSubmit = (event) => {
    checkMandatoryField("firstName");
    checkMandatoryField("lastName");
    checkMandatoryField("emailAddress") && checkEmail();
    checkMandatoryField("password");

    event.preventDefault();
  };

  const checkMandatoryField = (fieldName) => {
    const input = inputData[fieldName];

    if (input.value) {
      input.setErrMsgValue("");
      return true;
    } else {
      input.setErrMsgValue(`${input.defaultValue} cannot be empty`);
      return false;
    }
  };

  const checkEmail = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pattern.test(emailAddress)
      ? setEmailAddressErrMsg("")
      : setEmailAddressErrMsg("Looks like this is not an email");
  };

  return (
    <section className="signup-form">
      <p className="signup-price">
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
      <form onSubmit={handleSubmit}>
        <SignupField
          fieldName="firstName"
          fieldValue={firstName}
          fieldPlaceHolder="First Name"
          onFieldChange={handleInputChange}
          errorMessage={firstNameErrMsg}
        />
        <SignupField
          fieldName="lastName"
          fieldValue={lastName}
          fieldPlaceHolder="Last Name"
          onFieldChange={handleInputChange}
          errorMessage={lastNameErrMsg}
        />
        <SignupField
          fieldName="emailAddress"
          fieldValue={emailAddress}
          fieldPlaceHolder="Email Address"
          onFieldChange={handleInputChange}
          errorMessage={emailAddressErrMsg}
        />
        <SignupField
          fieldType="password"
          fieldName="password"
          fieldValue={password}
          fieldPlaceHolder="Password"
          onFieldChange={handleInputChange}
          errorMessage={passwordErrMsg}
        />
        <input
          className="signup-form__submit-field"
          type="submit"
          value="Claim your free trial"
        />
        <p className="signup-form__terms">
          <small>
            By clicking the button, you are agreeing to our{" "}
            <a href="/">Terms and Services</a>
          </small>
        </p>
      </form>
    </section>
  );
};

export default SignupForm;
