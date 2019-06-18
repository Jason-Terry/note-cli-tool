import { CommandLineParser } from '@microsoft/ts-command-line';
export declare class NoteCLI extends CommandLineParser {
    private _verbose;
    private _payload;
    constructor();
    protected onDefineParameters(): void;
    protected onExecute(): Promise<void>;
}
