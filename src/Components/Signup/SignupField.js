import React from "react";
import classNames from "classnames";

const SignupField = ({
  fieldType = "text",
  fieldName,
  fieldValue = "",
  fieldPlaceHolder,
  onFieldChange,
  errorMessage,
}) => {
  const onInputChange = (event) => {
    onFieldChange(fieldName, event.target.value);
  };

  return (
    <>
      <input
        aria-label={fieldPlaceHolder}
        type={fieldType}
        value={fieldValue}
        placeholder={errorMessage ? "" : fieldPlaceHolder}
        onChange={onInputChange}
        className={classNames("signup-form__field", {
          "signup-form__field--error": errorMessage,
        })}
      />
      {errorMessage && (
        <p
          className="signup-form__error-message"
          data-testid="signup-form__error-message"
        >
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default SignupField;
