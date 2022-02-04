import {
  ActionFunction,
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useLoaderData 
} from "remix";
import { HiOutlineFilm, 
  HiOutlineTicket, 
  HiOutlineHome, 
  HiOutlineUsers,  
  HiOutlineUserGroup, 
  HiOutlinePlay, 
  HiOutlineLogout, 
  HiOutlineCog,
  HiOutlineHeart 
} from "react-icons/hi";
import { SiImdb} from "react-icons/si";

import type { MetaFunction, LoaderFunction } from "remix";
import moviumStyles from "./movium.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: moviumStyles
    }
  ]
}

export const meta: MetaFunction = () => {
  return { title: "Movium" };
};

export let loader:LoaderFunction = () =>{
  let res = fetch("http://localhost:8080/movies/favourite");
  return res;
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  console.log(form);
  const title = form.get("title")
  console.log("TITLE",title);
  let res = fetch(`http://localhost:8080/movies/search/${title}`);
  
  return res;
};



export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  let favourites = useLoaderData();
  let searchResults = useActionData();
  return (
    <>
      <div className="grid grid-cols-5 divide-x text-gray-light">
        <div className="col-start-1 col-span-1 px-4">
          <Link to="/">
            <img src="/images/moovium-logo.png" width="170" height="200" />
          </Link>

          <h4 className="px-8 pt-4 text-gray-light font-medium ">MENU</h4>

          <ul className="flex flex-col space-y-6 p-8">
            <li className="flex flex-row">
              <HiOutlineHome className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Home</Link>
            </li>
            <li className="flex flex-row">
              <HiOutlineFilm className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/movies/moviedetail">Movies</Link>
            </li>
            <li className="flex flex-row">
              <HiOutlineTicket className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/movies/boxoffice">Box Office</Link>
            </li>
            <li className="flex flex-row">
              <HiOutlineHeart className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/movies/favourite">Favourites</Link>
            </li>
          </ul>

          <h4 className="px-8 pt-8 text-gray-light font-medium">SOCIAL</h4>

          <ul className="flex flex-col space-y-6 p-8 ">
            <li className="flex flex-row ">
              <HiOutlineUsers className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Friends</Link>
            </li>
            <li className="flex flex-row">
              <HiOutlineUserGroup className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Parties</Link>
            </li>
            <li className="flex flex-row hover:text-gray-dark active:text-gray-dark">
              <HiOutlinePlay className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Media</Link>
            </li>
          </ul>

          <h4 className="px-8 pt-8 text-gray-light font-medium">GENERAL</h4>

          <ul className="flex flex-col space-y-6 p-8 ">
            <li className="flex flex-row">
              <HiOutlineCog className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Settings</Link>
            </li>
            <li className="flex flex-row">
              <HiOutlineLogout className="h-6 w-6 mr-2 stroke-orange" />
              <Link className=" text-gray hover:text-gray-dark active:text-gray-dark focus:text-gray-dark" to="/">Logout</Link>
            </li>
          </ul>
        </div>

        <div className="col-start-2 col-span-3 p-12">{children}</div>

        <div className="col-start-5 col-span-1 py-12 px-8">

        <Form method="get" className="py-5">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Search..."
            className="border border-solid rounded-full w-11/12 py-2 px-3"
          />
 
        <button
          type="submit"
          className="border border-solid rounded-lg p-3 text-sm"
        >
          Search
        </button>
      </Form>

          <h4 className="pt-8 pb-4 text-gray-dark font-medium text-lg">
            Favourites
          </h4>
          {favourites.map(favourite => (
          <div key={favourite.id}>
          <ul className="flex flex-col space-y-6 text-gray">
            <li className="flex flex-row">
              <Link to="/">
                <img
                  src={favourite.image}
                  className="border border-solid rounded-lg w-20 h-24"
                />
              </Link>
              <div className="flex flex-col pl-3">
                <h4 className="text-sm text-gray-dark font-medium">
                 {favourite.title}
                </h4>
              </div>
            </li>
          </ul>
          </div>
          ))}

          <div className="pt-6 w-11/12">
          <Link to="/movies/favourite" className="border border-solid rounded-lg p-3 text-sm">See More</Link>
          </div>
        </div>
      </div>
    </>
  );
  
}
