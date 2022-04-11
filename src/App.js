import './App.css';
import { useEffect, useState } from 'react';
import { fetchUser } from './services/constants'
import UserDetail from './components/UserDetail';

function App() {

  const [currentUser, setCurrentUser] = useState([])

 async function refreshUser(){
    try {
      const fetchData = await fetchUser();
      console.log(fetchData);
      setCurrentUser(fetchData);
        } catch (error) {
          console.log(error);
        } 
 }

 useEffect(()=>{
  refreshUser();
},[])
 

  return (
    <div className="App">
      <header>Random User App</header>
          <div className='main'>
          <button onClick={()=>refreshUser()}>Refresh</button>
          <div className='render-data'>
          {  
              (currentUser || []).map((element,index)=>{
                    return <UserDetail
                      data = {element}
                      key = {index}
                    />
          
                    })
          }
            </div>
        </div>
     </div>
  );
}

export default App;