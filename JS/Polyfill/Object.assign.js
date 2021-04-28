//Polyfill for Object assign

if(Object.assign){
  Object.defineProperty(Object, 'newAssign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      if(target === undefined || target === null){
        throw new TypeError('Not object')
      }
      var to = Object(target);
      for(let iCtr=1; iCtr < arguments.length; iCtr++) {
         let nextSource = arguments[iCtr];
         nextSource = Object(nextSource);
         let arrKeys = Object(Object.keys(nextSource));

         for(zCtr=0, len=arrKeys.length; zCtr<len; zCtr++){
            let desc = Object.getOwnPropertyDescriptor(nextSource, arrKeys[zCtr]);
            if(desc !== undefined && desc.enumerable){
              to[arrKeys[zCtr]] = nextSource[arrKeys[zCtr]];
            }
         }
      }
      return to
    }
  });
}

var o1 = {a: 3}
var o2 = Object.newAssign({}, o1);
o2.a = 5;
console.log(o1); 
