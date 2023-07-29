import React from "react";
import LoginOverlay from "./LoginOverlay";
import MailIcon from "../../images/Icons/mailIcon";
import Button from "../../components/Buttons/buttonOrder";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signup } from "../../services/auth.js";

const SignUp = () => {
  const initialValues = {
    username: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "too short")
      .max(20, "too long")
      .required("This field is required"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("This field is required"),
    email: Yup.string()
      .email("Not a valid email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "too short")
      .required("This field is required"),
  });

  const submitHandler = async (values: any) => {
    try {
      const response = await signup(values);
    } catch (error) {
      console.log("CALLED");
    }

    // if (response.data.data_status){

    // }
  };

  return (
    <LoginOverlay>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          submitHandler(values);
          resetForm();
        }}
      >
        <>
          <Form className="w-4/12">
            <div className="text-28 leading-normal pb-40px font-bold font-opensans text-center">
              Sign up
            </div>
            <div className="relative pb-40px">
              <p className="text-18 leading-6 font-normal font-opensans pb-5px">
                Name
              </p>
              <Field
                name="username"
                placeholder="ABC"
                type="text"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="username" className="text-red-500" />
              <div className="absolute top-[42px] right-15px">
                <MailIcon />
              </div>
            </div>
            <div className="relative pb-40px">
              <p className="text-18 leading-6 font-normal font-opensans pb-5px">
                Mobile No.
              </p>
              <Field
                name="phone"
                placeholder="999*******"
                type="tel"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="phone" className="text-red-500" />
              <div className="absolute top-[42px] right-15px">
                <MailIcon />
              </div>
            </div>
            <div className="relative pb-40px">
              <p className="text-18 leading-6 font-normal font-opensans pb-5px">
                Email
              </p>
              <Field
                name="email"
                placeholder="abc@gmail.com"
                type="email"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="email" className="text-red-500" />
              <div className="absolute top-[42px] right-15px">
                <MailIcon />
              </div>
            </div>
            <div className="pb-50px">
              <p className="text-18 leading-6 font-normal font-opensans pb-5px">
                Password
              </p>
              <Field
                name="password"
                placeholder="*******"
                type="password"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="password" className="text-red-500" />
            </div>
            <div className="text-center text-14 pb-5px px-5px">
              By signing up you agree with the
              <a href="#!" className="text-primaryColor">
                {" "}
                Privacy policy{" "}
              </a>
              and
              <a href="#!" className="text-primaryColor">
                {" "}
                Terms{" "}
              </a>{" "}
              of Vegancave
            </div>
            <div>
              <Button
                className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-opensans"
                Title="Get Started"
                type="submit"
              />
            </div>
            <div className="text-18 font-normal font-opensans text-[#616161] flex justify-center pt-40px">
              Already have an account?
              <Link to={ROUTE_NAME.LOGIN}>
                <div className="text-primaryColor font-bold pl-10px cursor-pointer">
                  Sign in
                </div>
              </Link>
            </div>
          </Form>
          <div className="w-8/12"></div>
        </>
      </Formik>
    </LoginOverlay>
  );
};

export default SignUp;
