import React,{useState} from 'react';

function Array(){
    const [product,setProduct]=useState([
        {pcode:1 , pName: "Apple" },
        {pcode:2 , pName: "Banana" },
        {pcode:3 , pName: "Orange" }
    
    
    
    ])

const changeHandle =(()=>{
let nObj={pcode:4,pName:"JackFruits"};
let arr=product.concat(nObj);
setProduct(arr);
})



return(
    <div>
<h1>Product example</h1>
<ul>{
    product.map(pObj=>(
        <li key={pObj.pcode}>{pObj.pName}</li>
    )
    )}
</ul>
<button onClick={changeHandle}>addItem</button>
    </div>
)

}
export default Array;