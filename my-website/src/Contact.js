import React from 'react'
import './Contact.css';
import icon from './img/1.jpg'





 export const Contact = () => (
 

 
  <div className="App">
  <form id="contact-form" method="POST">
   <div className="form-group">
       <label htmlFor="name"> שם מלא</label>
       <input type="text" className="form-control" />
   </div>
   <div className="form-group">
       <label htmlFor="exampleInputEmail1">איימל</label>
       <input type="email" className="form-control" aria-describedby="emailHelp"   />
   </div>
   <div className="form-group">
       <label htmlFor="message">הודעה</label>
       <textarea className="form-control" rows="5"  />
   </div>
   <button type="submit" className="btn btn-primary">שליחה</button>
   </form>
   
   <div className="icon" ><span>רישוי עסקים תל אביב-יפו</span>
              <img src={icon} alt="3"/>
              
              </div>

   </div>


      


 )




