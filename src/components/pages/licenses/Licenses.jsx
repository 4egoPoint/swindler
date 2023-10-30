

import "./licenses.scss"

const items =[]
const Licenses = () => {
   return (
      <div className="licenses">
         <div className="licenses__wrapper">
            <div className="licenses__title">Accounting</div>
            <div className="licenses__list">
               {
                  items.map((item)=>
                     <div className="licenses__item item">
                        <div className="item__info">
                           <h2 className="item__title">{item.title}</h2>
                           <div className="item__text"><i>{item.text}</i></div>
                        </div>
                        <div className="item__prices">
                           <div className="item__time">{item.time}</div>
                           <div className="item__price">{item.price} ZŁ</div>
                        </div>
                     </div>
                  )
               }
            </div>
         </div>
      </div>
   )
}

export default Licenses