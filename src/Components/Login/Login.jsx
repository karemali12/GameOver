import  Axios  from 'axios';
import { func } from 'joi';
import React, { useState } from 'react'
import {isRouteErrorResponse, Link, useNavigate} from "react-router-dom";
import Joi from 'joi';


export default function Login({ saveUserData}) {
    let navigate = useNavigate(); 
let[loading,setloading]=useState(false);
let[userError,setuserError]=useState("");
let[errorList,seterrorList]=useState([]);
let[userSucc,setuserSucc]=useState("");
const [user, setuser] = useState({
   
    email:"",
    password:"", 
   

})
// get data from user
function getDataFromUser(e){
let myUser={...user}
myUser[e.target.name]=e.target.value;
// console.log(myUser);
setuser(myUser);
}
// api
async function saveTOApi(){
let {data}= await  Axios.post(`https://route-egypt-api.herokuapp.com/signin`,user);
// console.log(data);
if(data.message ==='success'){
    setloading(false);
    setuserSucc('success');
    navigate('/home');
    localStorage.setItem('user-token',data.token)
    saveUserData();

}else{
    setloading(false);
    setuserError(data.message)
}

}

function submitData(e){
e.preventDefault();
setloading(true);
let valid = validation();
if(valid.error){
    seterrorList(valid.error.details)
    setloading(false);

}
else{
    saveTOApi();
    setloading(false);

}
}

function validation(){
    const schema = Joi.object({
       
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })

    return schema.validate(user,{abortEarly:false});
}

function myFunction() {
    alert("ههه اكونت جديد");
  }


  return <>
      <section className="p-5" onSubmit={submitData} >
<div className="container shadow-lg"  >
<div className="row ">
<div className="col-lg-6 d-md-none  d-sm-none d-lg-block p-0  ">
    <img src="http://routeegypt.com/GameOver/gaming.ebaf2ffc84f4451d.jpg" className="w-100 h-100" alt=""/>
</div>
<div className="col-lg-6 form-color p-4 text-center">
    <img src="http://routeegypt.com/GameOver/assets/images/logo.png" alt="" className='w-25' />
    <h2 className="text-center mt-3 text-muted h4">Log in to GameOver!</h2>
    { userError.length > 0? <div className='alert alert-danger text-center text-danger'>{userError}</div> :""}
    { userSucc.length > 0? <div className='alert alert-success text-center text-success'>{userSucc} <i class="fa-solid fa-check  text-success"></i></div> : ""}
    { errorList.map((err,index)=><div key={index} className='alert alert-danger text-center text-danger'> {err.message} </div> )}
    <form >
    <div className=" d-flex">
       
    </div>
    <input type="email" className="form-control bg-dark border-0  text-white" placeholder="Email Address" id='email' name='email' onChange={getDataFromUser}/>
    <input type="password" className="form-control bg-dark border-0 mt-3  text-white" placeholder="Password" id='password' name='password' onChange={getDataFromUser}/>

   
    <button type='submit' className="form-control mt-4 bg-dark text-white">{loading===true?<i class="fa-solid fa-spinner"></i>:'Login'}</button>
    </form>
    <hr/>
    <p className="text-center text-muted "><Link className="text-primary" onClick={myFunction}>Forgot Password?</Link><br/>
Not a member yet?  <Link to="/" className="text-primary ">Create Account</Link></p>
</div>
</div>
</div>
      </section>
  
  
  </>
}