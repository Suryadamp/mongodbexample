import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import FullCards from './FullCards';
import Hero from './Hero';


const Apply = ()=>{
    const data=[
        {title:"HTML",description:"The html"},
        {title:"CSS",description:"The css"},
        {title:"JS",description:"the JS"},
        {title:"React",description:"The react"},
    ];


    return(
        <Router>
           <Route exact path="\">
               <Hero data={data} />
               </Route> 
               <Route path="\Cards\:title">
                   <FullCards data={data}/>
               </Route>
        </Router>
    )
}
export default Apply;