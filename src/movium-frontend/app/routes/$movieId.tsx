import { LoaderFunction, useLoaderData } from "remix";
import VideoTrailer from "~/components/videotrailer";


export let loader:LoaderFunction = async ({params}) =>{
    let movie = await fetch(`http://localhost:8080/movies/title/${params.movieId}`);

    let video = await fetch(`http://localhost:8080/movies/trailer/${params.movieId}`);

    let videoData = await video.json();
    let movieData = await movie.json();
    

    return {movieData:movieData, videoData:videoData};

    
}
export default function Movie() {
    let movies = useLoaderData();


    return (
        <div className="rounded-xl shadow-md overflow-hidden mt-10">
          <VideoTrailer videoInfo={movies.videoData}/>
          <div className="flex-col pt-10">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover ml-3 md:h-full md:w-48"
                src={movies.movieData.image}
              ></img>
            </div>
            <div className="p-8 text-gray">
              <div className="uppercase tracking-wide text-gray-dark font-semibold">
                {movies.title}
              </div>
              <ul className=" w-fit text-xs grid grid-cols-3">
                <li>
                  <p>{movies.movieData.year}</p>
                </li>
                <li>
                  <p>{movies.movieData.contentrating}</p>
                </li>
                <li>
                  <p>{movies.movieData.runtimestr}</p>
                </li>
              </ul>
              <p className="pt-2 text-sm">{movies.movieData.genres}</p>
              <p className=" pt-4 mt-2 text-gray-dark text-xs">
              {movies.movieData.plot}
              </p>
              <p className="pt-4 text-sm">
                <b>Director:</b> {movies.movieData.directors}
              </p>
              <p className="pt-4 text-sm">
                <b>Stars:</b> {movies.movieData.stars}
                Page
              </p>
            </div>
          </div>
        </div>
    )


}