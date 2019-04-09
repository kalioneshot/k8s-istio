package com.kali.sample.client;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import com.kali.sample.dto.Editor;

/**
 * Editor Service Interface.
 * 
 * @RegisterRestClient allows Quarkus to know that this interface is meant to be
 *                     available for CDI injection as a REST Client
 * 
 * @author kali
 *
 */
@Path("/editor")
@Produces(MediaType.APPLICATION_JSON)
@RegisterRestClient
public interface EditorClient {

	@GET
	@Path("/{isbn}")
	Editor getByIsbn(@PathParam("isbn") String isbn);
}
