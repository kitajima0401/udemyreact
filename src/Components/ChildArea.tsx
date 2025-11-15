
import { memo } from "react"

interface childAreaProps{
  open: boolean;
  closeOpen: ()=>void;
}

const ChildArea = memo( ({open, closeOpen}: childAreaProps)=> {

  const data = [...Array(200).keys()]
  console.log(data)
  data.forEach(()=>{
    console.log("...")
  })

  return(
    <div>
      {open ? (
          <div className="openComponent">
            <p>子コンポーネント</p>
            <button onClick={closeOpen}>閉じる</button>
          </div>
      ):null}
      
    </div>
    
  )
})

export default ChildArea