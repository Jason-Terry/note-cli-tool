"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creates and Deletes books
const utils_1 = require("./../utils");
// Should be a data model for DB connection
class Book {
    constructor(book_id) {
        this.id = utils_1.Generator.MakeGUID();
        this.name = book_id;
    }
}
exports.Book = Book;
