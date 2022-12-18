import React from "react";

function Searchbar(props) {
  return (
    <form onSubmit={props.formSubmit}>
      <div className="container flex flex-column justify-center  ">
        {/* <div className=" text-center">
          <select className=" h-12 w-32 border-purpl-700 bg-zinc-900 text-pink-50 px-3">
            <option disabled selected>
              Catagories
            </option>
            <option value="1">News</option>
            <option value="1">Sport</option>
            <option value="1">Movies</option>
            <option value="1">Touriusm</option>
          </select>
        </div> */}
        <div>
          <input
            className="h-12 w-80 border border-sky-500v placeholder-slate-400 text-lg shadow-sm focus:outline-none focus-border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 "
            type={"text"}
            value={props.value}
            placeholder='Search By Category'
            onChange={props.handleSearchKey}
          />
        {props.value && <span onClick={props.clearSearch}>X</span>}
        </div>
        <div>

          <button
          onClick={props.formSubmit}
           className="h-12 w-32 focus:outline-none focus:ring focus:ring-violet-300 hover:bg-violet-600 active:bg-violet-700  bg-orange-500 rounded-r-2xl ">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
