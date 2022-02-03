import { LoaderFunction, useLoaderData } from "remix";

export let loader:LoaderFunction = () =>{
    let res = fetch("http://localhost:8080/movies/favourite");
    return res;
}

export default function Index(){
    let favourites = useLoaderData();
    return(
        <div>
            <p>Favourites</p>
            {favourites.map(favourite => (
                <div key={favourite.id}>
                    <img src={favourite.image} alt="Favourite image" />
                    <div>Title : {favourite.title}</div>
                </div>
            )
            )}
        </div>
    )
}