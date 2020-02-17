function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number"){
    result = a + b
  }
    return result;

}

function AddList(params){
  let result = undefined;
  if(Array.isArray(params) && params.length >0){
    result = 0;
    for (var i=0; i<params.length; i++) {
      if(typeof params[i] != "number"){
        result = undefined; 
        break;
      }
      result = result + params[i]
    }
  }
  return result;

}
//console.log(Sum(2,3)==5);


export { Sum, AddList };