import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import {Link} from "react-router-dom";

// import React, { useEffect } from 'react'




export default function Details() {
    const [detailsgame, setdetails] = useState([]);
    const [system, setsystem] = useState([]);
    const [screenshots, setscreenshots] = useState();
    const [screenshotsOne, setscreenshotsOne] = useState();
    const [screenshotsTwo, setscreenshotsTwo] = useState();
    // const [screenshots, setscreenshots] = useState();
    let{id}=useParams();
   async function getDetails(){
        const options = {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
          params: {id: `${id}`},
          headers: {
            'X-RapidAPI-Key': '54d0341257msh34b91b939545175p11939fjsn40171c15d368',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
        
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setdetails(response.data);
            setsystem(response.data.minimum_system_requirements);
            setscreenshots(response.data.screenshots[0].image);
            setscreenshotsOne(response.data.screenshots[1].image);
            setscreenshotsTwo(response.data.screenshots[2].image);
        
        })
    }

    useEffect(()=>{
        getDetails()
    },[])

  return <>
  <section className="mt-5">
    <div className="container">
<div className="row">
  <div className="col-lg-4 mb-5">
      <div className="item-details ">
        <img src={detailsgame.thumbnail} className="w-100 rounded-3" alt=""/>
        <div className="d-flex container  justify-content-between mt-3">
            <button className="btn btn-dark ">Free</button>
            <a href={detailsgame.game_url

} className="btn btn-primary btn-group-lg bg-primary w-75" target="_blank">PLAY NOW <i className="fa-solid fa-share-from-square bg-primary"></i></a>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="item-details text-muted ">
        <h2 >{detailsgame.title}</h2>
        <h4>About Fall Guys</h4>
        <p>{detailsgame.description}</p>
        {/* <h4>Minimum System Requirements</h4> */}
        {/* <p><span className="fw-bolder">graphics :</span>{system.graphics}</p>
        <p><span className="fw-bolder">memory  :</span> {system.memory}?</p>
        <p><span className="fw-bolder">os :</span> {system.os}?</p>
        <p><span className="fw-bolder">processor :</span> {system.processor}?</p>
        <p><span className="fw-bolder">storage  :</span>{system.storage}?</p> */}
        </div>


        
        <h2>Fall Guys Screenshots</h2>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={screenshots} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={screenshotsOne} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={screenshotsTwo} className="d-block w-100" alt="..."/>
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> 
</div>  

<h2>Additional Information</h2>
<div className='d-flex justify-content-between'>
    <p>Title<br/>{detailsgame.title}</p>
    <p>Developer<br/>{detailsgame.developer}</p>
    <p>Publisher<br/>{detailsgame.publisher}</p>
</div>
<div className='d-flex justify-content-between'>
    <p>Release Date<br/>{detailsgame.release_date
}</p>
    <p>Genre<br/>{detailsgame.genre}</p>
    <p>Platform<br/>{detailsgame.platform}</p>
</div>
      </div>


      </div>
      </div>
</section>
  
  </>
}