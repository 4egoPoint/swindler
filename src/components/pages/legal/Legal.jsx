

import "./legal.scss"

const items = [
   {
      title: "PESEL",
      text: "An identification number",
      price: 150,
      time: "1 day",
   },
   {
      title: "EPUAP",
      text: "Electronic signature",
      price: 200,
      time: "1 day",
   },
   {
      title: "LEGAL ADDRESS",
      text: "Legal company registration address",
      price: 500,
      time: "1 day",
   },
   {
      title: "BANK ACCOUNT",
      text: "Company account",
      price: 200,
      time: "1 day",
   },
   {
      title: "CHANGES TO KRS",
      text: "Making changes to an existing company",
      price: 1350,
      time: "45 days",
   },
   {
      title: "CHANGES TO CEIDG",
      text: "Changing IP data",
      price: 200,
      time: "7 days",
   },
   {
      title: "CRBR",
      text: "Submission of information about the company's beneficiaries",
      price: 200,
      time: "30 min",
   },
   {
      title: "EORI",
      text: "Customs number",
      price: 500,
      time: "3 days",
   },
   {
      title: "INFORMACJA STAROSTY",
      text: "Labor market test",
      price: 200,
      time: "14 days",
   },
   {
      title: "ZAP - 3",
      text: "Registration of employee data with the tax office",
      price: 50,
      time: "1 day",
   },
   {
      title: "CFR – 1",
      text: "Tax resident certificate",
      price: 150,
      time: "2 days",
   },
   {
      title: "BHP",
      text: "Familiarization with safety precautions in the workplace",
      price: 250,
      time: "1 day",
   },
]
const Legal = () => {
   return (
      <div className="legal">
         <div className="legal__wrapper">
            <div className="legal__title">Legal Services</div>
            <div className="legal__list">
               {
                  items.map((item)=>
                     <div className="legal__item item">
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

export default Legal