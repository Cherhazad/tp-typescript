"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
class LibraryService {
    constructor() {
        this.bookArray = [];
        this.nextId = 1;
    }
    addBook(title, author, year, genre) {
        const newBook = { id: this.nextId++, title, author, year, genre };
        this.bookArray.push(newBook);
    }
    getBooks() {
        return this.bookArray;
    }
    deleteBook(id) {
        this.bookArray = this.bookArray.filter(book => book.id !== id);
    }
}
exports.LibraryService = LibraryService;
