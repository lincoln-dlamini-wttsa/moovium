import SimpleImageSlider from "react-simple-image-slider";


export default function ImageSlider({imageInfo}){
   

    var images:Object [] = [];

    imageInfo.forEach((element:any) => {
              images.push({url:element.image});
          });

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