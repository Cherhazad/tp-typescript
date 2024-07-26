"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
class LibraryService {
    constructor() {
        this.bookArray = [];
    }
    addbook(book) {
        this.bookArray.push(book);
    }
    getbook() {
        return this.bookArray;
    }
    deletebook(book) {
        this.bookArray.splice(this.bookArray.indexOf(book), 1);
    }
}
exports.LibraryService = LibraryService;
