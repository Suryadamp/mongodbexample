import {useEffect, useState} from 'react';


const Home=() =>{

// const [blogs,setBlogs]= useState[
//     {
//     title:"WHeel of time", author:"netFils",id="22",
//     title:"WHeel of night", author:"netFil",id="20",
//     title:"WHeel of day", author:"netFils",id="15"


//     }
// ];

const handleDelte = (id)=>{
   const newBlogs=blogs.filter(blogs =>blogs.id !==id)
   setBlogs[newBlogs]
}
useEffect(() => {
console.log("alert");
console.log(blogs)

;
} )

return(

    <div className="Home">
        <H1>Hometable</H1>
        <p>{blogs}</p>
        <BlogList onclick={handleDelte} />
    </div>
)
export default Home;


}