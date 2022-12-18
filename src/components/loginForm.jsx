import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export function LoginForm() {
  //   const { switchToSignup } = useContext(AccountContext);
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        navigator("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-slate-900  bg-cover">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md  px-8 py-12">
        <header className=" pb-14 items-center justify-items-center grid font-serif font-normal text-3xl ">
        🫡 Login
        </header>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-cyan-500 rounded-md "
          />
          <Marginer direction="vertical" margin={10} />
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border-2 border-cyan-500 rounded-md"
          />
          <Marginer direction="vertical" margin={10} />
          {/* <Marginer direction="vertical" margin={10} /> */}
          <MutedLink href="#">Forget your password?</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton
            type="submit"
            className=" bg-amber-600 hover:border-amber-600"
          >
            Signin
          </SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">
            Don't have an accoun?{" "}
            <BoldLink href="/RegistrationForm">Sign up</BoldLink>
          </MutedLink>
        </form>
      </div>
    </div>
  );
}
