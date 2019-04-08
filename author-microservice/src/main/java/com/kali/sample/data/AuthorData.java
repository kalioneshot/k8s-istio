package com.kali.sample.data;

import java.util.Arrays;
import java.util.List;

import com.kali.sample.dto.Author;;

/**
 * Static data.
 *
 * @author kali
 *
 */
public class AuthorData {

	public static List<Author> getAuthors() {
		Author author_1 = new Author("1", "12100747444", "Cloux", "Pierre-Yves", null);
		Author author_2 = new Author("2", "1788834755", "Heck", "Joseph", "heck.joseph@gmail.com");
		Author author_3 = new Author("1", "12100747444", "Ramon", "Huerga Jose", null);
		return Arrays.asList(author_1, author_2, author_3);
	}
}
