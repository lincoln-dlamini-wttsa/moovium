import SimpleImageSlider from "react-simple-image-slider";
import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"

export let loader:LoaderFunction = () =>{
    let res = fetch("http://localhost:8080/movies/comingsoon");
    return res;
}

export default function BoxOffice(){
   
    const images = [
        { url: "/images/backdrop.jpg" },
        { url: "/images/large-image.jpg" },
        { url: "/images/backdrop.jpg" },
        { url: "/images/large-image.jpg" },
        { url: "/images/backdrop.jpg" },
        { url: "/images/large-image.jpg" },
        { url: "/images/backdrop.jpg" },
      ];

    return(
        <div className=" h-96 w-full object-cover rounded-3xl">

        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    )

}