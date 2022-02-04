import {Link, redirect, useLoaderData} from "remix";
import type { LoaderFunction } from "remix"
import { BsPlusSquareFill} from "react-icons/bs";
import ImageSlider from "~/components/imageslider";

export let loader:LoaderFunction = async () =>{
  let res = await fetch("http://localhost:8080/movies/boxoffice");

  return res;
}

export default function Index() {
  let boxoffice = useLoaderData();
  return (
    <div>
      <h1 className=" pl-2 pb-2 text-xl text-gray-dark tracking-wide">
        COMING SOON
      </h1>

      <ImageSlider/>


      <div className="p-4 max-w-5xl grid gap-4 grid-cols-4">
        <h1 className="col-start-1 col-span-4 text-xl text-gray-dark tracking-wide">
          BOX OFFICE
        </h1>
        {boxoffice.map((movie) => (
          <div key={movie.id}>
            <BsPlusSquareFill className="absolute h-8 w-8 hover:fill-orange active:fill-orange focus:fill-orange" />
            <Link
              title={movie.title}
              key={movie.id}
              to={movie.id}
              className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
              prefetch="intent"
            >
            <img
              src={movie.image}
              className="border border-none rounded-lg w-full h-4/6"
            ></img>
            <div className="p-2 mt-2 text-sm rounded-xl shadow-md h-32">
              <p className="uppercase tracking-wide text-gray-dark font-semibold">
                {movie.title}
              </p>
              <p className="mt-2">
                <b>Weekend:</b> {movie.weekend}
              </p>
              <p>
                <b>Gross:</b> {movie.gross}
              </p>
              <p>
                <b>Weeks:</b> {movie.weeks}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
