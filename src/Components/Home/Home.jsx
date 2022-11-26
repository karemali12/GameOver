import axios from "axios";
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";


export default function Home() {
let[games,setGames]=useState([]);

    function getData(){
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '54d0341257msh34b91b939545175p11939fjsn40171c15d368',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data);
    setGames(response.data);

}).catch(function (error) {
	console.error(error);
});
}
 useEffect(()=>{

        getData()

     },[])
    
   
  return <>
  
{games.length>0?<> <header  className="bg-dark m-0">
  <div className="cover shadow-lg " >
    <div className="overlay d-flex  justify-content-center align-items-center">
<div className="text-center"><h1 className="text-center">
  Find & track the best <span >free-to-play</span> games!
</h1>
<p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
<Link to="/home" className="btn btn-outline-secondary">Browse Games</Link>
</div>
    </div>
  </div>
</header>
<section className="my-5 home ">

<div className="container">
    <h2 classNameName="text-muted my-5"><i _ngcontent-jww-c8 class="fas fa-robot mr-2 text-muted"></i>Personalized Recommendations</h2>
  <div className="row g-4 mt-10">
    {games.slice(0,3).map((game,index)=><div  key={index} className="col-lg-4 ">
    <Link  to={`/details/${game.id}`}>
    
    <div className="item ">
      <img src={game.thumbnail} className="w-100" alt=""/>
      <div className="d-flex justify-content-between p-3 bg-dark shadow-lg ">
      <p className="text-muted h4">{game.title}</p>
      <button className="btn btn-primary  ">Free</button>
    </div>
</div>
    </Link>
    </div> )}
   

    
    
  </div>
</div>

</section></>:<div class="d-flex justify-content-center align-items-center  vh-100">
   <div class="spinner">
       <div class="double-bounce1"></div>
       <div class="double-bounce2"></div>
     </div>

</div>}
 
  
  </>
}