
import { useState } from "react";

function Cars(props){
    const [age,setAge]=useState(8);
    return(
<div>
{/* <ul>
    <li>hyundai</li>
    <li>toyota</li>
    <li>chevi</li>
    <li>ford</li>
</ul> */}
<h3>car brand is {props.brand} car name is {props.name} and its age is {age}
</h3>
</div>
    )
        
    
}
export default Cars;