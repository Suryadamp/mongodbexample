import React from 'react';
import Cards from './Cards';

const Hero = ({data}) =>{
    return(
        <section className="hero">
            <div className="container">
            <Cards data={data}/>
            </div>
        </section>
    )
}
export default Hero; 