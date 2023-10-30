
import "./info.scss"
import SectionRight from "./sections/SectionRight"
import SectionLeft from "./sections/SectionLeft"

const infoData = {
   legal: {
      title:"Legal Services",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi laudantium unde nesciunt porro provident, assumenda pariatur recusandae nam perspiciatis.",
      img:"/legal.jpg",
      linkPage:"/legal",
   },
   accounting: {
      title:"Accounting",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi laudantium unde nesciunt porro provident, assumenda pariatur recusandae nam perspiciatis.",
      img:"/accounting.jpg",
      linkPage:"/accounting",
   },
   licenses: {
      title:"Licenses",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi laudantium unde nesciunt porro provident, assumenda pariatur recusandae nam perspiciatis.",
      img:"/licenses.jpg",
      linkPage:"/licenses",
   },
}

const Info = () => {
   return (
      <div className="info">
         <div className="info__wrapper">
            <h2 className="info__title">We specialize in everything you need.<br/> What we do?</h2>
            <SectionRight 
            title={infoData.legal.title} 
            text={infoData.legal.text}
            img={infoData.legal.img}
            linkPage={infoData.legal.linkPage}
            />
            <SectionLeft 
            title={infoData.accounting.title} 
            text={infoData.accounting.text}
            img={infoData.accounting.img}
            linkPage={infoData.accounting.linkPage}
            />
            <SectionRight 
            title={infoData.licenses.title} 
            text={infoData.licenses.text}
            img={infoData.licenses.img}
            linkPage={infoData.licenses.linkPage}
            />
         </div>
      </div>
   )
}

export default Info