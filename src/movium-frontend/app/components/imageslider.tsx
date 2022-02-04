import SimpleImageSlider from "react-simple-image-slider";
import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import { ImageSliderNavStyle } from "react-simple-image-slider/dist/ImageSliderNavigation";

export let loader:LoaderFunction = async ()  =>{
    let res = await fetch("http://localhost:8080/movies/comingsoon");

    var response =  res.json();

    return response;
}

export default function ImageSlider(){

    let comingSoon = useLoaderData();

    var images:Object [] = [];

    for (let i = 0; i < comingSoon.length; i++) {
         images.push({url:comingSoon[i].image});
       }

    return(



        <SimpleImageSlider
          width={906}
          height={350}
          images={images}
          showBullets={true}
          showNavs={true}
        />
 
    )

}