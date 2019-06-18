"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_command_line_1 = require("@microsoft/ts-command-line");
class NoteAction extends ts_command_line_1.CommandLineAction {
    constructor() {
        super({
            actionName: 'note',
            summary: 'Creates a note in the default notebook',
            documentation: 'Don\'t now what more you want from me...'
        });
    }
    onDefineParameters() {
        console.error("Method: NoteAction.onDefineParameters not implemented");
    }
    onExecute() {
        // console.error("Method: NoteAction.onDefineParameters not implemented");
        return new Promise((resolve, reject) => {
            // the resolve / reject functions control the fate of the promise
            // create note with given action args
            // save note to default notebook
            console.log("Writing Note!");
        });
    }
}
exports.NoteAction = NoteAction;
