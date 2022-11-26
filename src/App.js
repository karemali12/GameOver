
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Login from './Components/Login/Login';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./index.css"
import Home from './Components/Home/Home';
import Joi from 'joi';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import Details from './Components/Details/Details';
import All from './Components/All/All'
import Pc from './Components/Platforms/Pc';
import Palatrowser from './Components/Platforms/Palatrowser';
import Releasedate from './Components/Sort_by/Releasedate';
import Popularity from './Components/Sort_by/Popularity';
import Alphabetical from './Components/Sort_by/Alphabetical';
import Relevance from './Components/Sort_by/Relevance';
import Racing from './Components/Categories/Racing';
import Sports from './Components/Categories/Sports';
import Social from './Components/Categories/Social';
import Shooter from './Components/Categories/Shooter';
import Openworld from './Components/Categories/Openworld';
import Zombie from './Components/Categories/Zombie';
import Fantasy from './Components/Categories/Fantasy';
import Action from './Components/Categories/Action';
import Actiontwo from './Components/Categories/Actiontwo';
import Flight from './Components/Categories/Fligh';
import Battleroyale from './Components/Categories/Battleroyale';
import Notfound from './Components/All/Notfound/Notfound';
import Latout from './Components/Layout/Latout';


function App() {
  const [userdata, setdata] = useState(null)
  const routes = createBrowserRouter([
    {
      path: "/", element: <Latout userdata={userdata} logout={logout} />, errorElement: <Notfound />, children: [
        { index: true, element: <Register /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "home", element: <Home /> },
        { path: "details/:id", element: <Details /> },
        { path: "all", element:<All /> },
        { path: "pc", element: <Pc /> },
        { path: "browser", element: <Palatrowser /> },
        { path: "releasedate", element: <Releasedate /> },
        { path: "popularity", element: <Popularity /> },
        { path: "alphabetical", element: <Alphabetical /> },
        { path: "relevance", element: <Relevance /> },
        { path: "racing", element: <Racing /> },
        { path: "sports", element: <Sports /> },
        { path: "social", element: <Social /> },
        { path: "shooter", element: <Shooter /> },
        { path: "open-world", element: <Openworld /> },
        { path: "zombie", element: <Zombie /> },
        { path: "fantasy", element: <Fantasy /> },
        { path: "action-rpg", element: <Action /> },
        { path: "action", element: <Actiontwo /> },
        { path: "flight", element: <Flight /> },
        { path: "battle-royale", element: <Battleroyale /> },
      ]
    }
  ])


  function saveUserData() {
    let eecoded = localStorage.getItem('user-token');
    let dncoded = jwt_decode(eecoded);
    setdata(dncoded);
  }

  function logout() {
    localStorage.removeItem('user-token');
    setdata(null);
    return <Navigate to='/login' replace={true} />

  }


    return (
      <>
        <RouterProvider router={routes} />
      </>
    );
  }

  export default App;
