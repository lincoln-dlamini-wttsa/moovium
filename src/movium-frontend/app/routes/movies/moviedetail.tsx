export default function MovieDetail(){
    return (
      <div>

          <div className="h-96 w-full object-cover rounded-3xl">
          <iframe
            src="https://www.imdb.com/video/imdb/vi2959588889/imdb/embed?autoplay=false&width=854"
            width="854"
            height="400"
            allowFullScreen={true}
            autoPlay={true}
            scrolling="no"
          ></iframe>
          </div>


        <div className="rounded-xl shadow-md overflow-hidden mt-10">
          <div className="flex-col">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover ml-3 md:h-full md:w-48"
                src="/images/large-image.jpg"
              ></img>
            </div>
            <div className="p-8 text-gray">
              <div className="uppercase tracking-wide text-gray-dark font-semibold">
                INCEPTION
              </div>
              <ul className=" w-fit text-xs grid grid-cols-3">
                <li>
                  <p>2010</p>
                </li>
                <li>
                  <p>PG</p>
                </li>
                <li>
                  <p>2h 28min</p>
                </li>
              </ul>
              <p className="pt-2 text-sm">Action, Adventure, Sci-Fi</p>
              <p className=" pt-4 mt-2 text-gray-dark text-xs">
                Dom Cobb is a skilled thief, the absolute best in the dangerous
                art of extraction, stealing valuable secrets from deep within
                the subconscious during the dream state, when the mind is at its
                most vulnerable. Cobb's rare ability has made him a coveted
                player in this treacherous new world of corporate espionage, but
                it has also made him an international fugitive and cost him
                everything he has ever loved. Now Cobb is being offered a chance
                at redemption. One last job could give him his life back but
                only if he can accomplish the impossible, inception. Instead of
                the perfect heist, Cobb and his team of specialists have to pull
                off the reverse: their task is not to steal an idea, but to
                plant one. If they succeed, it could be the perfect crime. But
                no amount of careful planning or expertise can prepare the team
                for the dangerous enemy that seems to predict their every move.
                An enemy that only Cobb could have seen coming.
              </p>
              <p className="pt-4 text-sm">
                <b>Director:</b> Christopher Nolan
              </p>
              <p className="pt-4 text-sm">
                <b>Stars:</b> Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot
                Page
              </p>
            </div>
          </div>
        </div>
      </div>
    );

}