function add() {
 let args = Array.prototype.slice.call(arguments);
  
  function result(){
    args = args.concat(Array.prototype.slice.call(arguments));
    if(args.length >= 3) {
       return args.slice(0,3).reduce((a,b) => a+b, 0); 
    }
    
    return result;
  }
  result();
}
