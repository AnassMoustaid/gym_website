import React, {useState} from "react";
import "../../../index.css"
import {NavLink} from "react-router-dom"
import dataIII from "../../../pages/mock-data3.json"
import ReactPaginate from 'react-paginate';
import NavbarII from "../../navbarII";



function BlogList() {
    const [articles, setArticles]= useState(dataIII)
    const [pageNumber, setPageNumber] = useState(0);
    
    const articlesPerPage = 6
const pagesAvailable = pageNumber * articlesPerPage
const pageCount = Math.ceil(articles.length / articlesPerPage)
const changePage = ({selected}) => {
    setPageNumber(selected);
}
    return(
        <div className="blog-page">
            <NavbarII/>
            <div className="blog-container">
            
                {articles.slice(pagesAvailable, pagesAvailable + articlesPerPage).map((article)=>(
                      <div className="b-box-blog">
                      <div className="b-img">
                          <img src={article.image} alt="" />
                      </div>
  
                      <div className="b-text">
                          <h2>{article.secondary_tile}</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet?</p>
                          <button className="readmore_button"><NavLink to={`/blogarticle/${article.id}` }>Read More </NavLink></button>
                      </div>
  
                  </div>
                ))}
              

              
            </div>
            <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={'>'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationbuttons'}
                  previousLinkClassName={'previousbutton'}
                  nextLinkClassName={'nextbutton'}
                  activeClassName={'paginationactive'}
                  />
        </div>
        
        
    )
}

export default BlogList