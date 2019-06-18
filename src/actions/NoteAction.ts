import { CommandLineAction } from "@microsoft/ts-command-line";

export class NoteAction extends CommandLineAction {

    public constructor() {
        super({
            actionName: 'note',
            summary: 'Creates a note in the default notebook',
            documentation: 'Don\'t now what more you want from me...'
          });
    }

    protected onDefineParameters(): void {
        console.error("Method: NoteAction.onDefineParameters not implemented");
    }    
    
    protected onExecute(): Promise<void> {
        // console.error("Method: NoteAction.onDefineParameters not implemented");
        return new Promise((resolve, reject) => {
            // the resolve / reject functions control the fate of the promise
            // create note with given action args
            // save note to default notebook
            console.log("Writing Note!")
        });
    }
}