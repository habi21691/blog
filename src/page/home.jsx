import React,{ useEffect, useState } from "react";
import Navbar from "../components/navbar";
import bg from "../assets/bg.jpg";
import Card from "../components/Card";
import Footer from "../components/Footer/footer";
import Modal from "../components/modal";
import Searchbar from "../components/Searchbar";
import { callouts } from "../data/collouts";
import EmptyList from '../components/common/EmptyList'
function Home() {

   const [blog, setBlogs ] = useState(callouts)
   const [ searchKey, setSearchKey ] = useState('')

   //select by catagories
  //  const [sportList, setSportList ] = useState([])
  //  const [ catagories, setCatagories] = useState()
   // Search Submit
   const handleSearchbar = e => {
    e.preventDefault();
         handleSearchResult()
   }
     const handleSearchResult = () => {
    const allblog = callouts;
    const filteredBlogs = allblog.filter( (blog) => blog.catagory.toLowerCase().includes(searchKey.toLowerCase().trim()))
  
    setBlogs(filteredBlogs)
     
     }
        const handleClearSearch = () => {
          setBlogs(callouts)
          setSearchKey('')
        }

    // useEffect( () => {
    //   const data = callouts;
    //   // const fetch = data.filter((blog2) => blog2.catagory.toLoweCase().include(searchKey.toLowerCase().trim()) )
    //   setBlogs(data)
    // })

    const handleCatagoriesChange = (event) => {
      setCatagories(event.target.value)
    }

  return (
    <div>
      <Navbar />
      <div className=" w-full py-24 justify-items-center sm:py-32 lg:py-40">
        <h2 className="text-5xl font-bold text-center my-30 ">
          All-In-One Platform
        </h2>
        <p className="text-2xl py-20 text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <Searchbar

        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchbar}
        handleSearchKey = { (e) => {setSearchKey(e.target.value)}}
        />
       
        {!blog.length ? <EmptyList/> : <Card blogs={blog}/>}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              100
            </span>{" "}
            Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                // fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
              Prev
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                // fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
