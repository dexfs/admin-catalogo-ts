export class DomainException extends Error {
    private readonly errors: unknown[]
    constructor(anErrors: Error[]) {
        super();
        this.errors = anErrors
    }


}