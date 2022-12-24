import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { callouts } from "../../data/collouts";
import EmptyList from "../../components/common/EmptyList";
import like from '../../assets/heart.png'
function Blog(props) {
  // console.log(props.id)
  const { id } = useParams();
  //  console.log(id)
  const [blog, setBlog] = useState(null);

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
          <header>
            <p className="grid items-center justify-center">
              Published {blog.createAt}
            </p>
            <h1 className=" font-serif ">{blog.name}</h1>
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
              className="rounded-lg w-full col-span-3 aspect-video"
            />
            <img
              src={blog.imageSrc2}
              alt=" cover"
              className="rounded-lg w-ful col-span-2 aspect-square"
            />
            <img
              src={blog.imageSrc3}
              al="cover"
              className="rounded-lg w-full aspect-square"
            />
          </div>
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
          <p className="flex justify-end ml-60 ">{blog.description}
          </p>
          <div className="flex justify-end p-2">
          <img src={like} alt='likeImage' className="object-contain h-8 mt-3 "/>
          <input type="text"  className=" ml-6 rounded-lg" placeholder="Comments"/>

          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default Blog;
