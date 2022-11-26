import  Axios  from 'axios';
import { func } from 'joi';
import React, { useState } from 'react'
import {isRouteErrorResponse, Link, Navigate, useNavigate} from "react-router-dom";
import Joi from 'joi';

export default function Register() {
let navigate = useNavigate(); 
let[loading,setloading]=useState(false);
let[userError,setuserError]=useState("");
let[errorList,seterrorList]=useState([]);
let[userSucc,setuserSucc]=useState("");
const [user, setuser] = useState({
    first_name:"", 
    last_name:"",
    email:"",
    password:"", 
    age:0,

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
let {data}= await  Axios.post(`https://route-egypt-api.herokuapp.com/signup`,user);
// console.log(data);
if(data.message ==='success'){
    setloading(false);
    setuserSucc('success');
// return <Navigate to="/login"/>
navigate('/login');

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
        first_name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        last_name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    
        age: Joi.number()
            .min(10)
            .max(80),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })

    return schema.validate(user,{abortEarly:false});
}




  return <>
      <section className="p-5" onSubmit={submitData} >
<div className="container shadow-lg"  >
<div className="row ">
<div className="col-lg-6 d-md-none  d-sm-none d-lg-block p-0  ">
    <img src="http://routeegypt.com/GameOver/gaming.ebaf2ffc84f4451d.jpg" className="w-100 h-100" alt=""/>
</div>
<div className="col-lg-6 form-color p-4">
    <h2 className="text-center mt-3 text-muted h4">Create My Account!</h2>
    { userError.length > 0? <div className='alert alert-danger text-center text-danger'>{userError}</div> :""}
    { userSucc.length > 0? <div className='alert alert-success text-center text-success'>{userSucc} <i class="fa-solid fa-check  text-success"></i></div> : ""}
    { errorList.map((err,index)=><div key={index} className='alert alert-danger text-center text-danger'> {err.message} </div> )}
    <form >
    <div className=" d-flex">
        <input type="text" className="form-control bg-dark my-3 text-white  me-2 border-0" placeholder="First Name"  id='first_name' name='first_name' onChange={getDataFromUser} />
        <input type="text" className="form-control bg-dark text-white my-3 me-2 border-0" placeholder="Last Name" id='last_name' name='last_name' onChange={getDataFromUser}/>
    </div>
    <input type="email" className="form-control bg-dark text-white border-0" placeholder="Email Address" id='email' name='email' onChange={getDataFromUser}/>
    <input type="password" className="form-control bg-dark  text-white border-0 mt-3" placeholder="Password" id='password' name='password' onChange={getDataFromUser}/>
    <input type="number" className="form-control bg-dark my-3 text-white border-0" placeholder="age" id='age' name='age'onChange={getDataFromUser}/>

   
    <button type='submit' className="form-control mt-4 bg-dark text-white">{loading===true?<i class="fa-solid fa-spinner"></i>:'Register'}</button>
    </form>
    <h6 className="text-muted text-center mt-4 text-register">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-muted">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-muted">Terms of Service apply</a>.</h6>
    <hr/>
    <p className="text-center text-muted ">Already a member? <Link to="/login" className="text-primary btn-login">log In</Link></p>
</div>
</div>
</div>
      </section>
  
  
  </>
}