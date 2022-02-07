import { BsFillDashSquareFill } from "react-icons/bs";
import { ActionFunction, Form, LoaderFunction, useLoaderData } from "remix";

export let loader:LoaderFunction =  async () =>{
    const res = await fetch("http://localhost:8080/movies/favourite");
    return res;
}

export const action: ActionFunction = async () => {


     const response = await fetch(`http://localhost:8080/movies/favourite/tt6856242`);
   
     return  response;

   };

export default function Index(){
    let favourites = useLoaderData();
    return (
        <div className="p-4 max-w-5xl grid gap-x-4 gap-y-10 grid-cols-4">
          <h1 className="col-start-1 col-span-4 text-xl text-gray-dark tracking-wide">
            FAVOURITES
          </h1>
          {favourites.map((favourite) => (
            <div key={favourite.id}>
            <Form method="post">
              <fieldset>
                <button type="submit">
                <BsFillDashSquareFill className="absolute h-11 w-8 hover:fill-orange active:fill-orange focus:fill-orange" />
                </button>
              </fieldset>
            </Form>
              <img
                src={favourite.image}
                className="border border-none rounded-lg w-full h-4/6"
              ></img>
              <div className="p-2 mt-2 text-xs rounded-xl shadow-md h-32">
                <p className="uppercase tracking-wide text-gray-dark text-sm font-semibold">
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
          ))}
        </div>
    );
}