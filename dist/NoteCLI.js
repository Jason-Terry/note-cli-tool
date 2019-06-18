"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
// const path = require('path');
const ts_command_line_1 = require("@microsoft/ts-command-line");
class NoteCLI extends ts_command_line_1.CommandLineParser {
    constructor() {
        super({
            toolFilename: 'note',
            toolDescription: 'Take notes without tabbing out!'
        });
        // this.addAction(new NoteAction());
    }
    onDefineParameters() {
        this._verbose = this.defineFlagParameter({
            parameterLongName: '--verbose',
            parameterShortName: '-v',
            description: 'Show extra logging detail'
        });
        this._payload = this.defineStringParameter({
            defaultValue: "",
            argumentName: "PAYLOAD",
            description: "Required field containing text for the note payload",
            parameterLongName: '--payload',
            parameterShortName: '-p',
            required: true
        });
    }
    onExecute() {
        console.log("TRC: Calling Execute on Parser.");
        return super.onExecute();
    }
}
exports.NoteCLI = NoteCLI;
