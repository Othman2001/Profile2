import React from 'react'
import "../css/work.css"
import Gallery from "./Gallery";
import project1 from '../images/project1.png'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'
import project7 from '../images/project7.png'
function Work (){
const data = [
    {imageUrl: project1, projectLink:"https://github.com/Othman2001/ResumeWebsite"},
    {imageUrl: project2 , projectLinl:"https://github.com/Othman2001/CoderBreaker" },
    {imageUrl: project3, projectLink: "https://github.com/Othman2001/modiest-Website"},
    {imageUrl: project4, projectLink: "https://github.com/Othman2001/free-course-website"},
    {imageUrl: project5, projectLink: "https://github.com/Othman2001/profile-ai"},
    {imageUrl: project6, projectLink: "https://github.com/Othman2001/slack-CLone-reactjs-and-firebase"},
    {imageUrl: project7, projectLink: "https://github.com/Othman2001/Amazon-clone-react-js"}


]

return(
    <div className= "work">
        {
            data.map((item)=>(
                <Gallery image={item.imageUrl} link={item.projectLink} />
            ))
        }
    </div>
)
}
export default  Work;
