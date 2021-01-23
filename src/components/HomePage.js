import React from 'react'
import '../css/home.css'
import { Button } from '@material-ui/core';
import SideBar from "./SideBar";
function HomePage(){
    return(

        <div className= "home">

           <div className="home__main">
               <main>
                   <h1> <span className="span"> HI, </span> </h1>
                   <br />
                       <h1> I'm  <span className= "span"> Othman </span>  </h1>
                   <br />
                   <h1> web  <span className= "span"> developer </span> </h1>
                   <p className = "home__main__text">
                   Front-End-Developer / ReactJS </p>
                   <Button variant="outlined" className="home__button">
                       Contact Me
                   </Button>
               </main>
           </div>
        </div>
    )
}
export  default HomePage
