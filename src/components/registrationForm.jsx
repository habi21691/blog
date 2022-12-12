import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../components/marginer";

export function RegistrationForm(props) {

  return (
    <div className="flex flex-col items-center justify-center py-6 px-8 mx-auto md:h-screen lg:py-0 bg-slate-900 bg-cover ">
      <div className="w-full bg-white shadow rounded-lg sm:max-w-md md:mt-0 py-8 px-6" >
        <h1 className=" grid justify-center items-center font-bold text-orange-900 text-xl font-serif">Sign Up</h1>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="/LoginForm" >
          Signin
        </BoldLink>
      </MutedLink>
      </div>
    </div>
  );
}