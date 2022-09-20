const receivesAFunction = callbackFunction => {
    callbackFunction()
}

const returnsANamedFunction = () => {
    const namedFunction = () => console.log("Hello, this is a named function")
    return namedFunction
}

const returnsAnAnonymousFunction = () => {
    return () => console.log("This is an anonymous function")
}