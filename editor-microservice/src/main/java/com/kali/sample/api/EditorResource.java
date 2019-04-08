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

import com.kali.sample.data.EditorData;
import com.kali.sample.dto.Editor;

/**
 * Author resources.
 * 
 * @author kali
 *
 */
@RequestScoped
@Path("/editor")
@OpenAPIDefinition(info = @Info(title = "Editor-API", version = "1.0", description = "Editor-API Service APIs", contact = @Contact(url = "https://github.com/kalioneshot/k8s-istio", name = "Cedric Roignant")))
public class EditorResource {

	private static final Logger LOGGER = LoggerFactory.getLogger("EditorResource");

	/**
	 * Get the editor by ISBN book.
	 * 
	 * @param isbn : The id book.
	 * @return a {@link Author} object.
	 */
	@GET
	@Path("/{isbn}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByIsbn(@PathParam("isbn") String isbn) {
		Editor editor = EditorData.getEditors().stream().filter(editor_ -> isbn.equals(editor_.getIsbn())).findAny()
				.orElse(null);
		LOGGER.info(editor.getName());
		return Response.ok(editor).build();
	}

}
