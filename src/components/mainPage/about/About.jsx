
import {BsArrowDown} from "react-icons/bs"
import "./about.scss"

const About = () => {
   return (
      <div className="about">
         <div className="about__wrapper">
            <div className="about__title"><img src="/title.png" alt="title" /></div>
            <h2 className="about__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero numquam dolorum sint repellendus maxime, optio ex repudiandae magni? Cumque libero error iste, deleniti minima commodi facere nulla praesentium quaerat. 
            </h2>
            <a href="#contact"><BsArrowDown/>Contact us!<BsArrowDown/></a>
         </div>
      </div>
   )
}

export default About