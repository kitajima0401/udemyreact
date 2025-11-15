import "./App.css"
import { useState,useCallback } from "react"
import ChildArea from "./Components/ChildArea"


export default function App(){
  const [content, setContent] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)
  function openSys(){
    setOpen(prev => !prev)
  }

  const closeOpen = useCallback(()=>{
    setOpen(false)
  },[])
  
  return(
    <div className="allContent">
      <input type="text" value={content} className="textInput" onChange={e=>{setContent(e.target.value)}} />
      <br/>
      <br/>
      <button onClick={openSys}  >表示</button>
      <ChildArea open={open} closeOpen={closeOpen} />
    </div>
  )
}