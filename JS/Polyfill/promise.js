// Promise polyfill

class MyPromise {

    constructor(executor){
        this._resolutionQueue = [];
        this._rejectionQueue = [];
        this.state = 'PENDING';
        this.value;
        this._rejectionReason
        executor(this._resolve.bind(this), this._reject.bind(this));
    }

    _runResolutionHandler(){
        while(this._resolutionQueue.length > 0) {
                let resolution = this._resolutionQueue.shift();
                let returnValue = resolution.handler(value);
                
                if(returnValue && returnValue instanceof MyPromise){
                    returnValue.then((function(result) {
                    resolution.promise._resolve(result);
                    })).catch((error) => {
                resolution.promise._reject(error);
                  });

                } else {
                    resolution.promise._resolve(returnValue);
                }
            }
    }

    _runRejectionHandler(){
        while(this._rejectionQueue.length > 0) {
            let rejection = this._rejectionQueue.shift();
            let returnValue = rejection.handler(value);
                
            if(returnValue && returnValue instanceof MyPromise){
                returnValue.then((function(result) {
                rejection.promise._resolve(result);
            })
            );

            } else {
                rejection.promise._resolve(returnValue);
            }
        }
    }

    _resolve(value) {
      if (this.state === 'PENDING') { 
        this.value = value;
        this.state = 'RESOLVED';
        this._runResolutionHandler(); 
       }
    }

    _reject(reason){
       if(this.state === 'PENDING'){
           this._rejectionReason = reason;
           this.state = 'REJECTED';
           this._runRejectionHandler();
       }
    }

    then(resolutionHandler){
      var newPromise = new MyPromise(function(){})
        
      this._resolutionQueue.push({
          handler: resolutionHandler,
          promise: newPromise
      });

      if(this.state === "RESOLVED"){
       this._runResolutionHandler();
      }

      return newPromise
    }

    catch(rejectionHandler){
      var newPromise = new MyPromise(function(){})
        
      this._runRejectionHandler.push({
          handler: rejectionHandler,
          promise: newPromise
      });

      if(this.state === "REJECTED"){
       this._runRejectionHandler();
      }

      return newPromise    
    }

}
