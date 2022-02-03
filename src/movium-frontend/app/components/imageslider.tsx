import { Component } from "react";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import  Slider from "react-slick";  

 
export class ImageSlider extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div>        
            <div >        
            <div>        
            Slick Carousel In React Application     
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              <div className=" w-1/3">  
              <img  className="img" src= {'/images/backdrop.jpg'}/>  
              </div>  
              <div className=" w-96">   
              <img src= {'/images/large-image.jpg'} className=" h-72"/>  
              </div>  
              <div className=" w-1/3">   
              <img  className=" h-72" src= {'/images/backdrop.jpg'}/>  
              </div>  
              <div className=" w-96">    
              <img  className=" h-72" src= {'/images/large-image.jpg'}/>  
              </div >  
              <div className=" w-1/3">    
              <img  className=" h-72" src= {'/images/backdrop.jpg'}/>  
              </div>  
              <div className=" w-1/3">    
              <img  className=" h-72" src= {'/images/large-image.jpg'}/>  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default ImageSlider  