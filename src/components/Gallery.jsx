import React from 'react'
import"../css/gallery.css"
import { Button } from '@material-ui/core';
function Gallery ({image , link}){
    return(
        <div className="gallery">
            <div className= "card">
                <img src={image} className= "card__image"/>
               <div className="card__button">
                   <Button variant="outlined" className="home__button">
                       <a href={link} >view</a>
                   </Button>
               </div>
            </div>
        </div>
    )
}
export default  Gallery;
