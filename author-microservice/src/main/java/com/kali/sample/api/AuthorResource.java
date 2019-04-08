package com.kali.sample.api;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kali.sample.data.AuthorData;
import com.kali.sample.dto.Author;
import com.kali.sample.exception.TechnicalException;

/**
 * Author resources.
 * 
 * @author kali
 *
 */
@RequestScoped
@Path("/author")
@OpenAPIDefinition(info = @Info(title = "Author-API", version = "1.0", description = "Author-API Service APIs", contact = @Contact(url = "https://github.com/kalioneshot/k8s-istio", name = "Cedric Roignant")))
public class AuthorResource {

	private static final Logger LOGGER = LoggerFactory.getLogger("AuthorResource");
	/**
	 * Get the author by ISBN book.
	 * 
	 * @param isbn : The id book.
	 * @return a {@link Author} object.
	 */
	@GET
	@Path("/{isbn}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByIsbn(@PathParam("isbn") String isbn) {
		Author author = AuthorData.getAuthors().stream().filter(author_ -> isbn.equals(author_.getIsbn())).findAny()
				.orElse(null);
		LOGGER.info(author.getName()); 
		return Response.ok(author).build();
	}

	@GET
	@Path("/exception/{isbn}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByIsbnBis(@PathParam("isbn") String isbn) throws TechnicalException {

		return Response.status(Response.Status.CONFLICT).build();

		// return Response.ok(author).build();
	}
}
