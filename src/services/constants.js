// import axios from 'axios'

// const fetchUser = async () => {
 
//      try {
//         let response = await axios('https://api.randomuser.me/');
//         //console.log(response.data.results)
//         return response.data.results
//      } catch (error) {
//          console.log(error)
//      }
// }

// export default fetchUser

import axios from "axios"

const BASE_URL =  "https://api.randomuser.me/"

export async function fetchUser(){
    try {   
        const response = await axios.get(`${BASE_URL}`);
        console.log(response.data.results);
        const data = response.data.results;
        return data;
    } catch (error) {
        console.log(error);
    }
}
