import React,{useLayoutEffect,useEffect,useRef} from 'react';

function Effects (){
    const inputRef=useRef(null);


    useLayoutEffect(() =>{
        console.log(inputRef.current.valu);
    },[]);

    useEffect(()=>{
        inputRef.current.value="Hello"
    },[]);
 



    return(
        <div class= "App">
        <input ref={inputRef} value="perioo"  style={{ width: 400,height:40}}></input>
   </div>
    )


}
export default Effects;