
// You should implement your task here.

module.exports = function towelSort (arg = []) {
  let arr = [];
  for( i = 0; i < arg.length; i++){
    if( i % 2 === 0){
     arr.push(arg[i]);
  }else {
    arr.push(arg[i].reverse());
  }
  
  }
    return arr.flat();
}
