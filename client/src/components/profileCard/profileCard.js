import React from 'react';
import "./profileCard.css";

const ProfileCard = props => (

<div className="Card">
      <div className="profCard text-center" >      
      <div className="jumbotron">
      <div className="row">
      <div class="col-sm-3">
        <img src="https://static1.squarespace.com/static/549dd0cee4b029881efa814b/5b101ad2758d46ee70365c19/5b101ad62b6a2888d277765c/1543878073836/dc-headshot-photographer-97.JPG" style= {{width:"100%" }} className="rounded-circle" alt="Tommy"></img>
        </div>

      <div className="col-sm-9">
      <h3 className="devname">Monique Morales</h3>
      <div className="row">
      <div class="col-sm-4 ml-auto text-center">
            <i class="fas fa-phone fa-3x mb-3 sr-contact-2"></i>
            <p>571-606-6253</p>
          </div>
          <div class="col-sm-4 mr-auto text-center">
            <i class="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
            <p>
              <a href="mailto:moniquemorales.m@gmail.com">moniquemorales.m@gmail.com</a>
            </p>
          </div>
      </div>
      </div> 

      </div>
  
        <hr className="my-4"/>
        <h6>Startup consultant, web/software developer</h6>
        
        <p>I am currently looking for new roles in the areas of software and web development.
            An experienced startup engineer, and veteran of 2 acquisitions, I am more than just an engineer, I am a savvy entrepreneur with experience helping companies grow and change.
            I also have experience backtesting and live trading algorithmic trading systems in Python. I prefer to deploy onto QuantConnect. If you're building a trading system, I'll discount my posted rate by 10% if I like your plan.</p>

        <hr className="my-4"/>
        <div className= "row">
            <div className= 'col-sm-4'>
            <p>hourly rate:</p>
            </div>
            <div className= 'col-sm-4'>
            <p>Jobs completed: </p>
            </div>
            <div className= 'col-sm-4'>
            <p>Rating: </p>
            </div>
        </div>
    
    </div>
    </div>
</div>









);

export default ProfileCard;