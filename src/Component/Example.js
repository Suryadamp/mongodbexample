import axios from "axios";
import React, { useState, useEffect } from "react";
import Surya from "./surya";
import Sj from "./sj";



const Example = () => {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('surya');
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");
  useEffect(() => {
    console.log("calling");
    axios
      .get(`https://fakestoreapi.com/products/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      });
  }, [idFromButtonClick]);

  const buttonChange = (props) => {

    setIdFromButtonClick(id);
  };

  console.log("test", post);

  return (
    <div>
     
     
      <Surya data={count} post={post}  />
      <Sj button={buttonChange}  set={setId} />
      
    </div>
  );
};
export default Example;
