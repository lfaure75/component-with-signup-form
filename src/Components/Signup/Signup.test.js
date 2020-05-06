import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Signup from "./Signup";

it("Should display error message for each missing field when submitting the form", async () => {
  const { getByDisplayValue, findByText } = render(<Signup />);
  fireEvent.click(getByDisplayValue("Claim your free trial"));

  expect(await findByText("First Name cannot be empty")).toBeInTheDocument();
  expect(await findByText("Last Name cannot be empty")).toBeInTheDocument();
  expect(await findByText("Email Address cannot be empty")).toBeInTheDocument();
  expect(await findByText("Password cannot be empty")).toBeInTheDocument();
});

it("Should display an error message if the email is not correct", async () => {
  const { getByDisplayValue, getByLabelText, findByText } = render(<Signup />);
  fireEvent.change(getByLabelText("Email Address"), {
    target: { value: "myEmail.com" },
  });
  fireEvent.click(getByDisplayValue("Claim your free trial"));

  expect(
    await findByText("Looks like this is not an email")
  ).toBeInTheDocument();
});

it("Should not display any error message if all field are filled and correct when submitting the form", () => {
  const { getByDisplayValue, getByLabelText, queryByText } = render(<Signup />);
  fireEvent.change(getByLabelText("First Name"), {
    target: { value: "myFirstName" },
  });
  fireEvent.change(getByLabelText("Last Name"), {
    target: { value: "myLastName" },
  });
  fireEvent.change(getByLabelText("Email Address"), {
    target: { value: "myEmail@address.com" },
  });
  fireEvent.change(getByLabelText("Password"), {
    target: { value: "myPassword" },
  });
  fireEvent.click(getByDisplayValue("Claim your free trial"));

  expect(queryByText("First Name cannot be empty")).not.toBeInTheDocument();
  expect(queryByText("Last Name cannot be empty")).not.toBeInTheDocument();
  expect(queryByText("Email Address cannot be empty")).not.toBeInTheDocument();
  expect(queryByText("Password cannot be empty")).not.toBeInTheDocument();
  expect(
    queryByText("Looks like this is not an email")
  ).not.toBeInTheDocument();
});
