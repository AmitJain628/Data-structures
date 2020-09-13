// Differnece between pub sub and observer pattern
//https://medium.com/better-programming/observer-vs-pub-sub-pattern-50d3b27f838c#:~:text=In%20the%20observer%20pattern%2C%20the,message%20queues%20or%20a%20broker.

var Subject = function(){
    this.observers = [];

    return {
        subscribeObserver: function(observer){
            this.observers.push(observer);
        },
        notifyObserver: function(observer){
           let index = this.observers.findIndex(el => el === observer);
           if(index !== -1){
               this.observers[index].notify();
           }
        },
        notifyAllObserver: function(observer){
           this.observers.forEach((element) => {
               element.notify();
           })
        },
        unsubscribeObserver: function(observer) {
           let index = this.observers.findIndex(el => ele === observer);
           if(idex != 1) {
            this.observer.splice(index, 1);
           }    
        }
    }
}

var Observer = function(){
    return {
        notify: function (){
            console.log("I am notified");
        }
    }
}

var subject = new Subject();

var obs1 = new Observer();
var obs2 = new Observer();
var obs3 = new Observer();
var obs4 = new Observer();
var obs5 = new Observer();


subject.subscribeObserver(obs1);
subject.subscribeObserver(obs2);
subject.subscribeObserver(obs3);
subject.subscribeObserver(obs4);
subject.subscribeObserver(obs5);


subject.notifyObserver(obs1);

subject.notifyAllObserver();
