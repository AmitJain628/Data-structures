// Set timeout polfyill

(function(){

 var timer = {};

function generateRandomId(){
  let randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  while(timer.hasOwnProperty(randomId)){
     randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  return randomId;
}

function check(){
  let currentTime = Date.now();

  for(var time in timer){
    if(timer[time].delay  < currentTime){
    console.log(Date.now(), timer[time].delay, timer[time].callback);

      timer[time].callback();
      myClearTimeout(time);
    }
  }
 requestIdleCallback(check);
}

window.mySetTimeout = function(callback, delay){

  if(typeof callback !== "function"){
    throw new TypeError("callback should be function");
  }

  if(typeof delay !== "number"){
    throw new TypeError("delay should be number")
  }

   var id = generateRandomId();

   timer[id] = {
     delay: Date.now() + delay,
     callback
   }

   return id;
}

window.myClearTimeout = function(id){
  if(timer.hasOwnProperty(id)){
    delete timer[id];
  }
}

   requestIdleCallback(check);

})();