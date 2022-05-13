import React from "react";
import { Link } from "react-router-dom";


const Surya = (props) => {
  
  //const {data, post} = props;
  return (
    <>
           
      {props.post.length > 0 ? (
        <>
          {props.post.map((i) => {
            return (
              <>


                <h1>id :{i.id}</h1>
                <h1>title :{i.title}</h1>
                <h1>image :{i.image}</h1>
                <h1>price :{i.price}</h1>
                <h1>description :{i.description}</h1>
                <h1>category :{i.category}</h1>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h1>id :{props.post.id}</h1>
          <h1>title :{props.post.title}</h1>
          <h1>image :{props.post.image}</h1>
          <h1>price :{props.post.price}</h1>
          <h1>description :{props.post.description}</h1>
          <h1>category :{props.post.category}</h1>
        </>
      )}
    </>
  );
};
export default Surya;
