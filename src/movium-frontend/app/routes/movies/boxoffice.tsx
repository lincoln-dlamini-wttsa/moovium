import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import SocialShare from "~/components/socialShare"


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
                    <SocialShare url={movie.image} text="Check this out"/>
                </div>
            ))}
    </div>
    )
}