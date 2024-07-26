import {Book} from './book.model';

export class LibraryService {
    bookArray: Book[] = [];

    addbook(book: Book) {
        this.bookArray.push(book);
    }

    getbook() {
        return this.bookArray;
    }

    deletebook(book: Book) {
        this.bookArray.splice(this.bookArray.indexOf(book), 1);
    }
}


