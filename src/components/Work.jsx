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
    {imageUrl: project1, projectLink:"https://suspicious-noether-f9c735.netlify.app/index.html"},
    {imageUrl: project2 , projectLinl:"https://codebreaker2001.netlify.app/" },
    {imageUrl: project3, projectLink: "https://keen-murdock-4ce410.netlify.app/"},
    {imageUrl: project4, projectLink: "https://silly-elion-729595.netlify.app/"},
    {imageUrl: project5, projectLink: "https://otman-developer.web.app/work"},
    {imageUrl: project6, projectLink: "https://slack-clone-b8936.web.app/"},
    {imageUrl: project7, projectLink: "https://clone-8c69f.web.app/"}


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
