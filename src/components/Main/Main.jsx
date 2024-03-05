import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p></p>
        <img src={assets.user_icon2} alt="" />
      </div>

    <div className="main-container">

        {!showResult
        ?<>
            <div className="greet">
            <p><span>Hello,User</span></p>
            <p>How can I help you today?</p>
        </div>

        <div class="siri">
        <img src={assets.siri_icon2} alt="" />
        </div>
        {/* <div className="cards">
            <div className="card">
                <p>Suggest Some Beatiful Places Around me </p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>React js or Angular js? </p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Sucessful Team Management Benefits</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Make this code Simple </p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div> */}

        </>
        :<div className='result'>

            <div className="result-title">
                <img src={assets.user_icon2} alt="" />
                <p>{recentPrompt}</p>
                </div>
            <div className="result-data">
                <img src={assets.siri_icon} alt="" />
                {loading
                ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
            </div>
        </div>

         

        }

        
   
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here..' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
            </div>
            <p className='bottom-info'>.</p>
            </div>


    </div>
</div>
  )
}

export default Main
