package com.kali.sample.dto;

public class Author extends Dto {

	private String isbn;
	private String name;
	private String firstName;
	private String mail;

	public Author(String id, String isbn, String name, String firstName, String mail) {
		this.setId(id);
		this.isbn = isbn;
		this.name = name;
		this.firstName = firstName;
		this.mail = mail;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

}
