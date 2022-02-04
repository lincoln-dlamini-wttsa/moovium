import { LoaderFunction, useLoaderData } from "remix";

export let loader:LoaderFunction = async ({params}) =>{
    let res = fetch(`http://localhost:8080/movies/title/${params.movieId}`);
    return res;
}

export default function MovieDetails(){
    let movies = useLoaderData();


    return (
        <div className="rounded-xl shadow-md overflow-hidden mt-10">
          <div className="flex-col">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover ml-3 md:h-full md:w-48"
                src={movies.image}
              ></img>
            </div>
            <div className="p-8 text-gray">
              <div className="uppercase tracking-wide text-gray-dark font-semibold">
                {movies.title}
              </div>
              <ul className=" w-fit text-xs grid grid-cols-3">
                <li>
                  <p>{movies.year}</p>
                </li>
                <li>
                  <p>{movies.contentrating}</p>
                </li>
                <li>
                  <p>{movies.runtimestr}</p>
                </li>
              </ul>
              <p className="pt-2 text-sm">{movies.genres}</p>
              <p className=" pt-4 mt-2 text-gray-dark text-xs">
              {movies.plot}
              </p>
              <p className="pt-4 text-sm">
                <b>Director:</b> {movies.directors}
              </p>
              <p className="pt-4 text-sm">
                <b>Stars:</b> {movies.stars}
              </p>
            </div>
          </div>
        </div>
    );
}