

import "./header.scss"
import Sidebar from "./sidebar/Sidebar"
import { Link } from "react-router-dom"

const Header = () => {
   // const setEnglish = () =>{setLanguage("ENG")}
   // const setPolish = () =>{setLanguage("POL")}
   // const setGerman = () =>{setLanguage("GER")}
   // const setRussian = () =>{setLanguage("RUS")}

   return (
      <div className="header">
         <div className="header__wrapper">
            <Sidebar />
            <div className="header__links">
               <div className="header__holder"></div>
               <Link to="/" className="header__img-box">
                  <img src="/logo-artful.png" alt="logo" />
               </Link>
               <div className="header__dropdown-wrap">
                  <div class="header__dropdown">
                     <button class="header__current">Languages</button>
                     <div class="header__dropdown-content">
                        <button  ><img src="/american.png" alt="" /> English</button>
                        <button  ><img src="/polish.png" alt=""   /> Polish</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header