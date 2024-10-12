function receivesAFunction(callback) {
    callback();
    
}
function activity() {
    console.log("workout");
    
}
receivesAFunction(activity);

function returnsANamedFunction() {

    function namedFunction() {
        console.log("This is the named function");
        
    }
    
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function");
        
    };
    
}
