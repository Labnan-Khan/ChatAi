import React, { createContext, useState } from 'react'
import run from '../Component/config/Gemini';

export const Context = createContext();

function ContextProvider( props) {

  const [input,setInput] = useState("");
  const [recentPrompts,setRecentPrompts] = useState("");
  const [prevPrompts,setPreventPrompts] = useState([]);
  const [showResult,setshowResult] = useState(false);
  const [loading,setLoading] = useState(false);
  const [resultData,setResultData] = useState("");

  const delayPara = (index , nextWord) =>{
    setTimeout(() => {
      setResultData((prev)=> prev+nextWord)
    }, 75*index);
  }
    const newChat=()=>{
      setLoading(false)
      setshowResult(false)
    }

    const onSent = async (prompt) =>{

        setResultData("")
        setLoading(true)
        setshowResult(true)

        let response;
        if(prompt !== undefined){
          response = await run(prompt);
          setRecentPrompts(prompt)
        }
        else{
          setPreventPrompts([...prevPrompts,input])
          setRecentPrompts(input)
          response = await run(input)
        }
        
        let responseArray = response.split("**").join("")
        let newResponse2 = responseArray.split("*").join("");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
          const nextWord = newResponseArray[i];
          delayPara(i, nextWord+" ");
        }
        
        setLoading(false)
        setInput("")
    }

    

    const contextValue ={
      input,setInput,
      recentPrompts,
      prevPrompts,
      showResult,
      loading,
      resultData,
      onSent,
      newChat
    }


  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider