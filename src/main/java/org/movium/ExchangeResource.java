package org.movium;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.movium.proxy.ExchangeProxy;
import org.movium.proxy.MovieProxy;
import org.movium.services.ConversionService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/rateExchange")
public class ExchangeResource {

    @Inject
    ConversionService convert;

    @ConfigProperty(name = "rateExchange.apikey")
    String exchangeApiKey;

    @ConfigProperty(name = "rateExchange.base")
    String base;

    @ConfigProperty(name = "imdb.apikey")
    String imdbApiKey;

    @RestClient
    ExchangeProxy exchangeProxy;
    @RestClient
    MovieProxy movieProxy;


    @GET
    @Path("/convert")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getExchangeRate(){
        var rates =Double.parseDouble(exchangeProxy.getRates(exchangeApiKey,base).conversion_rates().ZAR());
        var boxOfficeList = movieProxy.getBoxOffice(imdbApiKey).items();
        var listConverted = convert.convertToZAR(rates,boxOfficeList);
        System.out.println(rates+"\n");
        return Response.ok(listConverted).build();
    }
}
