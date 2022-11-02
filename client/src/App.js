import React,{useState} from "react";
import "./App.css"





 const App = () => {
  const[longUrl,setLongUrl] = useState('')


  const[sortUrl, setSorturl] = useState('')
 


  function Saveuser(e){
    e.preventDefault();
    let data  = { longUrl}
    
    
    fetch("http://localhost:4000/url/shorten",{
      method : "POST",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then((result) =>{
      result.json().then((resp) =>{
        console.warn("resp" , resp)
      

        if(resp.status === true){
          setSorturl(resp.data.urlCode)
          window.alert( resp.message );
          console.log('Login Sucessfull '+ resp.message );     
        } else{
          window.alert( resp.message)
            console.log('invalid '+ resp.message)
        }
      })
    }) 
  }


  return (
    
    <div className="container">
      <div className="child">
      
      <form >
        <h5>Convert LongUrl to ShortUrl</h5>
        <label>
        longUrl :  
           <input type="text" name="email" value = {longUrl} onChange={(e)=>{setLongUrl(e.target.value)}} />
        </label><br></br>

        <button type="button" className="button-33" onClick={Saveuser}>Submit</button>
        <h5>http://localhost:4000/{sortUrl} <button onClick={() => {navigator.clipboard.writeText("http://localhost:4000/"+sortUrl); alert("Copied to clipboard.");}}>copy</button></h5> 
      </form>
      </div>
    </div>
  );
}

export default App; 
