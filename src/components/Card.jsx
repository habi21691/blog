import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Modal from "./modal";
// import { callouts } from "../data/collouts";

function Card(props) {
  const [open, setOpen] = useState(false);
  //  console.log(props.blogs)
 const navigator = useNavigate()
  return (
    <div className=" w-full bg-gray-100  ">
    <Modal open={open} setOpen={setOpen}  />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 justify-items-center">
            {props.blogs.map((callout) => (
       
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h1 className="mt-6 text-sm text-gray-500">
                  {/* <a href={callout.href}>
                      <span className="absolute inset-0" />
                    </a> */}
                  {callout.name}
                </h1>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
                <Link className="" to={`/blog/${callout.id}`}>
                 -->
                </Link>

                {/* <button
                type="button"
                  className="bg-sky-900 text-slate-50 p-2 mx-20 rounded-lg"
                  // open={open}
                
                  onClick={ () => {setOpen(true), console.log(callout.id)}}
                >
                  See More ->
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
