import React from 'react'
import { Link } from 'react-router-dom'
import hambozo from './Notfound.module.css'


export default function Notfound() {
  return <>
  
  <div className={hambozo.mainbox}>
    <div className={hambozo.err}>4</div>
    <span className={hambozo.far}>
    <i className="far fa-question-circle fa-spin"></i>
    </span>
    
    <div className={hambozo.err2}>4</div>
    <div className={hambozo.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/home" className='text-primary'>home</Link> and try from there.</p></div>
      </div>
  </>
}