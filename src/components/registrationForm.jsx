import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../components/marginer";
import axios from "axios";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //  const { name, email, password } = formData;
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/users", formData)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-8 mx-auto md:h-screen lg:py-0 bg-slate-900 bg-cover ">
      <div className="w-full bg-white shadow rounded-lg sm:max-w-md md:mt-0 py-8 px-6">
        <h1 className=" grid justify-center items-center font-bold text-orange-900 text-xl font-serif">
          <FaUser fontSize="40px" />
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder=" Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input type="password" placeholder="Confirm Password" />
          <Marginer direction="vertical" margin={10} />
          <SubmitButton type="submit" onClick={handleSubmit}>
            Signup
          </SubmitButton>
        </form>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="/LoginForm">Signin</BoldLink>
        </MutedLink>
      </div>
    </div>
  );
}
