import React from "react";
import {NavLink} from "react-router-dom";
import NavbarII from "../../navbarII";

function BlogArticle() {
    return(
        <div>
            <NavbarII/>
        <div className="article_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsZknf1BWp2VbRFXX2fJoZbCHazi1CnMzBA&usqp=CAU" alt="" className="article_image" />
            <h1>Main title will be displayed here</h1>

            <h3>Secondary Title will be here under the main title </h3>

            <p className="blogarticle_content">
                Content of the article will be displayed in this way
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus suscipit, doloremque earum deserunt tenetur, laboriosam iste illum quo ad corrupti nobis quos! Autem dignissimos earum temporibus a voluptatibus nobis, quas nulla fuga id numquam labore tenetur! Quasi quod, nihil ut modi praesentium aliquam impedit soluta magnam, nulla nisi autem. Optio qui, neque asperiores voluptatem repudiandae sequi id aut beatae veniam dolorum. Aperiam minima magnam excepturi quae nesciunt ut repellat inventore sint, officiis quisquam error obcaecati necessitatibus sit magni suscipit dolorem nobis dolores, ducimus porro odio amet corporis explicabo saepe. Molestias eveniet soluta autem doloribus voluptate blanditiis perferendis voluptas nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus aperiam totam accusamus quaerat maxime? Placeat ipsum laboriosam sint minus, recusandae repellat quam officiis, perferendis eos doloremque non fuga tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores beatae tempore ipsam, dolor fugit hic repudiandae? Quas accusantium dignissimos praesentium molestias repellendus pariatur ipsum, impedit enim eius nesciunt corrupti ipsa porro quibusdam sit. Facilis, accusamus voluptatum quidem ut sequi ullam suscipit. Non iusto molestiae eius vitae, tempora, culpa, natus quidem odit dolore modi dolorum aliquid veritatis quae officia ratione impedit voluptatem saepe corrupti corporis rem perspiciatis laboriosam. Amet hic aut officiis possimus ducimus. Aliquid beatae maiores, aperiam nam error quia!</p>

                <div className="container_footer">
                <button className="readmore_button"><NavLink to='/blogpage'> Return to Blog Page </NavLink></button>


                <p className="published_date">Date of article will bottom right of the article</p>
                </div>
             
        </div>
        </div>
    )
}

export default BlogArticle