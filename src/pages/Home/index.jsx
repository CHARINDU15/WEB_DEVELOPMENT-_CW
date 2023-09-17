import React, { useEffect } from "react";
import WOW from 'wowjs'; // Import WOW from wowjs
import '../Home/animate.css';
import '../Home/bootstrap-4.3.1.css';
import '../Home/style.css';
import $ from 'jquery';

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
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider/S1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p className="heading animated bounceInLeft">BOOTSTRAP 4 ANIMATED CAROUSEL</p>
              <p className="sub-heading animated flipInX delay-1s">CODE LINK GIVEN IN VIDEO DESCRIPTION</p>
              <a className="btn btn-lg btn-danger mt-5 delay-2s animated bounce delay-2s infinite ">LIKE & SHARE</a>
            </div>
          </div>
          
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container-fluid">
        <div className="row bg-gray wow slideInDown">
          <div className="col-md-4">
            <div className="icon-text"> <i className="fa fa-money" aria-hidden="true"></i> FAST SECURE PAYMENTS</div>
          </div>
          <div className="col-md-4 bg-pink">
            <div className="icon-text"> <i className="fa fa-star" aria-hidden="true"></i> PREMIUM PRODUCTS</div>
          </div>
          <div className="col-md-4">
            <div className="icon-text"> <i className="fa fa-truck" aria-hidden="true"></i> CUTOMIZE YOUR DREAM EVENT</div>
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
           <img class="card-img-top img-fluid" alt="img1" src="images/models/16.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Product 1</div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a>
              </div>
          </div>
          </div>   
          
          <div class="col-md-3 wow zoomInLeft">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="images/models/14.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Product 1</div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a>
              </div>
          </div>
          </div> 
          
          
          <div class="col-md-3 wow zoomInRight">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="images/b/B3.png"/>
              <div class="card-body">
                 <div class="card-heading">Product 1</div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
                  <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a>
              </div>
          </div>
          </div> 
          
          
          <div class="col-md-3 wow zoomInUp">
          <div class="card">
           <img class="card-img-top img-fluid" alt="img1" src="images/models/13.jpg"/>
              <div class="card-body">
                 <div class="card-heading">Product 1</div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
                  <a class="btn btn-pink text-light">Add To Cart</a>
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
              <a className="btn btn-light">WEDDINGS</a>
              <a className="btn btn-light ml-4">BIRTHDAY PARTIES</a>
              <a className="btn btn-light ml-4">Corporate Events</a>
              <a className="btn btn-light ml-4">Music Festivals</a>
              <a className="btn btn-light ml-4">Conferences </a>
              
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-3 wow slideInDown">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/1.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInLeft">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/2.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInRight">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/3.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow slideInUp">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/4.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light">Add To Cart</a> </div>
            </div>
      </div>
        </div>
          
          
          
    <div class="row mt-5">
          <div class="col-md-3 wow flipInX">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/5.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInY">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/6.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInX">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/7.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</a> </div>
            </div>
      </div>
          <div class="col-md-3 wow flipInY">
        <div class="card"> <img class="card-img-top img-fluid" alt="img1" src="images/models/8.jpg"/>
              <div class="card-body">
            <div class="card-heading">Product 1</div>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, mollitia dolorem. </p>
            <a class="btn btn-pink text-light">Add To Cart</a> </div>
            </div>
      </div>
        </div>
      </div>

     
     
    </div>
  );
}

export default Homepg;
