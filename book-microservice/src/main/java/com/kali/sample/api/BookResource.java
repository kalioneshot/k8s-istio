package com.kali.sample.api;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.enums.SchemaType;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import com.kali.sample.client.AuthorClient;
import com.kali.sample.client.EditorClient;
import com.kali.sample.data.BookData;
import com.kali.sample.dto.Author;
import com.kali.sample.dto.Book;
import com.kali.sample.dto.Editor;

/**
 * Book resources.
 * 
 * @author kali
 *
 */
@RequestScoped
@Path("/book")
@OpenAPIDefinition(info = @Info(title = "Book-API", version = "1.0", description = "Book-API Service APIs", contact = @Contact(url = "https://github.com/kalioneshot/k8s-istio", name = "Cedric Roignant")))
public class BookResource {

	@Inject
	@RestClient
	EditorClient editorClient;

	@Inject
	@RestClient
	AuthorClient authorClient;

	@GET
	@Path("/all")
	public Response getBooks() {
		return Response.ok(BookData.getBooks()).build();
	}

	/**
	 * Get the book by ISBN.
	 * 
	 * @param isbn : The id book.
	 * @return a {@link Book} object.
	 * @throws MicroServiceException
	 */
	@GET
	@Path("/{isbn}")
	   @Produces(MediaType.APPLICATION_JSON)
	   @APIResponses(value = { 
	      @APIResponse(responseCode = "200", description = "Get book details with author and editor informations", content = @Content(mediaType = "application/json", schema = @Schema(type = SchemaType.OBJECT, implementation = Book.class))),          
	      @APIResponse(responseCode = "500", description = "Internal service error") })
	   @Operation(summary = "Get book details", description = "Get book details with author and editor informations")
	public Response getBook(@PathParam("isbn") String isbn) {
		Book book = BookData.getBooks().stream().filter(b -> isbn.equals(b.getIsbn())).findAny().orElse(null);

		// Dynamically - first approach.
		// AuthorClient authorClient =
		// RestClientBuilder.newBuilder().baseUrl(url).build(AuthorClient.class);

		Author author = authorClient.getByIsbn(isbn);
		book.setAuthor(author);
		Editor editor = editorClient.getByIsbn(isbn);
		book.setEditor(editor);

		return Response.ok(book).build();
	}

}
