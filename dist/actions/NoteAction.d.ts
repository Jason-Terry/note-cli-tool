import { CommandLineAction } from "@microsoft/ts-command-line";
export declare class NoteAction extends CommandLineAction {
    constructor();
    protected onDefineParameters(): void;
    protected onExecute(): Promise<void>;
}
