
import { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

function App() {

  const[search,setSearchTerm] = useState("");
  return (
    <div className="App">
    <h2>Search Component</h2>
    <input type='text' placeholder='search something....'
    onChange={e=>{
      setSearchTerm(e.target.value)
    }}
    ></input>
    {JSONDATA.filter((val)=> {
      if(search === ""){
        return val
      }else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
      return <div>
        <p>{val.first_name}</p>
        </div>
    })}
    </div>
  );
}

export default App;
