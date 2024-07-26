import { LibraryService} from "./library.service";
import {Book} from "./book.model";

let libraryService = new LibraryService();
let book1: Book = {id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1996, genre: "Fantasy"};
let book2: Book = {id: 2, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1996, genre: "Fantasy"};


libraryService.addbook(book1);
console.log(libraryService.getbook());
libraryService.addbook(book2);
console.log(libraryService.getbook());

libraryService.deletebook(book1);
console.log(libraryService.getbook());


