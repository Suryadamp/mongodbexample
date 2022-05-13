import React from "react";


const Hom =()=> {

  let name="surya";
  const onChange = ()=>{
    name="Ram";
    console.log(name);
  }

  return (
    <div>

      <h1>{name}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={onChange}>ClickMe</button>
    </div>
  );
}
export default Hom;