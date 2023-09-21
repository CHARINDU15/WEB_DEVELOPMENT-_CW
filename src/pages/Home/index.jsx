import React, { useEffect } from "react";
import WOW from 'wowjs'; // Import WOW from wowjs

import '../Home/animate.css';
import '../Home/bootstrap-4.3.1.css';
import '../Home/style.css';
import $ from 'jquery';
import fun1 from '../Home/pexels-kaique-rocha-518389.jpg';
import fun2 from '../Home/pxfuel (1).jpg';

function Homepg() {
  
  useEffect(() => {
    
    const wow = new WOW.WOW(); 
    wow.init();
   
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 900){
        $('.fixed-top').css('background', 'transparent');
      } else{
        $('.fixed-top').css('background', 'rgba(255, 20, 147, 0.7)');
      }
    });
  }, []);
   
  
  return (
    <div>
      
    
      

      <div  className="container-fluid">
        <div className="row bg-gray wow slideInDown">
          <div className="col-md-4">
            <div className="icon-text"> <i className="fa fa-money" aria-hidden="true"></i> FAST SECURE PAYMENTS</div>
          </div>
          <div className="col-md-4 bg-pink">
            <div className="icon-text"> <i className="fa fa-star" aria-hidden="true"></i> PREMIUM PRODUCTS</div>
          </div>
          <div className="col-md-4">
            <div className="icon-text"> <i className="fa fa-truck" aria-hidden="true"></i> CUTOMIZE DREAM EVENT</div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row wow flash">
          <div className="col-md-12 text-center"><h1>LATEST EVENTS</h1></div>
        </div>

        <div class="row mt-5">
        <div class="col-md-3 wow zoomInDown">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="Birthdays.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Birthday Parties</div>
                  
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View</a>
              </div>
          </div>
          </div>   
          
          <div class="col-md-3 wow zoomInLeft">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="Wedding.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Weddings</div>
                 
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View</a>
              </div>
          </div>
          </div> 
          
          
          <div class="col-md-3 wow zoomInRight">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="Conferences.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Conferences</div>
                  
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View</a>
              </div>
          </div>
          </div> 
          
          
          <div class="col-md-3 wow zoomInUp">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="Musicals.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Outdoor Musicals</div>
                  
                  <a class="btn btn-pink text-light">View</a>
              </div>
          </div>
          </div> 
      </div>
	  
      </div>

      <div className="container-fluid bc">
        <div className="container pt-5 pb-5">
          <div className="row inner-text">
            <div className="col-md-6 text-light">
              <h3 className="wow slideInUp">GET START</h3>
              <h1 className="mt-4 wow slideInDown">MAKE YOUR OWN CHOICE</h1>
              <a className="btn btn-lg bg-pink text-light mt-3 wow slideInLeft"> GET PACKAGES</a>
              <a  className="btn btn-lg bg-pink text-light mt-3 wow slideInLeft"> CUTOMIZE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row wow flash">
          <div className="col-md-12  text-center">
            <h1>BROWSE & CUTOMIZE YOUR EVENT</h1>
          </div>
        </div>

        <div className="row mt-4 wow bounceIn">
          <div className="col-md-12">
            <div className="col-md-12">
              <a className="btn btn-light">Weddings</a>
              <a className="btn btn-light ml-4">Birthday Parties</a>
              <a className="btn btn-light ml-4">Music Festivals</a>
              <a className="btn btn-light ml-4">Conferences </a>
              
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-3 wow slideInDown">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Platinum Cake.jpg"/>
              <div class="card-body">
            <div class="card-heading">Vanila Cake</div>
            <p class="card-text">LKR.12,500.00 </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInLeft">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Gold Cake.jpg"/>
              <div class="card-body">
            <div class="card-heading">Chocolate Cake</div>
            <p class="card-text">LKR.7,500.00</p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInRight">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Silver Cake.jpg"/>
              <div class="card-body">
            <div class="card-heading">Strawberry Cake</div>
            <p class="card-text">LKR.4000.00 </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInUp">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Special Cake.jpg"/>
              <div class="card-body">
            <div class="card-heading">Muffins</div>
            <p class="card-text">LKR.250.00  </p>
            <a class="btn btn-pink text-light">Add To Cart</a> </div>
            </div>
      </div>
        </div>
          
          
          
    <div class="row mt-5">
          <div class="col-md-3 wow flipInX">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Venue.jpg"/>
              <div class="card-body">
            
           
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View Items</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInY">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Music.jpg"/>
              <div class="card-body">
            
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View Items</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInX">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Decorations.jpg"/>
              <div class="card-body">
           
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> View Items</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInY">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="Foods.jpg"/>
              <div class="card-body">
            
            <a class="btn btn-pink text-light">View Items</a> </div>
            </div>
      </div>
        </div>
      </div>

     
     
    </div>
  );
}

export default Homepg;
