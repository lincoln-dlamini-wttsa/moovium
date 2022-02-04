package org.movium.proxy;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.movium.model.BoxOfficeDTO;
import org.movium.model.ComingSoonDTO;
import org.movium.model.MovieDTO;
import org.movium.model.MovieTitleDTO;
import org.movium.model.SearchTitleResponse;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/en/API/")
@Produces(MediaType.APPLICATION_JSON)
@RegisterRestClient()
public interface MovieProxy {
    @GET
    @Path("/YouTubeTrailer/{apikey}/{videoId}")
    MovieDTO getMovies(@PathParam("videoId") String videoId, @PathParam("apikey") String apikey);

    @GET
    @Path("/BoxOffice/{apikey}")
    BoxOfficeDTO getBoxOffice(@PathParam("apikey") String apikey);

    @GET
    @Path("/ComingSoon/{apikey}")
    ComingSoonDTO getComingSoon(@PathParam("apikey") String apikey);

    @GET
    @Path("/SearchTitle/{apikey}/{title}")
    SearchTitleResponse searchTitle(@PathParam("title")String title,@PathParam("apikey") String apikey);

    @GET
    @Path("/Title/{apikey}/{id}")
    MovieTitleDTO getMovieTitle(@PathParam("apikey") String apikey, @PathParam("id") String id);
}
