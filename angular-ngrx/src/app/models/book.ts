import { Author } from './author';
import { Rating } from './rating';
import { Editor } from './editor';

export class Book {

  isbn: string;
  title: string;
  author: Author;
  editor: Editor;
  description: string;
  page: string;
  price: string;
  rating: Rating;

  // tslint:disable-next-line:max-line-length
  constructor(isbn: string, title: string, author: Author, editor: Editor, description: string, page: string, price: string, rating: Rating) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.description = description;
    this.price = price;
    this.rating = rating;
  }

}
