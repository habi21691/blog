import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { callouts } from "../../data/collouts";
import EmptyList from "../../components/common/EmptyList";

function Blog() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  //  console.log(callouts)

  useEffect(() => {
    let blog = callouts.find((blog) => blog.id === parseInt(blog.id));
    // console.log(blog);
    if (blog) {
      setBlog(blog);
    }
  }, []);

  // console.log(blog)
  return (
    <>
      <Link to="/">
        <span>&#8592;</span>
        <span>Go Back</span>
      </Link>
       {console.log(blog)}
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createAt}</p>
            <h1>{blog.name}</h1>
            {/* <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => {
                <div key={i}>{category}</div>
                }  )}
            </div> */}
          </header>
          <img src={blog.imageSrc} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default Blog;
