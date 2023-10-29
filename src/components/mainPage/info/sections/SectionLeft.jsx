
import { Link } from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"
import "../info.scss"

const SectionLeft = ({title, img, text, linkPage}) => {
   return (
      <section className="info__section section">
         <div className="section__container">
            <div className="section__img-container-l">
               <img src={img} alt="img" />
            </div>
            <div className="section__content-l">
               <h3 className="section__title">{title}</h3>
               <div className="section__text">{text}</div>
               <Link to={linkPage} className="section__btn">Learn more <BsArrowRight /></Link>
            </div>
         </div>
      </section>
   )
}

export default SectionLeft