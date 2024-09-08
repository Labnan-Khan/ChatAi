import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context1'




function Main() {

  const { input,setInput, recentPrompts, prevPrompts, showResult, loading, resultData, onSent} = useContext(Context);
    const user = useContext(Context)

  

  return (
    <div className='main'>

      <div className="nav">
        <p>Chat AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-cintainer">

        {!showResult? 
          <>
          
        <div className="greet">
          <p><span>Hello, Labnan</span></p>
          <p>How can i help you today?</p>
        </div>

          </>
         :
         <div className='result'>

          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompts} </p>
          </div>

          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading? 
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> 
            :  <p> {resultData}</p>
            
            }
          </div>
         </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  placeholder="Enter your prompt"/>
            
             
              <img onClick={()=> onSent()}  src={assets.send_icon} alt="" />
            
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Main