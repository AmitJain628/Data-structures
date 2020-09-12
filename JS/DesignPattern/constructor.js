// Object creation in Javascript

var obj = {};
var obj = Object.create(Object.prototype);
var obj = new Object();


// Define keys in object

obj.key1 = "hi";

obj["key1"] = "hi";

Object.defineProperty(obj, "key1", {
    value: "",
    enumerable: true,
    configurable: true,
    writable: true
})


// Basic constructor pattern

function Car(name, model){
    this.name = name;
    this.model = model;
     
}

var obj = new Car("skoda", "2019");

