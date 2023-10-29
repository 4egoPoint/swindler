
import {AiFillInstagram, AiFillFacebook, AiOutlineMail} from "react-icons/ai"
import {BsTelegram, BsFillTelephoneFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import "./contacts.scss"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contacts = () => {
   const [error,setError] = useState(false)
   const [success,setSuccess] = useState(false)
   const formRef = useRef()

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_j27t55f', 'template_wcvbzb8', formRef.current, 'urFjATdD6hDsoaEPY')
         .then((result) => {
            setSuccess(true)
         }, (error) => {
            setError(true)
         });
   };
   return (
      <div className="contacts" id="contact">
         <div className="contacts__wrapper">
            <div className="contacts__links links">
               <h2 className="links__title">Contact me!</h2>
               <div className="links__list">
                  <a target="_blank" href="https://www.instagram.com/q3.wwe._" className="links__list-item"><AiFillInstagram className="img"/> Instagram</a>
                  <a target="_blank" href="https://t.me/holo_dxd" className="links__list-item"><BsTelegram className="img"/> Telegram</a>
               </div>
               <div className="links__list">
                  <a href="tel:+48739137066" className="links__list-item"><BsFillTelephoneFill/>+48 739 137 066</a>
                  <a href="mailto:main@artful.com.pl" className="links__list-item"><AiOutlineMail/>main@artful.com.pl</a>
                  <a target="_blank" className="links__list-item" href="https://www.google.com/maps/place/Zamiany,+02-786+Warszawa/@52.1606256,21.0347806,17z/data=!3m1!4b1!4m6!3m5!1s0x47193296d391647f:0x3bde514f670bd71!8m2!3d52.1606256!4d21.0347806!16s%2Fg%2F1hjgkhg63?entry=ttu">
                     <ImLocation />Warsaw
                  </a>
               </div>
            </div>
            <div className="contacts__email email">
            <form onSubmit={sendEmail}  ref={formRef}>
               <input type="text" required placeholder="Name" name="name"/>
               <input type="email" required placeholder="Email" name="email"/>
               <textarea rows={6} placeholder="Message" name="message"/>
               <button>Submit</button>
               {error && "Error"}
               {success && "Success"}
            </form>
            </div>
         </div>
      </div>
   )
}

export default Contacts