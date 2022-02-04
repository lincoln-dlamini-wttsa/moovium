import {Link, redirect, useLoaderData} from "remix";
import type { LoaderFunction } from "remix"
import { BsPlusSquareFill} from "react-icons/bs";
import SocialShare from "~/components/socialShare"

export let loader:LoaderFunction = () =>{
  let res = fetch("http://localhost:8080/movies/boxoffice");
  return res;
}

export default function Index() {
  let boxOfficeMovies = useLoaderData();
  return (
    <div>
      <h1 className=" pl-2 pb-2 text-xl text-gray-dark tracking-wide">COMING SOON</h1>
      <img
        className=" h-96 w-full object-cover rounded-3xl"
        src="/images/backdrop.jpg"
      ></img>
      <div className="absolute top-60 ml-5">
        <h1 className="text-5xl text-white uppercase">
          Inception
        </h1>
        <p>Action, Adventure, Sci-Fi</p>
        <div className="pt-6 w-11/12">
          <Link to="/" className="border border-solid rounded-lg p-3 text-sm">WATCH TRAILER</Link>
          </div>
      </div>

      <div className="p-4 max-w-5xl grid gap-4 grid-cols-4">
            <h1 className="col-start-1 col-span-4 text-xl text-gray-dark tracking-wide">BOX OFFICE</h1>
            {boxOfficeMovies.map(movie => (
                <div key={movie.id}>
                    <BsPlusSquareFill className="absolute h-8 w-8 hover:fill-orange active:fill-orange focus:fill-orange"/>
                    <img src={movie.image} className="border border-none rounded-lg w-full h-4/6"></img>
                    <div className="p-2 mt-2 text-sm rounded-xl shadow-md h-32">
                    <p className="uppercase tracking-wide text-gray-dark font-semibold">{movie.title}</p>
                    <p className="mt-2"><b>Weekend:</b> {movie.weekend}</p>
                    <p><b>Gross:</b> {movie.gross}</p>
                    <p><b>Weeks:</b> {movie.weeks}</p>
                    <SocialShare url={movie.image} text="Check this out"/>
                    </div>
                </div>
            ))}
    </div>
    </div>
  );
}
