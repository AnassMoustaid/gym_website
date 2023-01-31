import React, {useState} from "react";
import "./searchbar.css";
import {NavLink} from "react-router-dom";

function SearchBar({ formSubmit , data}) {
    const[filteredData, setFilteredData] = useState([]);
    const[wordInput, setWordInput] = useState("");

    const handleFilter= (event) =>{
       const searchInput = event.target.value;
       setWordInput(searchInput)
       const newFilter = data.filter((value)=>{
        return value.main_title.toLowerCase().includes(searchInput.toLowerCase())
       })

       if (searchInput === "") {
        setFilteredData([]);
       } else {
        setFilteredData(newFilter);
       }
    }


    
    return(
        <div className="searchbar_section">
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleFilter} placeholder="Search by Title" value={wordInput} />
                
               
            </form>

            {filteredData.length != 0 && 
                <div className="dataResult">
                {filteredData.slice(0, 6).map((value, key)=>{
                    return <div className="dataItem" >
                        <NavLink to={`/blogarticle/${value.id}` } >{value.main_title}</NavLink> 
                        </div>
                })}
            </div>}
        </div>
    );
};

export default SearchBar