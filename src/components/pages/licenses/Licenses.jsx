

import "./licenses.scss"

const items =[
   {
      title: "TAXI LICENSE",
      price: 2500,
   },
   {
      title: "TRANSPORT LICENSE (FOR CARGOES OVER 3.5 TONS)",
      price: 2000,
   },
   {
      title: "LICENSE FOR LOGISTICS ACTIVITIES",
      price: 1000,
   },
   {
      title: "EMPLOYMENT AGENCY LICENSE",
      price: 500,
   },
   {
      title: "COPYRIGHT REGISTRATION WITH THE PATENT BUREAU",
      price: 1500,
   },
   {
      title: "LICENSE FOR EDUCATIONAL INSTITUTIONS",
      price: 300,
   },
]
const Licenses = () => {
   return (
      <div className="licenses">
         <div className="licenses__wrapper">
            <div className="licenses__title">Licenses</div>
            <div className="licenses__list">
               {
                  items.map((item)=>
                     <div className="licenses__item item">
                        <div className="item__info">
                           <h2 className="item__title">{item.title}</h2>
                        </div>
                        <div className="item__prices">
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