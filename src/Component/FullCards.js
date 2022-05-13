import React from 'react';
import { useParams} from 'react-router-dom';

const FullCards = ({data}) => {
    const {title} =useParams();


    return(
<section className="full">
    <div className="contianer">
     {data
     .filter((cards ) => cards.title === title).map((cards,index) =>{
         <div key={index} className="fullcard">
             <h1>{cards.title}</h1>
             <p>{cards.description}</p>
         </div>
     })}
     </div>
     </section>
     


    )
}
export default FullCards;