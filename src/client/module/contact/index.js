import { useEffect, useState } from "react";
import ContactView from "./view";
import { emailRegex, mobileNumberRegex } from "../../shared/constant";
import emailJs from "@emailjs/browser";
import { sendMessage } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultState = {
  fullName: "",
  mobile: "",
  email: "",
  message: "",
  errors: {},
  isAllValueFilled: false,
};
let isDisabled = true;

const Contact = () => {
  const [state, setState] = useState(defaultState);

  const notify = (text) => toast(text);

  const validation = (name, value) => {
    let fieldError = "";
    if (!value) {
      fieldError = "Required";
      setState((prevState) => ({
        ...prevState,
        isAllValueFilled: false,
      }));
    } else if ((name || "").toLowerCase() === "fullname" && value.length > 20) {
      fieldError = "Max. 20 Chars allowed.";
    } else if ((name || "").toLowerCase() === "mobile" && value.length > 15) {
      fieldError = "Not a valid number.";
    } else if (
      (name || "").toLowerCase() === "mobile" &&
      !mobileNumberRegex.test(value)
    ) {
      fieldError = "Only number is allowed.";
    } else if (
      (name || "").toLowerCase() === "email" &&
      !emailRegex.test(value)
    ) {
      fieldError = "Not a valid email.";
    } else if ((name || "").toLowerCase() === "message" && value.length > 200) {
      fieldError = "Max. 200 Chars allowed.";
    }
    return fieldError;
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const fieldError = validation(name, value);
    isDisabled = false;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors:
        {
          ...prevState.errors,
          [name]: fieldError,
        } || {},
    }));
  };

  const handleCheckAllValueIsFilledOrNot = () => {
    if (
      !!state.fullName &&
      !!state.mobile &&
      !!state.email &&
      !!state.message
    ) {
      setState((prevState) => ({
        ...prevState,
        isAllValueFilled: true,
      }));
    }
  };

  const handleSubmit = async () => {
    const payload = {
      fullName: state.fullName,
      mobile: state.mobile,
      email: state.email,
      message: state.message,
    };

    const data = sendMessage(payload);
    // console.log("data", data);

    setState((prevState) => ({
      ...prevState,
      fullName: "",
      mobile: "",
      email: "",
      message: "",
    }));
    notify("Submitted Successfully.");
  };

  const handleDisabled = () => {
    let value = true;
    const errorValue = new Set(Object.values(state.errors));
    errorValue.delete("");
    if (Array.from(errorValue).length === 0) {
      value = false;
    } else {
      value = true;
    }
    return value;
  };

  useEffect(() => {
    handleCheckAllValueIsFilledOrNot();
  }, [state.fullName, state.email, state.message, state.mobile]);

  return (
    <>
      <ContactView
        handleChange={handleChange}
        fullName={state.fullName}
        mobile={state.mobile}
        email={state.email}
        message={state.message}
        handleSubmit={handleSubmit}
        handleDisabled={handleDisabled}
        isDisabled={isDisabled || !state.isAllValueFilled}
        errors={state.errors}
      />
      <ToastContainer />
    </>
  );
};

export default Contact;
