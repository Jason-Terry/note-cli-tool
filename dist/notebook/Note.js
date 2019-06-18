"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creates and Deletes books
const utils_1 = require("./../utils");
// Should be a data model for DB connection
class Note {
    constructor(note_id, input) {
        this.id = utils_1.Generator.MakeGUID();
        this.name = note_id;
        this.content = input;
    }
    write() {
    }
}
exports.Note = Note;
