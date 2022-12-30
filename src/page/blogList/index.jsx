import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { callouts } from "../../data/collouts";
import EmptyList from "../../components/common/EmptyList";
import Footer from "../../components/footer.jsx";
import Spacelike from "../../assets/heart.png";
import DoubleTapLike from "../../assets/heart(1).png";
import Heart from "react-heart";

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
    <div className=" w-700px mt-4 p-12">
      <Link to="/">
        <span>&#8592;</span>
        <span className="bg-sky-500/100">Go Back</span>
      </Link>
      {/* {console.log(blog)} */}

      {blog ? (
        <div>
          <header className="mt-12">
            <p className="grid items-center justify-center bg-orange-500 shadow-lg shadow-orange-500/50 text-2xl">
              Published By {blog.createAt}
            </p>
            <h1 className=" font-serif m-4 text-lg ">{blog.name}</h1>
            {/* <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => {
                <div key={i}>{category}</div>
                }  )}
            </div> */}
          </header>
          <div className="grid grid-cols-4 gap-4 justify-center ">
            <img
              src={blog.imageSrc}
              alt="cover"
              className="rounded-lg w-full col-span-3 aspect-video "
            />
            <img
              src={blog.imageSrc2}
              alt=" cover"
              className="rounded-lg w-ful  aspect-square"
            />
            <img
              src={blog.imageSrc3}
              al="cover"
              className="rounded-lg w-full aspect-square"
            />
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
            <p className=" ">{blog.description}</p>
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
              <input
                type="text"
                value={comment}
                className="object-contain h-8 mt-3 ml-6 rounded-lg"
                placeholder="Comments"
                onChange={(ev) => setComment(ev.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default Blog;
