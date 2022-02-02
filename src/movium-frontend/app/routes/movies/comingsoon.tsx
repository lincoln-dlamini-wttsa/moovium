import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"


export let loader:LoaderFunction = () =>{
    let res = fetch("http://localhost:8080/movies/comingsoon");
    return res;
}

export default function ComingSoon(){
    let comingSoonMovies = useLoaderData();
    return(
        <div className="p-4 max-w-5xl grid gap-x-4 gap-y-10 grid-cols-4">
            <h1 className="col-start-1 col-span-4 text-xl text-gray-dark tracking-wide">COMING SOON</h1>
            {comingSoonMovies.map(movie => (
                <div key={movie.id}>
                    <img src={movie.image} className="border border-none rounded-lg w-full h-4/6"></img>
                    <div className="p-2 mt-2 text-xs rounded-xl shadow-md h-40">
                    <p className="uppercase tracking-wide text-gray-dark text-sm font-semibold">{movie.title}</p>
                    <p>{movie.genres}</p>
                    <p className="mt-2"><b>Directors: </b>{movie.directors}</p>
                    <p><b>Stars: </b>{movie.stars}</p>
                    <p><b>Release date: </b>{movie.releaseState}</p>
                    </div>
                </div>
            ))}
    </div>
    )

}
