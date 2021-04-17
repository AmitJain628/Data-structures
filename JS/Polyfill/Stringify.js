function stringify(obj) {
  let result = "";
  let lastKey = Object.keys(obj).pop();
  if(typeof obj === "object") {
       result += "{";
      for(let key in obj) {
           result += `"${key}":${stringify(obj[key])}`;
          
          if(key !== lastKey){
            result += ",";
          }
      }
     
      result += "}";

  } else if(typeof obj === "number") {
       result += `${obj}`;
  } else if(typeof obj === "string") {
         result += `"${obj}"`;
  }

  return result;
}
