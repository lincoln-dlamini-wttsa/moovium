import { AiFillMinusSquare } from "react-icons/ai";
import { Link, LoaderFunction, useLoaderData } from "remix";

export let loader:LoaderFunction = () =>{
    let res = fetch("http://localhost:8080/movies/favourite");
    return res;
}

export default function Index(){
    let favourites = [
        {
            "id": "tt10872600",
            "rank": "1",
            "title": "Spider-Man: No Way Home",
            "image": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "weekend": "$11.0M",
            "gross": "$735.9M",
            "weeks": "7"
        },
        {
            "id": "tt11245972",
            "rank": "2",
            "title": "Scream",
            "image": "https://m.media-amazon.com/images/M/MV5BM2E4ZGFmZTgtMDVkYS00ZTk0LWIzYWMtODk5OGVmYmEyMzEzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "weekend": "$7.2M",
            "gross": "$62.0M",
            "weeks": "3"
        }
    ]
    return(
        <div>
            <p className="text-xl text-gray-dark tracking-wide">FAVOURITES</p>
            {favourites.map(favourite => (
                <div key={favourite.id}>
            <div className="p-4 max-w-5xl grid gap-4 grid-cols-4">
             <AiFillMinusSquare className="absolute h-8 w-8 hover:fill-orange active:fill-orange focus:fill-orange" />
            <img
              src={favourite.image}
              className="border border-none rounded-lg w-full h-4/6"
            ></img>
            <div className="p-2 mt-2 text-sm rounded-xl shadow-md h-32">
              <p className="uppercase tracking-wide text-gray-dark font-semibold">
                {favourite.title}
              </p>
              <p className="mt-2">
                <b>Weekend:</b> {favourite.weekend}
              </p>
              <p>
                <b>Gross:</b> {favourite.gross}
              </p>
              <p>
                <b>Weeks:</b> {favourite.weeks}
              </p>
            </div>
            </div>
                </div>
            )

            )}
        </div>
    )
}