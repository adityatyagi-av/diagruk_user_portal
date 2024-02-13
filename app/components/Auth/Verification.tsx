"use client";
import React, { FC, useState,useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useToast } from "@/components/ui/use-toast"
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {
  setRoute: (route: string) => void;
};
type VerifyNumber={
    "0":string;
    "1":string;
    "2":string;
    "3":string;
};
const schema = Yup.object().shape({
    name:Yup.string().required("Please entere your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});


const Verification: FC<Props> = ({setRoute}) => {
    const [invalidError,setInvalidError]=useState<boolean>(false);
    const [verifyNumber,setVerifyNumber]=useState<VerifyNumber>({
        0:"",
        1:"",
        2:"",
        3:"",
    })
    const inputRefs=[
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const verifcationHandler= async()=>{
        console.log('test');
    }
    const handleInputChange=(index:number,value:string)=>{
        setInvalidError(false);
        const newVerifyNumber={...verifyNumber,[index]:value};
        setVerifyNumber(newVerifyNumber);
        if(value===''&&index>0){
            inputRefs[index-1].current?.focus();
        }else if(value.length===1 && index<3){
            inputRefs[index+1].current?.focus();
        }
    };
  
  return (
    <>
    <div>
      
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className="lg:w-[70%] m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] border-[3px] rounded-[10px] flex items-center text-black justify-center text-[18px] font-Poppins online-none text-center ${
              invalidError
                ? "shake border-red-500"
                : " border-[#0000004a]"
            }`}
            placeholder=""
            minLength={1}
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />

      <div className="w-full flex justify-center">
        <Button
       >
          {" "}
          Verify OTP
        </Button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-black">
        Go back to sign in?{" "}
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
        >
          Sign in
        </span>
      </h5>
    </div>
    </>
  );
};

export default Verification;
