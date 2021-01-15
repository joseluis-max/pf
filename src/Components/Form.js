import React, {useEffect} from 'react'

function Form(){
 
  useEffect(()=> {
    
  }, [])
  return(
   <div className="main__email">
     <form>
       <label className="main__email_text" htmlFor="email"> Email: </label>
         <input className="main__email_input" id="email" type="email"/>
       
       <label className="main__email_text" htmlFor="subject"> Subject:  </label>
         <input className="main__email_input" id="name"/>
      
       <label className="main__email_text" htmlFor="subject"> Body: </label>
         <textarea className="main__email_input main__email_textarea" rows="15" id="body"/> 
      
      <button type="submit" className="main__email_send">Send</button>
     </form>
   </div>
  )
}

export default Form