import {ActionFunction, Form, json, Link, useLoaderData} from "remix";
import type { LoaderFunction } from "remix"
import { BsPlusSquareFill} from "react-icons/bs";
import ImageSlider from "~/components/imageslider";

export let loader:LoaderFunction = async () =>{
  let res = await fetch("http://localhost:8080/movies/boxoffice");

  let response = await fetch("http://localhost:8080/movies/comingsoon");

  let resData = await res.json()
  let responseData = await response.json();

  return {resData:resData, responseData:responseData};
}

export const action: ActionFunction = async () => {

 const data =     {
  "id": "tt10872600",
  "rank": "1",
  "title": "Spider-Man: No Way Home",
  "image": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
  "weekend": "$11.0M",
  "gross": "$735.9M",
  "weeks": "7"
}
  const res = await fetch("http://localhost:8080/movies/favourite", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return  res.json();


};


export default function Index() {
  let movieData = useLoaderData();
  return (
    <div>
      <h1 className=" pl-2 pb-2 text-xl text-gray-dark tracking-wide">
        COMING SOON
      </h1>

      <ImageSlider imageInfo={movieData.responseData} />

      <div className="p-4 max-w-5xl grid gap-4 grid-cols-4">
        <h1 className="col-start-1 col-span-4 text-xl text-gray-dark tracking-wide">
          BOX OFFICE
        </h1>
        {movieData.resData.map((movie) => (
          <div key={movie.id}>
            <Form method="post">
              <fieldset>
                <button type="submit">
                <BsPlusSquareFill className="absolute h-11 w-8 hover:fill-orange active:fill-orange focus:fill-orange" />
                </button>
              </fieldset>
            </Form>
            
            <Link
              title={movie.title}
              key={movie.id}
              to={movie.id}
              className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
              prefetch="intent">
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
