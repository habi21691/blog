import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { callouts } from "../../data/collouts";
import EmptyList from "../../components/common/EmptyList";
import Footer from "../../components/Footer/footer";
import Spacelike from "../../assets/heart.png";
import DoubleTapLike from "../../assets/heart(1).png";
import Heart from "react-heart";
import Navbar from '../../components/navbar';

function Blog(props) {
  // console.log(props.id)
  const { id } = useParams();
  //  console.log(id)
  const [blog, setBlog] = useState(null);
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState(null);
  //  console.log(callouts)

  useEffect(() => {
    let blog = callouts.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
    // console.log(blog)
  }, []);

  // console.log(blog)
  return (
        <>
      <Navbar/>
    <div className="w-full py-16 justify-items-center sm:py-20 lg:py-20 h-14 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="  mt-6 mx-8 back">

      <Link to="/" className=" rounded-lg p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
        <span>&#8592;</span>
        <span className="">Go Back</span>
      </Link>
      </div>
      {/* {console.log(blog)} */}

      {blog ? (
        <div>
          <header className="mt-12">
            <p className="grid  justify-center ">
              <div className=" rounded-lg bg-orange-500 p-3 font-serif text-lg">

              Published By {blog.createAt}
              </div>
            </p>
            <h1 className=" font-serif m-4 text-lg ">{blog.name}</h1>
            {/* <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => {
                <div key={i}>{category}</div>
                }  )}
            </div> */}
          </header>
          <div className="grid grid-cols-3 gap-4 justify-center ml-3 ">
            <img
              src={blog.imageSrc}
              alt="cover"
              className="rounded-lg w-full  aspect-video transition ease-in delay-150  hover:scale-110  duration-300  "
            />
            {/* <img
              src={blog.imageSrc2}
              alt=" cover"
              className="rounded-lg w-ful  aspect-square transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
            />
            <img
              src={blog.imageSrc3}
              al="cover"
              className="rounded-lg w-full aspect-square transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
            /> */}
            {/* <p
            className="flex justify-end ml-40 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left
"
          >
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </p> */}
            <p className=" font-serif text-lg col-span-2">{blog.description}</p>
            <div className="flex justify-end ml-30 p-2">
              <Heart isActive={check} onClick={() => setCheck(!check)} className="object-contain h-8 mt-3 "/>
              {/* <input
              //   type={<Checkbox icon={<FavoriteBorder />}
              // checkedIcon={<like />}}
                icon={<Spacelike/>}
                value={check}
                type="checkbox"
                // onChange ={check ? <Spacelike/> : <DoubleTapLike/>}
                alt="likeImage"
                className="object-contain h-8 mt-3 "
              /> */}
              <motion.input
                whileFocus={{ scale: 1.2 }}
                type="text"
                value={comment}
                className="object-contain h-8 mt-3 ml-6 rounded-lg p-3"
                placeholder="Leave Comment... "
                onChange={(ev) => setComment(ev.target.value)}
              />
              
            </div>
          </div>
          
        </div>
      ) : (
        <EmptyList />
        )}

      <Footer />
    </div>
        </>
  );
}

export default Blog;
