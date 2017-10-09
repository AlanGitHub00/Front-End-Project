/// <reference path="jquery.d.ts" />
class Salutation {
    _salutation: string;
    constructor(message: string) {
        this._salutation = message;
    }
    Salutation(): string {
        return "Hello, " + this._salutation;
    }
}
