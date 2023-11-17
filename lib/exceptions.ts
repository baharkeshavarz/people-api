// Handling Authentication errors
export class AuthRequiredError extends Error {
    constructor(message = "Auth is required to access this this page.") {
        super(message);
        this.name = "AuthRequiredError"
    }
}

// Handling Fetch API's errors
export class FetchAPIError extends Error {
    constructor(message = "Cannot find the result.") {
        super(message);
        this.name = "FetchAPIError"
    }
}