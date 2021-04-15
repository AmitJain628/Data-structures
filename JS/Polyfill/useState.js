function useState(initalValue) {
  var _state = ;
  
  function state() {
   return _state;
  }
  
  function setState(newState) {
    _state = newState;
  }
  
  return [state, setState];
}
