import React from "react";
import BlogList from "./Bloglist/bloglist";
import SearchBar from "./Searchbar/searchbar";

function Blogpage() {

   

    return(
        <div>
            {/* Search Bar  */}
            <SearchBar />

            {/* Blog List */}
            <BlogList />

        </div>
    )
}

export default Blogpage