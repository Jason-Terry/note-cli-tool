// Creates and Deletes books
import { Generator } from './../utils'
import { Guid } from 'guid-typescript';

// Should be a data model for DB connection
export class Note {
    private id: Guid;
    private name: string;
    private content: string;

    public constructor(note_id: string, input: string) {
        this.id = Generator.MakeGUID();
        this.name = note_id;
        this.content = input;
    }

    public write() {

    }
}