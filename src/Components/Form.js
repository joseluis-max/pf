import axios from 'axios'
import React, {useState} from 'react'


function Form(){
  const [mail,setMail] = useState('luisj.valdiviezo20@gmail.com')
  const [mailFrom,setMailFrom] = useState('')
  const [subject,setSubject] = useState('')
  const [body,setBody] = useState('')

  const sendEmail = (e)=> {
    e.preventDefault()
    if(mailFrom !== '' && subject !== ''&&  body !== ''){
      axios.post('/send',[
        mail,
        mailFrom,
        subject,
        body
      ])
    }
  }
  
  return(
   <div className="main__email">
     <form>
       <label className="main__email_text" htmlFor="email"> Email: </label>
         <input onChange={ev => {setMailFrom(ev.target.value)}} className="main__email_input" id="email" type="email" value={mailFrom} required/>
       
       <label className="main__email_text" htmlFor="subject"> Subject:  </label>
         <input onChange={ev => {setSubject(ev.target.value)}} className="main__email_input" id="name" value={subject} required/>
      
       <label className="main__email_text" htmlFor="subject"> Body: </label>
         <textarea onChange={ev => {setBody(ev.target.value)}} className="main__email_input main__email_textarea" value={body} rows="15" id="body" required/> 
      
      <button onClick={(ev)=>{sendEmail(ev)}} type="submit" className="main__email_send">Send</button>
     </form>
   </div>
  )
}

export default Form