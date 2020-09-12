//The Singleton pattern is thus known because it restricts instantiation of a class to a single object. 
//Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class 
//if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

var mySingletion = (function(){

    var instance;

    function init(){

        function privateMethod(){

        }

        var privateVariable = 0;

        return {
            publicMethod: function(){
                console.log("1");
            },
            two: 2,
        }
    }


    return {

        getInstance: function(){
            if(!instance){
                instance = init();
            }

            return instance;
        }

    }


})();

