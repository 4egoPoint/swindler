

import "./accounting.scss"

const items = [
   {
      title: "ORDER AGREEMENT",
      price: 50,
   },
   {
      title: "CONTRACT OF EMPLOYMENT",
      price: 50,
   },
   {
      title: "CONTRACT WORK",
      price: 50,
   },
   {
      title: "COMMAND OFFICE",
      price: 100,
   },
   {
      title: "PIT - 11",
      price: 50,
   },
   {
      title: "PIT – 37 (NOT CLIENTS)",
      price: 100,
   },
   {
      title: "OTHER PITS AT CUSTOMER REQUEST",
      price: 100,
   },
   {
      title: "CORRESPONDENCE WITH ZUS",
      price: 100,
   },
   {
      title: "CORRECTION OF DECLARATION OF GUILT /CUSTOMER REQUEST",
      price: 100,
   },
   {
      title: "CALCULATION OF ZUS SOLE OWNER SP. Z O.O",
      price: 50,
   },
   {
      title: "REGISTRATION SP. Z O.O. In ZUS",
      price: 50,
   },
   {
      title: "REGISTRATION OF AN INDIVIDUAL. In ZUS",
      price: 50,
   },
   {
      title: "OBTAINING A CERTIFICATE OF ABSENCE DEBT PAYMENT OF CONTRIBUTIONS ZUS",
      price: 100,
   },
   {
      title: "CREATION OF PERSONAL RECORDS FOR EMPLOYEES",
      price: 100,
   },
   {
      title: "MONTHLY PAYMENT OF EMPLOYEES",
      price: 50,
   },
   {
      title: "CALCULATION OF THE NATIONAL DELEGATION",
      price: 70,
   },
   {
      title: "CALCULATION OF FOREIGN DELEGATION",
      price: 100,
   },
]

const Accounting = () => {
   return (
      <div className="accounting">
         <div className="accounting__wrapper">
            <div className="accounting__title">Accounting</div>
            <div className="accounting__list">
               {
                  items.map((item)=>
                     <div className="accounting__item item">
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

export default Accounting