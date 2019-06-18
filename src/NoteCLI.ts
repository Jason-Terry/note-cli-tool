const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
// const path = require('path');

import { CommandLineParser, CommandLineFlagParameter, CommandLineStringParameter } from '@microsoft/ts-command-line'

import { NoteAction } from './actions'

export class NoteCLI extends CommandLineParser {

  private _verbose: CommandLineFlagParameter | undefined;
  private _payload: CommandLineStringParameter | undefined;

  public constructor() {
    super({
      toolFilename: 'note',
      toolDescription: 'Take notes without tabbing out!'
    });

    // this.addAction(new NoteAction());
  }

  protected onDefineParameters(): void { // abstract
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

  protected onExecute(): Promise<void> { // override
    console.log("TRC: Calling Execute on Parser.")
    return super.onExecute();
  }
}