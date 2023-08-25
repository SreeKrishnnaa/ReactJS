
import { useState } from "react";
function Button(props){
    const openAlert=()=>{
        alert(props.message);
    }
    const[name,setName]=useState('');
    return (
       
<div>
<button onClick={()=>{openAlert()}}>
  {props.name}
</button>
</div>


    )
    
    
}
export default Button;