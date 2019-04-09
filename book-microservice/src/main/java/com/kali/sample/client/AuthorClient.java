package com.kali.sample.client;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import com.kali.sample.dto.Author;

/**
 * Author Service Interface.
 * 
 * @RegisterRestClient allows Quarkus to know that this interface is meant to be
 *                     available for CDI injection as a REST Client
 * 
 * @author kali
 *
 */
@Path("/author")
@Produces(MediaType.APPLICATION_JSON)
@RegisterRestClient
public interface AuthorClient {

	@GET
	@Path("/{isbn}")
	Author getByIsbn(@PathParam("isbn") String isbn);

	@GET
	@Path("/exception/{isbn}")
	Author getByIsbnBis(@PathParam("isbn") String isbn);

}
