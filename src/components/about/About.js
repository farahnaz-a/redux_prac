import React from 'react'
import { useLoaderData } from 'react-router-dom';


const About = () => {

    let data = useLoaderData(); 
    console.log(data);

  return (
    <div>
       {
          data.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
            </div>
          ))
        } 
    </div>
  )
}

export default About
