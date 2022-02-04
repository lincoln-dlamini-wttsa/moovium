package org.movium;

import io.quarkus.cache.CacheResult;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.movium.model.BoxOfficeEntity;
import org.movium.proxy.MovieProxy;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/movies")
public class MovieResource {

    @ConfigProperty(name = "imdb.apikey")
    String apiKey;

    @RestClient
    MovieProxy movieProxy;

    @GET
    @Path("/trailer/{videoId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMovies(@PathParam("videoId") String videoId){
        var movie = movieProxy.getMovies(videoId,apiKey);
        return Response.ok(movie).build();
    }

    @GET
    @Path("/boxoffice")
    @CacheResult(cacheName = "boxoffice-cache")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBoxOffice(){
        return Response.ok(movieProxy.getBoxOffice(apiKey).items()).build();
    }

    @GET
    @Path("/comingsoon")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getComingSoon(){
        return Response.ok(movieProxy.getComingSoon(apiKey).items()).build();
    }

    @GET
    @Path("/search/{title}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response search(@PathParam("title") String title){
        return Response.ok(movieProxy.searchTitle(title,apiKey).results()).build();
    }

    @GET()
    @Path("/favourite")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllBookmarked(){
        return Response.ok(BoxOfficeEntity.listAll()).build();
    }

    @GET
    @Path("/favourite/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBookmarkedById(@PathParam("id") String movieId){
        return BoxOfficeEntity.findByIdOptional(movieId)
                        .map(movie -> Response.ok(movie).build())
                        .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @POST
    @Path("/favourite")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Response bookMarkMovie(BoxOfficeEntity movie){
        BoxOfficeEntity.persist(movie);
        if(movie.isPersistent()){
            return Response.ok(movie).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @DELETE
    @Path("/favourite/{id}")
    @Transactional
    public Response deleteBookmarked(@PathParam("id") String id){
        var deleted = BoxOfficeEntity.deleteById(id);
        if(deleted){
            return Response.noContent().build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @GET
    @Path("/title/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMovieTitle(@PathParam("id") String id){
        var movie = movieProxy.getMovieTitle(apiKey, id);
        return Response.ok(movie).build();
    }
}
