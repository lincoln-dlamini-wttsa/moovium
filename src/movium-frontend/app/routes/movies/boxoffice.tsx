import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"


export let loader:LoaderFunction = () =>{
    let res = fetch("http://localhost:8080/movies/boxoffice");
    return res;
}

export default function BoxOffice(){
    let boxOfficeMovies = useLoaderData();
    return(
        <div>
            <h1>Movies</h1>
            {boxOfficeMovies.map(movie => (
                <div key={movie.id}>
                    <img src={movie.image}></img>
                    <div>{movie.title}</div>
                </div>
            ))}
    </div>
    )

}