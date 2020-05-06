import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SignupField from "./SignupField";

it("Should render a textbox with a placeHolder and its value in case of no error", () => {
  const { queryByTestId, getByLabelText } = render(
    <SignupField
      fieldName="myField"
      fieldPlaceHolder="My PlaceHolder"
      fieldValue="myValue"
    />
  );

  const inputField = getByLabelText("My PlaceHolder");
  expect(inputField).toHaveValue("myValue");
  expect(inputField.placeholder).toBe("My PlaceHolder");

  expect(queryByTestId("signup-form__error-message")).not.toBeInTheDocument();
});

it("should call onFieldChange when the input field change with the right parameters", () => {
  const onFieldChange = jest.fn();
  const { getByLabelText } = render(
    <SignupField
      fieldName="myField"
      fieldPlaceHolder="My PlaceHolder"
      fieldValue="myValue"
      onFieldChange={onFieldChange}
    />
  );
  fireEvent.change(getByLabelText("My PlaceHolder"), {
    target: { value: "my 2nd Value" },
  });
  expect(onFieldChange).toHaveBeenCalledWith("myField", "my 2nd Value");
});

it("should display an error message in case of error", () => {
  const { getByText, getByLabelText } = render(
    <SignupField
      fieldName="myField"
      fieldPlaceHolder="My PlaceHolder"
      errorMessage="This is an error"
    />
  );

  expect(getByLabelText("My PlaceHolder").placeholder).toBe("");

  expect(getByText("This is an error")).toBeInTheDocument();
});
