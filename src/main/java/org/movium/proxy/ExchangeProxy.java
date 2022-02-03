package org.movium.proxy;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.movium.model.ExchangeRateDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/v6/")
@Produces(MediaType.APPLICATION_JSON)
@RegisterRestClient()
public interface ExchangeProxy {

    @GET
    @Path("/{apikey}/latest/{base}")
    ExchangeRateDTO getRates(@PathParam("apikey") String apikey, @PathParam("base") String base);
}
