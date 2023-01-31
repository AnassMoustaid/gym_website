import React from "react";
import BlogList from "./Bloglist/bloglist";
import SearchBar from "./Searchbar/searchbar";
import dataIII from "../../pages/mock-data3.json"

function Blogpage() {

   

    return(
        <div>
            {/* Search Bar  */}
            <SearchBar data={dataIII}  />

            {/* Blog List */}
            <BlogList />

        </div>
    )
}

export default Blogpage