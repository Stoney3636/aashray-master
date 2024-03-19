import React from 'react';
import './style.css';

const Sliderimages = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <h1>Recollecting Memories</h1>
      <div className="carousel-item active">
        <div className="cards-wrapper">
        <div className="card">
          <img src={require("../../images/1Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS00378.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS00492.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="cards-wrapper">
        <div className="card">
          <img src={require("../../images/3Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS00537.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS00930.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="cards-wrapper">
        <div className="card">
          <img src={require("../../images/6Fest.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS01396.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS01405.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="cards-wrapper">
        <div className="card">
          <img src={require("../../images/GVS00243.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS00290.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src={require("../../images/GVS01405.jpg")} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">AASHRAY 2K23</h5>
            
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="cards-wrapper">
          <div className="card">
            <img src={require("../../images/GVS00548.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">AASHRAY 2K23</h5>
              
            </div>
          </div>
          <div className="card d-none d-md-block">
            <img src={require("../../images/GVS00722.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">AASHRAY 2K23</h5>
              
            </div>
          </div>
          <div className="card d-none d-md-block">
            <img src={require("../../images/GVS00760.jpg")} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">AASHRAY 2K23</h5>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
)
}

export default Sliderimages