package com.kali.sample.data;

import java.util.Arrays;
import java.util.List;

import com.kali.sample.dto.Book;

public class BookData {

	public static List<Book> getBooks() {
		Book book_1 = new Book("12100747444", "Docker Pratique des architectures à base de conteneurs",
				"Cet ouvrage s’adresse autant aux développeurs et aux architectes logiciel qui lancent de nouvelles applications qu’aux opérationnels responsables des déploiements. Déployer du code en production a longtemps été une source de problèmes auxquels la virtualisation avait commencé à apporter des solutions. Aujourd’hui Docker propose des réponses nettement plus satisfaisantes.",
				"320", Double.valueOf("29.90"));
		Book book_2 = new Book("1788834755", "Kubernetes for Developers",
				"Kubernetes is documented and typically approached from the perspective of someone running software that has already been built. Kubernetes may also be used to enhance the development process, enabling more consistent testing and analysis of code to help developers verify not only its correctness, but also its efficiency. This book introduces key Kubernetes concepts, coupled with examples of how to deploy and use them with a bit of Node.js and Python example code, so that you can quickly replicate and use that knowledge.",
				"376", Double.valueOf("29.32"));
		Book book_3 = new Book("12000747777", "Kong: Becoming a King of API Gateways",
				"Description : This book is useful for IT architects, DevOps engineers, CTOs and security experts willing to understand how to use Kong to create and expose APIs. Even if you are not already familiar with Kong, it will only take a few minutes to create your first API",
				"194", Double.valueOf("18.73"));
		return Arrays.asList(book_1, book_2, book_3);
	}

}
