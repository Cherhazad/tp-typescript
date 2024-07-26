import { LibraryService} from "./library.service";

let libraryService = new LibraryService();

libraryService.addBook("The Queen's Gambit", "Walter Davis", 1983, "Novel");
console.log(libraryService.getBooks());
libraryService.addBook("La Vérité sur l'Affaire Harry Quebert","Joël Dickens", 2012,  "Roman policier");
console.log(libraryService.getBooks());

// Supprimer un livre
const books = libraryService.getBooks();
if (books.length > 0) {
    const bookIdToRemove = books[0].id;
    libraryService.deleteBook(bookIdToRemove);
}

console.log('Livres après suppression :');
console.log(libraryService.getBooks());
