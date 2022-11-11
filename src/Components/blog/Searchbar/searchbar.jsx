import React from "react";
import "./searchbar.css";

function SearchBar({value, handleSearchKey, clearSearch, formSubmit}) {
    return(
        <div className="searchbar">
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} placeholder="Search by Title" value={value} />

                {value && <span onClick={clearSearch}>Delete</span>}

                <button className="searchbutton">Search</button>
            </form>
        </div>
    );
};

export default SearchBar