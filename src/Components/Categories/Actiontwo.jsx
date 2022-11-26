import axios from "axios";
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

export default function Actiontwo() {
    let[games,setGames]=useState([]);

   function getData(){
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {category: 'action'},
        headers: {
          'X-RapidAPI-Key': '54d0341257msh34b91b939545175p11939fjsn40171c15d368',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setGames(response.data);
      }).catch(function (error) {
          console.error(error);
      });
   }

 useEffect(()=>{

        getData()

     },[])
  return <>
 <section className="mt-5">
    <div className="container">
<div className="row g-4">
{games.length>0?games.map((game,index)=>
<div key={index} className="col-lg-3  ">
 <div className="item-all shadow-lg  ">
 <Link to={`/details/${game.id}`} className='item-all'>
    <img src={game.thumbnail} alt="" className="w-100"/>
   <div className="p-2">
   <div className="d-flex justify-content-between mt-2  ">
        <h4 className="text-muted">{game.title.split(" ").splice(0,1).join(' ')}</h4>
        <button className="btn btn-primary btn-sm ">Free</button>
      </div>
      <p className="text-muted ">{game.short_description.slice(0,25)+"..."}</p>
      <div className="d-flex justify-content-between mt-2 ">
        <i class="fa-solid fa-plus text-muted"></i>
        <div><span className=" bg-secondary    text-small p-2">{game.genre} </span> 

         <i class="fa-brands fa-windows text-muted ms-2"></i></div>
      </div>
   </div>
      </Link>
   </div>
   </div>
   ):<div class="d-flex justify-content-center align-items-center  vh-100">
   <div class="spinner">
       <div class="double-bounce1"></div>
       <div class="double-bounce2"></div>
     </div>

</div>}

   
 </div>
</div>
</section>
  
  </>
}