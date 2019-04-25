import React from 'react';
import "./profileCard.css";

const ProfileCard = props => (

<div className="Card">
      <div className="profCard text-center" >      
      <div className="jumbotron">
      <div className="row">
      <div className="col-sm-3">
        <img src="https://vignette.wikia.nocookie.net/nickelodeon/images/8/8c/Tommy_Pickles_in_Newer_Years.png/revision/latest?cb=20190206172923" style= {{width:"100%" }} className="rounded-circle" alt="Tommy"></img>
        </div>

      <div className="col-sm-9">
      <h3 className="devname">{props.name}</h3>
      <div className="row">
      <div className="col-sm-4 ml-auto text-center">
            <i className="fas fa-phone fa-3x mb-3 sr-contact-2"></i>
            <p>571-606-6253</p>
          </div>
          <div className="col-sm-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
            <p>
              <a href="mailto:moniquemorales.m@gmail.com">tpicklesgotyou@gmail.com {props.email}</a>
            </p>
          </div>
      </div>
      </div> 

      </div>
  
        <hr className="my-4"/>
        <h5 className="position">{props.currentPosition}</h5>
        
        <p className="experience">{props.experience}
        For over 15 years, I spent developing and customizing Websites, Themes and Plug-ins. Fluent in HTML, CSS, WordPress and Shopify. I provide assistance and support to clients of all types, bloggers, small and corporate business types. I am self motivated, educated and timely organized delivering top quality service, because your 100% satisfaction is my most important goal. 

Other then building and customizing for the Web, I've setup and launched Shopify online e-commerce stores for clients, tweaked themes and implemented variety of plugins. I've built portals, integrated API for Facebook, Stripe and Twitter. One of my early Web Apps I've personally built was called Tweetbits that got high exposure and popularity, with over 100,000 users.

My skills and consists of; HTML(5), CSS(3 and Scss), WordPress, Shopify, Rails, API, XML. I'm in the process of learning React and AngularJS. 

        </p>

        <hr className="my-4"/>
        <div className= "row">
            <div className= 'col-sm-6'>
            <p className="money">hourly rate:</p>
            <p className="money"> $75</p>
            </div>
            <div className= 'col-sm-6'>
            <p className="skillschecked">{props.skills} </p>
            <p className="skills">react node CSS mySQL mongo</p>
            </div>
        </div>
    
    </div>
    </div>
</div>









);

export default ProfileCard;