

import "./paperwork.scss"
const items =[]
const Paperwork = () => {
   return (
      <div className="paperwork">
         <div className="paperwork__wrapper">
            <div className="paperwork__title">Paperwork</div>
            <div className="paperwork__list">
               {
                  items.map((item)=>
                     <div className="paperwork__item item">
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

export default Paperwork