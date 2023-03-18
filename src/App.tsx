import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Searchbar from './Components/Searchbar';
import Userinterface from './Components/Userinterface'
import './Components/page.css';



function App() {
  const [inputText, setInputText] = useState<string>('');

  const handleChange=(event:any)=>{
    event.preventDefault();
    setInputText(event.target.value);

  }
  const [user, setUser] = useState<Userinterface | null>(null)

  const [send,setSend] = useState< number>(0);
  const octocat = 'octocat'

  const change=()=>{
    setSend(send+1);
  }

  useEffect(()=>{
    const gitUser = async ()=>{
      const response = await fetch(`https://api.github.com/users/${inputText? inputText : octocat}`)
      const data = await response.json();
      setUser(data)
    }
      gitUser();

  }, [send])


  const convertDate=(datetime:any)=> {
    const date = new Date(datetime);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    console.log(month)
    const year = date.getFullYear();
    console.log(year)
    return `${day} ${month} ${year}`;
};

const joined = convertDate(user?.created_at);


const [toggle, setToggle] = useState(false);
const toggleChange =()=>{
  setToggle(!toggle);
}
   
console.log(toggle)
  return(
    <div className={!toggle?'Page':'Page active'}>

  <div>

        <Header 
          toggle={toggle}
          toggleChange={toggleChange}
        />

        <Searchbar 
        handleChange={handleChange}
        inputText={inputText}
        change={change}
        toggle={toggle}

        />  

        <Main 
        user={user}
        joined={joined}
        toggle={toggle}

        />
     
  </div>
  </div>
  )
}

export default App;
