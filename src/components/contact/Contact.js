import React from 'react'
import {Form, useActionData, NavLink} from 'react-router-dom'
import axios from 'axios'

const Contact = () => {

    let user = useActionData();

  return (
    <div>
    {
        user ?    
            <div>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <p>{user.username}</p>
                <NavLink to="/contact" style={{ color : "black !important"}}>Back to Form </NavLink> 
            </div> : 
          <>
           <h1>Contact</h1>
           <Form action='/contact' method='post'>
            <input name='fname' type="text" placeholder="Name"/>
                <button type='submit'>Submit</button>
            </Form>
         </>
        
    }
    </div>
  )
}

export default Contact

export async function form ({request})  {
   
    let data = await request.formData();
    let api = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    let users = api.data;
    let user = users.find(user => user.username === data.get('fname'));
    if(user){
      return user;
    }else{
        console.log('User not found');
    }
}
