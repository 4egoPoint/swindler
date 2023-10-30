

import "./header.scss"
import { Link } from "react-router-dom"

const Header = () => {

   return (
      <div className="header">
         <div className="header__wrapper">
            <div className="header__links">
               <Link to="/" className="header__img-box">
                  <img src="/logo-artful.png" alt="logo" />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Header