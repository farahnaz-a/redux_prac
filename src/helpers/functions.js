import axios from "axios";

async function users () { 
    
    const users = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    return users.data;

}



export { users};