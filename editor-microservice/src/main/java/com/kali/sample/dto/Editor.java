package com.kali.sample.dto;

public class Editor extends Dto {

	private String name;
	private String isbn;

	public Editor(String id, String name, String isbn) {
		this.setId(id);
		this.name = name;
		this.isbn = isbn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

}
