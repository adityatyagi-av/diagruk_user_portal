"use client";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {
  setRoute: (route: string) => void;
};
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login: FC<Props> = ({setRoute}) => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="loginmail@gmail.com"
              className={`${
                errors.email && touched.email && "border-red-500"
              } col-span-3`}
            />
          </div>
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}

          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type={!show ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={handleChange}
              className={`${
                errors.password && touched.password && "border-red-500"
              } col-span-3`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className=""
                size={20}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className=""
                size={20}
                onClick={() => setShow(false)}
              />
            )}
          </div>
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>

        <Button type="submit" className="flex mx-auto w-full items-center justify-center ">Login</Button>

        <h5 className="text-center pt-4 text-black text-[14px]">
            Not have any account?{" "}
            <span
            className="text-[#2190ff] pl-1 cursor-pointer" onClick={()=>setRoute("Sign-Up")}
            >Sign Up</span>
        </h5>
            
      </form>
      <br />
    </>
  );
};

export default Login;
