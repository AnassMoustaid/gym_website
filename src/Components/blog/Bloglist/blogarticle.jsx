import React, {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import NavbarII from "../../navbarII";
import dataIII from "../../../pages/mock-data3.json"
import { useEffect } from "react";
import SearchBar from "../Searchbar/searchbar";


function BlogArticle() {
    const [articles, setArticles]= useState(dataIII)
    const [article, setArticle]= useState({})
    let article_id  = useParams();
    
    useEffect(()=>{
       let afterArticleFilter =  articles.filter((item)=>{
            return item.id == article_id.id
        });
        setArticle(afterArticleFilter[0])
    }, [])

    return(
        <div>
            <NavbarII/>
            <SearchBar data={dataIII}  />
            
                    <div className="article_container">
            <img src={article.image} alt="" className="article_image" />
            <h1>{article.main_title}</h1>

            <h3>{article.secondary_tile} </h3>

            <p className="blogarticle_content">
                {article.content}</p>

                <div className="container_footer">
                <button className="readmore_button"><NavLink to="/blogpage"> Return to Blog Page </NavLink></button>


                <p className="published_date">{article.published_date}</p>
                </div>
                </div>
        </div>
       
    )
}

export default BlogArticle