import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar({userdata ,logout}) {
  return <>
      <nav className="navbar navbar-dark bg-dark  navbar-expand-lg shadow-lg py-3">
        <div className="container">
                  <Link className="navbar-brand" to="/home">
                    <img src="http://routeegypt.com/GameOver/assets/images/logo.png" alt="" width="50" height="40" className="d-inline-block align-text-top"/>
                    Game Over
                  </Link>
               
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userdata? <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-1 ">
                <Link className="nav-link active  " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link text-muted" to="/all">All</Link>
              </li>
              <li className="nav-item dropdown px-1">
                <p className="nav-link dropdown-toggle text-muted"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  platform
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/pc" className="dropdown-item" >pc</Link></li>
                  <li><Link className="dropdown-item" to="/browser">browser</Link></li>
                
                 
                </ul>
              </li>
              <li className="nav-item dropdown px-1">
                <p className="nav-link dropdown-toggle text-muted"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  sort-by
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/releasedate" >release-data</Link></li>
                  <li><Link className="dropdown-item" to="/popularity">popularity</Link></li>
                  <li><Link className="dropdown-item" to="/alphabetical">alphabetical</Link></li>
                  <li><Link className="dropdown-item" to="/relevance">relevance</Link></li>
                 
                </ul>
              </li>
              <li className="nav-item dropdown px-1">
                <p className="nav-link dropdown-toggle text-muted"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  categories
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/racing">racing</Link></li>
                  <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                  <li><Link className="dropdown-item" to="/social">social</Link></li>
                  <li><Link className="dropdown-item" to="/shooter">shooter</Link></li>
                  <li><Link className="dropdown-item" to="/open-world">open-world</Link></li>
                  <li><Link className="dropdown-item" to="/zombie">zombie</Link></li>
                  <li><Link className="dropdown-item" to="/fantasy">fantasy</Link></li>
                  <li><Link className="dropdown-item" to="/action-rpg">action-rpg</Link></li>
                  <li><Link className="dropdown-item" to="action">action</Link></li>
                  <li><Link className="dropdown-item" to="/flight">flight</Link></li>
                  <li><Link className="dropdown-item" to="/battle-royale">battle-royale</Link></li>
                 
                </ul>
              </li>
             
            </ul>
           :""}
           
           <div className='ms-auto'>
           {userdata?<button type="button" className="btn btn-outline-primary  mx-2" onClick={logout}>Logout</button>:      
              <> <Link  className="btn btn-outline-primary " to="/" >join Free</Link>
           <Link  className="btn-login mx-3" to="login">Login</Link></> 
           
           }
           

           </div>
          </div>
        </div>
      </nav>

  </>
}