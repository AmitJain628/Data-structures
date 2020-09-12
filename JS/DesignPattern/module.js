// object literals

var myModule = {
    myProperty: "some value",
    aysnc: function(){
        console.log("Async call")
    }
}

console.log(myModule.myProperty);

// Module pattern

var testModule = (function(){

    function func1(){
        console.log("hi i i");
    }

    function func2(){
        console.log("222");
    }

    function func2(){
        console.log("....");
    }

    return {
        publicMethod1: func1,
        publicMethod2: func2
    }

})();