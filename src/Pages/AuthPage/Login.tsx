import React from "react";
import MailIcon from "../../images/Icons/mailIcon";
import Button from "../../components/Buttons/buttonOrder";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../services/auth.js";
import { TOAST_TYPE, notify, setToken } from "../../utils/utils";
import { ROUTE_NAME } from "../typesRoute";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/user.action";
import Overlay from "../../components/Overlay/Overlay";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const submitHandler = async (values: any) => {
    try {
      const response: { access?: string; refresh?: string; detail?: string } =
        await login(values);
      if (response.access) {
        notify(TOAST_TYPE.SUCCESS, "Welcome!");
        setToken(response.access);
        navigate(ROUTE_NAME.HOME);
        dispatch(setUser("user"));
      }
      if (response.detail) {
        notify(TOAST_TYPE.ERROR, response.detail);
      }
    } catch (error) {
      console.log(error);
      notify(TOAST_TYPE.ERROR, error);
    }
  };

  return (
    <Overlay>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          submitHandler(values);
          resetForm();
        }}
      >
        <>
          <Form className="w-4/12  px-15px">
            <div className="text-28 leading-normal pb-40px font-bold font-opensans">
              Login
            </div>
            <div className="relative pb-40px">
              <label className="text-18 leading-6 font-normal font-opensans pb-5px">
                Email
              </label>
              <Field
                type="email"
                name="username"
                placeholder="abc@gmail.com"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white active:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="username" className="text-red-500" />
              <div className="absolute top-[42px] right-15px">
                <MailIcon />
              </div>
            </div>
            <div>
              <label className="text-18 leading-6 font-normal font-opensans pb-5px">
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="*******"
                className="pl-15px pr-[31px] text-14 leading-normal w-full h-45px rounded-10px border-[1px] border-inputBorder outline-none focus:border-[1px] focus:bg-white focus:border-inputBorder bg-white"
              />
              <ErrorMessage name="password" className="text-red-500" />
            </div>
            <div className="text-14 leading-normal font-opensans text-right pt-6px pb-50px">
              Forget password?
            </div>
            <div>
              <Button
                className="bg-primaryColor w-full h-50px text-20 leading-unset font-bold text-white rounded-15px font-montserratbg-primaryColor font-montserrat"
                Title="Login"
              />
            </div>
            <div className="text-18 font-normal font-opensans text-[#616161] flex justify-center pt-40px">
              Don’t have an account?
              <Link to={ROUTE_NAME.SIGNUP}>
                <div className="text-primaryColor font-bold pl-10px cursor-pointer">
                  Sign up
                </div>
              </Link>
            </div>
          </Form>
          <div className="w-8/12"></div>
        </>
      </Formik>
    </Overlay>
  );
};

export default Login;
