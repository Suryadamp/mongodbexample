import React from "react";


const Sj = (props) => {
    console.log(props)
const{set,button}=props;
    

    return ( 

        <div>
        <input type="text" onChange={(e) => set(e.target.value)}></input>
     <button onClick={ button}>Button Fecth</button>
     </div>
  
    
 
     );
}
 
export default Sj ;