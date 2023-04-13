function solution(array, commands) {
  let result = [];

  for(let command of commands){
      let i = command[0];
      let j = command[1];
      let k = command[2];
      newArr = [];

      newArr = array.slice(i -1, j);
      newArr.sort(function(a, b){ return a-b});
      result.push(newArr[k-1])
  }
  return result;
}