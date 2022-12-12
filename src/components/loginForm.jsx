import React from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer";

// import { AccountContext } from "./accountContext";

export function LoginForm(props) {
//   const { switchToSignup } = useContext(AccountContext);

  return (
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-slate-900  bg-cover">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md  px-8 py-12" >
       <header className=" pb-14 items-center justify-items-center grid font-serif font-normal text-xl ">Login</header>
        <Input type="email" placeholder="Email" className="border-2 border-cyan-500 rounded-md "/>
        <Marginer direction='vertical' margin={10}/>
        <Input type="password" placeholder="Password" className="border-2 border-cyan-500 rounded-md" />
      <Marginer direction='vertical' margin={10}/>
      {/* <Marginer direction="vertical" margin={10} /> */}
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" className=" bg-amber-600 hover:border-amber-600">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="/RegistrationForm" >
          Sign up
        </BoldLink>
      </MutedLink>
      </div>
    </div>
  );
}