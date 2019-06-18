import { Guid } from 'guid-typescript'

export class Generator {

    public static MakeGUID() {
        return Guid.create();
    }
    
}