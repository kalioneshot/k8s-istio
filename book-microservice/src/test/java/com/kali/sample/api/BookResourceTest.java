package com.kali.sample.api;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.junit.jupiter.api.Test;

import com.kali.sample.data.BookData;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class BookResourceTest {

	@Test
	public void testHelloEndpoint() {
		given().when().get("/all").then().statusCode(200).body(equalTo("hello"));
	}

	@GET
	@Path("/all")
	public Response getBooks() {
		return Response.ok(BookData.getBooks()).build();
	}

}
