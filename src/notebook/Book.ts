// Creates and Deletes books
import { Generator } from './../utils'
import { Guid } from 'guid-typescript';


// Should be a data model for DB connection
export class Book {
    private id: Guid;
    private name: string;

    public constructor(book_id: string) {
        this.id = Generator.MakeGUID();
        this.name = book_id;
    }  
}